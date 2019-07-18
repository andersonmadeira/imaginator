import React from 'react'
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`

const Spinner = ({ className }) => <div className={className}></div>

const SpinnerStyled = styled(Spinner)`
    border: 8px solid #f3f3f3;
    border-radius: 50%;
    border-top: 8px solid #3498db;
    width: 60px;
    height: 60px;
    animation: ${spin} 2s linear infinite;
`

export default SpinnerStyled; 
