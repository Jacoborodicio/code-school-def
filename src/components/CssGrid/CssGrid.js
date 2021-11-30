/** @jsx jsx **/
import React, {lazy, Suspense} from 'react';
import {styled} from "@mui/material";
import {jsx, css} from "@emotion/react";
import {testimonials} from "../../helpers/constants";
const Testimonial = lazy(() => import('./Testimonial'));

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
    console.log('File: CssGrid.js, Function: CssGrid, Line 17 --> testimonials: ', testimonials);
    return (
        <TestimonialsGrid>
            {
        testimonials.map(({id, name, position, message, declaration}) => (
                <Testimonial
                    key={id}
                    //image={image}
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
