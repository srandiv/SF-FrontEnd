<template>
  <div>
    <div id="contactUs" class="max-w-7xl m-auto">
      <div
        class="flex flex-col lg:flex-row lg:justify-between lg:items-center py-[100px] p-[20px]"
      >
        <!-- let's talk section -->
        <div
          class="flex flex-col justify-center items-center lg:items-start pb-[80px] lg:pb-[0]"
        >
          <p
            class="text-black text-[25px] text-center lg:text-left lg:text-[40px] font-bold mb-[20px]"
          >
            Let's Talk
          </p>
          <!-- addres -->
          <div class="flex mb-[10px]">
            <svg
              class="w-[30px] h-[30px] fill-[#9B9B9B] mr-[15px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M256 417.1c-16.38 0-32.88-4.1-46.88-15.12L0 250.9v213.1C0 490.5 21.5 512 48 512h416c26.5 0 48-21.5 48-47.1V250.9l-209.1 151.1C288.9 412 272.4 417.1 256 417.1zM493.6 163C484.8 156 476.4 149.5 464 140.1v-44.12c0-26.5-21.5-48-48-48l-77.5 .0016c-3.125-2.25-5.875-4.25-9.125-6.5C312.6 29.13 279.3-.3732 256 .0018C232.8-.3732 199.4 29.13 182.6 41.5c-3.25 2.25-6 4.25-9.125 6.5L96 48c-26.5 0-48 21.5-48 48v44.12C35.63 149.5 27.25 156 18.38 163C6.75 172 0 186 0 200.8v10.62l96 69.37V96h320v184.7l96-69.37V200.8C512 186 505.3 172 493.6 163zM176 255.1h160c8.836 0 16-7.164 16-15.1c0-8.838-7.164-16-16-16h-160c-8.836 0-16 7.162-16 16C160 248.8 167.2 255.1 176 255.1zM176 191.1h160c8.836 0 16-7.164 16-16c0-8.838-7.164-15.1-16-15.1h-160c-8.836 0-16 7.162-16 15.1C160 184.8 167.2 191.1 176 191.1z"
              />
            </svg>
            <p
              class="text-[#9B9B9B] text-[20px] text-center lg:text-left lg:text-[25px] mr-[15px]"
            >
              The Sancturay Fellowship <br />
              No 21, Samagi Mawatha, <br />
              Katunayake, Sri Lanka
            </p>
          </div>
          <!-- phone number -->
          <div class="flex mb-[10px]">
            <svg
              class="w-[30px] h-[30px] fill-[#9B9B9B] mr-[15px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M304 0h-224c-35.35 0-64 28.65-64 64v384c0 35.35 28.65 64 64 64h224c35.35 0 64-28.65 64-64V64C368 28.65 339.3 0 304 0zM192 480c-17.75 0-32-14.25-32-32s14.25-32 32-32s32 14.25 32 32S209.8 480 192 480zM304 64v320h-224V64H304z"
              />
            </svg>
            <p class="text-[#9B9B9B] text-[20px] lg:text-[25px]">
              +94 031 2237534
            </p>
          </div>
          <!-- email -->
          <div class="flex items-center">
            <svg
              class="w-[30px] h-[25px] fill-[#9B9B9B] mr-[15px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"
              />
            </svg>
            <p class="text-[#9B9B9B] text-[18px] lg:text-[25px] text-center">
              sanctuaryfellowship.sl@gmail.com
            </p>
          </div>
        </div>
        <!-- form section -->
        <div class="m-[20px]">
          <div class="bg-white shadow p-[25px] rounded-[30px] lg:w-[607px]">
            <p
              class="text-[#565656] text-[25px] font-semibold text-center lg:text-left"
            >
              Prayer Request
            </p>
            <form
              action="#"
              method="POST"
              @submit.prevent
              class="flex flex-col"
            >
              <!-- name -->
              <label class="my-[10px] font-medium" for="name">Name</label>
              <input
                class="border border-[#afafaf] py-[10px] px-[20px] rounded-[10px]"
                type="text"
                placeholder="John Smith"
              />
              <!-- email -->
              <label class="my-[10px]" for="email font-medium">Email</label>
              <input
                class="border border-[#afafaf] py-[10px] px-[20px] rounded-[10px]"
                type="text"
                placeholder="john@example.com"
              />
              <!-- message -->
              <label class="my-[10px] font-medium" for="message">Message</label>
              <textarea
                class="border border-[#afafaf] py-[10px] px-[20px] rounded-[10px]"
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Leave you message"
              ></textarea>
              <!-- submit btn -->
              <input
                class="cursor-pointer bg-yellow hover:bg-yellow_hover duration-300 p-[10px] rounded-[10px] text-white my-[20px]"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContactUs",
};
</script>

<style scoped>
.shadow {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
