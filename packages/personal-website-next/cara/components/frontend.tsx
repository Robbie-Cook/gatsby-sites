/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import Divider from "../elements/divider";
import Inner from "../elements/inner";
import Content from "../elements/content";
import SVG from "./svg";
import { UpDown, UpDownWide } from "../styles/animations";
import WhatsPoppin from "../../components/WhatsPoppin";
import useBreakpoint from "use-breakpoint";
import styles from "./frontend.module.scss";

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 };

const FrontEnd = ({ offset }: { offset: number }) => {
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(
    BREAKPOINTS,
    "desktop"
  );

  console.log(minWidth);

  return (
    <div>
      <Divider
        bg="divider"
        clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
        speed={0.2}
        factor={2}
        offset={offset}
      />
      <Divider speed={0.1} offset={offset}>
        <UpDown>
          <SVG
            icon="box"
            hiddenMobile
            width={6}
            color="icon_blue"
            left="50%"
            top="75%"
          />
          <SVG
            icon="upDown"
            hiddenMobile
            width={8}
            color="icon_darkest"
            left="70%"
            top="20%"
          />
          <SVG
            icon="triangle"
            width={8}
            stroke
            color="icon_darkest"
            left="25%"
            top="5%"
          />
          <SVG
            icon="upDown"
            hiddenMobile
            width={24}
            color="icon_orange"
            left="80%"
            top="80%"
          />
        </UpDown>
        <UpDownWide>
          <SVG
            icon="arrowUp"
            hiddenMobile
            width={16}
            color="icon_purple"
            left="5%"
            top="80%"
          />
          <SVG
            icon="triangle"
            width={12}
            stroke
            color="icon_brightest"
            left="95%"
            top="50%"
          />
          <SVG
            icon="circle"
            hiddenMobile
            width={6}
            color="icon_brightest"
            left="85%"
            top="15%"
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
          width={6}
          color="icon_brightest"
          left="4%"
          top="20%"
        />
        <SVG
          icon="circle"
          width={12}
          color="icon_darkest"
          left="70%"
          top="60%"
        />
        <SVG icon="box" width={6} color="icon_orange" left="10%" top="10%" />
        <SVG icon="box" width={12} color="icon_darkest" left="20%" top="30%" />
        <SVG
          icon="hexa"
          width={8}
          stroke
          color="icon_darkest"
          left="80%"
          top="70%"
        />
      </Divider>
      <Content speed={0.4} offset={offset} factor={2}>
        <Inner>
          <div className={styles.lottieContainer}>
            <WhatsPoppin
              width={
                breakpoint === "tablet" || breakpoint === "mobile"
                  ? "100%"
                  : "700px"
              }
            />
          </div>
        </Inner>
      </Content>
    </div>
  );
};

export default FrontEnd;
