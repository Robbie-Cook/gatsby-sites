import React, { useState } from "react";
import styles from "./WhatsPoppin.module.scss";

import animationData from "../../frontend-animation.json";
import Lottie from "react-lottie";

const WhatsPoppin: React.FC<{ width?: string }> = ({
  children,
  width,
  ...props
}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.bigHeading}>I make frontend</h3>
      <Lottie
        width={width ?? "100% "}
        options={{
          loop: true,
          autoplay: true,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
      />
      <video
        disablePictureInPicture={true}
        disableRemotePlayback={true}
        poster={""}
        className={styles.video}
        width="320"
        height="240"
        controls={false}
        autoPlay
        preload="metadata"
        loop
      >
        <source src="/images/vid_0.mp4#t=0.1" type="video/mp4" />
      </video>
    </div>
  );
};

export default WhatsPoppin;
