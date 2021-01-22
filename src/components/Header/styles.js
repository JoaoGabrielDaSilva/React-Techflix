import styled from 'styled-components'

import { FaSearch } from "react-icons/fa"
import { BiMovie } from 'react-icons/bi'
import { FiTrendingUp } from 'react-icons/fi'

export const Buttons = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`

export const Icons = styled.div`
    width: 100%;
`

export const SearchIcon = styled(FaSearch)`
    color: #fff;
    font-size: 30px;
`

export const MovieIcon = styled(BiMovie)`
    color: #fff;
    font-size: 30px;
`

export const TrendingIcon = styled(FiTrendingUp)`
    color: #fff;
    font-size: 30px;
`

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
        width: 50%;
        margin-right: 10px;
    }

    @media (max-width: 1120px) {
        .header {
            margin: 0 auto;
    }
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
    width: 100%;
    height: 100%;
    z-index: 3;

    @media (max-width: 1120px) {
        width: 100%;
        height: 10%;
        background: #222;
        position: fixed;
        bottom: 0;
        justify-content: space-around;
        
        .movies {
            order: 3;
        }

        form {
            display: flex;
            justify-content: center;
            padding: 0;
            margin: 0;
        }
    }
`

export const Movies = styled.ul`
    outline: none;
    height: 100%;
    width: 15%;
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
    width: 15%;
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
        width: 60%;
        border-radius: 10px 0px 0px 10px;
        outline: none;
        height: 40%;
        max-height: 40px;
        min-width: 100px;
        border: 1px solid #fff;
        padding: 10px;
        color: #fff;
    }

    input:hover {
        background: #2e2e2e;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        width: 10%;
        height: 40%;
    }

    button {
        padding: 3px;
        color: #fff;
        border: 1px solid #fff;
        border-radius: 0px 10px 10px 0px;
        height: 100%;
    }

    button:hover {
        color: #222;
        background: #fff;
        cursor: pointer;
    }

    @media (max-height:1120px) {
        min-width: 100px;
    }

` 


