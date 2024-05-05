
type width = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined;

function convertToPercentage(w: width): number {
    return (w !== undefined) ?  (w/12) * 100 : 100;
}

/**
 * Noramlize the break points and assign missing ones for styled components media queries
 */
export function normalizeBreakPoints(xs: width, sm: width, md: width, lg: width, xl: width) {
    const new_breakpoints: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
    } = {
        xs: 100,
        sm: 100,
        md: 100,
        lg: 100,
        xl: 100,
    };

    new_breakpoints.xs = (xs === undefined) ? 100 : convertToPercentage(xs);
    new_breakpoints.sm = (sm === undefined) ? new_breakpoints.xs : convertToPercentage(sm);
    new_breakpoints.md = (md === undefined) ? new_breakpoints.sm : convertToPercentage(md);
    new_breakpoints.lg = (lg === undefined) ? new_breakpoints.md : convertToPercentage(lg);
    new_breakpoints.xl = (xl === undefined) ? new_breakpoints.lg : convertToPercentage(xl);
      
    return new_breakpoints;
};