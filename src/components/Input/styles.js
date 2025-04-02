import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: #e9ffbf;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: 'Roboto';
    

    input {
        width: 100%;
        height: 75px;
        background-color: #e9ffbf;

        border: 2px solid #000000; /* Adiciona borda entre os botões */
        border-radius: 5px; /*Borda arredondada */
        
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 0 10px;
        font-size: 24px;
        font-family: 'Roboto';
        color:rgb(0, 0, 0);
    }
`