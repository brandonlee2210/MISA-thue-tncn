<template>
  <div class="page">
    <ListPersonTableHeader />
    <MTable />
  </div>
</template>

<script>
import MTable from "@/components/base/table/MTable.vue";
import ListPersonTableHeader from "./ListPersonTableHeader.vue";

export default {
  components: {
    ListPersonTableHeader,
    MTable,
  },
};
</script>
