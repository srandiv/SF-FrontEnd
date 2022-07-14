<script setup>
import ServiceTime from "./ServiceTime.vue";
</script>

<template>
  <div class="lg:max-w-7xl lg:m-auto lg:justify-center">
    <div class="text-center m-5 lg:flex lg:flex-row-reverse lg:justify-center">
      <div class="lg:flex lg:flex-col lg:w-1/2 lg:text-left lg:justify-center">
        <p class="text-[25px] text-title_dark lg:text-3xl font-bold title py-8">
          Welcome to our family
        </p>
        <p class="text-text_gray">
          Welcome to the Sanctuary Fellowship, Sri Lanka. We are a full gospel
          ministry that believes and teaches the full counsel of God's Word. We
          are focused in assisting you on practical living through biblical
          principles.
        </p>
      </div>
      <!-- Image -->
      <div class="py-8 md:px-8 flex items-center lg:w-auto lg:h-600">
        <img
          class="shadow-xl rounded-3xl m-auto lg:w-[385px] lg:h-[506px]"
          src="@/static/welcome.jpg"
          alt=""
        />
      </div>
      <!-- Image end -->
    </div>
    <ServiceTime />
  </div>
</template>
<script>
export default {
  name: "Welcome",
};
</script>
