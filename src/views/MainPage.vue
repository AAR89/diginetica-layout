<template>
  <div class="MainPage">
    <HeaderComp />
    <div class="content"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComp from "@/components/HeaderComp.vue";

export default {
  name: "MainPage",
  components: {
    HeaderComp,
  },
};
</script>
