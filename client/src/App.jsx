import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import SignIn from "./pages/SignIn.jsx"
import SignUp from "./pages/SignUp.jsx"
import Projects from './pages/Projects.jsx'
import Header from "./components/Header.jsx"
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
       <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App
