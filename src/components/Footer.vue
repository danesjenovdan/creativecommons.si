<template>
  <b-container fluid="true" class="footer">
    <b-container>
      <b-row class="py-4 justify-content-between">
        <div>
          <span class="pr-4">O CC Slovenija</span>
          <router-link to="/">Zdaj</router-link>
          <span class="px-2">|</span>
          <router-link to="/zgodovina">Zgodovina</router-link>
        </div>
        <div>
          <span class="pr-4">O CC</span>
          <router-link to="/isci">Kaj je CC?</router-link>
          <span class="px-2">|</span>
          <router-link to="/isci">O CCGN</router-link>
        </div>
        <div>
          <a href="mailto:info@creativecommons.si" >info@creativecommons.si</a>
          <a href="/"><img src="../assets/facebook.png" alt="Facebook icon"></a>
          <a href="/"><img src="../assets/twitter.png" alt="Twitter icon"></a>
        </div>
      </b-row>
      <hr class="px-4">
      <b-row class="pt-2 pb-2">
        <span class="footnote">Ikone so del <a href="/">Noun Project</a>.</span>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped lang="scss">

.footer {
  background-color: rgba(200,235,0,0.1);

  .row {
    padding: 0 15px;
  }

  span {
    font-style: italic;
    //padding-right: 15px;
    //padding-left: 15px;
  }

  a {
    font-style: italic;
    font-weight: 500;
    text-decoration: underline;
    color: black;
  }

  hr {
    margin: 0;
    border-color: black;
  }

  .footnote {
    font-size: 0.8rem;
  }

  img {
    max-height: 1.5rem;
    margin-left: 2rem;
  }
}
</style>
