<template>
<b-container>
  <b-row>
    <b-col lg="4">
      <div class="grey-box">
        <div class="filter-section">
          <span v-b-toggle="'collapse-1'" class="filter-section-button">
            <img src="../assets/arrow.svg" alt="Open button">
          </span>
          <h4 v-b-toggle="'collapse-1'" class="font-italic">Iščem nekaj, kar lahko...</h4>
          <b-collapse id="collapse-1">
            <CCheckbox
              :options="[
                { value: 'commercial', text: 'Uporabim za komercialne namene' },
                { value: 'modification', text: 'Prilagodim ali spremenim' },
              ]"
              :checked.sync="filters.license_type"
            >
            </CCheckbox>
          </b-collapse>
        </div>
        <div class="filter-section">
          <span v-b-toggle="'collapse-2'" class="filter-section-button">
            <img src="../assets/arrow.svg" alt="Open button">
          </span>
          <h4 v-b-toggle="'collapse-2'" class="font-italic">Vse licence</h4>
          <b-collapse id="collapse-2">
            <CCheckbox
              :options="[
                { value: 'CC0', text: 'CC0' },
                { value: 'BY', text: 'BY' },
                { value: 'BY-NC', text: 'BY-NC' },
                { value: 'BY-ND', text: 'BY-ND' },
                { value: 'BY-SA', text: 'BY-SA' },
                { value: 'BY-NC-SA', text: 'BY-NC-SA' },
                { value: 'BY-NC-ND', text: 'BY-NC-ND' },
                { value: 'PDM', text: 'Public Domain Mark' },
              ]"
              :checked.sync="filters.license"
            >
            </CCheckbox>
          </b-collapse>
        </div>
        <div class="filter-section">
          <span v-b-toggle="'collapse-3'" class="filter-section-button">
            <img src="../assets/arrow.svg" alt="Open button">
          </span>
          <h4 v-b-toggle="'collapse-3'" class="font-italic">Vsi viri</h4>
          <b-collapse id="collapse-3">
            <CCheckbox
              :options="[
                { value: 'woc_tech', text: 'WOC in tech' },
                { value: 'wikimedia', text: 'WikiMedia' },
                { value: 'wellcome_collection', text: 'Wellcome Collection' },
                { value: 'thorvaldsensmuseum', text: 'Thorvaldsens Museum' },
              ]"
              :checked.sync="filters.source"
            >
            </CCheckbox>
          </b-collapse>
        </div>
        <div class="filter-section">
          <span v-b-toggle="'collapse-4'" class="filter-section-button">
            <img src="../assets/arrow.svg" alt="Open button">
          </span>
          <h4 v-b-toggle="'collapse-4'" class="font-italic">Vrste slike</h4>
          <b-collapse id="collapse-4">
            <CCheckbox
              :options="[
                { value: 'photograph', text: 'Fotografije' },
                { value: 'illustration', text: 'Ilustracije' },
                { value: 'digitized_artwork', text: 'Digitized Artworks' },
              ]"
              :checked.sync="filters.category"
            >
            </CCheckbox>
          </b-collapse>
        </div>
        <div class="filter-section">
          <span v-b-toggle="'collapse-5'" class="filter-section-button">
            <img src="../assets/arrow.svg" alt="Open button">
          </span>
          <h4 v-b-toggle="'collapse-5'" class="font-italic">Vrste datoteke</h4>
          <b-collapse id="collapse-5">
            <CCheckbox
              :options="[
                { value: 'jpeg', text: 'JPEGs' },
                { value: 'png', text: 'PNGs' },
                { value: 'gif', text: 'GIFs' },
                { value: 'svg', text: 'SVGs' },
              ]"
              :checked.sync="filters.extension"
            >
            </CCheckbox>
          </b-collapse>
        </div>
        <div class="filter-section">
          <span v-b-toggle="'collapse-6'" class="filter-section-button">
            <img src="../assets/arrow.svg" alt="Open button">
          </span>
          <h4 v-b-toggle="'collapse-6'" class="font-italic">Razmerje</h4>
          <b-collapse id="collapse-6">
            <CCheckbox
              :options="[
                { value: 'tall', text: 'Pokončno' },
                { value: 'wide', text: 'Ležeče' },
                { value: 'square', text: 'Kvadrat' },
              ]"
              :checked.sync="filters.aspect_ratio"
            >
            </CCheckbox>
          </b-collapse>
        </div>
        <div class="filter-section">
          <span v-b-toggle="'collapse-7'" class="filter-section-button">
            <img src="../assets/arrow.svg" alt="Open button">
          </span>
          <h4 v-b-toggle="'collapse-7'" class="font-italic">Velikost slike</h4>
          <b-collapse id="collapse-7">
            <CCheckbox
              :options="[
                { value: 'small', text: 'Majhna' },
                { value: 'medium', text: 'Srednje' },
                { value: 'large', text: 'Velika' },
              ]"
              :checked.sync="filters.size"
            >
            </CCheckbox>
          </b-collapse>
        </div>
        <CCheckbox
          class="p-3"
          :options="[
                { value: 'yes', text: 'Išči po ustvarjalcih' },
              ]"
          :checked.sync="search_by_author"
        >
        </CCheckbox>
      </div>
      <div class="filter-actions d-flex align-items-center justify-content-between my-1">
        <span @click="resetFilters">Počisti filtre</span>
        <button class="button" @click="updateFilters">Išči</button>
      </div>
    </b-col>
    <b-col lg="8" class="images">
      <b-row>
        <b-col lg="4" class="thumbnail" v-for="(result, index) in results" v-bind:key="result.id">
          <img :src="result.thumbnail" @click="showDetails(index)">
        </b-col>
      </b-row>
      <b-row class="justify-content-center mt-3 mb-5">
        <div class="pagination">
          <div>
            <button @click="changeSite(1)">
              <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15"><defs></defs><g><g><title>noun_chevron_2286633 copy</title><image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAABRUlEQVQ4T33TzyunURQG8I8Vq7GympHZkJoampSmNNhY2TELKavRZCFZSBYaRbLAQrJhh1kwO6vJhomSEjaT0dTkR03zN0yiq/Pq7dv7dVe3c5/nnOc859wK5U8TDvEZmznYGGbQXlGG24Bf8daCk7j34SvO0FNEfo0/uEMt/gaxB9+wj44UKyW/xG2AU5KruHdjB8dozdTmyTW4QSXq8TtAXfiOczTn28zI1bjGC7zBzwC1Yw+XaMR9KbkOu1HtHU6jnQ9BvMBb/C81N1VOriZ33+MoAK+ihSJfnnIkci+2Y6adUaEK45jCEkaKRpr1nCSmEZT2lhLMYQ2DRbKzWDlXv4SCZQwXuZ3FCueJWUxgHmk9H0/RhmUe/Ej7m6u0iNHY68nnnOzHBg7C0H+RZAVDWMB0uY+RsJ+wigGs5xRs4SPaHgAT/z+0+ejOmgAAAABJRU5ErkJggg==" width="15" height="15" transform="matrix(1,0,0,1,0,0)" ></image></g></g></svg>
            </button>
            <button @click="changeSite(page - 1)">
              <svg width="9" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 9 16"><defs></defs><g><g><title>noun_chevron_2286605</title><image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAQCAYAAADESFVDAAAAbElEQVQoU53SwQmAMAyF4b8buIxHBxCcwJObOYWu4EVwpRIhIDFJxZ6/9iVNCvmZga4kZgR24IqQggMYPKTgBHpJsugFLHLBE4VA0QKswAZMXrdS0yckl5txmtAsPIW/PtO+GI7FwnDACu9VqZ6vHIcNAterAAAAAElFTkSuQmCC" width="9" height="16" transform="matrix(1,0,0,1,0,0)" ></image></g></g></svg>
            </button>
            <ul>
              <li
                v-for="(p, index) in pagination"
                :key="index"
                :class="{'active-page': p === page, 'disabled': p === '...'}"
                @click="changeSite(p)">{{p}}
              </li>
            </ul>
            <button @click="changeSite(page + 1)">
              <svg width="8" height="15" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8 15"><defs></defs><g><g><title>noun_chevron_2286605 copy</title><image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAPCAYAAADZCo4zAAAAs0lEQVQoU3XRIWuCURTG8Z9p4AfR4ldYM70Y1lbWDAoaDLIos24YBsoWrJY1gxisxsGCZfsgwzg54IWXy91p9/I//wfO08AZL5gpTAM/aOEBm5wJIOaALu6wrUMJiL8TOrjHR4LqQBNf17gK+4DqQLxv8Hk13eKYA8n8jTaq/4CI+y1FJMM7BnguGZYYYYpFDqzRxxxPeUTSvmKS3yF6iK3o5DG/5BuGWGFc6uIPO/RKbV4A0xUb4dD0ryEAAAAASUVORK5CYII=" width="8" height="15" transform="matrix(1,0,0,1,0,0)" ></image></g></g></svg>
            </button>
            <button @click="changeSite(pages_no)">
              <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15"><defs></defs><g><g><title>noun_chevron_2286633</title><image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAA+ElEQVQ4T5XTvyuHQRwH8Ne3TFabxB+gKDEpk0UMfvwJJoxSBiYMpJTJ4E/wYxDFioXFbCKDRUaLkq7uct+ne756brque70/93meuxaGcIAlPPsbK5jEXLbWNm1hGE/4QR/e445FHOMWE6WAgMPox2shYBbndQEJdwoIxz4rBeS4cUAVNwoo4RAwgBd8YARv8dvM4xTXmKrDYW8XviPqwWecz+AC953wGvZwhFV8RXyCBSzX4f0ItrGZ/eNHjGIaVyWc4A42MviAsQTDehX/B0O/lykwx41gqtyNQ4S7nPfYixsMoq1iXnkcd9jFetZj6Hcr77H6OH4BUthBPqob+J4AAAAASUVORK5CYII=" width="15" height="15" transform="matrix(1,0,0,1,0,0)" ></image></g></g></svg>
            </button>
          </div>
        </div>
      </b-row>
    </b-col>
  </b-row>
