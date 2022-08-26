
import React from 'react';

const Arrow_next_arrows_right_move = ({ color = '#18b4c9',strokeWidth='30', strokeColor='currentColor', size = '195', ...rest }) => {
    return (
        <svg

            xmlns="http://www.w3.org/2000/svg"

            width={size}
            height={size}
            fill={color}
            stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" 
            {...rest}

            viewBox="0 0 128 128">
            <g><line  x1="40.5" x2="87.5" y1="17" y2="64"/><line x1="87.5" x2="40.5" y1="64" y2="111"/></g>
        </svg>

    );
};
// https://github.com/SRAKIB17/ReactCustomIconsLibrary.git

export default Arrow_next_arrows_right_move;
    
    