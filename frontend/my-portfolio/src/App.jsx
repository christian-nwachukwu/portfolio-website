import './App.css'
import './index.css'
import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Header from './components/Header'
import Footer from './components/Footer'


// Collection of pages with common features like the Navbar, Footer etc
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}


// Navigation for pages/routes that requires inside the html body, Navbar, Footer, Sections, Hero etc
const router = createBrowserRouter([
  {
  path: "/",
  element: <Layout/>,
  children:[
      {
        path: "/",
        element: <Home/>
      },

      {
        path: "/about",
        element: <About/>
      },

      {
        path: "/portfolio",
        element: <Portfolio/>
      },
  ]
},
])


function App() {

  return (
    <>
       <RouterProvider router = {router}/>
    </>
  )
}

export default App
