/** @jsx jsx **/
import React, {useState, useEffect} from 'react';
import {jsx} from "@emotion/react";
import {useSpring, animated} from "@react-spring/web";
import {useAnimatedPath} from "../../../hooks/useAnimatedPath";

// The check over the shield
const Checkmark = ({ toggle }) => {
    const animationProps = useAnimatedPath({
        toggle,
        delay: 500
    });

    return (
        <animated.path
            {...animationProps}
            stroke="#4ADE80"
            strokeWidth="24"
            d="M75 153.5l68.081 77.5L235 97"
        />
    );
}

// Shield (function used for both parts
const ShieldPart = ({ color, d, toggle }) => {
    const animationStrokeProps = useAnimatedPath({ toggle });
    const animationFillStyle = useSpring({
        fill: toggle ? color : "transparent",
        delay: 250
    });

    return (
        <animated.path
            {...animationStrokeProps}
            // as the `animationStrokeProps` have a `style` property
            // on it, it would be overridden by just passing
            // `style={animationFillStyle}`
            style={{
                ...animationStrokeProps.style,
                ...animationFillStyle
            }}
            stroke={color}
            strokeWidth="4"
            d={d}
        />
    );
}

const SvgAnimations = ({toggle, width = 50, height = 50}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="none"
            viewBox="0 0 286 334"
        >
            {/* Left shield part */}
            <ShieldPart
                toggle={toggle}
                d="M 143, 333 C 31.09 261.823 1 73.61 1 73.61 L 143 1 v 332 z"
                color="#A78BFA"
            />
            {/* Right shield part */}
            <ShieldPart
                toggle={toggle}
                d="M 143, 333 C 254.911 261.823 285 73.61 285 73.61 L 143 1 v 332 z"
                color="#8B5CF6"
            />
            <Checkmark toggle={toggle} />
        </svg>
    );
}

export default SvgAnimations;
