<template>
  <div id="app">
    <github-corners repo="alijaya/vue-disqus-embed" bg-color="teal" />
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/page-1">Page 1</router-link>
      <router-link to="/page-2">Page 2</router-link>
      <router-link to="/page-3">Page 3</router-link>
      <router-link to="/page-4">Page 4</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

#nav a {
  margin: 1rem;
}

/* change disqus link color */
a {
  color: teal;
}

.github-corner {
  display: block;
}
</style>
