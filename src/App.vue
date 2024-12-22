<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
--color-font-main {
  color: #333333;
}

--color-font-hover {
  background-color: #125bae;
}

--color-font-history {
  background-color: #5a0488;
}

--color-font-second {
  color: #aaaaaa;
}

--color-font-bg {
  background-color: #e2efff;
}

--color-brand {
  background-color: #7397f5;
}

--color-border {
  border-color: #d5d5d5;
}

--color-icons {
  background-color: #cbcbcb;
}

--scroll-bar {
  scrollbar-color: #f2f2f2;
}

--color-white {
  color: #ffffff;
}

body,
html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  max-width: 1920px;
}

#app {
  text-align: center;
  border: solid 4px black;
  // padding: 0rem 6.25rem 36px 6.25rem;
}
</style>
