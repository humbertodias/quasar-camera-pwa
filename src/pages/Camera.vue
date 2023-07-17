<template>
  <q-page padding>
    <p class="text-h6">Camera</p>
    <div class="row">
      <div class="col-12 text-center">
        <video autoplay width="250" ref="videoplay"></video>
      </div>
      <div class="col-12 text-center">
        <q-btn
          v-if="!cameraStart"
          label="Acessar Camera"
          color="primary"
          icon="camera"
          :disable="!enableCamera"
          @click="useCamera"
        />
        <q-btn
          v-else
          label="Tirar Foto"
          color="primary"
          icon="camera"
          @click="takePhoto"
        />
      </div>
      <div class="col-12 text-center">
        <img src="" ref="imgTakePhoto" width="250" />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageCamera",
  data() {
    return {
      enableCamera: false,
      cameraStart: false,
      imageCapture: null,
      track: null,
    };
  },
  mounted() {
    if (navigator.mediaDevices.getUserMedia) {
      this.enableCamera = true;
    }
    this.enumerateDevices();
    this.checkPermission();
    this.notifyMe();
  },
  methods: {
    // https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices
    enumerateDevices() {
      if (!navigator.mediaDevices?.enumerateDevices) {
        console.log("enumerateDevices() not supported.");
      } else {
        // List cameras and microphones.
        navigator.mediaDevices
          .enumerateDevices()
          .then((devices) => {
            devices.forEach((device) => {
              console.log(
                `${device.kind}: ${device.label} id = ${device.deviceId}`
              );
            });
          })
          .catch((err) => {
            console.error(`${err.name}: ${err.message}`);
          });
      }
    },
    // https://developer.mozilla.org/en-US/docs/Web/API/Navigator/permissions
    checkPermission() {
      navigator.permissions.query({ name: "camera" }).then((result) => {
        console.log("permission", result);
      });
    },
    // https://developer.mozilla.org/en-US/docs/Web/API/Notification/permission_static
    notifyMe() {
      if (!("Notification" in window)) {
        // Check if the browser supports notifications
        alert("This browser does not support desktop notification");
      } else if (Notification.permission === "granted") {
        // Check whether notification permissions have already been granted;
        // if so, create a notification
        const notification = new Notification("Hi there!");
        // …
      } else if (Notification.permission !== "denied") {
        // We need to ask the user for permission
        Notification.requestPermission().then((permission) => {
          // If the user accepts, let's create a notification
          if (permission === "granted") {
            const notification = new Notification("Hi there!");
            // …
          }
        });
      }

      // At last, if the user has denied notifications, and you
      // want to be respectful there is no need to bother them anymore.
    },
    useCamera() {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((mediaStream) => {
          this.cameraStart = true;
          this.$refs.videoplay.srcObject = mediaStream;
          this.track = mediaStream.getVideoTracks()[0];
          this.imageCapture = new ImageCapture(this.track);
        })
        .catch((error) => console.error(error));
    },
    takePhoto() {
      this.imageCapture
        .takePhoto()
        .then((blob) => {
          createImageBitmap(blob);
          const reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onloadend = () => {
            this.$refs.imgTakePhoto.src = reader.result;
            console.log(reader.result);
          };
        })
        .catch((error) => console.error(error));
    },
  },
};
</script>
