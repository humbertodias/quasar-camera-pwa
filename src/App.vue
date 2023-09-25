<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import { Notify } from 'quasar'

export default defineComponent({
  name: 'App',
  data() {
    return {
      ready: false
    };
  },
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
      if(this.ready) return;

      console.log('ready')
      Notify.create('App.onDeviceReady')

      document.addEventListener('volumeupbutton',this.onVolumeUp, false)
      document.addEventListener('volumedownbutton',this.onVolumeDown, false)
      window.addEventListener("keypress", this.onKeyPress);
      window.addEventListener("cordovacallbackerror", this.onCordovacallbackerror);
      this.ready = true;
    },
    simulateEnter(){
      this.simulateEnterNative()
      console.log('simulateEnter')
    },
    simulateEnterNative(){
      //eventType: 0 = KeyDown, 1 = KeyUp
      let eventType = 1;
      let key = 66;
      let meta = 0;
      // plugin: https://github.com/keilyn3d/cordova-plugin-sendkeystrokes
      window.sendKeystroke(eventType, key, meta, this.callbackEnter)
      console.log('simulateEnterNative')
    },
    callbackEnter(){
      console.log('callbackEnter fired')
      this.$bus.emit('enter-event', 'arg1 value', 'arg2 value', 'arg3 value')
    }
  },
  mounted(){
    console.log('mounted')
    // Only device
    document.addEventListener('deviceready', this.onDeviceReady, false)
    // others
    this.onDeviceReady();

    this.$bus.on('enter-event', (arg1, arg2, arg3) => {
      Notify.create('bus.enter-event')
    })
    Notify.create('App.mounted.')
  }
})
</script>
