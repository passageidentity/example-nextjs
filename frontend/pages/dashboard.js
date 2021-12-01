import Cookie from 'js-cookie';
import axios from 'axios';

function Dashboard({isLoading, isAuthorized, username}){

  function loading() {
    return (
      <div className='material-icons loading'>
        loop
      </div>
    );
  }

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
      { isLoading ? loading() : isAuthorized ? authorized() : unauthorized() }
    </>
  )
};

export async function getServerSideProps(context) {
  const API_URL = "http://localhost:7000";
  try {
    const authToken = context.req.cookies['psg_auth_token']
    const response = await axios
      .post(`${API_URL}/auth`, null, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      const { authStatus, identifier } = response.data;
      if (authStatus === 'success') {
        return { props: {isLoading: false, isAuthorized: authStatus, username: identifier} };
      }else{
        return { props: {isLoading: false, isAuthorized: false, username: ''} };
      }
  } catch(error) {
    console.log(error);
    return { props: {isLoading: false, isAuthorized: false, username: ''} };
  }
}

export default Dashboard;
