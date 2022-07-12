<template>
  <div class="max-w-7xl m-auto">
    <div class="flex flex-col">
      <!-- Nav Bar -->
      <nav
        class="px-2.5 py-[40px] text-white flex justify-between width items-center"
      >
        <!-- Logo -->
        <img class="h-14 w-14" src="@/static/logo.png" alt="" />

        <div
          class="mx-2.5 mt-12 text-md leading-10 flex-col lg:flex lg:mt-4 hidden lg:visible"
        >
          <ul class="text-center lg:flex lg:mt-0">
            <li class="mr-6">
              <a href="#">Home</a>
            </li>
            <li class="mr-6">
              <a href="#ourMission">Our Mission</a>
            </li>
            <li class="mr-6">
              <a href="#community">Community</a>
            </li>
            <li class="mr-6">
              <a href="#events">Events</a>
            </li>
            <li class="mr-6">
              <a href="#sermon">Sermons</a>
            </li>
            <li>
              <a href="#post">Blog</a>
            </li>
          </ul>
        </div>

        <!-- ContactUs Button & Hangburger Menu Icon -->
        <div class="invisible lg:visible flex items-center">
          <!-- this button container has a custom css for contact us button -->
          <button
            class="text-[#22301F] bg-yellow hover:bg-yellow_hover duration-300 py-2 px-4 rounded-3xl font-bold mt-4"
          >
            <a href="#contactUs">Contact Us</a>
          </button>

          <!-- Toggle button -->
          <button class="z-20" @click="toggle">
            <!-- Close icon -->
            <svg
              v-if="isOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 margin text-black visible lg:hidden cursor-pointer animate__animated animate__rotateIn"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
            <!-- End close icon -->

            <!-- Menu icon -->
            <svg
              v-else
              class="w-8 h-8 margin text-white visible lg:hidden cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
            <!-- End menu icon -->
          </button>
          <!-- End toggle button -->
        </div>
      </nav>

      <!-- Mobile Navigation Menu-->
      <aside
        class="absolute w-screen h-screen z-10 text-md leading-10 flex flex-col justify-center lg:mt-4 lg:hidden bg-white rounded-md animate__animated animate__fadeInRight"
        v-if="isOpen"
      >
        <ul class="text-center lg:flex lg:mt-0 my-2 mx-1">
          <li class="mr-2.5">
            <a href="#">Home</a>
          </li>
          <li class="mr-2.5">
            <a href="#ourMission">Our Mission</a>
          </li>
          <li class="mr-2.5">
            <a href="#community">Community</a>
          </li>
          <li class="mr-2.5">
            <a href="#events">Events</a>
          </li>
          <li class="mr-2.5">
            <a href="#sermon">Sermons</a>
          </li>
          <li class="mr-2.5">
            <a href="#post">Blog</a>
          </li>
        </ul>

        <button
          class="text-white bg-yellow hover:bg-yellow_hover duration-300 py-2 px-4 rounded-3xl font-bold mt-4 lg:hidden mx-8 mb-2"
        >
          <a href="#contactUs">Contact Us</a>
        </button>
      </aside>
      <!-- End of mobile navigation menu -->
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
