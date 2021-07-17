import React from "react";
import { Parallax } from "react-spring/renderprops-addons";
import Layout from "../cara/components/layout";
import Hero from "../cara/components/hero/hero";
import Projects from "../cara/components/projects";
import About from "../cara/components/about";
import Contact from "../cara/components/contact";
import { NextSeo } from "next-seo";
import Lottie from "react-lottie";
import FrontEnd from "../cara/components/frontend";

const Cara = () => (
  <Layout>
    <NextSeo
      title="Robbie Cook - Developer"
      description="Personal website of Robbie Cook, a typescript &amp; React web developer in New Zealand"
    />
    <Parallax pages={5}>
      <Hero offset={0} />
      <Projects offset={1} />
      <FrontEnd offset={2.5} />;
      {/* <About offset={3} /> */}
      <Contact offset={4} />
    </Parallax>
  </Layout>
);

export default Cara;
