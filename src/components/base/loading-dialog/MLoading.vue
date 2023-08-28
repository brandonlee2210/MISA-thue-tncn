<template>
  <div class="loading-dialog">
    <div class="mintax-loading-circle"></div>
  </div>
</template>

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
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 0.75s linear infinite;
    border: 6px solid transparent;
    border-image: conic-gradient(#3498db, #2ecc71, #f1c40f, #e74c3c) 1;

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
