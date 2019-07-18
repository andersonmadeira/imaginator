import styled from 'styled-components';

const BaseButton = styled.button`
    border: none;
    color: white;
    padding: 10px 24px;
    cursor: pointer;
`

const Default = styled(BaseButton)`
    color: black;
    font-size: 15px;
    background-color: #e7e7e7;
    &:hover { 
        background: #ddd;
    }
`

const Success = styled(BaseButton)`
font-size: 15px;
    background-color: #4DC077;
    &:hover { 
        background: #4eb174;
    }
`

const Info = styled(BaseButton)`
font-size: 15px;
    background-color: #2698CC;
    &:hover {
        background: #258fc1;
    }
`

const Warning = styled(BaseButton)`
font-size: 15px;
    background-color: #EFAD57;
    &:hover {
        background: #e0a353;
    }
`

const Danger = styled(BaseButton)`
font-size: 15px;
    background-color: #D85251;
    &:hover {
        background: #cd5151;
    }
`

export default {
    Default, Success, Info, Warning, Danger
}
