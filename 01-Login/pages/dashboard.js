// this import is only included in the server build since its only used in getServerSideProps
import Passage from '@passageidentity/passage-node';

function Dashboard({isAuthorized, username}){

  if(!isAuthorized){
    return <h1>You are unauthorized!</h1>
  }
  return (
    <>
        <h1 style={{textAlign:"center"}}>You are authorized!</h1>
        <h1 style={{textAlign: "center"}}>Username: {username}</h1>
    </>
  );
};

export async function getServerSideProps(context) {
  // getServerSideProps runs server-side only and will never execute on the client browser
  // this allows the safe use of a private Passage API Key
  const passage = new Passage({
    appID: process.env.PASSAGE_APP_ID,
    apiKey: process.env.PASSAGE_API_KEY,
    authStrategy: "HEADER",
  });
  try {
    const authToken = context.req.cookies['psg_auth_token'];
    const req = {
      headers: {
        authorization: `Bearer ${authToken}`,
      },
    };
    const userID = await passage.authenticateRequest(req);
    if (userID) {
        console.log(userID)
      // user is authenticated
      const { email, phone } = await passage.user.get(userID);
      const identifier = email ? email : phone; 
      return { props: {isAuthorized: true, username: identifier} };
    }
  } catch (error) {
    // authentication failed
    return { props: {isAuthorized: false, username: ''} };
  }
}

export default Dashboard;