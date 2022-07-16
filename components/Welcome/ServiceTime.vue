<template>
  <!-- Service container -->
  <div class="mx=2.5 pb-10">
    <p
      class="title text-title_dark text-[25px] lg:text-[25px] font-bold text-center py-8"
    >
      Service Time
    </p>
    <div class="lg:flex lg:justify-center">
      <!-- Service card -->
      <div
        class="bg-gray-100 p-6 rounded-2xl shadow mx-5 flex flex-col text-center my-2.5 lg:flex lg:text-start lg:w-[563px] lg:h-[170px]"
      >
        <p class="my-2.5 text-black text-xl font-bold">Sunday Service</p>
        <div class="flex flex-col">
          <p
            class="my-2.5 flex text-xl font-medium text-text_gray fill-text_gray"
          >
            <svg
              class="w-[25px] h-[25px] mr-2.5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"
              />
            </svg>
            7.30 a.m | 9.30 a.m - English Service
          </p>
          <p
            class="my-2.5 flex text-xl font-medium text-text_gray fill-text_gray"
          >
            <svg
              class="w-[25px] h-[25px] mr-2.5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"
              />
            </svg>
            9.30 a.m | 11.30 a.m - Sinhala Service
          </p>
        </div>
      </div>
      <!-- Service card end -->
      <!-- 2nd service card -->
      <div
        class="bg-gray-100 p-6 rounded-2xl shadow mx-5 flex flex-col text-center lg:flex lg:text-start lg:w-[563px] lg:h-[170px] mt-[20px] lg:mt-[10px]"
      >
        <p class="my-2.5 text-black text-xl font-bold">Wensday Service</p>
        <div class="flex flex-col">
          <p
            class="my-2.5 flex text-xl font-medium text-text_gray fill-text_gray"
          >
            <svg
              class="w-[25px] h-[25px] mr-2.5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"
              />
            </svg>
            6.30 p.m | 8.30 p.m - Healing Service
          </p>
        </div>
      </div>
      <!-- Service card end -->
    </div>
  </div>
  <!-- Servie container end -->
</template>
<script>
export default {
  name: "ServiceTime",
};
</script>
<style scoped>
.shadow {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
