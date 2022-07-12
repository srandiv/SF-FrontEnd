<template>
  <div class="text-white text-center pb-40">
    <h1 class="sticky text-4xl md:text-6xl lg:text-7xl font-medium pt-36">
      "Love is petient, <br />
      love is kind"
    </h1>
    <p class="text-xl font-semibold pt-10">1 Corinthians 13:4</p>

    <!-- Container of btns -->
    <div class="pt-10 pb-10 font-medium lg:flex lg:items-center">
      <!-- Watch live btn -->
      <button
        class="text-text_gray_dark bg-yellow hover:bg-yellow_hover duration-300 py-2 pl-4 pr-1.5 rounded-3xl flex m-auto items-center w-44 justify-around text-gray-800 font-bold lg:mr-1"
      >
        <a href="#">Watch Live</a>
        <svg
          class="w-8 h-8 ml-2.5 bg-white py-2 px-2 rounded-3xl fill-text-text_gray_dark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path
            d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"
          />
        </svg>
      </button>
      <!-- End of watch live btn -->
      <!-- All sermons btn -->
      <button
        class="bg-blue hover:bg-blue_hover duration-300 py-2 pl-4 pr-1.5 rounded-3xl flex m-auto items-center mt-2.5 h-12 w-44 justify-around lg:ml-1 lg:mt-0"
      >
        <a href="#">All Sermons</a>

        <svg
          class="w-8 h-8 bg-white py-2 px-2 rounded-3xl ml-2.5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            d="M256 32C112.9 32 4.563 151.1 0 288v104C0 405.3 10.75 416 23.1 416S48 405.3 48 392V288c0-114.7 93.34-207.8 208-207.8C370.7 80.2 464 173.3 464 288v104C464 405.3 474.7 416 488 416S512 405.3 512 392V287.1C507.4 151.1 399.1 32 256 32zM160 288L144 288c-35.34 0-64 28.7-64 64.13v63.75C80 451.3 108.7 480 144 480L160 480c17.66 0 32-14.34 32-32.05v-127.9C192 302.3 177.7 288 160 288zM368 288L352 288c-17.66 0-32 14.32-32 32.04v127.9c0 17.7 14.34 32.05 32 32.05L368 480c35.34 0 64-28.7 64-64.13v-63.75C432 316.7 403.3 288 368 288z"
          />
        </svg>
      </button>
      <!-- End of all sermons btn -->
    </div>
  </div>
</template>
