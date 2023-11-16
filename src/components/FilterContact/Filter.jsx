import { FilterContainer } from "./filter.styled"

export const Filter = ({ value, onChange }) => {
  return (
    <FilterContainer>
      <p>Find contacts by name</p>
      <input
        value={value}
        onChange={onChange}
        type="text"
        name="filter"
        placeholder="name search"
      ></input>
    </FilterContainer>
  );
};
