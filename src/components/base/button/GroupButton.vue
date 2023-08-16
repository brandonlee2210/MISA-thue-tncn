<template>
  <div class="group-container">
    <div class="group__left">
      <div class="icon-add"></div>
      <div>Thêm mới</div>
    </div>
    <div class="iconx">
      <div class="icon-expand"></div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.group-container {
  width: 152px;
  height: 36px;

  display: flex;
  align-items: center;
  border-radius: 4px;

  gap: 1px;

  .group__left {
    display: flex;
    align-items: center;
    background: var(--primary-color);
    height: 100%;
    color: white;
    padding: 0 16px;
    white-space: nowrap;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    gap: 4px;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }

  .iconx {
    width: 40px;
    height: 36px;
    background: var(--primary-color);
    display: flex;
    justify-content: center;
    align-items: center;

    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
}
</style>
