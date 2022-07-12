<template>
  <div class="bg-[#344DA0]">
    <div class="max-w-7xl m-auto py-[30px]">
      <div
        class="flex flex-col lg:p-[20px] lg:flex-row lg:justify-between lg:items-center p-[10px]"
      >
        <!-- Newsletter text -->
        <div
          class="flex flex-col items-center mb-[20px] lg:mb-0 lg:flex-col lg:items-start"
        >
          <p class="text-white text-[30px] font-bold text-center">
            Sign up for out newsletter!
          </p>
          <p class="text-[#C4C4C4] text-[20px]">Stay touch with us!</p>
        </div>
        <!-- input -->
        <div>
          <div
            class="flex items-center justify-between bg-white p-[5px] rounded-full w-auto"
          >
            <input
              class="py-[10px] px-[30px] border-[0] rounded-full w-screen lg:w-[auto]"
              type="text"
              placeholder="Enter your email"
            />
            <button
              class="bg-yellow hover:bg-yellow_hover ease-in duration-300 p-[20px] rounded-full"
            >
              <p>
                <svg
                  class="w-[20px] h-[20px] fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"
                  />
                </svg>
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NewsLetter",
};
</script>
<style scoped>
input:focus,
textarea:focus,
select:focus {
  outline: none;
}
</style>
