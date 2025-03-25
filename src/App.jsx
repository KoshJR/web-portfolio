
import './App.css'
import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Layout from './components/Layout/Layout'

function App() {

  return (
    <Layout>
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/about' element={ <About/>} />
        <Route path='/projects' element={ <Projects/>} />
        <Route path='/contact' element={ <Contact/>} />
      </Routes>
    </Layout>
  )
}

export default App
