<script setup>
import NavBar from "../NavBar";
import IntroContent from "./IntroContent";
</script>
<template>
  <div
    class="my-0 bg-[url('@/static/Background.jpg')] bg-cover h-3/4 lg:h-screen"
  >
    <NavBar />
    <div class="flex flex-col items-center m-auto lg:h-screen">
      <IntroContent />
    </div>
  </div>
</template>
<script>
export default {
  name: "Intro",
};
</script>
