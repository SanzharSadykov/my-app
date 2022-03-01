<template>
  <div class="home">
    <test v-bind:roma="transferData"/>
  </div>
</template>

<script>
import test from '@/components/test.vue'

export default {
  name: 'Home',
  components: {
    test
  },
    data() {
        return{
            transferData: "You go to the batman"
        }
    }
}
</script>
