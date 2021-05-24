<template>
  <div id="app">
    <div class="content">
      <Navigation></Navigation>
      <router-view/>
    </div>
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
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1 0 auto;
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

.code-section {
  background-color: white;
  border: 3px solid black;
  border-radius: 1rem;
  padding: 1rem;
  overflow-wrap: break-word;
  font-size: 0.875rem;
}

.button {
  background-color: #c8eb00;
  border: 2px solid #c8eb00;
  border-radius: 2rem;
  text-transform: uppercase;
  font-style: italic;
  font-weight: 500;
  font-size: 1.3rem;
  color: black;
  padding: 0.7rem 2.5rem;
  margin: 1rem 0;

  &:hover {
    border-color: black;
    transition: border-color 0.5s ease;
    text-decoration: none;
    color: black;
  }

  &:focus {
    outline: none;
  }
}

</style>
