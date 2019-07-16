<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <AppComponent msg="This is the a view. It's called ViewA"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AppComponent from '../components/AppComponent.vue'

export default {
  name: 'view-a',
  components: {
    AppComponent
  }
}
</script>
