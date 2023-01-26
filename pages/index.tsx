import { NextPage } from "next";
import Head from "next/head";
import ClubsOverview from "../features/home/ClubsOverview";
import News from "../features/home/News";
import BaseLayout from "../layouts/BaseLayout";
import SacOverview from "../features/home/SacOverview";
import ContactUs from "../features/home/ContactUs";
import Calendar from "../components/EventCalendar/Calendar";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Stack, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

interface ToastProps {
  title: string;
  msg: string;
  uri?: StaticImageData | null;
}

const ToastInfo = ({ title, msg, uri }: ToastProps) => {
  return (
    <>
      <Stack
        direction={"row"}
        borderRadius={"8px"}
        gap={"15px"}
        alignItems={"center"}
      >
        {uri && (
          <Image
            src={uri}
            width={"80px"}
            height={"80px"}
            alt=""
            priority
            objectFit="cover"
            style={{
              borderRadius: "4px",
            }}
          />
        )}

        <Stack direction={"column"} columnGap={"6px"}>
          <Typography
            fontFamily={"Rubik"}
            fontStyle={"normal"}
            fontWeight={500}
            fontSize={"1rem"}
            lineHeight={"19px"}
            letterSpacing={"0.03571em"}
            textTransform={"uppercase"}
            color={"#000"}
          >
            {title}
          </Typography>
          <Typography
            fontFamily={"Rubik"}
            fontStyle={"normal"}
            fontWeight={400}
            fontSize={"12px"}
            lineHeight={"14px"}
            color={"#000"}
            maxWidth={300}
          >
            {msg}
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

const Home: NextPage = () => {
  const notify = () => {
    message.map((item, index) => {
      return toast(
        <ToastInfo title={item.title} msg={item.msg} uri={item.uri} />,
        {
          toastId: item.id,
        }
      );
    });
  };

  return (
    <>
      <Head>
        <title>SAC | IIIT Naya Raipur</title>
        <meta
          name="description"
          content="Student Activity Center IIIT Naya Raipur | SAC | SAC IIIT Naya Raipur"
        />
        <meta name="viewport" content="width=1200, minimum-scale=0.25" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BaseLayout>
        <SacOverview />
        <ClubsOverview />
        <Calendar />
        <News />
        <ContactUs />
      </BaseLayout>
      <ToastContainer
        position="bottom-right"
        autoClose={8000}
        hideProgressBar={false}
        rtl={false}
        style={{
          width: "fit-content",
          margin: "0px",
          padding: "0px",
          height: "fit-content",
        }}
      />
      {notify()}
    </>
  );
};

export default Home;

const message = [
  {
    id: 1,
    uri: null,
    title: "Inauguration of the SAC Office!",
    msg: "The SAC office was inaugurated on the auspicious occasion of Saraswati Puja on 26th January 2023 by hon'ble director Dr. P.K. Sinha.",
  },
  {
    id: 2,
    uri: null,
    title: "SAC Website launched!",
    msg: "SAC is a student body established in the year 2018 that aims to support, develop and promote student activities at IIIT Naya Raipur",
  },
];
