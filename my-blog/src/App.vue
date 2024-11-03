<template>
  <div id="app">
    <NavbarBlog />
    <router-view />
  </div>
</template>

<script>
import NavbarBlog from './components/Navbar-blog.vue';

export default {
  name: 'App',
  components: {
    NavbarBlog
  }
};
</script>
