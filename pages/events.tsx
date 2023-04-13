import Head from "next/head";
import EventsLayout from "../layouts/EventsLayout";
import Index from "../features/events/Index";
import { NextPage } from "next";

const Events: NextPage = () => {
  return (
    <>
      <Head>
        <title>SAC | Events</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <EventsLayout>
        <Index />
      </EventsLayout>
    </>
  );
};

export default Events;
