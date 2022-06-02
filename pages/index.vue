<template>
  <div id="app">
    <TopHome />
    <TopCreators />
    <FrontPage />
  </div>
</template>

<script>
import TopHome from '~/components/home/TopHome'
import TopCreators from '~/components/home/TopCreators'
import FrontPage from '~/components/home/FrontPage'
export default {
  components: {
    TopHome,
    TopCreators,
    FrontPage,
  },
}
</script>
