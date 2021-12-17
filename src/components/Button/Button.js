/** @jsx jsx **/
import React from 'react';
import {jsx} from "@emotion/react";
import {styled} from "@mui/material";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDoubleLeft} from "@fortawesome/free-solid-svg-icons/faAngleDoubleLeft";
import {faIgloo} from "@fortawesome/free-solid-svg-icons/faIgloo";
import {useHistory} from "react-router-dom";

const StyledButton = styled('button')`
  all: unset;
  box-shadow: 0 0 4px rgb(66, 61, 63), 2px 4px 2px rgba(66, 61, 63, .2);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: .25rem;
  width: 2.5rem;
  height: 1.5rem;
  cursor: pointer;
  &:hover {
    background: white;
  }
`;
const Button = ({icon, back, onClick}) => {
    const history = useHistory();
    return (
        <StyledButton onClick={back ? () => history.push('/') : onClick ? onClick : null}>
            <FontAwesomeIcon icon={back ? faIgloo : icon} color={'#423d3f'} />
        </StyledButton>
    )
}

export default Button;
