import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Routes/Home'
import Education from './Routes/Education'
import Experience from './Routes/Experience'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Projects from './Routes/Projects'
import Footer from './Components/Footer'
import Contact from './Routes/Contact'
import AboutMe from './Routes/AboutMe'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Navbar /> <Home />  <Footer /> </>
    },
    {
      path: "/education",
      element: <> <Navbar /> <Education /> <Footer />  </>
    },
    {
      path: "/experience",
      element: <> <Navbar /> <Experience /> <Footer /> </>
    },
    {
      path: "/projects",
      element: <> <Navbar /> <Projects /> <Footer /> </>
    },
    {
      path: "/contact",
      element: <> <Navbar /> <Contact /> <Footer /> </>
    },
    {
      path: "/about",
      element: <> <Navbar /> <AboutMe /> <Footer /> </>
    }

  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
