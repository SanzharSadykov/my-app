<template>
  <div class="home">
    <!-- <test v-bind:roma="transferData"/> -->
    <!-- <mainB/> -->
    <!-- <atCinema/> -->
    <!-- <controlWork/> -->
    <!-- <forma/> -->
    <tictac/>
  </div>
</template>

<script>
// import test from '@/components/test.vue'
// import mainB from '@/components/Home/mainBlock.vue'
// import atCinema from '@/components/Home/atCinema.vue'
// import controlWork from '@/components/ControlTest.vue'
// import forma from '@/components/Form.vue'
import tictac from '@/components/Home/TicTacToe.vue'

export default {
  name: 'Home',
  components: {
    // test,
    // mainB,
    // atCinema,
    // controlWork,
    // forma,
    tictac
  },
    // data() {
    //     return{
    //         transferData: "You go to the batman"
    //     }
    // }
}
</script>
