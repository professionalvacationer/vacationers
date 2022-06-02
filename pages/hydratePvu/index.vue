<template>
  <v-img :key="img.id" :src="`${img.name}`" />
</template>

<script>
export default {
  data: () => ({
    img: { id: 1, name: '/v.png' },
  }),
}
</script>

<style></style>
