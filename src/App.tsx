import styled, {ThemeProvider} from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import { useState } from 'react';

import Header from './components/Header';
import Form from './components/Form';
import OneToDo from './components/OneToDo';


export interface ToDo {
  text: string,
  active: boolean,
  id: number,
}

function App() {  

  const [theme, setTheme] = useState<boolean>(true)
  const [toDoLsit, setToDoList] = useState<ToDo[]>([])

  const addTodo = (todo:ToDo ) => {
    const todoListClone = toDoLsit.slice();
    todoListClone.push(todo);
    setToDoList(todoListClone);
  }

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
  

console.log('todooogarett', toDoLsit)

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme }>
        <Wrapper >
          <Container>
            <Header theme={theme} setTheme={setTheme} />
            <Form  addTodo={addTodo} /> 
            <ToDoListContainer>
                  {toDoLsit.map((todo:ToDo) => <OneToDo key={todo.id} todo={todo} updateStatus={updateStatus} deleteToDo={deleteToDo} />)}
            </ToDoListContainer>
          </Container>
        </Wrapper>
    </ThemeProvider>
  );
}

export default App;

const Wrapper = styled.div`
  background-color: ${props => props.theme.bgColor};
  transition: background-color 0.5s ease-out;
  background-image: url(${props => props.theme.bgImg});
  background-repeat: no-repeat;
  background-size: contain;
  width: 100vw;
  height: 100vh;
  padding: 0px 24px;
  @media (min-width: 480px) {
        background-image: url(${props => props.theme.desktopBgImage});
    }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 327px;
  @media (min-width: 480px) {
       max-width: 540px
  }
`

const ToDoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  background:  ${props => props.theme.componentBgColor};
  box-shadow: ${props => props.theme.shadow};
  border-radius: 5px;
  margin: 16px 0px;
`

