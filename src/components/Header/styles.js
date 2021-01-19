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
    border: 1px solid #fff;
    width: 20%;
    height: 100px;
    border-radius: 10px;
    min-width: 200px;
    max-width: 200px;
    margin-left: 10px;
`
export const Movies = styled.ul`
    outline: none;
    color: #fff;
    height: 100%;
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Trending = styled.ul`
    outline: none;
    color: #fff;
    height: 100%;
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
` 
export const Search = styled.form`
    padding-left: 30px;
    border-radius: 10px;
    height: 60%;
    width: 30%;
    input {
        width: 100%;
        border-radius: 10px;
        outline: none;
        height: 100%;
        border: 1px solid #fff;
        padding: 10px;
        color: #fff;
    }
` 