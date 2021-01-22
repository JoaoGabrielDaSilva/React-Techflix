import styled from 'styled-components'

import { FaBars } from "react-icons/fa"

export const Container = styled.div`
    background: #222;
    display: flex;
    align-items: center;
    height: 15vh;
    justify-content: space-between;
    width: 100%;
    

    ul {
        margin-left: 10px; 
    }

    li {
        width: 100%;
        height: 100%;
    }

    ul:hover {
        background: #4d4d4d;
        color: #b80f0f;
    }

    form {
        margin-right: 10px;
    }

    @media (max-width: 1120px) {

        flex-direction: column;
    }

`

export const Logo = styled.div`
    width: 20%;
    height: 100px;
    border-radius: 10px;
    min-width: 200px;
    max-width: 200px;
    margin-left: 10px;

    img {
        height: 100%
    }
`

export const Menu = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
        
    /* @media (max-width: 1120px) {

        flex-direction: column;

        ul, input {
        position: absolute;
        display: none;
        } 

        select {
            display: initial;
            margin-right: 20px;
        }
    } */
`

export const Movies = styled.ul`
    outline: none;
    height: 100%;
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    li {
        height: 100%;
    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        text-decoration: none;
        color: #fff;
    }
`
export const Trending = styled.ul`
    outline: none;
    height: 100%;
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    li {
        height: 100%;
    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        text-decoration: none;
        color: #fff;
    }
` 
export const Search = styled.form`
    padding-left: 30px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    input {
        width: 30%;
        border-radius: 10px 0px 0px 10px;
        outline: none;
        height: 40%;
        border: 1px solid #fff;
        padding: 10px;
        color: #fff;
    }

    input:hover {
        background: #2e2e2e;
        cursor: pointer;
    }

    a {
        max-height: 58px;
        text-decoration: none;
        width: 10%;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button {
        color: #fff;
        border: 1px solid #fff;
        border-radius: 0px 10px 10px 0px;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button:hover {
        color: #222;
        background: #fff;
        cursor: pointer;
    }

    @media (max-height:1120px) {
        a {
            height: 49%;
        }
    }

` 


