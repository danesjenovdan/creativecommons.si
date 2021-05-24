<template>
  <div class="about">
    <b-container>
      <b-row>
        <b-col>
          <h1 class="pt-4 text-center">Kaj iščeš?</h1>
        </b-col>
      </b-row>
      <b-row class="justify-content-center align-items-center mb-4">
        <img src="../assets/bulb.svg" class="bulb-icon mb-2 mb-md-0">
        <span class="sub-header ml-md-1 text-center font-italic">
          Vsi materiali, ki jih najdeš med zadetki, so na voljo za ponovno uporabo.
        </span>
      </b-row>
      <b-row class="mt-2 mb-5 justify-content-center">
        <b-col lg="7">
          <img src="../assets/search.svg" class="search-icon">
          <input type="text" v-model="query" @keyup.enter="search">
        </b-col>
      </b-row>
      <b-row class="justify-content-center my-5" v-if="searchError">
        Žal nismo našli nobenih rezultatov.
      </b-row>
    </b-container>
    <IsciFilter
      v-if="results.length > 0 && !showDetails"
      :filters_temp.sync="filters"
      :search_by_author_temp.sync="search_by_author"
      :results="results"
      :page="page"
      :pages_no="pagesNo"
      :pagination="pagination"
      @show-details="showImageDetails"
      @update-filters="search"
      @change-site="changeSite"
    >
    </IsciFilter>
    <IsciPodrobnosti
      v-if="showDetails"
      :details="details"
      @back="back"
      @open-image="openRelatedImage"
    >
    </IsciPodrobnosti>
  </div>
</template>

<script>
import IsciFilter from '@/components/IsciFilter.vue';
import IsciPodrobnosti from '@/components/IsciPodrobnosti.vue';

export default {
  components: { IsciFilter, IsciPodrobnosti },
  data() {
    return {
      query: '',
      results: [],
      page: 1,
      pagesNo: 1,
      showDetails: false,
      details: null,
      searchError: false,
      filters: {
        license_type: [],
        license: [],
        source: [],
        category: [],
        extension: [],
        aspect_ratio: [],
        size: [],
      },
      search_by_author: [],
    };
  },
  computed: {
    pagination() {
      const pages = [];
      if (this.page - 3 > 0) pages.push(1);
      if (this.page - 2 > 0) pages.push('...');
      if (this.page - 1 > 0) pages.push(this.page - 1);
      pages.push(this.page);
      if (this.page + 1 <= this.pagesNo) pages.push(this.page + 1);
      if (this.page + 2 <= this.pagesNo) pages.push('...');
      if (this.page + 3 <= this.pagesNo) pages.push(this.pagesNo);
      return pages;
    },
  },
  methods: {
    search() {
      const parameters = {};
      if (this.search_by_author.length) { // search by author
        parameters.creator = this.query;
      } else { // search by query
        parameters.q = this.query;
      }
      parameters.page_size = this.$store.getters.apiImageSearchPageSize;
      parameters.page = this.page;
      Object.keys(this.filters).forEach((key) => {
        if (this.filters[key].length) {
          parameters[key] = this.filters[key].join();
        }
      });
      console.log(parameters);
      this.axios.get(this.$store.getters.apiImageSearchUrl, {
        params: parameters,
      }).then((response) => {
        this.results = response.data.results;
        this.pagesNo = response.data.page_count;
        console.log(response.data);
        this.showDetails = false;
        this.searchError = this.results.length === 0;
      }).catch(() => {
        this.results = [];
        this.searchError = true;
      });
    },
    changeSite(p) {
      if (p > 0 && p <= this.pagesNo) {
        this.page = p;
        this.search();
      }
    },
    showImageDetails(index) {
      this.showDetails = true;
      this.details = this.results[index];
    },
    back() {
      this.showDetails = false;
    },
    openRelatedImage(image) {
      this.showDetails = false;
      this.details = image;
      this.showDetails = true;
    },
  },
};

</script>

<style scoped lang="scss">

.sub-header {
  color: #595959;
}

.bulb-icon {
  height: 2rem;
}

.search-icon {
  position: absolute;
  height: 2rem;
  margin: 0.5rem 0.75rem;
}

input[type=text] {
  padding: 0.5rem 1rem 0.5rem 3.5rem;
  border: solid 3px black;
  border-radius: 1.5rem;
  font-size: 1.2rem;
  width: 100%;
}

input[type=text]:focus {
  outline: none;
}

</style>
