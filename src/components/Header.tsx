import styled from 'styled-components';
import moon from "../images/icon-moon.svg";
import sun from "../images/icon-sun.svg";


interface HeaderProps {
    theme: boolean,
    setTheme: (e:boolean) => void,
}

const Header = ({theme, setTheme }:HeaderProps) => {
    return ( 
        <Head>
            <h1>TODO</h1>
            <img
                onClick={() => setTheme(!theme)}
                src={theme ? moon : sun} 
                alt="theme-icon" 
            />
      </Head>
     );
}
 
export default Header;

const Head = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 48px;
    margin-bottom: 40px;

    h1 {
        font-size: 30px;
        letter-spacing: 10px;
        font-weight: bold;
        color: #fff;
    }

    img {
       cursor: pointer; 
    }

`