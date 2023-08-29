<template>
  <div class="loading-dialog">
    <div class="mintax-loading-circle misa-white-loading"></div>
  </div>
</template>

<script></script>

<style lang="scss">
.loading-dialog {
  background-color: hsla(0, 0%, 100%, 0.6) !important;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;

  display: flex;
  align-items: center;
  justify-content: center;
  .mintax-loading-circle {
    border: 6px solid #f3f3f3; /* Light grey */
    border-top: 6px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 0.75s linear infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
}
</style>
