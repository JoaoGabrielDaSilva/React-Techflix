import styled from 'styled-components'

export const Container = styled.div`
    height: 85vh;
`
export const Main = styled.div`
    min-height: 100%;
    height: 100%;
    background-image: url('https://raw.githubusercontent.com/JoaoGabrielDaSilva/TechFlix-Project/main/public/images/background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;

`
export const LeftSide = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h5 {
        margin-top: 20px;
        color: #fff;
    }
`

export const ImageContainer = styled.div`
    box-shadow: 0px 0px 15px #222;
    width: 300px;
    height: 500px;
    border: 1px solid #fff;

    img {
        height: 100%;
        width: 100%;
    }
`

export const RightSide = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    a {
        text-decoration: none;
    }

    button {
        outline: none;
        color: #222;
        background: #fff;
        box-shadow: 0px 0px 5px #222;
        width: 100px;
        height: 50px;
        border-radius: 150px;
        position: absolute;
        top: 2%;
        right: 2%;
        transition: 0.1s ease-in-out;
    }

    button:hover {
        color: #fff;
        background: #222;
        box-shadow: 0px 0px 3px #fff;
        cursor: pointer;
    }
`

export const InfoContainer = styled.div`
    color: #fff;
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;

    p {
        margin-top: 30px;
        padding: 30px;
    }

    h1 {
        margin-top: 5px;
        padding: 30px;
    }

`