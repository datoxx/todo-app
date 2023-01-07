import styled from 'styled-components';
import { useState } from 'react';
import { ToDo } from '../App';
import checkIcon from "../images/icon-check.svg";

interface FormProps {
    addTodo: (e:ToDo) => void,
}

const Form = ({ addTodo }:FormProps) => {

    const [inputValue, setInputValue] = useState<string>('');
    const [status, setStatus] = useState<boolean>(false)


    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(inputValue === "") return;

        const newToDO: ToDo = {
            text: inputValue,
            active: status,
            id: Math.floor(Math.random() * (100000 - 1 + 1) + 1),
        }

        addTodo(newToDO);

        setInputValue('');
        setStatus(false);
    }


    return (  
        <FormContainer onSubmit={handleSubmit}>
            <CheckBoxContainer htmlFor="check" check={status} >
                {status && <img  src={checkIcon} alt="check-icon" />}
                <CheckBoxInput 
                    id="check"
                    type="checkbox" 
                    checked={status} 
                    onChange={() =>  setStatus(!status)} 
                />
            </CheckBoxContainer>

            <Input  
                id="text"type="text" 
                placeholder='Create a new todo…'  
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
            />

        </FormContainer>
    );
}
 
export default Form;

const FormContainer = styled.form`
    background-color: ${props => props.theme.componentBgColor};
    transition: background-color 0.5s ease-out;
    box-shadow: ${props => props.theme.shadow};
    border-radius: 5px;     
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    height: 48px;
    padding: 14px 20px;
    gap: 12px;
`

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


const Input = styled.input`
    all: unset;
    caret-color: #3A7CFD;
    width: 100%;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: -0.166667px;
    color: ${props => props.theme.inputColor};
  
  &::placeholder {
    color: ${props => props.theme.placeholderColor};
  }
`
