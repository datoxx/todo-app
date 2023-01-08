import styled from "styled-components";
import OneToDo from './OneToDo';
import { ToDo } from '../App';
import { useState } from 'react';

interface ToDoListProps {
    toDoLsit: ToDo[],
    setToDoList: (e:ToDo[]) => void
}


const ToDoList = ({toDoLsit, setToDoList}:ToDoListProps) => {

    const [filter, setFilter] = useState('ALL')

    const updateStatus = (id: number) => {
        const todoListClone = toDoLsit.slice();
        const selectTodo = todoListClone.find((todo:ToDo) => todo.id === id);
        const todoindex = todoListClone.findIndex((todo:ToDo) => todo.id === id);
        if(selectTodo) selectTodo.active = !selectTodo.active;  
        todoListClone.splice(todoindex, 1, selectTodo as ToDo);
    
        setToDoList(todoListClone);
    
    }
    
    const deleteToDo = (id: number) => {
        const todoListClone = toDoLsit.slice();
        const newToDoList:ToDo[] = todoListClone.filter((todo:ToDo) => todo.id !== id);

        setToDoList(newToDoList)
    }
    
      const deleteAllComletedToDo = () => {
        const todoListClone = toDoLsit.slice();
        const filterArray = todoListClone.filter((todo:ToDo) => todo.active !== true );
    
        setToDoList(filterArray);
      }
      
    
    const showToDo = () => {
        let todoListClone = toDoLsit.slice();
    
        if(filter === "Active")  return  todoListClone.filter((todo:ToDo) => !todo.active );  
    
        if(filter === "Comleted" )  return  todoListClone.filter((todo:ToDo) => todo.active);
    
        return todoListClone;    
    };

    const handleToDoDisplay = (e:any) => {
        setFilter(e.target.value);  
    }
    
    
    const filterButton = (
        <>
            <FilterButton select={filter === "ALL"} type="button" value="ALL" onClick={handleToDoDisplay}></FilterButton>
            <FilterButton  select={filter === "Active"} type="button" value="Active"   onClick={handleToDoDisplay} ></FilterButton>
            <FilterButton  select={filter === "Comleted"} type="button" value="Comleted"   onClick={handleToDoDisplay} ></FilterButton>
        </>
    );



  return (
    <>
        <ToDoListContainer>

            {showToDo()?.map((todo: ToDo) => (
            <OneToDo
                key={todo.id}
                todo={todo}
                updateStatus={updateStatus}
                deleteToDo={deleteToDo}
            />
            ))}

            <ToDolistFooter>
                <span>{showToDo()?.length} items left</span>
                <FilterDeshbordDesktop>{filterButton}</FilterDeshbordDesktop>
                <DeleteCompleted onClick={deleteAllComletedToDo}>Clear Completed</DeleteCompleted>
            </ToDolistFooter>
            
        </ToDoListContainer>

        <FilterDeshbord>{filterButton}</FilterDeshbord>
    </>
  );
};

export default ToDoList;

const ToDoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.componentBgColor};
  transition: background-color 0.5s ease-out;
  box-shadow: ${(props) => props.theme.shadow};
  border-radius: 5px;
  margin-top: 16px;
  @media (min-width: 480px) {
    margin-top: 24px;
  }
`;

const ToDolistFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: -0.166667px;
    color: ${(props) => props.theme.listFooterText};
    @media (min-width: 480px) {
      font-size: 14px;
      line-height: 14px;
      letter-spacing: -0.194444px;
    }
  }

  @media (min-width: 480px) {
    padding: 16px 24px;
  }
`;

const DeleteCompleted = styled.button`
  all: unset;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.166667px;
  color: ${(props) => props.theme.listFooterText};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.hoverButton};
  }
  @media (min-width: 480px) {
    font-size: 14px;
    line-height: 14px;
    letter-spacing: -0.194444px;
  }
`;

const FilterDeshbord = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  padding: 15px 0px;
  background-color: ${(props) => props.theme.componentBgColor};
  transition: background-color 0.5s ease-out;
  box-shadow: ${(props) => props.theme.shadow};
  border-radius: 5px;
  margin-top: 16px;
  @media (min-width: 480px) {
    display: none;
  }
`;
const FilterDeshbordDesktop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  @media (max-width: 480px) {
    display: none;
  }
`;

interface FilterButtonProps {
    select: boolean,
  }
  
  const FilterButton = styled.input<FilterButtonProps>`
    all: unset;
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: -0.194444px;
    color: ${props => props.select ? "#3A7CFD" : props.theme.listFooterText};
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.hoverButton}
    }
  `