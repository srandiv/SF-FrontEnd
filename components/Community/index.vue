<script setup>
import VueSlickCarousel from "vue-slick-carousel";
// optional style for arrows & dots
// import "assets/css/community.css";
</script>

<template>
  <div
    id="community"
    class="bg-[url('@/static/community/community-background.jpg')] bg-cover"
  >
    <div class="max-w-7xl m-auto">
      <!-- title -->
      <p
        class="title text-[25px] lg:text-[30px] font-bold text-white text-center py-[60px]"
      >
        Community
      </p>
      <div class="pb-[40px]">
        <VueSlickCarousel
          :arrows="false"
          :dots="true"
          v-bind="settings"
          class="carasoul"
        >
          <!-- 1st image -->
          <div class="center container hover:text-[35px]">
            <img
              src="@/static/community/youth.jpg"
              alt=""
              class="center w-[270px] h-[499px] lg:w-[327px] lg:h-[691px] cursor-pointer rounded-[23px]"
            />
            <div class="centered">
              <p class="text-white font-bold text-[30px] cursor-pointer">
                Youth
              </p>
            </div>
          </div>
          <!-- 2nd image -->
          <div class="center container">
            <img
              src="@/static/community/men.jpg"
              alt=""
              class="center w-[270px] h-[499px] lg:w-[327px] lg:h-[691px] cursor-pointer rounded-[23px]"
            />
            <div class="centered">
              <p class="text-white font-bold text-[30px] cursor-pointer">
                Men's Club
              </p>
            </div>
          </div>
          <!-- 3rd image -->
          <div class="center container">
            <img
              src="@/static/community/woman.jpg"
              alt=""
              class="center w-[270px] h-[499px] lg:w-[327px] lg:h-[691px] cursor-pointer rounded-[23px]"
            />
            <div class="centered">
              <p class="text-white font-bold text-[30px] cursor-pointer">
                Woman's Club
              </p>
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
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              infinite: true,
              slidesToShow: 3,
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
    };
  },
};
</script>

<style scoped>
/* images center to container */
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: auto;
}

/* hover effect for image */
.center img:hover {
  transition: 0.3s;
}
.center img:hover {
  opacity: 0.8;
}

.center p {
  transition: 0.2s;
}

/* hover effect for text */
.center p:hover {
  font-size: 33px;
}

/* center text */
.container {
  position: relative;
  text-align: center;
  color: white;
  transition: 0.3s;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
