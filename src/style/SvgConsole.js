import React from "react";

export default function SvgConsole({recW, recH}) {

    return (
        <svg
            width={recW}
            height={recH}
            viewBox={`0 0 ${recW} ${recH}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="svgConsole"
        >
            <rect width={recW} height={recH} rx="10" fill="#222222" />
            <circle cx="30.5" cy="30.5" r="11.5" fill="#AA4040" />
            <circle cx="67.5" cy="30.5" r="11.5" fill="#D5D849" />
            <circle cx="104.5" cy="30.5" r="11.5" fill="#74BC5B" />
        </svg>
    );
}
