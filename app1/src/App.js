import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PORTFOLIO from './components/PORTFOLIO/PORTFOLIO';
import Home from './components/Home/Home';



const routers = createBrowserRouter([{path:'' , element : <Layout/> , children : [
  
  {path : ''  , element : <Home/> },
  
  
  {path : 'About'  , element : <About/> },

  {path : 'PORTFOLIO'  , element : <PORTFOLIO/> } ,

  {path : 'Contact'  , element : <Contact/> }

] }])
function App() {
  return <>
  <RouterProvider router={routers}  ></RouterProvider>
  </>   

}

export default App;
