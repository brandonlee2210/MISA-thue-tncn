<template>
  <div class="list-person">
    <span data-v-05bc7046="" class="text-lg-body-2">
      Đã chọn
      <span data-v-05bc7046="" class="text-lg-subheader ml-1">{{
        length
      }}</span></span
    >
    <div class="misa-separator"></div>
    <span class="text-lg-error mr-2 cursor-pointer" @click="$emit('deselect')"
      >Bỏ chọn</span
    >
    <div class="misa-separator"></div>
    <span
      class="text-lg-success mr-4 cursor-pointer"
      @click="$emit('select-all')"
      >Chọn tất cả</span
    >
    <ButtonWithIcon type="add--green" title="Sử dụng" />
  </div>
</template>

<script>
import ButtonWithIcon from "@/components/base/button/ButtonWithIcon.vue";

export default {
  components: {
    ButtonWithIcon,
  },
  props: ["length"],
};
</script>

<style lang="scss" scoped>
.dx-buttongroup {
  color: white;
}
.list-person {
  display: flex;

  justify-content: flex-start;
  align-items: center;
  padding: 16px 16px;
  height: 60px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

  .dx-button:hover {
    background-color: white;
    border-color: var(--primary-color);
    border-width: 1px;
    color: var(--primary-color);
  }

  .misa-separator {
    margin-left: 10px;
    margin-right: 10px;
    height: 16px;
    width: 1px;
    border-left: 1px solid #bbb;
  }

  .text-lg-success {
    font-weight: 700 !important;
    font-size: 14px !important;
    color: #39ac66 !important;
    line-height: 19px !important;
    cursor: default;
    letter-spacing: unset !important;
    cursor: pointer;
  }

  .text-lg-error {
    font-weight: 700 !important;
    font-size: 14px !important;
    color: #e61d1d !important;
    line-height: 19px !important;
    cursor: default;
    letter-spacing: unset !important;
    cursor: pointer;
  }

  .list-person__right {
    display: flex;
    align-items: center;
    position: relative;
    gap: 8px;

    .search-person {
      .dx-button-mode-contained {
        background-color: red !important;
      }
    }

    .dx-button {
      font-weight: 700;
    }

    &:hover {
      border-color: #007aff;
    }
  }
  .list-person__left {
    display: flex;
    align-items: center;

    gap: 8px;

    .group-button {
      display: flex;

      #addButton {
        background: #007aff;
        border-radius: 4px;
        color: white !important;

        .dx-button-text {
          color: white !important;
        }
      }
    }

    .dx-button-mode-outlined {
      color: white;
    }
  }
}
</style>
