<template>
  <button
    class="button"
    :class="{ 'b-blue': type == 'add--blue' }"
    @click="handleClick"
  >
    <span class="v-btn__content"
      ><i class="ico" :class="`ico-${type}`"></i>
      <slot></slot>
    </span>
    <div v-if="title" class="title">{{ title }}</div>
  </button>
</template>

<script>
export default {
  props: ["type", "title", "onClick"],
  methods: {
    handleClick(event) {
      event.preventDefault();
      this.onClick();
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  height: 36px;
  padding: 0 8px 0 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #e6e6e6;
  background: white;
  border-radius: 4px;
  cursor: pointer;

  &.b-blue {
    border-color: var(--primary-color);
    color: var(--primary-color);
  }

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

    .ico-add--green {
      width: 20px !important;
      height: 20px !important;
      background: url(https://amisplatform.misacdn.net/apps/mintax/img/Icon_New.62467ce4.svg) -220px
        0 no-repeat;
    }

    .ico-add--blue {
      width: 12px;
      height: 12px;
      -webkit-mask-image: url(https://amisplatform.misacdn.net/apps/mintax/img/black-plus.5ffb97cd.svg);
      mask-image: url(https://amisplatform.misacdn.net/apps/mintax/img/black-plus.5ffb97cd.svg);
      -webkit-mask-size: contain;
      mask-size: contain;
      background-color: #007aff;
    }

    .ico-delete {
      background: url(https://amisplatform.misacdn.net/apps/mintax/img/delete-table-row.d1b38148.svg)
        no-repeat 50%;
      height: 16px;
      width: 16px;
    }
  }
}

.v-badge__wrapper {
  flex: 0 1;
  height: 100%;
  left: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;

  .v-badge__badge {
    border-radius: 4.5px;
    height: 9px;
    min-width: 0;
    padding: 0;
    width: 9px;
    display: inline-block;
    border-radius: 10px;
    color: #fff;
    font-size: 12px;
    letter-spacing: 0;
    pointer-events: auto;
    position: absolute;
    text-align: center;
    text-indent: 0;
    top: auto;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    white-space: nowrap;
  }
}

.blue {
  background-color: #2196f3 !important;
  border-color: #2196f3 !important;
}
</style>
