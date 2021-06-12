import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  margin-top: 20px;
  background-color: ${props => props.bgcolor};
  width: 300px;
  justify-content: flex-start;
  color: ${props => props.textcolor};
  padding: 7px 40px;
  font-weight: 900;
  font-size: 15px;
  &:hover {
    background-color: ${props => props.bgcolor};
  }
`;

const ChoiceButton = (props) => {
  return (
    <>
      <StyledButton bgcolor={props.bgcolor} textcolor={props.textcolor}>
        { props.text }
      </StyledButton>
    </>
  )
}

export default ChoiceButton