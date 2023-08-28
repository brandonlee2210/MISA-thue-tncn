<template>
  <span class="dx-datagrid-nodata">Không tìm thấy dữ liệu hợp lệ!</span>
</template>

<style lang="scss">
.dx-datagrid-nodata {
  top: calc(50% + 70px) !important;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  text-align: center;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.dx-datagrid-nodata:before {
  content: "";
  position: absolute;
  top: -145px;
  left: calc(50% - 98px);
  background: url(https://amisplatform.misacdn.net/apps/mintax/img/empty-search.aa2c63f2.svg);
  height: 125px;
  width: 195px;
}
</style>
