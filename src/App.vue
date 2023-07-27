<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import { Notify } from 'quasar'

export default defineComponent({
  name: 'App',
  methods: {
    onVolumeUp(){
      console.log('up')
      this.simulateEnter()
    },
    onVolumeDown(){
      console.log('down')
      this.simulateEnter()
    },
    onKeyPress(event){
      console.log('keypress.app', event);
    },
    onCordovacallbackerror(event){
      console.log('onCordovacallbackerror',event)
    },
    onDeviceReady(){
      console.log('ready')
      document.addEventListener('volumeupbutton',this.onVolumeUp, false)
      document.addEventListener('volumedownbutton',this.onVolumeDown, false)
      window.addEventListener("keypress", this.onKeyPress);
      window.addEventListener("cordovacallbackerror", this.onCordovacallbackerror);
    },
    simulateEnter(){
      //eventType: 0 = KeyDown, 1 = KeyUp
      let eventType = 1;
      let key = 66;
      let meta = 0;
      // plugin: https://github.com/keilyn3d/cordova-plugin-sendkeystrokes
      window.sendKeystroke(eventType, key, meta, this.callbackEnter)
      console.log('simulateEnter')
    },
    callbackEnter(){
      console.log('callbackEnter fired')
      this.$bus.emit('enter-event', 'arg1 value', 'arg2 value', 'arg3 value')
    }
  },
  mounted(){
    console.log('mounted')
    document.addEventListener('deviceready', this.onDeviceReady, false)

    this.$bus.on('enter-event', (arg1, arg2, arg3) => {
      Notify.create('enter-event')
    })

  }
})
</script>
