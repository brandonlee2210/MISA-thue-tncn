<template>
  <div>
    <dx-popup
      :visible="isDialogVisible"
      :title="dialogTitle"
      :showTitle="true"
      @hidden="onDialogHidden"
    >
      <div class="dialog-content">
        <!-- Dialog content here -->
        <p>The data has changed. Do you want to save?</p>
      </div>
      <div class="dialog-buttons">
        <dx-button
          text="Confirm"
          @click="confirmChanges"
          class="dialog-button"
        />
        <dx-button text="Save" @click="saveChanges" class="dialog-button" />
        <dx-button text="Cancel" @click="cancelChanges" class="dialog-button" />
      </div>
    </dx-popup>

    <!-- Button to open the dialog -->
    <button @click="openDialog">Open Dialog</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDialogVisible: true,
      dialogTitle: "Data Changes",
    };
  },
  methods: {
    openDialog() {
      this.isDialogVisible = true;
    },
    closeDialog() {
      this.isDialogVisible = false;
    },
    confirmChanges() {
      // Handle confirm changes logic
      this.closeDialog();
    },
    saveChanges() {
      // Handle save changes logic
      this.closeDialog();
    },
    cancelChanges() {
      // Handle cancel changes logic
      this.closeDialog();
    },
    onDialogHidden() {
      // Reset any necessary data or perform additional actions when the dialog is closed
    },
  },
};
</script>

<style scoped>
.dialog-content {
  padding: 16px;
}

.dialog-buttons {
  display: flex;
  justify-content: flex-end;
  padding: 8px;
}

.dialog-button {
  margin-left: 8px;
}
</style>
