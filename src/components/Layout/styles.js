import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: 100px auto 200px; 
  grid-template-areas:
    "HD"
    "BD"
    "FT";
`;
