import Home from "./components/Home"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Projects from "./components/Projects"
import UserInfo from "./components/UserInfo"

function App() { 

  return (
    <>
     <Navbar />
      <Home />
      <About />
      <Projects /> 
      <UserInfo name="James" age={24} address="Nakuru" />
    </>
  )
}

export default App
