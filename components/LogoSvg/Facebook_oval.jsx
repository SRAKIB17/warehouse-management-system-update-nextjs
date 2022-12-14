
import React from 'react';

const Facebook_oval = ({ color = '#1877F2',strokeWidth='0', strokeColor='currentColor', size = '64', ...rest }) => {
    return (
        <svg

            xmlns="http://www.w3.org/2000/svg"

            width={size}
            height={size}
            fill={color}
            stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" 
            {...rest}

            viewBox="0 0 64 64">
            <path d="M32,1C14.8,1,1,14.8,1,32s13.8,31,31,31s31-13.8,31-31S49.2,1,32,1z M40.2,19.9c-1.1,0-2,0-3.1,0c-1.4,0-2.3,0.7-2.3,2
	c-0.1,1.1,0,2.3,0,3.2c0,0.4,0.1,0.4,0.4,0.4c1.5,0,3.1,0,4.6,0c0.4,0,0.6,0.1,0.6,0.6c-0.1,1.8-0.4,3.7-0.4,5.5
	c0,0.4-0.1,0.4-0.6,0.4c-1.3,0-2.4,0-3.7,0c-0.8,0-0.7-0.1-0.7,0.7c0,5.8,0,11.3,0,17.1c0,0.6-0.1,0.7-0.7,0.7c-2.1,0-4.2,0-6.3,0
	c-0.6,0-0.7-0.1-0.7-0.7c0-3,0-5.8,0-8.6c0-2.8,0-5.8,0-8.7c0-0.4-0.1-0.7-0.6-0.6c-0.8,0-1.8,0-2.7,0c-0.6,0.3-0.6,0.1-0.6-0.3
	c0-1.8,0-3.5,0-5.5c0-0.4,0.1-0.4,0.4-0.4c1,0,1.8,0,2.8,0c0.6,0,0.7-0.1,0.7-0.7c0-1.4,0-2.7,0-4.2c0-1.7,0.4-3.2,1.4-4.6
	c1.3-1.7,3.1-2.5,5.1-2.7c2.1-0.1,4.2,0,6.3-0.1c0.3,0,0.4,0.1,0.4,0.4c0,1.8,0,3.7,0,5.5C40.6,19.7,40.5,19.9,40.2,19.9z"/>
        </svg>

    );
};
// https://github.com/SRAKIB17/ReactCustomIconsLibrary.git

export default Facebook_oval;
    
    