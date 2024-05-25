import React from "react";
import Landing from "../../components/sections/landing";
import Experience from "../../components/sections/jobs";
import Education from "../../components/sections/education";
import Contact from "../../components/sections/contact";
import Page from "../../components/layout/page";


const Home: React.FC = () => {

    return (
        <Page>
            <Landing />
            <Experience />
            <Education />
            <Contact />
        </Page>
    );
}
export default Home;