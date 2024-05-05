import React from "react";
import Page from "../base/page";
import Stack from "../../components/stack/stack";

const Home: React.FC = () => {

    return (
        <Page>
            <Stack direction="row" alignItems="center" justifyContent="center" style={{minHeight: "100vh"}}>
                <h1>&#60; Under development / &#62;</h1>
            </Stack>
        </Page>
    );
}
export default Home;