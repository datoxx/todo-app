import styled from 'styled-components';
import cross from '../images/icon-cross.svg'
import checkIcon from "../images/icon-check.svg";
import { ToDo } from '../App';


interface OneToDoProps {
    todo: ToDo;
    updateStatus: (e:number) => void
    deleteToDo: (e:number)=> void
}

const OneToDo = ({todo, updateStatus, deleteToDo}:OneToDoProps) => {

    // console.log('status', todo.active, todo.id )

    return (  
        <ToDoContainer>
            <CheckBoxContainer  check={todo.active} >
                {todo.active && <img  src={checkIcon} alt="check-icon" />}
                <CheckBoxInput 
                    type="checkbox" 
                    checked={todo.active} 
                    onChange={() => updateStatus(todo.id)} 
                />
            </CheckBoxContainer>
            <Text done={todo.active} >{todo.text}</Text>
            <img  className='cross' src={cross} alt='cross' onClick={() => deleteToDo(todo.id)} />
        </ToDoContainer>

    );
}
 
export default OneToDo;

const ToDoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid ${props => props.theme.border};

  .cross {
    margin-left: 28px;
    width: 12px;
    height: 12px;
    cursor: pointer;
    @media (min-width: 480px) {
        width: 17.5px;
        height: 17.5px;
    }
  }

    @media (min-width: 480px) {
        padding: 20px 24px;
    }

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
    @media (min-width: 480px) {
        width: 24px;
        height: 24px;
     }
`

const CheckBoxInput = styled.input`
    display: none;
    &:focus {
        outline: none;
    }
`

interface TextProp {
    done: boolean,
}

const Text = styled.p<TextProp>`
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: -0.166667px;
    color: ${props => props.done ? props.theme.textDecorationlineColor : props.theme.textColor};
    text-decoration-line: ${props => props.done ? 'line-through' : 'none' } ;
    margin-left: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    @media (min-width: 480px) {
        font-size: 18px;
        line-height: 18px;
        letter-spacing: -0.25px;
     }
`
