import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'

import EducationPage from './Routes/Education'
import HomePage from './Routes/Home'
import ExperiencePage from './Routes/Experience'
import ProjectsPage from './Routes/Projects'
import ContactPage from './Routes/Contact'
import AboutMePage from './Routes/AboutMe'

function App() {

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <> <Navbar /> <Home />  <Footer /> </>
  //   },
  //   {
  //     path: "/education",
  //     element: <> <Navbar /> <Education /> <Footer />  </>
  //   },
  //   {
  //     path: "/experience",
  //     element: <> <Navbar /> <Experience /> <Footer /> </>
  //   },
  //   {
  //     path: "/projects",
  //     element: <> <Navbar /> <Projects /> <Footer /> </>
  //   },
  //   {
  //     path: "/contact",
  //     element: <> <Navbar /> <Contact /> <Footer /> </>
  //   },
  //   {
  //     path: "/about",
  //     element: <> <Navbar /> <AboutMe /> <Footer /> </>
  //   }

  // ])

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage /> } />
        <Route path='/education' element={<EducationPage /> } />
        <Route path='/experience' element={<ExperiencePage /> } />
        <Route path='/projects' element={<ProjectsPage /> } />
        <Route path='/contact' element={<ContactPage /> } />
        <Route path='/about' element={<AboutMePage /> } />
      </Routes>
    </Router>
    </>
  )
}

export default App
