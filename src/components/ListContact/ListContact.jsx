import { ListContainer } from "./listContact.styled";

export const ContactList = ({ filteredData, deletedData }) => {
  return (
    <ListContainer>
      <ul>
        {filteredData.map(({ name, number, id }) => (
          <li key={id}>
            <p>
              {name} : {number}
            </p>
            <button type="submit" onClick={() => deletedData(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </ListContainer>
  );
};
