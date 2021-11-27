import React from "react";
import {styled} from "@mui/material";

const GlobalContainer = styled('article')`
  font-size: 0.8125rem;
  color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 2.5rem 3.75rem 3rem -3rem hsl(217 19% 35% / .25);
  background: top right 10% no-repeat url("../../../public/assets/images/bg-pattern-quotation.svg");
  
  & > div:first-of-type {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: .8125rem;
    & > div:first-of-type {
      & img {
        width: 4rem;
        aspect-ratio: 1;
        border-radius: 50%;
      }
    },
  & > div:last-of-type {
    & > h2:first-of-type {
      line-height: 1rem;
      font-weight: 500;
    },
  },
  },
& > p:first-of-type {
  font-size: 1.25rem;
  line-height: 1.2;
  margin-bottom: .313rem;
},
& p:last-of-type {
  font-size: 1rem;
  opacity: .85;
  letter-spacing: 1.2px;
},
  // Just selecting dummy like that (just learning purposes)  to play with grids individually
  &:nth-of-type(1) {
    background-color: hsl(263 55% 52%);
  @media (min-width: 50rem) {
    grid-column: span 2;
  }
  //grid-column: span 2;
  },
&:nth-of-type(2) {
  background-color: hsl(91, 95%, 23%);
  @media (min-width: 50rem) {
    background: hsl(91, 95%, 23%);
  }
},
&:nth-of-type(3) {
  background-color: hsl(318, 82%, 37%);
  @media (min-width: 50rem) {
    background: hsl(318, 82%, 37%);
  }
},
&:nth-of-type(4) {
  background-color: darkblue;
  //grid-column: span 2;
  @media (min-width: 50rem) {
    grid-column: span 2;
  }
},
  &:nth-of-type(5) {
  background-color: hsl(0, 57%, 43%);
  //grid-column-start: 4;
  //grid-row-start: 1;
  //grid-row-end: 3; // span 2 nos daría el mismo resultado ya que start 1 + 2 = end 3
  // Shorthand for the two lines above
  //grid-row: 1 / 3;
  @media (min-width: 50rem) {
    background: hsl(0, 57%, 43%);
    grid-column-start: 4;
    grid-row: 1 / 3;
  }
},
`;

const Testimonial = ({image, name, position, message, declaration}) => {
    return (
        <GlobalContainer>
            <div>
                <div>
                    <img src={image} alt={name}/>
                </div>
                <div>
                    <h2>{name}</h2>
                    <p>{position}</p>
                </div>
            </div>
            <p>{message}</p>
            <p>{declaration}</p>
        </GlobalContainer>
    )
}

export default Testimonial;
