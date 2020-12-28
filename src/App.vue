<template>
  <div id="app">
    <!-- <Toolbar /> -->
    <router-view/>
  </div>
</template>

<script>
// import Toolbar from "@/components/Toolbar";
export default {
  name: "App"
  // components: {
  //   Toolbar
  // }
}
</script>

<style>
html {
  background-color: #26292e;
}

.text-ice {
  color: #b9b9b9;
}
.text-ice-secondary {
  color: #c8af9e;
}
.bg-ice {
  background-color: #26292e;
}
/* TODO create README for users with a simple tutorial: one for shrines (usually working off of 45-90 degree angles), another for overworld (better application of use)*/

/* TODO add links to resources and Discords servers in README */

.btn-ice {
  background-color: #3a4049 !important;
  color: #9ca4b2 !important;
}
.bg-input-field {
  background-color: #202227;
  color: #d6d9df;
}

.bg-ice-component {
  background-color: #2c3037;
}

</style>
