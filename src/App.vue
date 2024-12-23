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

*::-webkit-scrollbar {
  width: 3px;
  border-radius: 10px;
  background: #cbcbcb;
}

#app {
  color: $color-font-main;
  font-family: Inter;
  font-size: 16px;
  margin: 0 auto;
}

a {
  text-decoration: none;
  cursor: pointer;
}

li,
ul {
  list-style-type: none;
  cursor: pointer;
}

button {
  cursor: pointer;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
</style>
