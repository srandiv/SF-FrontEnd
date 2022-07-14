<script setup>
import VueSlickCarousel from "vue-slick-carousel";
// optional style for arrows & dots
// import "assets/css/events.css";
</script>

<template>
  <div id="events" class="bg-[#EEEEEE]">
    <div class="max-w-7xl m-auto">
      <!-- Main title -->
      <p
        class="text-[25px] text-title_dark lg:text-[30px] font-bold title text-center py-[60px]"
      >
        Upcoming Events
      </p>
      <div class="pb-[40px] lg:center">
        <VueSlickCarousel
          :arrows="false"
          :dots="true"
          v-bind="settings"
          class="carasoul"
        >
          <!-- Events -->
          <div
            class="bg-white max-w-[385px] max-h-[509px] rounded-[30px] drop-shadow-xl mb-[40px] m-[10px]"
            v-for="(event, index) in events"
            :key="index"
          >
            <!-- Event image -->
            <div class="h-[50%]">
              <img
                class="w-[385px] h-[301px] rounded-t-[30px] bg-cover"
                :src="event.src"
                alt=""
              />
            </div>
            <div class="p-[30px]">
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
        </VueSlickCarousel>
      </div>
      <!-- Event calender button -->
      <div class="flex flex-row justify-center items-center pb-[40px]">
        <button
          class="btn text-[#565656] text-[18px] font-medium bg-white py-[10px] px-[25px] rounded-full drop-shadow-[0px_5px_15px_rgba(0, 0, 0, 0.35)] hover:text-[20px] ease-out duration-300"
        >
          <a href="#" class="flex flex-row items-center justify-center"
            >Events Calender
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              class="w-[20px] h-[20px] fill-[#565656]"
            >
              <path
                d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"
              /></svg
          ></a>
        </button>
      </div>
      <!-- Event calender button end-->
    </div>
  </div>
</template>
<script>
export default {
  name: "Events",
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              infinite: true,
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 860,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
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
      ],
    };
  },
};
</script>
<style scoped>
.btn {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;
}
</style>
