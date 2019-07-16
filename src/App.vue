<template>
  <div id="app">
    <h1>You're in App B</h1>
    <div id="nav">
       <router-link :to="{ name: 'view_a' }">ViewA</router-link> |
      <router-link :to="{ name: 'app_b:view_b' }">ViewB</router-link> | 
      <router-link :to="{ name: 'app_b:view_c' }">ViewB with ViewC</router-link>
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
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
