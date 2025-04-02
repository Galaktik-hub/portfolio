import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Optimiser from "./pages/Skills/Optimiser/Optimiser.tsx";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/optimiser" element={<Optimiser />}/>
            </Routes>
        </Router>
    );
};

export default AppRoutes;
