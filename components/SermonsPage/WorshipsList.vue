<template>
  <div id="sermon" class="bg-white">
    <div class="max-w-7xl flex flex-col justify-center items-center m-auto">
      <div class="pb-[40px] grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mx-[10px]">
        <!-- Sermon card -->
        <div class="rounded-[30px] card mb-[20px] w-[385px]" v-for="(worship, index) in worships" :key="index">
          <div
            class="bg-[url('@/static/worship/worship.png')] bg-cover w-[385px] h-[168px] flex justify-center items-center rounded-t-[30px]">
            <p class="text-white text-[25px] font-bold text-center">
              {{ worship.title }}
            </p>
          </div>
          <div class="p-[30px]">
            <div class="flex flex-row items-center">
              <img :src="worship.src" alt=""
                class="w-[54px] h-[54px] rounded-full border-solid border-2 border-[#A9A9A9]" />
              <div class="ml-[10px]">
                <p class="text-[#565656] text-[20px] font-semibold">
                  {{ worship.preacher }}
                </p>
                <p class="text-[#939191] text-[13px]">{{ worship.date }}</p>
              </div>
            </div>
            <!-- play button -->
            <div class="flex flex-row justify-between py-[20px]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                class="w-[40px] h-[40px] fill-[#565656] svg cursor-pointer">
                <path
                  d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
              </svg>
              <!-- download button -->
              <svg class="w-[40px] h-[40px] fill-[#565656] svg cursor-pointer" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512">
                <path
                  d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z" />
              </svg>
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
      <!-- Load more button end-->
    </div>
  </div>
</template>
<script>
export default {
  name: "Events",

  data() {
    return {
      worships: [
        {
          title: "Sunday Sinhala Worship",
          src: require("@/static/sermons/face1.jpg"),
          preacher: "Pas.Prasanga",
          date: "08 MAR 2022",
        },
        {
          title: "Sunday English Worship",
          src: require("@/static/sermons/face2.jpg"),
          preacher: "Pas.Ranil",
          date: "08 MAR 2022",
        },
        {
          title: "Sunday Sinhala Worship",
          src: require("@/static/sermons/face5.jpg"),
          preacher: "Pas.Ranil",
          date: "08 MAR 2022",
        },
        {
          title: "Sunday Combine Worship",
          src: require("@/static/sermons/face4.jpg"),
          preacher: "Pas.Samantha",
          date: "08 MAR 2022",
        },
        {
          title: "Sunday Sinhala Worship",
          src: require("@/static/sermons/face5.jpg"),
          preacher: "Pas.Dilantha",
          date: "08 MAR 2022",
        },
        {
          title: "Sunday English Worship",
          src: require("@/static/sermons/face1.jpg"),
          preacher: "Pas.Prasanga",
          date: "08 MAR 2022",
        },
        {
          title: "Sunday Sinhala Worship",
          src: require("@/static/sermons/face5.jpg"),
          preacher: "Pas.Dilantha",
          date: "08 MAR 2022",
        },
        {
          title: "Sunday Combine Worship",
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
