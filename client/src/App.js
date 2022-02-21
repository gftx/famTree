import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { MainPage, LogInPage } from './pages';
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
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
