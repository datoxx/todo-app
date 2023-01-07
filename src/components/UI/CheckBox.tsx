import styled from 'styled-components';
import checkIcon from "../../images/icon-check.svg";

interface CheckBoxProps {
    status: boolean,
    setStatus: (e:boolean) => void,
}

const CheckBox  = ({status, setStatus}:CheckBoxProps ) => {
    return ( 
        <CheckBoxContainer htmlFor="check" check={status} >
            {status && <img  src={checkIcon} alt="check-icon" />}
            <CheckBoxInput 
                id="check"
                type="checkbox" 
                checked={status} 
                onChange={() =>  setStatus(!status)} 
            />
        </CheckBoxContainer>
     );
}
 
export default CheckBox ;

interface CheckBoxProp {
    check: boolean,
}

const CheckBoxContainer = styled.label<CheckBoxProp>`
    background: ${props => props.check ? "linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)" : ""};
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${props => props.check ? "linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)" : "#393A4B"};
    padding: 1px;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    cursor: pointer;
`

const CheckBoxInput = styled.input`
    display: none;
    &:focus {
        outline: none;
    }
`
