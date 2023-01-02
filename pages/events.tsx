import Head from "next/head";
import EventsLayout from "../layouts/EventsLayout";
import Index from "../features/events/Index";

const Events = () => {
  return (
    <>
      <Head>
        <title>SAC | Events</title>
        <meta name="viewport" content="width=1200, minimum-scale=0.25" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <EventsLayout>
        <Index />
      </EventsLayout>
    </>
  );
};

export default Events;
