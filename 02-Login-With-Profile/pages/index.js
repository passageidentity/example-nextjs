import { useEffect } from 'react';

export default function Home({appID}) {
  useEffect(()=>{
    require('@passageidentity/passage-elements/passage-auth');
  }, []);

  return (
    <>
    <passage-auth app-id={appID}></passage-auth>
    </>
  )
}

export async function getStaticProps(){
  return {
    props: {
      appID: process.env.PASSAGE_APP_ID
    }
  };
}
