import styled from "styled-components";
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function Footer(){
    const {percentage} = useContext(UserContext);
    let barColor = "rgba(82, 182, 255, 1)";
    if(percentage===100){
        barColor="rgba(143, 197, 73, 1)";
    }

    return(
        <Wrapper>
            <Link to="/habits">
                <div>Habits</div>
            </Link>

            <Link to="/today">
                <ProgressBarWrapper>
                    <CircularProgressbarWithChildren value={percentage} background backgroundPadding={6}
                    styles={buildStyles({
                        pathColor: "white",
                        backgroundColor: barColor,
                        trailColor:"transparent",
                    })}
                    >Today</CircularProgressbarWithChildren>
                </ProgressBarWrapper>
            </Link>
            
            <Link to="/history">
                <div>History</div>
            </Link>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: white;
    font-size: 2.5vh;
    width: 100vw;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    a{
    color:rgba(82, 182, 255, 1);
    }

    &>div:hover{
        cursor:pointer;
    }
`;

const ProgressBarWrapper = styled.div`
    height: 12vh;
    width: 12vh;
    margin-bottom:6vh;
    color: white;
`;