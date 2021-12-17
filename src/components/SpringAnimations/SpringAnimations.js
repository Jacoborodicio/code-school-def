/** @jsx jsx **/
import React, {useEffect, useState} from 'react';
import {useTransition, animated, useTrail} from "@react-spring/web";
import {jsx, css} from "@emotion/react";
import {styled} from "@mui/material";
import {useHistory} from "react-router-dom";
import Button from "../Button/Button";
import {faAngleDoubleLeft} from "@fortawesome/free-solid-svg-icons/faAngleDoubleLeft";
import SvgAnimations from "./BlockAnimations/SvgAnimations";
import {faExchangeAlt} from "@fortawesome/free-solid-svg-icons/faExchangeAlt";

const SvgShieldContainer = styled('div')`
  margin-top: 2rem;
  display: flex;
  width: 25%;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const MainContainer = styled(animated.div)`
  height: calc(100vh - 3rem);
  width: calc(100vw - 3rem);
  padding: 1rem;
  background: linear-gradient(90deg,#fc701e,#f21e80,#7718aa);
`;

const Greeting = styled(animated.div)`
  position: relative;
  width: 100%;
  height: 80px;
  line-height: 80px;
  color: var(--primary-main);
  font-size: 5em;
  font-weight: 800;
  text-transform: uppercase;
  will-change: transform, opacity;
  overflow: hidden;
  user-select: none;
`;

const items = ["Wellcome", "Bienvenido", "Willkommen", "Benvido"];
const config = { mass: 5, tension: 2000, friction: 200 };

const SpringAnimations = () => {
    const [shieldAnimated, setShieldAnimated] = useState(false);
    useEffect(() => {
        setTimeout(() => setShieldAnimated(true), 0)
    }, []);
    const history = useHistory();
    const transition = useTransition(true, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0},
        config: config.molasses,

    });
    const trail = useTrail(items.length, {
        config,
        opacity: 1,
        x: 20,
        height: 80,
        from: {x: 20, height: 0, opacity: 0}
    });
    return (
        <div css={css`display: flex; justify-content: center; align-items: center; height: 100vh;`}>
            {transition((style, item) => {
                return item ? (
                    <MainContainer style={style}>
                        <Button onClick={() => history.push('/')} icon={faAngleDoubleLeft} />
                        {trail.map(({ x, height, ...rest }, index) => (
                            <Greeting
                                key={items[index]}
                                style={{
                                    ...rest,
                                    transform: x => `translate3d(0, ${x}px, 0)`
                                }}
                            >
                                <animated.div style={{ height, overflow: 'hidden' }}>{items[index]}</animated.div>
                            </Greeting>
                        ))}
                        {/*Shield SVG animations*/}
                        <SvgShieldContainer>
                            <Button icon={faExchangeAlt} onClick={() => setShieldAnimated(!shieldAnimated)} />
                            <SvgAnimations toggle={shieldAnimated} />
                        </SvgShieldContainer>
                    </MainContainer>) : ''
            })
            }
    </div>)
}

export default SpringAnimations;
