import styles from '../styles/Home.module.css'
import { useEffect } from 'react'

export default function Home() {

  useEffect(()=>{
    require('@passageidentity/passage-auth')
  }, [])

  return (
    <div>
      <div className='bg-poly'></div>
      <div className='header'>
        build amazing things
        <br />
        with <strong>Passage.</strong>
      </div>

      <div className={styles['form-container']}>
        <passage-auth
          app-id={process.env.PASSAGE_APP_ID}
        />
      </div>

      <div className='footer'>
        Implement awesome authentication with two lines of code.
        <br />
        <a href="https://passage.id">
          <button className='btn btn-lg'>Request Early Access</button>
        </a>
      </div>
    </div>
  )
}
