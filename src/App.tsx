import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import FormationList from './components/FormationList';
import Footer from './components/Footer';
import './index.css';

const App: React.FC = () => {
    return (
        <>
            <Header />
            <Intro />
            <FormationList />
            <Footer />
        </>
    );
};

export default App;
