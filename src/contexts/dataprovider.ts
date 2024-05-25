import * as React from "react";
import { IAboutInfo, IEducation, IJob } from "../interfaces";

const DataProviderContext = React.createContext<{
    about: IAboutInfo | null,
    education: IEducation[] | null,
    experience: IJob[] | null,
}>({ 
    about: null,
    education: null,
    experience: null,
});

export default DataProviderContext;
