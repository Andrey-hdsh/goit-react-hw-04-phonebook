import styled from "styled-components";

export const FilterContainer = styled.div`
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

  p {
    font-size: unset;
  }

  input {
    font-size: 14px;
  }
`;