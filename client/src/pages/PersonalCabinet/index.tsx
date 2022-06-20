import { useState, useEffect } from 'react'
import LoginForm from '../../components/loginForm'
import { LK } from '../../components/lk'

const PersonalCabinet = () => {

  // TODO: set isLogin to false when complete auth!
  const [isLogin, setIsLogin] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLogin(true)
    }
  }, [])

  return (
    <main className='lk'>
      <div className='lk-container'>
        {isLogin ? <LK /> : <LoginForm />}
      </div>
    </main>
  )
}

export { PersonalCabinet }