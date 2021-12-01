import Cookie from 'js-cookie';
import Passage from '@passageidentity/passage-node';

function Dashboard({isAuthorized, username}){

  function logout() {
    Cookie.remove('psg_auth_token');
    localStorage.removeItem('psg_auth_token');
  }

  function authorized() {
    return (
      <div id='authorized'>
        <div className='header'>
          <span id='userEmail'>{username}</span> signed in
          <br />
          with <strong>Passage.</strong>
        </div>
        <div className='img-container'>
          <img src='launch.png' alt='People Celebrating' />
        </div>
        <div className='footer'>
          <a href='/'>
            <button className='btn btn-lg' onClick={logout}>
              Log Out
            </button>
          </a>
        </div>
      </div>
    );
  }

  function unauthorized(){
    return (
      <div id='unauthorized'>
        <div className='header'>
          oops
          <br />
          you are <strong>Unauthorized.</strong>
        </div>

        <div className='img-container'>
          <img src='/error.png' alt='People Sad' />
        </div>

        <div className='footer'>
          Sign in or register for an account to proceed.
          <br />
          <a href='/'>
            <button className='btn btn-lg'>Sign In or Register</button>
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className='bg-poly'></div>
      { isAuthorized ? authorized() : unauthorized() }
    </>
  )
};

export async function getServerSideProps(context) {
  const passage = new Passage({
    appID: process.env.PASSAGE_APP_ID,
    apiKey: process.env.PASSAGE_API_KEY,
    authStrategy: "HEADER",
  });
  try {
    const authToken = context.req.cookies['psg_auth_token']
    const req = {
      headers: {
        authorization: `Bearer ${authToken}`,
      },
    }
    const userID = await passage.authenticateRequest(req);
    if (userID) {
      // user is authenticated
      const { email, phone } = await passage.user.get(userID);
      const identifier = email ? email : phone 
      return { props: {isAuthorized: true, username: identifier} };
    }
  } catch (e) {
    // authentication failed
    console.log(e);
    return { props: {isAuthorized: false, username: ''} };
  }
}

export default Dashboard;
