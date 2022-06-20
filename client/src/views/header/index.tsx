import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [LKPage, setLKPage] = useState<boolean>(false)

  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/lk') {
      setLKPage(true)
    } else {
      setLKPage(false)
    }
  },[location])

  return (
    <header className='header'>
      <h3 className='header-title'>Древо семьи Дубановых</h3>

      {LKPage ? (
        <Link className='header-backLink' to='/'> на главную</Link>
      ) : (
        <Link className='header-adminLink' to='/lk'>вход</Link>
      )}
    </header>
  )
}

export { Header }