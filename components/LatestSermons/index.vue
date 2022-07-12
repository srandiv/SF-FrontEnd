<script setup>
import VueSlickCarousel from "vue-slick-carousel";
// optional style for arrows & dots
// import "assets/css/events.css";
</script>

<template>
  <div id="events" class="bg-white">
    <div class="max-w-7xl m-auto">
      <!-- Main title -->
      <p
        class="text-[25px] text-title_dark lg:text-[30px] font-bold title text-center py-[60px]"
      >
        Latest Sermons
      </p>
      <div class="pb-[40px]">
        <VueSlickCarousel
          :arrows="false"
          :dots="true"
          v-bind="settings"
          class="carasoul"
        >
          <div
            class="rounded-[30px] card mb-[20px]"
            v-for="(sermon, index) in sermons"
            :key="index"
          >
            <div
              class="bg-[url('@/static/sermons/bible.png')] bg-cover w-[385px] h-[168px] flex justify-center items-center rounded-t-[30px]"
            >
              <p class="text-white text-[30px] font-bold text-center">
                Sunday Sinhala Word
              </p>
            </div>
            <div class="p-[30px]">
              <div class="flex flex-row items-center">
                <img
                  :src="sermon.src"
                  alt=""
                  class="w-[54px] h-[54px] rounded-full border-solid border-2 border-[#A9A9A9]"
                />
                <div class="ml-[10px]">
                  <p class="text-[#565656] text-[20px] font-semibold">
                    {{ sermon.preacher }}
                  </p>
                  <p class="text-[#939191] text-[13px]">{{ sermon.date }}</p>
                </div>
              </div>
              <!-- play button -->
              <div class="flex flex-row justify-between py-[20px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  class="w-[40px] h-[40px] fill-[#565656] svg cursor-pointer"
                >
                  <path
                    d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"
                  />
                </svg>
                <!-- download button -->
                <svg
                  class="w-[40px] h-[40px] fill-[#565656] svg cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
      <!-- Get all Sermons button -->
      <div class="flex flex-row justify-center items-center pb-[40px]">
        <button
          class="btn text-[#565656] text-[18px] font-medium bg-white py-[10px] px-[25px] rounded-full drop-shadow-[0px_5px_15px_rgba(0, 0, 0, 0.35)] hover:text-[20px] ease-out duration-300"
        >
          <a href="#" class="flex flex-row items-center justify-center"
            >Get all Sermons
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
      <!-- Get all Sermons button end-->
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
      sermons: [
        {
          src: require("@/static/sermons/face1.jpg"),
          preacher: "Pas.Prasanga",
          date: "08 MAR 2022",
        },
        {
          src: require("@/static/sermons/face2.jpg"),
          preacher: "Pas.Ranil",
          date: "08 MAR 2022",
        },
        {
          src: require("@/static/sermons/face5.jpg"),
          preacher: "Pas.Ranil",
          date: "08 MAR 2022",
        },
        {
          src: require("@/static/sermons/face4.jpg"),
          preacher: "Pas.Samantha",
          date: "08 MAR 2022",
        },
        {
          src: require("@/static/sermons/face5.jpg"),
          preacher: "Pas.Dilantha",
          date: "08 MAR 2022",
        },
        {
          src: require("@/static/sermons/face1.jpg"),
          preacher: "Pas.Prasanga",
          date: "08 MAR 2022",
        },
      ],
    };
  },
};
</script>
<style scoped>
.card {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;
}
.svg {
  border: 2px solid #565656;
  padding: 10px;
  border-radius: 100%;
}

.btn {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;
}
</style>
