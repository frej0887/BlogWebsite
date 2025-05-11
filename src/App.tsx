import './App.css'
import { useMediaQuery } from 'react-responsive';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home.tsx";
import {Layout} from "./layout/layout.tsx";
import {Projects} from "./pages/Projects.tsx";
import {About} from "./pages/About.tsx";
import {NoPage} from "./pages/NoPage.tsx";

function App() {
  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1000px)",
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>} />
          <Route path="projects" element={<Projects/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
