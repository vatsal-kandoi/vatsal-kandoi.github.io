import React from "react";
import Page from "../base/page";
import Grid from "../../components/grid/grid";
import Stack from "../../components/stack/stack";

const Home: React.FC = () => {

    return (
        <Page>
            <Grid container={true}>
                <Grid item={true} xs={12} md={6} lg={4} style={{padding: "2rem", minHeight: "100vh"}} >

                    <Stack direction="column" alignItems="center" justifyContent="space-between">
                        <h1> Vatsal Kandoi</h1>
                        <h4> Currently at JPMorgan Chase</h4>
                    </Stack>
                </Grid>
                <Grid item={true} xs={12} md={6} lg={8} style={{minHeight: "100vh"}}>
                    <>2</>
                </Grid>
            </Grid>
            <></>
        </Page>
    );
}
export default Home;