<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Navigation from '@/components/Navigation.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    Footer,
  },
};
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');

#app {
  font-family: 'IBM Plex Sans', sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}

p {
  font-size: 1.5rem;

  @media (min-width: 992px) {
    font-size: 1.2rem;
  }
}

.grey-box {
  background-color: rgba(0, 0, 0, 0.03);

  h5 {
    font-weight: 600;
  }
}

</style>
