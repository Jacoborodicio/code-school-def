/** @jsx jsx **/
import React, {useState} from 'react';
import {jsx} from "@emotion/react";
import {styled} from "@mui/material";
import {Trail, animated as a, useTrail} from "@react-spring/web";
import Button from "../Button/Button";


const items = ["Item1", "Item2", "Item3", "Item4"];

const config = { mass: 5, tension: 2000, friction: 200 };const DevPlace = () => {
    const [toggle, set] = useState(true);
    const trail = useTrail(items.length, {
        config,
        opacity: toggle ? 1 : 0,
        x: 20,
        height: 80,
        from: {x: 20, height: 0, opacity: 0}
    });

    return (
        <>
            <Button back />
        <div className="trails-main" onClick={() => set(state => !state)}>

            <div>
                {trail.map(({ x, height, ...rest }, index) => (
                    <a.div
                        key={items[index]}
                        className="trails-text"
                        style={{
                            ...rest,
                            transform: x => `translate3d(0,${x}px,0)`
                        }}
                    >
                        <a.div style={{ height, overflow: 'hidden' }}>{items[index]}</a.div>
                    </a.div>
                ))}
            </div>
        </div>
        </>
    );
}

export default DevPlace;
