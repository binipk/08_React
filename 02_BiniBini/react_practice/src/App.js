import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Main from './pages/Main';
import Community from './pages/Community';


function App() {
  return (
    <Routes>
      <Route path = "/" element = { <Layout />}>
        <Route index element={<Main />} />
        <Route path='community' element={<Community />} />
      </Route>

    </Routes>    

  ); 
}

export default App;
