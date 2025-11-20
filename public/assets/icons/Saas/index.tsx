"use client";

import React from "react";

interface Props {
    width?: string;
    height?: string;
}

const SaasIcon: React.FC<Props> = ({ width = "22", height = "24" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 22 24" fill="none">
        <path d="M1.40063 1.07422H20.4006M1.40063 22.0742H20.4006M3.51175 5.27422H18.2895C19.4555 5.27422 20.4006 6.21442 20.4006 7.37422V15.7742C20.4006 16.934 19.4555 17.8742 18.2895 17.8742H3.51175C2.34581 17.8742 1.40063 16.934 1.40063 15.7742V7.37422C1.40063 6.21442 2.34581 5.27422 3.51175 5.27422Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export { SaasIcon };