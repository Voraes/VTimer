import styled from "styled-components";

export const HomeContainer = styled.main`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.5rem;
    }
`;

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: #E1E1E6;
    font-size: 1.125rem;
    font-weight: bold;
    flex-wrap: wrap;
`;

export const CountdownContainer = styled.div`
    font-family: 'Roboto Mono', monospace;
    font-size: 10rem;
    line-height: 8rem;
    color: #E1E1E6;

    display: flex;
    gap: 1rem;

    span {
        background: #29292E;
        padding: 2rem 1rem;
        border-radius: 8px;
    }
`;

export const Separator = styled.div`
    padding: 2rem 0;
    color: #00875F;

    width: 4rem;
    overflow: 4rem;
    display: flex;
    justify-content: center;
`;

export const StartCountdownButton = styled.button`
    width: 100%;
    border: 0;
    padding: 1rem;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;
    font-weight: bold;

    cursor: pointer;

    background: #00875F;
    color: #E1E1E6;

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    &:not(:disabled):hover {
        background: #015F43;
    }
`;

const BaseInput = styled.input`
    background: transparent;
    height: 2.5rem;
    border: 0;
    border-bottom: 2px solid #7C7C8A;
    font-weight: bold;
    font-size: 1.125rem;
    padding: 0 0.5rem;
    color: #E1E1E6;

    &:focus {
        box-shadow: none;
        border-color: #00875F;
    }

    &::placeholder {
        color: #7C7C8A;
        text-align: center;
    }
`;

export const TaskInput = styled(BaseInput)`
    flex: 1;

    &::-webkit-calendar-picker-indicator {
        display: none !important;
    }
`;

export const MinuteAmountInput = styled(BaseInput)`
    width: 4rem;
    -webkit-appearance: none;
    -moz-appearance: textfield;
`;
