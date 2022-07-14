<script setup>
import "animate.css";
import Intro from "../components/Intro";
import OurMission from "../components/OurMission";
import OurVission from "../components/OurVission";
import Live from "../components/Live";
import Welcome from "../components/Welcome";
import Community from "../components/Community";
import UpcomingEvents from "../components/UpcomingEvents";
import LatestSermons from "../components/LatestSermons";
import LateastPost from "../components/LateastPost";
import ContactUs from "../components/ContactUs";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
</script>
<template>
  <div>
    <Intro />
    <Live />
    <!-- <Welcome /> -->
    <OurVission />
    <OurMission />
    <Community />
    <UpcomingEvents />
    <LatestSermons />
    <LateastPost />
    <ContactUs />
    <NewsLetter />
    <Footer />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
