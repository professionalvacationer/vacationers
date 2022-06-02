<template>
  <div>
    <v-btn
      v-for="(tag, index) in tags"
      :key="index"
      :style="{ color: randomColor(tag) }"
      text
      small
    >
      {{ tag }}
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
    },
  },
  data: () => ({
    colors: [
      'red',
      'blue',
      'green',
      'indigo',
      'purple',
      'teal',
      'orange',
      'deep-orange',
      'cyan',
      'lime',
    ],
    currentColor: {},
  }),

  methods: {
    randomColor(id) {
      const c = this.colors[Math.floor(Math.random() * this.colors.length)]
      return this.currentColor[id] || (this.currentColor[id] = `${c}`)
    },
  },
}
</script>
