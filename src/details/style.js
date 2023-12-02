import styled from "styled-components";

export const Container = styled.div `
    h1 {
        margin: 3rem 0;
    }

    .details {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 70px;
    }

    .info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-width: 50%;
        margin-left: 20px;

    }

    img {
        width: 300px;
        border-radius: 1rem;
    }

    .sinopse {
        line-height: 130%;
        font-size: 110%;
        margin-bottom: 1rem;
    }

    .release {
        opacity: 0.7;
        margin-bottom: 10px;
    }

    button {
        padding: 0.8rem 2rem;
        font-size: 16px;
        background: #780116;
        border: none;
        cursor: pointer;
        border-radius: 1rem; 
        color: white;
        margin-top: 1rem;
        transition: all 0.3s;
    }

    button: hover {
        opacity: 0.5;
    }

    .ranking {
        line-height: 130%;
    }
    
    .likes {
        margin-top: 5px;
    }
`;