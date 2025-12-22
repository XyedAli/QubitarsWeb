"use client";

import React from "react";

interface Props {
    width?: string;
    height?: string;
}

const WorkflowIcon: React.FC<Props> = ({ width = "21", height = "21" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 21 21" fill="none">
<path d="M5.80127 9.07422V13.0742C5.80127 13.6047 6.01198 14.1134 6.38706 14.4884C6.76213 14.8635 7.27084 15.0742 7.80127 15.0742H11.8013M3.80127 1.07422H7.80127C8.90584 1.07422 9.80127 1.96965 9.80127 3.07422V7.07422C9.80127 8.17879 8.90584 9.07422 7.80127 9.07422H3.80127C2.6967 9.07422 1.80127 8.17879 1.80127 7.07422V3.07422C1.80127 1.96965 2.6967 1.07422 3.80127 1.07422ZM13.8013 11.0742H17.8013C18.9058 11.0742 19.8013 11.9696 19.8013 13.0742V17.0742C19.8013 18.1788 18.9058 19.0742 17.8013 19.0742H13.8013C12.6967 19.0742 11.8013 18.1788 11.8013 17.0742V13.0742C11.8013 11.9696 12.6967 11.0742 13.8013 11.0742Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    );
};

export { WorkflowIcon };