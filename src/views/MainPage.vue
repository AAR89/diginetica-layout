<template>
  <div class="main-page">
    <HeaderComp />
    <div class="content">
      <FilterComp />
      <CatalogComp />
    </div>
  </div>
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue";
import FilterComp from "@/components/FilterComp.vue";
import CatalogComp from "@/components/CatalogComp.vue";

export default {
  name: "MainPage",
  components: {
    HeaderComp,
    FilterComp,
    CatalogComp,
  },
};
</script>

<style lang="scss">
.main-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px 100px 32px 100px;
}

.content {
  margin-top: 24px;
  display: flex;
  gap: 36px;
}

@media (max-width: 1285px) {
  .main-page {
    margin: 24px 40px 32px 40px;
  }
}

@media (max-width: 860px) {
}
</style>
