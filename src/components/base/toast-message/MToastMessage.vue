<template>
  <div
    v-if="isToastMessageVisible"
    :class="`v-snack v-application vts v-snack--has-background v-snack--top misa-snack-bar--${type}`"
    role="alert"
    style="padding-bottom: 0px"
  >
    <div class="v-snack__wrapper v-sheet" style="display: flex">
      <div role="status" class="v-snack__content">
        <div class="toast-header d-flex align-center justify-center">
          <i
            aria-hidden="true"
            class="v-icon notranslate ico ico-white-success theme--light"
          ></i>
        </div>
        <div class="d-flex align-center mx-3 misa-snack-bar--success">
          <div class="text-lg-body-2">{{ title }}</div>
        </div>
      </div>
      <div class="v-snack__action" @click="hideToast">
        <div
          type="button"
          class="v-icon notranslate mr-3 v-icon--link ico ico-g-close theme--light v-snack__btn"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "MToastMessage",
  computed: {
    ...mapState("global", ["isToastMessageVisible", "toastMessageProps"]),
    title() {
      return this.toastMessageProps.title;
    },
    type() {
      return this.toastMessageProps.type;
    },
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions("global", ["showToast", "hideToast"]),
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.v-snack:not(.v-snack--absolute) {
  height: 100vh;
  position: fixed;
  z-index: 1000;
  display: flex;
  justify-content: center;
  left: 0;
  pointer-events: none;
  right: 0;
  top: 0;
  width: 100%;

  .v-snack__wrapper {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1) !important;
    margin: 0;
    margin-top: 2px;
    min-width: unset !important;
    min-height: 40px;
    border-radius: 4px;

    align-items: center;
    border-color: currentColor !important;
    display: flex;
    margin: 8px 24px 0 0;
    max-width: 672px;
    min-width: 344px;
    padding: 0;
    pointer-events: auto;
    position: relative;
    transition-duration: 0.15s;
    transition-property: opacity, transform;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    z-index: 1;
  }
}

.v-snack--top {
  align-items: flex-start;
  bottom: auto;
}

.misa-snack-bar--success {
  color: #39ac66;
  font-weight: 700;
  font-size: 14px;

  .v-snack__wrapper {
    background: #e1fbeb;
    border: 1px solid #3ccc73 !important;

    .toast-header {
      width: 40px;
      height: 40px;
      background-color: #00c853;
    }

    .misa-snack-bar--success {
      color: #39ac66;
      font-weight: 400;
      font-size: 14px;
    }
  }
}

.vts {
  .v-snack__content {
    justify-content: center;
    align-items: center;
    line-height: 0;
    display: flex;
    letter-spacing: 0;
    border-radius: 4px;
    padding: 0;
  }
}

.ico-white-success {
  background: url(https://amisplatform.misacdn.net/apps/mintax/img/white-success.809013c6.svg)
    no-repeat 50%;
  height: 24px;
  width: 24px;
}
.ico-g-close {
  background: url(https://amisplatform.misacdn.net/apps/mintax/img/Gray.247f7b7e.png);
  background-position: -120px 0;
  width: 16px !important;
  height: 16px !important;
  cursor: pointer;
}

.v-icon.v-icon--link {
  cursor: pointer;
  outline: none;
  align-items: center;
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

.v-icon:after {
  background-color: currentColor;
  border-radius: 50%;
  content: "";
  display: inline-block;
  height: 100%;
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  transform: scale(1.3);
  width: 100%;
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.6, 1);
}

.v-snack__action {
  align-items: center;
  align-self: center;
  display: flex;
}
</style>
