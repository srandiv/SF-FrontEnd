<script setup>
import Footer from "../components/Footer";
</script>
<template>
  <div>
    <!-- Navbar -->
    <div class="my-0 bg-[url('@/static/Background.jpg')] bg-cover py-[20px]">
      <div class="max-w-7xl m-auto">
        <div class="flex justify-center items-center md:justify-start">
          <div class="w-[60px] mr-[20px]">
            <!-- Nuxt link -->
            <nuxt-link class="rounded-lg" to="/">
              <button class="text-white bg-yellow p-[10px] pr-[15px] rounded-lg flex items-center justify-center">
                <!-- Home icon -->
                <svg class="w-[20px] h-[20px] fill-white mr-[5px]" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512">
                  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z" />
                </svg>
                Home
              </button>
            </nuxt-link>
          </div>
        </div>
        <p class="text-white text-center text-[30px] font-bold py-[30px]">
          Blogs
        </p>
      </div>
    </div>
    <!-- Navbar end -->
    <!-- Content -->
    <div class="max-w-7xl m-auto py-[60px] ">
      <!-- Main Post -->
      <div class="flex justify-center items-center pb-[20px]">
        <div
          class="max-w-[385px] h-[600px] bg-white rounded-[30px] card mb-[20px] md:max-w-[786px] lg:max-w-[1187px] md:flex md:justify-between"
          v-for="(card, index) in mainPost" :key="index">
          <div class="md:w-[60%] lg:w-[60%] ">
            <img
              class="max-w-[385px] h-[297px] md:h-[600px] md:max-w-[100%] rounded-t-[30px] md:rounded-l-[30px] md:rounded-tr-[0]"
              :src="card.thumbnail" alt="" />
          </div>
          <div class="p-[25px] md:w-[40%] lg:w-[40%] md:flex md:flex-col md:justify-between md:items-start">
            <div>
              <p class="text-[#344DA0] text-[15px] font-normal">
                {{ card.tag }}
              </p>
              <p class="text-[#474747] text-[25px] font-semibold">
                {{ card.title }}
              </p>
              <p class="text-[#9B9B9B] text-[15px] py-[20px]">
                {{ card.discription }}
              </p>
            </div>
            <div class="flex flex-row items-center">
              <img class="w-[38px] h-[38px] rounded-full border-solid border-2 border-[#A9A9A9]" :src="card.dp"
                alt="" />
              <div class="ml-[10px]">
                <p class="text-[#474747] text-[15px] font-semibold">
                  {{ card.authur }}
                </p>
                <p class="text-[#9B9B9B] text-[10px] font-semibold">
                  {{ card.date }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Main post end -->
      <div class="flex justify-center items-center">

        <div class="lg:center grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
          <!-- post -->
          <div class="max-w-[385px] h-[600px] bg-white rounded-[30px] card mb-[20px] " v-for="(post, index) in posts"
            :key="index">
            <div>
              <img class="max-w-[385px] h-[297px] rounded-t-[30px]" :src="post.thumbnail" alt="" />
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
                <img class="w-[38px] h-[38px] rounded-full border-solid border-2 border-[#A9A9A9]" :src="post.dp"
                  alt="" />
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
        </div>
      </div>
    </div>
    <!-- Load more button -->
    <div class="flex flex-row justify-center items-center pb-[40px]">
      <button
        class="btn text-[#565656] text-[18px] font-medium bg-white py-[10px] px-[25px] rounded-full drop-shadow-[0px_5px_15px_rgba(0, 0, 0, 0.35)]">
        <a href="#">
          <div class="flex flex-row items-center justify-center">
            Load More
            <svg class="icon w-[20px] h-[20px] fill-[#565656] ml-[10px]" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512">
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M449.9 39.96l-48.5 48.53C362.5 53.19 311.4 32 256 32C161.5 32 78.59 92.34 49.58 182.2c-5.438 16.81 3.797 34.88 20.61 40.28c16.97 5.5 34.86-3.812 40.3-20.59C130.9 138.5 189.4 96 256 96c37.96 0 73 14.18 100.2 37.8L311.1 178C295.1 194.8 306.8 223.4 330.4 224h146.9C487.7 223.7 496 215.3 496 204.9V59.04C496 34.99 466.9 22.95 449.9 39.96zM441.8 289.6c-16.94-5.438-34.88 3.812-40.3 20.59C381.1 373.5 322.6 416 256 416c-37.96 0-73-14.18-100.2-37.8L200 334C216.9 317.2 205.2 288.6 181.6 288H34.66C24.32 288.3 16 296.7 16 307.1v145.9c0 24.04 29.07 36.08 46.07 19.07l48.5-48.53C149.5 458.8 200.6 480 255.1 480c94.45 0 177.4-60.34 206.4-150.2C467.9 313 458.6 294.1 441.8 289.6z" />
            </svg>
          </div>
        </a>
      </button>
    </div>
    <!-- Get all Sermons button end-->
    <!-- Footer -->
    <Footer />
    <!-- Footer end -->
  </div>
</template>
<script>
export default {
  name: "BolgPage",
  data() {
    return {
      mainPost: [
        {
          thumbnail: require("@/static/post/pray.jpg"),
          tag: "Article",
          title: "Who is the jesus?",
          discription: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
          dp: require("@/static/post/face4.jpg"),
          authur: "Hannah James",
          date: "Mar 23.2022",
        },
      ],
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
</script>
<style scoped>
.card {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;
}

.btn {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;
}
</style>
