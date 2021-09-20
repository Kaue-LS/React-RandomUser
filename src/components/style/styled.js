import styled from "styled-components";


export const Area = styled.div`
    margin: 10rem auto;
    border-radius: 22px;
    width: 80%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height:auto;
    box-shadow:0px 0px 10px ;
    background-color: white;
    
`;
export const Infobottom=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media(max-width:900px){
        justify-content: center;
        align-items: center;
        margin:  0 auto;
        flex-direction : column;
    }
`;
export const AreaImage= styled.div`
padding: 0rem 4rem;
`
export const Image= styled.img`
    width: 12rem;
    border: 5px solid orangered;
    border-radius: 20px;
`

export const Form= styled.div`
    display: flex;
    flex-direction: row;
    
    @media(max-width:980px){
        justify-content: center;
        flex-wrap: wrap;
        margin: 0 auto;
    }

`;
export const Desc= styled.div`
    display: flex;
    flex-direction: row;
    
    @media(max-width:900px){
        justify-content: center;
        flex-wrap: wrap;
        margin:  0 auto;
        flex-direction : column;
    }
`;
export const Title= styled.h1`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    background-color: darkgreen;
    text-align: center;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    margin: 0px auto;
    padding: 10px 0;
    font-size: 3rem;
    font-weight: bolder;
    color: orangered;
    width: 100%;
`;
export const UserInfo= styled.div`
    padding:10px 30px; 
    
`;
export const Table= styled.table`
    padding:10px 40px;
    margin: 0 auto;
`;
export const Label=styled.h3`
    font-size: 1.4rem;
    color: green;
    padding: 10px 0px;
`;
export const Data=styled.p`
    margin: 0px 20px 0 0px;
    font-size: 1.3rem;
    padding: 5px 20px 0px 0px;
    border-bottom: 2.5px solid gray;
    @media(max-width:900px){
        justify-content: center;
        flex-wrap: wrap;
        margin:  0 auto;
        flex-direction : column;
    }
`;
export const Topic= styled.h2`
    color: orangered;
    font-size: 2rem;
    padding: 0 30px;
`;
export const Registered=styled.div`
`;
export const Reg =styled.h3`
color: darkgreen;
    padding: 5px 10px;
    

`;
export const Datareg= styled.span`
    color: black;
`;
export const Button =styled.button`
    background-color:  rgb(150, 161, 92);
    border-color: orangered;
    border-radius: 10px;
    padding: 10px 10px;
    font-size: 1.2rem;
    margin: 10px 0;
    transition:300ms linear;
    color: orangered;
    :hover{
        background-color: greenyellow;
        border-color: orange;
    }
`;
export const Dice=styled.img`
margin: 0px 10px;
width:20px;
`;
