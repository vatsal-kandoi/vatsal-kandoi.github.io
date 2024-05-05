import * as React from "react";
import Layer from "../../components/layer/layer";

interface IPageProps{
    children: React.ReactElement | React.ReactElement[];
}

const Page: React.FC<IPageProps> = (props) => {
    const {children} = props;

    return (
        <Layer>
            {children}
        </Layer>
    );
}



export default Page;