<template>
  <div class="draggable-container">
    <div class="menu-draggable pa-4">
      <div class="filter-title title-popup center d-flex">
        <div class="title-text">Tùy chỉnh cột</div>
      </div>

      <div class="search d-flex center">
        <div
          type="text-field"
          class="row misa-container-base--text-field ma-0 pa-0"
          style="width: 100%"
        >
          <!---->
          <div class="ma-0 pa-0 col col-12">
            <DxTextBox
              placeholder="Tìm kiếm"
              icon="check"
              class="search-column"
              mode="search"
              v-model="searchValue"
              value-change-event="keyup"
              @value-changed="handleValueChange"
              :width="380"
              :height="36"
            ></DxTextBox>
          </div>
          <!---->
        </div>
      </div>

      <div class="list-container-dragg">
        <draggable
          tag="ul"
          draggable=".item"
          :list="localColumns"
          class="draggable-custom"
          handle=".handle"
        >
          <li
            class="item-dragg px-2 py-2 justify-between align-center display-flex"
            v-for="element in localColumns"
            :class="{ item: !element.fixed }"
            :key="element.caption"
          >
            <div class="d-flex">
              <div
                class="v-input--selection-controls__input"
                @click="handleChangeInput(element)"
              >
                <i
                  aria-hidden="true"
                  :class="[
                    'v-icon notranslate mintax mintax-on-check-box  theme--light primary--text',
                    { 'mintax-off-check-box': !element.checked },
                  ]"
                ></i
                ><input
                  aria-checked="true"
                  id="input-9261"
                  role="checkbox"
                  type="checkbox"
                  value=""
                  v-model="element.checked"
                  @change="handleChangeInput(element)"
                />
                <div
                  class="v-input--selection-controls__ripple primary--text"
                ></div>
              </div>

              <span class="dragg-text ml-2">{{ element.caption }} </span>
            </div>

            <div class="d-flex align-center">
              <i
                aria-hidden="true"
                :class="[
                  'v-icon notranslate ico  theme--light',
                  { 'ico-pin': element.fixed },
                ]"
              ></i>
              <i
                aria-hidden="true"
                class="handle v-icon notranslate icon icon-draggable ml-2 ico ico-dragg-handle theme--light"
              ></i>
            </div>
          </li>
        </draggable>
      </div>
    </div>
    <div
      class="dragg-menu-footer d-flex justify-space-between align-center pa-4"
    >
      <DxButton
        type="button"
        text="Mặc định"
        class="default"
        style="height: 36px; width: 80px"
        @click="handleDefaultSetting"
      />
      <DxButton
        type="button"
        text="Lưu"
        class="save"
        style="height: 36px; width: 80px"
        @click="handleSaveButton"
      />
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { DxTextBox, DxButton } from "devextreme-vue";

export default {
  name: "DraggableMenu",
  display: "Handle",
  instruction: "Drag using the handle icon",
  order: 5,
  components: {
    DxTextBox,
    DxButton,
    draggable,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  watch: {
    list: {
      handler: function (val) {
        this.localColumns = JSON.parse(JSON.stringify(val));
      },
      deep: true,
    },
  },
  data() {
    return {
      dragging: false,
      localColumns: JSON.parse(JSON.stringify(this.list)),
      searchValue: "",
    };
  },
  computed: {
    draggingInfo() {
      return this.dragging ? "under drag" : "";
    },
  },
  methods: {
    /**
     * Xử lí khi thay đổi giá trị ô checkbox
     * Created by: dgbao (17/08/2023)
     * */
    handleChangeInput(element) {
      element.checked = !element.checked;
    },
    /**
     * Khi tìm kiếm thì lọc lại danh sách các cột
     * Created by: dgbao (17/08/2023)
     * */
    handleValueChange(e) {
      this.searchValue = e.value;
      this.localColumns = this.list.filter((item) =>
        item.caption.toLowerCase().includes(this.searchValue.toLowerCase())
      );
    },

    /**
     * Xử lí khi click vào nút lưu
     * Created by: dgbao (17/08/2023)
     * */
    handleSaveButton() {
      this.$emit("save", JSON.parse(JSON.stringify(this.localColumns)));
    },

    /**
     * Xử lí khi click vào nút mặc định
     * Created by: dgbao (17/08/2023)
     * */
    handleDefaultSetting() {
      this.$emit("default");
    },
  },
};
</script>

<style lang="scss" scoped>
@import url(../../../assets/style/base/draggable/DraggableMenu.scss);
</style>
