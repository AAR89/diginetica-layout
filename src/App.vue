<template>
  <div id="app">
    <nav>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
$color-font-main: #333333;

$color-font-hover: #125bae;

$color-font-history: #5a0488;

$color-font-second: #aaaaaa;

$color-font-bg: #e2efff;

$color-brand: #7397f5;

$color-border: #d5d5d5;

$color-icons: #cbcbcb;

$scroll-bar: #f2f2f2;

$color-white: #ffffff;

body,
html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  max-width: 1920px;
}

#app {
  // text-align: center;
  // border: solid 4px black;
  // margin: 0rem 6.25rem 2.25rem 6.25rem;
  color: $color-font-main;
  font-family: Inter;
  font-size: 16px;
}

a {
  text-decoration: none;
}
</style>
