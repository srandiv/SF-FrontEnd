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
        Latest Posts
      </p>
      <div class="pb-[40px]">
        <VueSlickCarousel
          :arrows="false"
          :dots="true"
          v-bind="settings"
          class="carasoul"
        >
          <div
            class="max-w-[385px] h-[600px] bg-white rounded-[30px] card mb-[20px]"
            v-for="(post, index) in posts"
            :key="index"
          >
            <div>
              <img
                class="max-w-[385px] h-[297px] rounded-t-[30px]"
                :src="post.thumbnail"
                alt=""
              />
            </div>
            <div class="p-[25px]">
              <p class="text-[#344DA0] text-[15px] font-normal">
                {{ post.tag }}
              </p>
              <p class="text-[#474747] text-[25px] font-semibold">
                {{ post.title }}
              </p>
              <p class="text-[#9B9B9B] text-[15px] py-[20px]">
                {{ post.discription }}
              </p>
              <div class="flex flex-row items-center">
                <img
                  class="w-[38px] h-[38px] rounded-full border-solid border-2 border-[#A9A9A9]"
                  :src="post.dp"
                  alt=""
                />
                <div class="ml-[10px]">
                  <p class="text-[#474747] text-[15px] font-semibold">
                    {{ post.authur }}
                  </p>
                  <p class="text-[#9B9B9B] text-[10px] font-semibold">
                    {{ post.date }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
      <!-- Read more button -->
      <div class="flex flex-row justify-center items-center pb-[40px]">
        <button
          class="btn text-[#565656] text-[18px] font-medium bg-white py-[10px] px-[25px] rounded-full drop-shadow-[0px_5px_15px_rgba(0, 0, 0, 0.35)] hover:text-[20px] ease-out duration-300"
        >
          <a href="#" class="flex flex-row items-center justify-center"
            >Read More
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
      <!-- Read more button end-->
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
      posts: [
        {
          thumbnail: require("@/static/post/cross.png"),
          tag: "Article",
          title: "Who is the jesus?",
          discription: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
          dp: require("@/static/post/face4.jpg"),
          authur: "Hannah James",
          date: "Mar 23.2022",
        },
        {
          thumbnail: require("@/static/post/bible.png"),
          tag: "Article",
          title: "How to pray powerful prayers.",
          discription: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration. `,
          dp: require("@/static/post/face1.jpg"),
          authur: "Robert Howk",
          date: "Mar 23.2022",
        },
        {
          thumbnail: require("@/static/post/you.jpg"),
          tag: "Article",
          title: "Who are you?",
          discription: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
          dp: require("@/static/post/face6.jpg"),
          authur: "John Snow",
          date: "Mar 23.2022",
        },
        {
          thumbnail: require("@/static/post/bible.png"),
          tag: "Article",
          title: "Who is the jesus?",
          discription: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
          dp: require("@/static/post/face4.jpg"),
          authur: "Hannah James",
          date: "Mar 23.2022",
        },
        {
          thumbnail: require("@/static/post/cross.png"),
          tag: "Article",
          title: "Who is the jesus?",
          discription: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
          dp: require("@/static/post/face6.jpg"),
          authur: "Hannah James",
          date: "Mar 23.2022",
        },
        {
          thumbnail: require("@/static/post/you.jpg"),
          tag: "Article",
          title: "Who is the jesus?",
          discription: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
          dp: require("@/static/post/face1.jpg"),
          authur: "Hannah James",
          date: "Mar 23.2022",
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
