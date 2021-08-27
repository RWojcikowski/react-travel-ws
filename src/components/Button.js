import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.incluses(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    const checkButtonSizes = SIZES.incluses(buttonSize)
        ? buttonSize
        : SIZES[0];
    return (
        <Link to='/sign-up' className='btn-mobile'>
            <button>
                {children}
            </button>



        </Link>
    )
};

