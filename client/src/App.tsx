import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import { MainPage, PersonalCabinet, ProfilePage } from './pages'
import { Layout } from './layout'
import './style/style.scss'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import errorIcon from './images/errorIcon.svg'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={
            <MainPage />} />
          <Route path='/lk' element={
            <PersonalCabinet />} />
          <Route path='/profile' element={
            <ProfilePage />} />
        </Routes>
        <ToastContainer
          theme='colored'
          hideProgressBar={true}
          closeOnClick
          autoClose={3000}
          closeButton={false}
          limit={5}
          position='top-center'
          pauseOnFocusLoss
        />
      </Layout>
    </Router>
  )
}

export default App
