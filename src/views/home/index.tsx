import React from "react";
import Page from "../base/page";
import Grid from "../../components/grid/grid";
import Stack from "../../components/stack/stack";
import Card from "../../components/card/card";
import List from "../../components/buttons/list/list";

const Home: React.FC = () => {

    return (
        <Page>
            <Grid container={true}>
                <Grid item={true} xs={12} md={6} lg={4} style={{padding: "4rem", minHeight: "100vh"}} >
                    <Stack direction="column" alignItems="center" justifyContent="space-between">
                        <Stack direction="column" alignItems="flex-start" justifyContent="start">
                            <h1> Vatsal Kandoi</h1>
                            <h4> Currently @ JPMorgan Chase</h4>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item={true} xs={12} md={6} lg={8} style={{minHeight: "100vh", padding: "4rem"}}>
                    <List>
                    <List.Item>
                    <Card>
                        <Card.Header><>Software Developer 2</></Card.Header>
                        <Card.Content>
                            <List>
                                <List.Item>
                                    <>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cumque tempora deleniti qui, molestias dolorum tenetur ex blanditiis ratione provident numquam temporibus reiciendis soluta ducimus aliquid magni odio voluptatibus? Cumque?</>
                                </List.Item>
                                <List.Item>
                                    <>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cumque tempora deleniti qui, molestias dolorum tenetur ex blanditiis ratione provident numquam temporibus reiciendis soluta ducimus aliquid magni odio voluptatibus? Cumque?</>
                                </List.Item>
                                <List.Item>
                                    <>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cumque tempora deleniti qui, molestias dolorum tenetur ex blanditiis ratione provident numquam temporibus reiciendis soluta ducimus aliquid magni odio voluptatibus? Cumque?</>
                                </List.Item>
                                <List.Item>
                                    <>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cumque tempora deleniti qui, molestias dolorum tenetur ex blanditiis ratione provident numquam temporibus reiciendis soluta ducimus aliquid magni odio voluptatibus? Cumque?</>
                                </List.Item>
                            </List>
                        </Card.Content>
                    </Card>
                    </List.Item>
                    </List>
                </Grid>
            </Grid>
            <></>
        </Page>
    );
}
export default Home;