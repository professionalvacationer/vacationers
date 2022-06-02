<template>
  <div>
    <video autoplay loop max-height="800px" width="100%">
      <source :src="require('~/assets/home/homeBanner.mp4')" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div>
      <v-btn
        id="btn-lg"
        class="hidden-md-and-down"
        large
        color="accent"
        to="/register"
      >
        Go Pro!
      </v-btn>
    </div>
  </div>
</template>

<style scoped>
#btn-lg {
  z-index: 10;
  position: relative;
  top: -120px;
  left: 80px;
}
</style>
