import React from 'react'
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`

const Spinner = ({ className }) => <div className={className}></div>

const SpinnerStyled = styled(Spinner)`
    border: ${props => props.theme.width || 4}px solid ${props => props.theme.secondaryColor || '#f3f3f3'};
    border-radius: 50%;
    border-top: ${props => props.theme.width || 4}px solid ${props => props.theme.primaryColor || '#3498db'};
    width: ${props => props.theme.size || 40}px;
    height: ${props => props.theme.size || 40}px;
    animation: ${spin} ${props => props.theme.speed || 2}s linear infinite;
`

export default SpinnerStyled
