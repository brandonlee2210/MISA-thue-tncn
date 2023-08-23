import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import TaxView from "../views/PersonalTax/TaxView.vue";
import EmployeeDetailsForm from "../views/PersonalTaxForm/EmployeeDetailsForm.vue";
import EmployeeInformation from "@/views/PersonalTaxForm/EmployeeInformation.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/tax",
    name: "tax",
    component: TaxView,
    children: [
      {
        path: "add",
        component: EmployeeDetailsForm,
      },
      {
        path: "view",
        component: EmployeeInformation,
      },
    ],
  },
  {
    path: "/manager",
    name: "manager",
    component: () =>
      import(
        /* webpackChunkName: "manager" */ "../views/EmployeeManager/EmployeeManager.vue"
      ),
  },
  {
    path: "/employee-details",
    name: "employee-details",
    component: EmployeeDetailsForm,
  },
];

const router = new VueRouter({
  mode: "history", // "hash
  routes,
});

export default router;
