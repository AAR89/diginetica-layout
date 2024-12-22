<template>
  <div class="MainPage">
    <HeaderComp />
    <div class="content">
      <FilterComp />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComp from "@/components/HeaderComp.vue";
import FilterComp from "@/components/FilterComp.vue";

export default {
  name: "MainPage",
  components: {
    HeaderComp,
    FilterComp,
  },
};
</script>

<style lang="scss">
.content {
  margin: 24px 100px 100px 32px;
}
</style>
