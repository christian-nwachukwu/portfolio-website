import './App.css'
import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'



const Layout = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Outlet />
      <Footer />
    </>
  )
}


// For pages/routes that requires inside the html body, Navbar, Footer, Sections, Hero etc
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
