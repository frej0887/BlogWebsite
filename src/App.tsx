import './App.css'
import {useMediaQuery} from 'react-responsive';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home.tsx";
import {Layout} from "./layout/layout.tsx";
import {ProjectList} from "./pages/ProjectList.tsx";
import {About} from "./pages/About.tsx";
import {NoPage} from "./pages/NoPage.tsx";
import {LayoutContext} from './contexts.tsx';
import {SingleProject} from "./pages/SingleProject.tsx";


function App() {
  const isLaptop = useMediaQuery({
    query: "(min-width: 800px)",
  });

  const context = {is_mobile: !isLaptop};
  return (
    <LayoutContext.Provider value={context}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="about" element={<About/>}/>
              <Route path=":type" element={<ProjectList/>}/>
              <Route path=":type/:projectId" Component={SingleProject}/>
              <Route path="*" element={<NoPage/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
    </LayoutContext.Provider>
  )
}

export default App
