<script setup>
import VueSlickCarousel from "vue-slick-carousel";
// optional style for arrows & dots

import "assets/css/vue-slick-carousel.css";
</script>

<template>
  <div class="bg-[url('@/static/community/event-background.png')] bg-cover">
    <div class="max-w-7xl m-auto">
      <p class="text-[20px] font-bold text-white text-center py-[30px]">
        Community
      </p>
      <div class="pb-[40px] carasoul">
        <VueSlickCarousel
          :arrows="false"
          :dots="true"
          v-bind="settings"
          class="carasoul"
        >
          <div
            class="card bg-[url('@/static/youth.png')] bg-cover h-[277px] w-[599px m-[20px]"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            quam soluta expedita tempora dicta adipisci inventore. Sint maxime
            enim dolorem ducimus possimus, commodi, atque, magni blanditiis
            accusantium eaque magnam unde.
          </div>
          <div class="w-[277] h-[599px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            quam soluta expedita tempora dicta adipisci inventore. Sint maxime
            enim dolorem ducimus possimus, commodi, atque, magni blanditiis
            accusantium eaque magnam unde.
          </div>
          <div class="card">
            <div class="bg-red-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              quam soluta expedita tempora dicta adipisci inventore. Sint maxime
              enim dolorem ducimus possimus, commodi, atque, magni blanditiis
              accusantium eaque magnam unde.
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
};
</script>

<style scoped></style>
