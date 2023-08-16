<template>
  <div class="block__parent" :style="{ borderLeft: '6px solid ' + mainColor }">
    <div class="block__content">
      <div class="block__number" :style="{ color: mainColor }">
        {{ number }}
      </div>
      <div class="block__title">{{ title }}</div>
      <div class="block__subtitle">
        {{ subtitle }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlockContent",
  props: ["number", "title", "subtitle", "mainColor"],
};
</script>

<style lang="scss">
.block__parent {
  width: calc(33.33333% - 12px);
  background-color: #fff;
  border-radius: 4px;
  height: 135px;
  overflow: hidden;
  cursor: pointer;

  .block__content {
    height: 100%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: calc(100% - 6px);
    background-color: #fff;

    .block__number {
      font-size: 24px !important;
      font-weight: 700;
    }

    .block__title {
      font-size: 12px !important;
      font-weight: 700;
      margin-bottom: 2px;
    }

    .block__subtitle {
      font-size: 12px !important;
      color: #666;
    }
  }
}
</style>
