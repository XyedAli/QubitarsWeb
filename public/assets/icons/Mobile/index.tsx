"use client";

import React from "react";

interface Props {
    width?: string;
    height?: string;
}

const MobileIcon: React.FC<Props> = ({ width = "29", height = "29" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 29 29" fill="none">
<path d="M18.7332 17.2043C18.6801 19.1185 18.536 20.9961 18.3859 22.8264C18.2086 24.9897 16.5951 26.7585 14.5148 26.9101C11.5072 27.1289 8.64748 27.1289 5.63988 26.9101C3.55959 26.7585 1.94613 24.9897 1.76877 22.8267C1.57955 20.5187 1.3999 18.136 1.3999 15.6992C1.3999 13.2625 1.57955 10.8797 1.76877 8.57194C1.94613 6.40873 3.55968 4.6399 5.63994 4.48844C7.49082 4.35368 9.28566 4.30187 11.0934 4.33297" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.98315 21.6582H11.1498" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M25.2332 10.8249C25.9326 10.8249 26.608 10.685 27.2449 10.6148C27.2915 9.98996 27.3708 9.33469 27.3998 8.6582" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.8166 1.07422C19.1172 1.07422 18.4418 1.21407 17.8048 1.28423C17.7583 1.90913 17.6788 2.56439 17.6499 3.24089" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M27.3998 3.24089C27.3998 2.54149 27.2601 1.86613 27.1898 1.22915C26.565 1.18258 25.9097 1.10315 25.2332 1.07422" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.6499 8.6582C17.6499 9.35759 17.7898 10.033 17.8599 10.6699C18.4848 10.7165 19.1401 10.7959 19.8166 10.8249" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M24.1499 6.49023C23.1172 6.8384 21.9781 7.18061 20.8999 7.57357" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    );
};

export { MobileIcon };