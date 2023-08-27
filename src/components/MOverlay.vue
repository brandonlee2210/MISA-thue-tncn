<template>
  <div class="overlay" v-show="show">
    <!-- Overlay content goes here -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MOverlay",
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 201;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
