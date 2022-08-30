import React, { FC, useLayoutEffect, useRef } from "react";
import { gsap, Power3 } from "gsap";
import styled from "styled-components";

const CircleAnimation: FC = () => {
  //useRef callback way to grab element in typescript
  // const [container, setContainer] = useState<HTMLDivElement | null>(null);
  // const [circle, setCircle] = useState<HTMLDivElement | null>(null);
  // const [circleRed, setCircleRed] = useState<HTMLDivElement | null>(null);
  // const [circleBlue, setCircleBlue] = useState<HTMLDivElement | null>(null);

  //useRef in typescript
  let containerRef = useRef<HTMLDivElement>(null);
  let circleRef = useRef<HTMLDivElement>(null);
  let circleRedRef = useRef<HTMLDivElement>(null);
  let circleBlueRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    //usign useRef in typescript
    let container = containerRef.current;
    let circle = circleRef.current;
    let circleRed = circleRedRef.current;
    let circleBlue = circleBlueRef.current;

    if (container) container.style.visibility = "visible";
    let fromCircle = gsap.from(circle, {
      opacity: 0,
      x: 40,
      duration: 2,
      ease: Power3.easeOut,
      immediateRender: false,
    });
    let fromCircleRed = gsap.from(circleRed, {
      opacity: 0,
      x: 40,
      duration: 2,
      ease: Power3.easeOut,
      delay: 0.4,
      immediateRender: false,
    });
    let fromCircleBlue = gsap.from(circleBlue, {
      opacity: 0,
      x: 40,
      duration: 2,
      ease: Power3.easeOut,
      delay: 0.8,
      immediateRender: false,
    });

    return () => {
      fromCircle.kill();
      fromCircleRed.kill();
      fromCircleBlue.kill();
    };
  }, []);
  return (
    // <Section>
    //   <Container ref={(el) => setContainer(el)}>
    //     <Circle ref={(el) => setCircle(el)} />
    //     <CircleRed ref={(el) => setCircleRed(el)} />
    //     <CircleBlue ref={(el) => setCircleBlue(el)} />
    //   </Container>
    // </Section>
    <Section>
      <Container ref={containerRef}>
        <Circle ref={circleRef} />
        <CircleRed ref={circleRedRef} />
        <CircleBlue ref={circleBlueRef} />
      </Container>
    </Section>
  );
};

export default CircleAnimation;

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
  visibility: hidden;
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
