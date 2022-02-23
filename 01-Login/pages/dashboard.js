// this import is only included in the server build since its only used in getServerSideProps
import Passage from '@passageidentity/passage-node';
import styles from '../styles/App.module.css'

function Dashboard({isAuthorized, username}){

  const authorizedBody = 
  <>
      You successfully signed in with Passage.
      <br/><br/>
      Your username is: <b>{username}</b>
  </>

  const unauthorizedBody = 
  <>
      You have not logged in and cannot view the dashboard.
      <br/><br/>
      <a href="/" className={styles.link}>Login to continue.</a>
  </>

  return (
      <div className={styles.dashboard}>
          <div className={styles.title}>{isAuthorized ? 'Welcome!' : 'Unauthorized'}</div>
          <div className={styles.message}>
              { isAuthorized ? authorizedBody : unauthorizedBody }
          </div>
      </div>
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