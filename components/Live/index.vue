<template>
  <div
    class="max-w-screen bg-gray-100 m-auto flex flex-col justify-center items-center pb-14"
  >
    <h2
      class="text-[25px] text-title_dark lg:text-3xl font-bold title pt-12 pb-12"
    >
      Live Stream
    </h2>

    <!-- Youtube embeded Link -->
    <!-- This Element has a custom css -->
    <div class="m-auto">
      <div class="flex justify-center">
        <iframe
          class=""
          src="https://www.youtube.com/embed/Hh4QEcksgNQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <!-- Youtube embeded Link end -->
  </div>
</template>
<script>
export default {
  name: "Live",
};
</script>

<style scoped>
iframe {
  width: 300px;
  height: 150px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

@media only screen and (min-width: 600px) {
  iframe {
    width: 600px;
    height: 300px;
  }
}

@media only screen and (min-width: 1024px) {
  iframe {
    width: 900px;
    height: 450px;
  }
}
</style>
