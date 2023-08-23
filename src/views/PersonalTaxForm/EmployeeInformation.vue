<template>
  <div class="misa-container-employee-details">
    <FormHeader @save="handleSave" :title="'Thông tin người nộp thuế'" />
    <div class="employee-tempory-detail-content">
      <div class="misa-tab-section col col-2">
        <section
          name="infor"
          class="misa-tab-infor pr-3 misa-tab-active"
          @click="handleScroll('general', $event)"
        >
          Thông tin chung
        </section>
        <section
          name="native"
          class="misa-tab-infor pr-3"
          @click="handleScroll('job', $event)"
        >
          Thông tin công việc
        </section>
        <section
          name="current"
          class="misa-tab-infor pr-3"
          @click="handleScroll('family', $event)"
        >
          Thông tin gia đình
        </section>
      </div>
      <div class="misa-content-right">
        <FormDetails />
      </div>
    </div>
  </div>
</template>

<script>
import FormHeader from "./FormHeader.vue";
import FormDetails from "./FormDetails.vue";

export default {
  name: "TaxView",
  components: {
    FormHeader,
    FormDetails,
  },
  data() {
    return {};
  },
  methods: {
    handleScroll(id, event) {
      const elmnt = document.getElementById(id);
      elmnt.scrollIntoView({ behavior: "smooth" });

      const tabs = document.getElementsByClassName("misa-tab-infor");
      for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("misa-tab-active");
      }
      event.target.classList.add("misa-tab-active");
    },
  },
};
</script>

<style lang="scss">
@import url(../../assets/style/view/PersonalTaxForm/EmployeeInformation.scss);
</style>
