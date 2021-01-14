<template>
  <b-container fluid="true" class="footer">
    <b-container>
      <b-row class="py-4 justify-content-md-between">
        <div class="mb-3 mb-lg-0 d-lg-inline-block">
          <div class="pr-lg-4 d-lg-inline-block text-center">O CC Slovenija</div>
          <div class="d-lg-inline-block text-center">
            <router-link to="/">Zdaj</router-link>
            <span class="px-2">|</span>
            <router-link to="/zgodovina">Zgodovina</router-link>
          </div>
        </div>
        <div class="mb-3 mb-lg-0 d-lg-inline-block">
          <div class="pr-lg-4 d-lg-inline-block text-center">O CC</div>
          <div class="d-lg-inline-block text-center">
            <router-link to="/kaj-je-cc">Kaj je CC?</router-link>
            <span class="px-2">|</span>
            <router-link to="/o-ccgn">O CCGN</router-link>
          </div>
        </div>
        <div class="d-lg-inline-block text-center">
          <a href="mailto:info@creativecommons.si" >info@creativecommons.si</a>
          <div class="mt-2 mt-lg-0 d-lg-inline-block">
            <a href="/" class="ml-lg-4"><img src="../assets/facebook.png" alt="Facebook icon"></a>
            <a href="/" class="ml-4"><img src="../assets/twitter.png" alt="Twitter icon"></a>
          </div>
        </div>
      </b-row>
      <hr class="px-4">
      <b-row class="py-2">
        <div class="footnote text-center text-lg-left">
          Ikone so del <a href="/">Noun Project</a>.
        </div>
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
  font-size: 1.25rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  .row {
    padding: 0 15px;

    div {
      width: 100%;
      @media (min-width: 768px) {
        width: unset;
      }
    }
  }

  span {
    font-style: italic;
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
    font-size: 1rem;

    @media (min-width: 768px) {
      font-size: 0.8rem;
    }
  }

  img {
    max-height: 1.5rem;
  }
}
</style>