</b-container>
</template>

<script>
import CCheckbox from '@/components/CCheckbox.vue';

export default {
  name: 'IsciFilter',
  components: {
    CCheckbox,
  },
  props: ['results', 'filters_temp', 'search_by_author_temp', 'page', 'pages_no', 'pagination'],
  computed: {
    filters: {
      get() {
        return this.filters_temp;
      },
      set(newValue) {
        this.$emit('update:filters_temp', newValue);
      },
    },
    search_by_author: {
      get() {
        return this.search_by_author_temp;
      },
      set(newValue) {
        this.$emit('update:search_by_author_temp', newValue);
      },
    },
  },
  methods: {
    showDetails(index) {
      this.$emit('show-details', index);
    },
    updateFilters() {
      this.$emit('update-filters');
    },
    resetFilters() {
      Object.keys(this.filters).forEach((key) => {
        console.log(this.filters[key]);
        this.filters[key] = [];
      });
      console.log(this.filters);
      this.$emit('update-filters');
    },
    async changeSite(p) {
      this.$emit('change-site', p);
    },
  },
};
</script>

<style scoped lang="scss">

.filter-section {
  border-bottom: black 1px solid;
  padding: 1rem;

  h4 {
    margin-bottom: 0;

    &:focus {
      outline: none;
    }
  }

  .filter-section-button {
    position: absolute;
    right: 2rem;

    &:focus {
       outline: none;
    }

    &.collapsed {
      transform: rotate(0deg);
      transition: transform 500ms ease;
    }

    &.not-collapsed {
      transform: rotate(-180deg);
      transition: transform 500ms ease;
    }

    img {
      height: 1.5rem;
    }
  }
}

.filter-actions {
  span {
    cursor: pointer;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
}

.images {
  .thumbnail {
    padding: 0 0.5rem;
    margin-bottom: 1rem;
    img {
      height: 200px;
      width: 100%;
      object-fit: cover;
      cursor: pointer;
      &:hover {
        box-shadow: 0 0 1rem rgba(66, 78, 0, 0.5);
      }
    }
  }
}

.pagination {
  margin-bottom: 20px;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ul {
    display: inline-flex;
    padding: 0 0.5rem;
    margin: 0;

    li {
      list-style: none;
      margin: 0 0.1rem;
    }
  }

  button, li {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    border: 2px solid transparent;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    font-style: italic;
    color: black;
    cursor: pointer;
    transition: border-color 0.5s ease;

    &.active-page {
      background-color: #c8eb00;
      border-color: #c8eb00;
    }

    &:hover:not(.disabled), &.active-page:hover {
      background-color: #c8eb00;
      border-color: black;
    }

    &.disabled {
      background-color: transparent;
      cursor: default;
      color: black;
    }
  }

  button {
    margin: 0 0.25rem;
    background-color: rgba(0, 0, 0, 0.03);
  }
}

</style>
