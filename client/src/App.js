import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { MainPage, LogInPage, ProfilePage } from './pages';
import { Layout } from './layout'
import './style/style.scss'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path='/' element={
            <MainPage />} />
          <Route exact path='/login' element={
            <LogInPage />} />
          <Route exact path='/profile' element={
            <ProfilePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
