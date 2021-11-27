import React from 'react';
import {styled} from "@mui/material";
import {testimonials} from "../../helpers/constants";
import Testimonial from "./Testimonial";


const TestimonialsGrid = styled('div')`
  display: grid;
  gap: 1.5rem;
  width: min(95%, 70rem);
  margin-inline: auto;
  @media (min-width: 50rem) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const CssGrid = () => {
    return (
        <TestimonialsGrid>
            {
        testimonials.map(({id, image, name, position, message, declaration}) => (
                <Testimonial
                    key={id}
                    image={image}
                    name={name}
                    position={position}
                    message={message}
                    declaration={declaration}
                />
            ))
        }
        </TestimonialsGrid>
    )}

export default CssGrid;
