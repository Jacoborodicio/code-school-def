import React from 'react';
import {styled} from "@mui/material";
import {testimonials} from "../../helpers/constants";
import Testimonial from "./Testimonial";

const CssGrid = () => {
    return (
        <>
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
        </>
    )}

export default CssGrid;
