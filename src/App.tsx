import styled, {ThemeProvider} from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import { useState } from 'react';

import Header from './components/Header';
import Form from './components/Form';
import ToDoList from './components/ToDoList';


export interface ToDo {
  text: string,
  active: boolean,
  id: number,
}

function App() {  

  const [theme, setTheme] = useState<boolean>(true)
  const [toDoLsit, setToDoList] = useState<ToDo[]>([])

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme }>
        <Wrapper >
          <Container>
            <Header theme={theme} setTheme={setTheme} />
            <Form toDoLsit={toDoLsit} setToDoList={setToDoList} /> 
            <ToDoList toDoLsit={toDoLsit} setToDoList={setToDoList}  />
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
  width: 100%;
  min-height: 100vh;
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