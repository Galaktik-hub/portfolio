import React from "react";
import Header from "../../components/Header.tsx";
import Intro from "../../components/Home/Intro.tsx";
import SkillTitle from "../../components/Home/SkillTitle.tsx";
import FormationList from "../../components/Home/FormationList.tsx";
import Footer from "../../components/Footer.tsx";

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <Intro />
            <SkillTitle />
            <FormationList />
            <Footer />
        </>
    );
};

export default Home;