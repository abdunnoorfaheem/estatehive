import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayout from './components/layouts/RootLayout'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import AboutUs from './components/pages/AboutUs'

function App() {
 

  return (
   <>
    <Routes>
      <Route path='/' element={<RootLayout/>}>
       <Route index element={<Home/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/aboutus' element={<AboutUs/>}/>
      </Route>
    </Routes>
   </>
  )
}

export default App
