import React, { FC, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import styled from "styled-components";

const CircleAnm1: FC = () => {
  let containerRef = useRef<HTMLDivElement>(null);
  let children = gsap.utils.selector(containerRef);

  useLayoutEffect(() => {
    // Target any descendant with the class of .circle - no matter how far down the descendant tree.
    //Uses containerRef.current.querySelectorAll() internally

    const target = gsap.to(children(".circle"), {
      x: 40,
      opacity: 0.5,
      stagger: 0.5,
      repeat: -1,
      repeatDelay: 0.5,
      yoyo: true,
    });
    return () => {
      target.kill();
    };
  }, []);
  return (
    <Section>
      <Container ref={containerRef}>
        <Circle className="circle" />
        <CircleRed className="circle" />
        <CircleBlue className="circle" />
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
