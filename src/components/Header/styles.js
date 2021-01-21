import styled from 'styled-components'

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

    ul:hover {
        background: #4d4d4d;
        color: #b80f0f;
    }

    form {
        margin-right: 10px;
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
    border-radius: 10px;
    height: 60%;
    width: 30%;
    display: flex;
    justify-content: space-around;

    input {
        width: 70%;
        border-radius: 10px;
        outline: none;
        height: 100%;
        border: 1px solid #fff;
        padding: 10px;
        color: #fff;
    }

    a {
        text-decoration: none;
        width: 20%;
        height: 100%;
    }

    button {
        color: #fff;
        border: 1px solid #fff;
        border-radius: 10px;
        width: 100%;
        height: 100%;
    }

    button:hover {
        color: #222;
        background: #fff;
        cursor: pointer;
    }
` 