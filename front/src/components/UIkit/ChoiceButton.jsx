import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  background-color: ${props => props.bgColor};
  width: 300px;
  justify-content: flex-start;
  color: ${props => props.textColor};
  padding: 7px 40px;
  font-weight: 900;
  font-size: 15px;
  &:hover {
    background-color: ${props => props.bgColor};
  }
`;

const ChoiceButton = (props) => {
  return (
    <>
      <StyledButton bgColor={props.bgColor} textColor={props.textColor}>
        { props.text }
      </StyledButton>
    </>
  )
}

export default ChoiceButton