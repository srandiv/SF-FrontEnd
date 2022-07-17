<script setup>
import Footer from "../components/Footer";
</script>

<template>
  <div>
    <!-- Navbar -->
    <div class="my-0 bg-[url('@/static/Background.jpg')] bg-cover py-[20px]">
      <div class="max-w-7xl m-auto">
        <div class="flex justify-center items-center md:justify-start">
          <div class="w-[60px]">
            <!-- Nuxt link -->
            <nuxt-link class="rounded-lg" to="/">
              <button
                class="text-white bg-yellow p-[10px] pr-[15px] rounded-lg flex items-center justify-center"
              >
                <!-- Home icon -->
                <svg
                  class="w-[20px] h-[20px] fill-white mr-[5px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"
                  />
                </svg>
                Home
              </button>
            </nuxt-link>
          </div>
        </div>
        <p class="text-white text-center text-[30px] font-bold py-[30px]">
          Upcoming Events
        </p>
      </div>
    </div>
    <!-- Navbar end -->
    <!-- Content -->
    <div class="max-w-7xl flex flex-col justify-center items-center m-auto">
      <div class="py-[40px]">
        <div
          class="lg:center grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          <!-- Events -->
          <div
            class="bg-white max-w-[385px] max-h-[509px] rounded-[30px] drop-shadow-xl mb-[40px] m-[10px]"
            v-for="(event, index) in events"
            :key="index"
          >
            <!-- Event image -->
            <div class="h-[301px]">
              <img
                class="w-[385px] h-[301px] rounded-t-[30px] bg-cover"
                :src="event.src"
                alt=""
              />
            </div>
            <div class="pt-[30px] px-[30px] pb-[30px]">
              <!-- Event title -->
              <p class="text-[30px] font-bold title">{{ event.title }}</p>
              <!-- Event date -->
              <p class="text-[15px text-[#565656] py-[20px]">
                {{ event.date }}
              </p>
              <!-- Event details  -->
              <p
                class="flex text-[#E3A93B] font-semibold cursor-pointer hover:text-[18px] ease-out duration-300"
              >
                EVENT DETAILS
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="w-[25px] h-[25px] ml-[10px] fill-[#E3A93B]"
                >
                  <path
                    d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <Footer />
    <!-- Footer end -->
  </div>
</template>
<script>
export default {
  name: "EventsPage",
  data() {
    return {
      events: [
        {
          src: require("@/static/events/next.png"),
          title: "Next Steps",
          date: "June 11th",
        },
        {
          src: require("@/static/events/revival.png"),
          title: "Revival Nights",
          date: "July 06th",
        },
        {
          src: require("@/static/events/summer.jpg"),
          title: "Next Steps",
          date: "June 11th",
        },
        {
          src: require("@/static/events/summer.jpg"),
          title: "Next Steps",
          date: "June 11th",
        },
      ],
    };
  },
};
</script>
<style scoped>
.shadow {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
