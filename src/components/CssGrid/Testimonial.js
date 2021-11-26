import React from "react";
import {styled} from "@mui/material";

const GlobalContainer = styled('article')`
  font-size: 0.8125rem;
  color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 2.5rem 3.75rem 3rem -3rem hsl(217 19% 35% / .25);
  background: hsl(${({backgroundColor}) => backgroundColor ? backgroundColor : '263 55% 52%'});
  background-image: url("../../../public/assets/images/bg-pattern-quotation.svg");
  background-repeat: no-repeat;
  background-position: top right 10%;

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
}

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
