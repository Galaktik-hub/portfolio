import React from "react";
import Header from "../../components/Header.tsx";
import Intro from "../../components/Home/Intro.tsx";
import ExperienceTimeline from "../../components/Home/ExperienceTimeline.tsx";
import SkillTitle from "../../components/Home/SkillTitle.tsx";
import FormationList from "../../components/Home/FormationList.tsx";
import Footer from "../../components/Footer.tsx";

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <Intro />
            <ExperienceTimeline />
            <SkillTitle />
            <FormationList />
            <Footer />
        </>
    );
};

export default Home;