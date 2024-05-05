import React from "react";
import Page from "../base/page";
import Grid from "../../components/grid/grid";

const Home: React.FC = () => {

    return (
        <Page>
            <Grid container={true} spacing={1}>
                <Grid item={true} xs={12} md={5}>
                    <>1</>
                </Grid>
                <Grid item={true} xs={12} md={5}>
                    <>2</>
                </Grid>
            </Grid>
            <></>
        </Page>
    );
}
export default Home;