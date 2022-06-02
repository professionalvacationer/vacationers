<template>
  <v-container>
    <RegisterTop />
    <RegCards />
    <!-- <UserReg /> -->
  </v-container>
</template>

<script>
import RegisterTop from '~/components/user/RegisterTop'
import RegCards from '~/components/user/RegCards'
// import UserReg from '~/components/create/UserReg'

export default {
  components: {
    RegisterTop,
    RegCards,
  },
}
</script>
