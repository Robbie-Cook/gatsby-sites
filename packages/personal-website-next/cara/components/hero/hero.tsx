/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { css } from "@emotion/react";
import Divider from "../../elements/divider";
import Inner from "../../elements/inner";
import Content from "../../elements/content";
import SVG from "../svg";
import { UpDown, UpDownWide } from "../../styles/animations";
// @ts-ignore
import Intro from "../../sections/intro.mdx";
// @ts-ignore
import Avatar from "./meAsAvatar.svg";
import animationData from "./data.json";
import Lottie from "react-lottie";
import useBreakpoint from "use-breakpoint";
import DecorativeTitle from "../../../components/DecorativeTitle";

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 };

const Hero = ({ offset }: { offset: number }) => {
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(
    BREAKPOINTS,
    "desktop"
  );

  return (
    <div>
      <Divider speed={0.2} offset={offset}>
        <UpDown>
          <SVG
            icon="triangle"
            hiddenMobile
            width={48}
            stroke
            color="icon_orange"
            left="10%"
            top="20%"
          />
          <SVG
            icon="hexa"
            width={48}
            stroke
            color="icon_red"
            left="60%"
            top="70%"
          />
          <SVG icon="box" width={6} color="icon_darker" left="60%" top="15%" />
        </UpDown>
        <UpDownWide>
          <SVG
            icon="arrowUp"
            hiddenMobile
            width={16}
            color="icon_blue"
            left="80%"
            top="10%"
          />
          <SVG
            icon="triangle"
            width={12}
            stroke
            color="icon_brightest"
            left="90%"
            top="50%"
          />
          <SVG
            icon="circle"
            width={16}
            color="icon_darker"
            left="70%"
            top="90%"
          />
          <SVG
            icon="triangle"
            width={16}
            stroke
            color="icon_darkest"
            left="30%"
            top="65%"
          />
          <SVG
            icon="cross"
            width={16}
            stroke
            color="icon_pink"
            left="28%"
            top="15%"
          />
          <SVG
            icon="circle"
            width={6}
            color="icon_darkest"
            left="75%"
            top="10%"
          />
          <SVG
            icon="upDown"
            hiddenMobile
            width={8}
            color="icon_darkest"
            left="45%"
            top="10%"
          />
        </UpDownWide>
        <SVG
          icon="circle"
          hiddenMobile
          width={24}
          color="icon_darker"
          left="5%"
          top="70%"
        />
        <SVG icon="circle" width={6} color="icon_darkest" left="4%" top="20%" />
        <SVG
          icon="circle"
          width={12}
          color="icon_darkest"
          left="50%"
          top="60%"
        />
        <SVG
          icon="upDown"
          width={8}
          color="icon_darkest"
          left="95%"
          top="90%"
        />
        <SVG
          icon="upDown"
          hiddenMobile
          width={24}
          color="icon_darker"
          left="40%"
          top="80%"
        />
        <SVG
          icon="triangle"
          width={8}
          stroke
          color="icon_darker"
          left="25%"
          top="5%"
        />
        <SVG icon="circle" width={64} color="icon_green" left="95%" top="5%" />
        <SVG
          icon="box"
          hiddenMobile
          width={64}
          color="icon_purple"
          left="5%"
          top="90%"
        />
        <SVG icon="box" width={6} color="icon_darkest" left="10%" top="10%" />
        <SVG icon="box" width={12} color="icon_darkest" left="40%" top="30%" />
        <SVG
          icon="hexa"
          width={16}
          stroke
          color="icon_darker"
          left="10%"
          top="50%"
        />
        <SVG
          icon="hexa"
          width={8}
          stroke
          color="icon_darker"
          left="80%"
          top="70%"
        />
      </Divider>
      <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset}>
        <Inner
          sx={{
            display: `flex`,
            flexDirection: ["column", , "row", "row", "row"],
            alignItems: "center",
          }}
        >
          {/* <HeroImage src={<Avatar />} /> */}
          <div
            css={css`
              @media screen and (min-width: 400px) {
                max-width: 40vw;
                margin-right: 50px;
              }

              display: flex;
              height: 100%;
              flex: 0 0 400px;
              width: 80%;
            `}
            style={{}}
          >
            <Avatar />
          </div>
          <div
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {/* <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              height={breakpoint === "mobile" ? 50 : 100}
              width={"100%"}
            /> */}
            <DecorativeTitle>Hi, I'm Robbie Cook</DecorativeTitle>
            <Intro />
          </div>
        </Inner>
      </Content>
    </div>
  );
};

export default Hero;
