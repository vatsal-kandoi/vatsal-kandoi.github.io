import * as React from "react";

/**
 * Custom hook to provide the window size
 */
function useWindowSizeProvider(): number {
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return width;
}

export default useWindowSizeProvider;