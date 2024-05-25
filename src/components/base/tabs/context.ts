import * as React from "react";

const ActiveTabProviderContext = React.createContext<{
    identifier: string;
    toggle: (identifier: string) => void;
}>({ identifier: "", toggle: (identifier) => {} });



/**
 * Custom hook to provide active tab
 */
function useActiveTabProvider(defaultIdentifier: string): { contextValue: { identifier: string; toggle: (identifier: string) => void }, identifier: string} {
    const [identifier, setIdentifier] = React.useState<string>(defaultIdentifier);

    const contextValue = {
        identifier: identifier,
        toggle: (identifier: string) => {
            setIdentifier(identifier);
        },
    };

    return { contextValue, identifier };
}

export {ActiveTabProviderContext, useActiveTabProvider };
