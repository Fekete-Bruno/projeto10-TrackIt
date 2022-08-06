import { useEffect, useState } from "react";
import styled from "styled-components";
import { errorMessage, getHabits } from "../../services/axiosHandler";
import CreatorBox from "../CreatorBox/CreatorBox";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Habits(){
    const noHabits = 'You have no habits logged yet. Add a habit to start tracking it!';
    const [habits,setHabits] = useState([]);
    const [create,setCreate] = useState(false);


    useEffect(()=>{
        const promise = getHabits();
        promise.then((res)=>{setHabits(res.data)});
        promise.catch((res)=>{errorMessage(res.response);});
    },[])

    return(
        <Wrapper> 
            <Header />
            <HabitsWrapper>
                <div>
                    <h1>My Habits</h1>
                    <button onClick={()=>{setCreate(true)}}><div>+</div></button>
                </div>
                {
                    (create)?(<CreatorBox setCreate={setCreate}/>):(<></>)
                }
                <NoHabits>{(habits.length===0)?(noHabits):(<></>)}</NoHabits>
            </HabitsWrapper>    
            <Footer />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background-color: rgba(242,242,242,1);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
`;

const HabitsWrapper = styled.div`
    padding-top: 12vh;
    display: flex;
    flex-direction: column;
    align-items: space-around;
    width: 80%;

    button{
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        color:white;
        background-color: rgba(82, 182, 255, 1);
        width: 8vw;
        height: 4vh;
        font-size: 3vh;
        border-radius: 6px;
    }

    button:hover{
        cursor: pointer;
    }

    h1{
        display: flex;
        justify-content: center;
        align-items: center;
        color:rgba(18, 107, 165, 1);
    }

    div{
        font-size: 3vh;
        display: flex;
        justify-content: space-between;
    }
`;


const NoHabits = styled.h3`
    font-size: 3vh;
    color:rgba(102, 102, 102, 1);
    margin-top: 5vh;
`;