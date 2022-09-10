import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100%;
    padding: 1rem 0.2rem;

    div{
        max-width: 500px;
        max-height: 1200px;
        padding: 1.5rem 1rem 3rem;
        margin: 0 auto;
        border-radius: 20px;
        background-color: black;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;    
    }

    h1{
        grid-area: 1 / 4 span;
        padding: 1rem 0.2rem;
        font-size: clamp(4rem, 6vw, 84px);
        font-family: var(--ff-primary);
        line-height: 1;
        color: var(--clr-white);
        text-align: end;
    }
`;

export const GreyBtn = styled.button`
    width: 100%;
    aspect-ratio: 1;
    border-radius: 50%;
    font-size: clamp(1rem, 2.5vw, 64px);
    font-family: var(--ff-primary);
    font-weight: var(--fw-400);
    background-color: var(--bg-lightgrey);
    color: var(--clr-black);
    border: none;
    transition: 0.2s all;

    :where(:hover, :focus-visible){
        transform: scale(0.95);
        background-color: var(--bg-white);
        font-weight: var(--fw-500);
    }
`;

export const NumberBtn = styled.button`
    width: 100%;
    aspect-ratio: 1;
    border-radius: 50%;
    font-size: clamp(1rem, 2.5vw, 64px);
    font-family: var(--ff-primary);
    font-weight: var(--fw-400);
    background-color: var(--bg-black);
    color: var(--clr-white);
    border: none;
    transition: 200ms ease-in;

    :where(:hover, :focus){
        transform: scale(0.95);
        font-weight: var(--fw-500);
        background-color: var(--bg-white);
        color: var(--clr-black);
    }
`;

export const NumberZero = styled.button`
    grid-area: 6 / 2 span;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    font-size: clamp(1rem, 2.5vw, 64px);
    font-family: var(--ff-primary);
    font-weight: var(--fw-400);
    background-color: var(--bg-black);
    color: var(--clr-white);
    border: none;
    transition: 0.2s all;

    :where(:hover, :focus){
        transform: scale(0.95);
        font-weight: var(--fw-500);
        background-color: var(--bg-white);
        color: var(--clr-black);
    }
`;

export const SignBtn = styled.button`
    width: 100%;
    aspect-ratio: 1;
    border-radius: 50%;
    font-size: clamp(1rem, 2.5vw, 64px);
    font-family: var(--ff-primary);
    font-weight: var(--fw-400);
    background-color: var(--bg-orange);
    color: var(--clr-white);
    border: none;
    transition: 0.2s all;

    :where(:hover, :focus){
        transform: scale(0.95);
        font-weight: var(--fw-500);
        background-color: var(--bg-white);
        color: var(--clr-orange);
    }
`;

export const ResultBtn = styled.button`
    grid-area: 6 / 4;
    width: 100%;
    aspect-ratio: 1;
    border-radius: 50%;
    font-size: clamp(1rem, 2.5vw, 64px);
    font-family: var(--ff-primary);
    font-weight: var(--fw-400);
    background-color: var(--bg-orange);
    color: var(--clr-white);
    border: none;
    transition: 0.1s all;

    :where(:hover, :focus){
        transform: scale(0.95);
        font-weight: var(--fw-500);
        background-color: var(--bg-white);
        color: var(--clr-orange);
    }
`;