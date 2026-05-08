
import Header from "./components/header"
import Home from "./pages/home"
import Theprogram from "./pages/theprogram"
import Artist from "./pages/artist";
import Planning from "./pages/planing"
import Passport from "./pages/passport"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(){
      return(
      <>
        <div className=" min-h-screen mx-auto my-auto bg-[#0B132B]">               

            <BrowserRouter>
            <Header/> 
              <Routes>
                    <Route path="" element={<Home/>} />
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/theprogram" element={<Theprogram/>}/>
                    <Route path="/artists" element={<Theprogram/>}/>
                    <Route path="/artists/:id" element={<Artist/>}/>
                    <Route path="/planning" element={<Planning/>}/>
                    <Route path="/passport" element={<Passport/>}/>
              </Routes>
              </BrowserRouter>

         </div>
      </>

   );
}
export default App