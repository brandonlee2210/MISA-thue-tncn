<template>
  <button class="button" @click="handleClick">
    <span class="v-btn__content"
      ><i class="ico" :class="`ico-${type}`"></i
    ></span>
    <div v-if="title" class="title">{{ title }}</div>
  </button>
</template>

<script>
export default {
  props: ["type", "title", "onClick"],
  methods: {
    handleClick() {
      this.$props.onClick();
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  height: 36px;
  padding: 0 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #e6e6e6;
  background: white;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
  }

  .title {
    font-weight: 500;
  }

  .v-btn__content {
    align-items: center;
    color: inherit;
    display: flex;
    flex: 1 0 auto;
    justify-content: inherit;
    line-height: normal;
    position: relative;
    transition: inherit;
    transition-property: opacity;
    width: 24px;
    height: 24px;

    .icon {
      display: inline-flex;
      font-feature-settings: "liga";
      font-size: 20px;
      justify-content: center;
      letter-spacing: normal;
      line-height: 1;
      position: relative;
      text-indent: 0;
      transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
      vertical-align: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    .ico-filter {
      background: url(https://amisplatform.misacdn.net/apps/mintax/img/ico-filter-gray.08ed30eb.svg)
        no-repeat 50%;
      height: 24px;
      width: 24px;
    }

    .ico-setting {
      background: url(https://amisplatform.misacdn.net/apps/mintax/img/settings-gear.a03305c9.svg)
        no-repeat 50%;
      height: 24px;
      width: 24px;
    }

    .ico-expand {
      background: url(https://amisplatform.misacdn.net/apps/mintax/img/White.6306a9ad.png);
      background-position: -120px -80px;
      width: 16px !important;
      height: 16px !important;
    }

    .ico-add {
      width: 14px !important;
      height: 14px !important;
      background: url(https://amisplatform.misacdn.net/apps/mintax/img/icon.4ca9813a.svg) -63px -3px
        no-repeat;
    }

    .ico-delete {
      background: url(https://amisplatform.misacdn.net/apps/mintax/img/delete-table-row.d1b38148.svg)
        no-repeat 50%;
      height: 16px;
      width: 16px;
    }
  }
}
</style>
