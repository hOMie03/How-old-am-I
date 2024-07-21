import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import FormField from "../components/Form/FormField";
import { Wrapper } from "../styles/GlobalComponents";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>How old am I? by om auti :)</title>
      </Head>

      <Wrapper>
        <FormField />
      </Wrapper>
    </>
  );
};

export default Home;
