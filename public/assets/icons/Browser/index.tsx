"use client";

import React from "react";

interface Props {
    width?: string;
    height?: string;
}

const BrowserIcon: React.FC<Props> = ({ width = "25", height = "23" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 25 23" fill="none">
        <path d="M23.2894 1.74219H1.73389V21.1422H23.2894V1.74219Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M23.2894 6.05469H1.73389" stroke="currentColor" strokeWidth="2"/>
        <path d="M16.2839 10.3633L19.5173 13.5966L16.2839 16.8299" stroke="currentColor" strokeWidth="2"/>
        <path d="M8.7387 10.3633L5.50537 13.5966L8.7387 16.8299" stroke="currentColor" strokeWidth="2"/>
        <path d="M14.1291 9.28711L10.8958 17.9093" stroke="currentColor" strokeWidth="2"/>
        </svg>
    );
};

export { BrowserIcon };