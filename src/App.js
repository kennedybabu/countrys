import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Country from "./pages/CountryPage";


function App() {
  return (
    <div className="w-full h-screen">
      <Header />
      <Routes>     
        <Route path='/' exact element={<Home />} />
        <Route path='/country/:name' element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
