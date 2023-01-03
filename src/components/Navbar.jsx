import { useState } from "react";
import styled from "styled-components";
import BurguerButton from "./BurguerButton";


const Navbar = () => {

    const[clicked, setClicked] = useState(false)

    const handleClick = () =>{
        //al ser true lo pasa a false y viceversa eaaa
        setClicked(!clicked)
    }

    return ( 
        <>
        <NavContainer>
        <div className={`links ${clicked ? 'active' : ''}`}>
            <a href='/'>Home</a>
            <a href='/imc'>IMC Calculator</a>
            <a href='/age'>Age Calculator</a>
            </div>
            
            
            
            <h2><img src="https://krugercorp.com/wp-content/uploads/2022/02/KRUGER-icon-naranja-03.png" alt="none" />
                K <span>Kruger</span>
            </h2>
            <div className={`links ${clicked ? 'active' : ''}`}>
            <a href='/clock'>Clock</a>
            <a href='/about'>About me</a>
            <a href='/contact'>Contact</a>
            </div>
            <div className="burguer">
                <BurguerButton clicked={clicked} handleClick={handleClick} />
            </div>
            <BgDiv className={`initial ${clicked ? ' active' : ''}`}> </BgDiv>
            
        </NavContainer>
        </>
     );
}
 
export default Navbar;

const NavContainer = styled.nav`
img{
    width: 40px;
}
h2{
    font-weight:400;
    color: black;
    span{
        font-weight: bold;
    }
}
padding: .4rem;
background-color: #FFFFFF;
display: flex;
align-items: center;
justify-content: space-between;
border: 1px solid rgba(0, 0, 0, 0.5);
border-top: 0;
border-left: 0;
border-right: 0;
margin: 10px;
font-weight: bold;
a{
    color: white;
    text-decoration: none;
    margin-right: 4rem;
}
.burguer{
    @media(min-width: 768px){
        display: none;
    }
}
.links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
        color: black;
        font-size: 2rem;
        display: block;
    }
    @media(min-width:768px){
        position: initial;
        margin: 0;
        a{
            font-size: 1rem;
            color: black;
            display: inline;
        }

    }
}
.links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    rigth: 0;
    text-align: center;
    a{
        font-size: 2rem;
        margin-top: 1rem;
        color: black;
    }

}
`

const BgDiv = styled.div`
position: absolute;
background-color: #FFFFFF;
top: -700px;
left: -1000px;
z-index: -1;
width: 100%;
height: 100%;
transition: all .6s ease ;
&.active{
    border-radius: 0 0 80% 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
`
