import styled from 'styled-components'

export const Container = styled.div`
    height: 450px;
    width: 300px;
    border: 1px solid #fff;
    margin: 15px;
    box-shadow: 0px 0px 15px #222;
    
    a {
        text-decoration: none;
        color: #222;
    }

    :hover {
        transform: scale(1.05);
        box-shadow: 0px 5px 15px #fff;
        cursor: pointer;
    }

`
export const MovieImage = styled.div`
    height: 70%;

    img {
        height: 100%;
        width: 100%;
    }
`
export const MovieInfo = styled.div`
    height: 30%;
    background: #fff;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3 {
        margin-top: 10px;
    }

    h6 {
        margin-bottom: 10px;
    }
`