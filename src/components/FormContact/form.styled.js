import styled from 'styled-components';
import { Form , ErrorMessage } from 'formik';

export const FormStyled = styled(Form)`
  max-width: 460px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 20px;
  margin: 20px 0 20px 0;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  label {
    font-size: unset;
    margin-right: 6px;
  }

  input {
    height: 24px;
  }

  button {
    display: inline-block;
    padding: 5px 10px;
    background: linear-gradient(to bottom, #4caf50, #45a049);
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  button:hover {
    transform: scale(1.05);
    color: black;
  }
`;


export const ErrorMsg = styled(ErrorMessage)`
color: red;
font-size: 12px;
`;
