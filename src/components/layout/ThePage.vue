<template>
  <div class="main-content">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import "./ThePage.scss";

.main-content {
  background: var(--main-background-color);

  padding: 0 24px 0 24px;
  padding-bottom: 46px;

  width: calc(100vw - 237px);
  height: calc(100vh - 56px);
}
</style>
