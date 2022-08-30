import React, { FC, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import styled from "styled-components";

const CircleAnm1: FC = () => {
  let container = useRef<HTMLDivElement>(null);
  let circleRef = useRef<HTMLDivElement>(null);
  let circleRedRef = useRef<HTMLDivElement>(null);
  let circleBlueRef = useRef<HTMLDivElement>(null);

  // const [state, setState] = useState<boolean>(false);

  // const handleExpand = () => {
  //   gsap.to(circleRedRef.current, {
  //     ease: Power3.easeOut,
  //     width: 150,
  //     height: 150,
  //     duration: 0.8,
  //   });
  //   setState(true);
  // };
  // const handleShrink = () => {
  //   gsap.to(circleRedRef.current, {
  //     ease: Power3.easeOut,
  //     width: 75,
  //     height: 75,
  //     scale: 1,
  //     duration: 0.8,
  //   });
  //   setState(false);
  // };

  useLayoutEffect(() => {
    if (container.current) container.current.style.visibility = "visible";
    // Target specific nested elements
    const circles = [circleRef.current, circleBlueRef.current];
    //returns tween
    const target = gsap.fromTo(
      circles,
      { x: 0, opacity: 0 },
      {
        x: 45,
        opacity: 1,
        duration: 2,
        stagger: 1,
      }
    );
    const pumping = gsap.fromTo(
      circleRedRef.current,
      {
        width: 75,
        height: 75,
      },
      {
        width: 150,
        height: 150,
        duration: 1.5,
        delay: 4,
        repeat: -1,
        repeatDelay: 0.5,
        yoyo: true,
      }
    );
    return () => {
      target.kill();
      pumping.kill();
    };
  }, []);
  return (
    <Section>
      <Container ref={container}>
        <Circle ref={circleRef} />
        <CircleRed
          ref={circleRedRef}
          // onClick={state !== true ? handleExpand : handleShrink}
        />
        <CircleBlue ref={circleBlueRef} />
      </Container>
    </Section>
  );
};

export default CircleAnm1;

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    to right,
    rgb(118, 186, 153) 0%,
    rgb(173, 207, 159) 100%
  );
`;
const Container = styled.div`
  visibility: visible;
`;
const Circle = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #fdcf51;
  margin-bottom: 20px;
`;
const CircleRed = styled(Circle)`
  background-color: #fd5151;
`;
const CircleBlue = styled(Circle)`
  background-color: #51a0fd;
`;
