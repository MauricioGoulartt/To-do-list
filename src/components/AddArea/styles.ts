import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid #555;
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0;
    display: flex;
    align-items: center;

    .plus {
        cursor: pointer;
        padding: 5px;
        margin-right: 5px;
    }

    input {
        border: none;
        background: transparent;
        outline: 0;
        font-size: 18px;
        flex: 1;
        color: #555;
    }
`;