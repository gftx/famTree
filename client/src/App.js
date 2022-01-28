import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { MainPage, LogInPage } from './pages';
import { Layout } from './layout'

function App() {

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
