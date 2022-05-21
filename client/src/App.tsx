import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { MainPage, PersonalCabinet, ProfilePage } from './pages';
import { Layout } from './layout'
import './style/style.scss'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={
            <MainPage />} />
          <Route path='/login' element={
            <PersonalCabinet />} />
          <Route path='/profile' element={
            <ProfilePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
