import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Realiser from "./pages/Skills/Realiser/Realiser.tsx";
import Optimiser from "./pages/Skills/Optimiser/Optimiser.tsx";
import Administrer from "./pages/Skills/Administrer/Administrer.tsx";
import Gerer from "./pages/Skills/Gerer/Gerer.tsx";
import Conduire from "./pages/Skills/Conduire/Conduire.tsx";
import Collaborer from "./pages/Skills/Collaborer/Collaborer.tsx";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/realiser" element={<Realiser />} />
                <Route path="/optimiser" element={<Optimiser />}/>
                <Route path="/administrer" element={<Administrer />}/>
                <Route path="/gerer" element={<Gerer />}/>
                <Route path="/conduire" element={<Conduire />}/>
                <Route path="/collaborer" element={<Collaborer />}/>
            </Routes>
        </Router>
    );
};

export default AppRoutes;
