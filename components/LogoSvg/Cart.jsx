
import React from 'react';

const Cart = ({ color = '#ec2222', strokeWidth = '0', strokeColor = '#dc2eff', size = '1em', ...rest }) => {
    return (
        <svg

            xmlns="http://www.w3.org/2000/svg"

            width={size}
            height={size}
            fill={color}
            stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
            {...rest}

            viewBox="0 0 64 64">
            <g>
                <path d="M40.9,48.2c-3.9,0-7.1,3.3-7.1,7.3c0,4,3.2,7.3,7.1,7.3s7.1-3.3,7.1-7.3C48.1,51.5,44.9,48.2,40.9,48.2z M40.9,59.3
		c-2,0-3.6-1.7-3.6-3.8c0-2.1,1.6-3.8,3.6-3.8s3.6,1.7,3.6,3.8C44.6,57.6,42.9,59.3,40.9,59.3z"/>
                <path d="M18.2,48.2c-3.9,0-7.1,3.3-7.1,7.3c0,4,3.2,7.3,7.1,7.3s7.1-3.3,7.1-7.3C25.4,51.5,22.2,48.2,18.2,48.2z M18.2,59.3
		c-2,0-3.6-1.7-3.6-3.8c0-2.1,1.6-3.8,3.6-3.8s3.6,1.7,3.6,3.8C21.9,57.6,20.2,59.3,18.2,59.3z"/>
                <path d="M57.8,1.3h-6.4c-1.5,0-2.8,1.1-3,2.6l-1.8,13.2H7.3c-0.9,0-1.7,0.4-2.2,1.1c-0.5,0.7-0.7,1.6-0.5,2.4c0,0,0,0.1,0,0.1
		l6.1,18.9c0.3,1.2,1.4,2.1,2.8,2.1h29.5c2.2,0,4-1.6,4.3-3.8l4.6-33.2h6c1,0,1.8-0.8,1.8-1.8S58.8,1.3,57.8,1.3z M43.7,37.4
		c-0.1,0.4-0.4,0.8-0.9,0.8h-29L8.1,20.6h37.9L43.7,37.4z"/>
            </g>
        </svg>

    );
};
// https://github.com/SRAKIB17/ReactCustomIconsLibrary.git

export default Cart;

