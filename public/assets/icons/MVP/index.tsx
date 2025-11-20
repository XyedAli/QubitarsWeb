"use client";

import React from "react";

interface Props {
    width?: string;
    height?: string;
}

const MVPIcon: React.FC<Props> = ({ width = "24", height = "24" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
            <path d="M16.7434 6.84922C15.8705 3.42307 14.077 1.07422 12.0067 1.07422C9.07836 1.07422 6.70367 5.77507 6.70367 11.5742C6.70367 17.3734 9.07836 22.0742 12.0067 22.0742C12.3694 22.0742 12.7247 22.0018 13.0673 21.8642M15.3943 13.3666L19.4394 15.3196L17.4667 19.3243M19.4309 15.3227C17.5176 16.252 14.8979 16.8242 12.0067 16.8242C6.14897 16.8242 1.40063 14.4733 1.40063 11.5742C1.40063 8.67517 6.14897 6.32422 12.0067 6.32422C17.1379 6.32422 21.4175 8.12812 22.4006 10.5242" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export { MVPIcon };