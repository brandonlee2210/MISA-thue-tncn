import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import TaxView from "../views/PersonalTax/TaxView.vue";
import EmployeeDetailsForm from "../views/PersonalTaxForm/EmployeeDetailsForm.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/tax",
    name: "tax",
    component: TaxView,
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
