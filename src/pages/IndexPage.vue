<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
    <q-input v-on:keyup.enter="keyUpEnter" label="Digite"/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  methods: {
    keyUpEnter(){
      console.log('keyUpEnter')
      this.$bus.emit('enter-event', 'arg1 value', 'arg2 value', 'arg3 value')
    }
  }
})
</script>
