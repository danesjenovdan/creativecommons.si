<template>
<b-container>
  <b-row class="justify-content-center my-4">
    <div class="back-button d-flex" @click="back">
      <img src="../assets/arrow.svg">
      <span>Nazaj na rezultate iskanja</span>
    </div>
  </b-row>
  <b-row class="justify-content-center">
    <b-col lg="10" class="text-center">
      <img :src="details.url" class="img-fluid">
    </b-col>
  </b-row>
  <b-row class="justify-content-center">
    <a
      class="button my-4"
      :href="details.url"
      download="details.title"
      target="_blank">Prenesi sliko</a>
  </b-row>
  <b-row class="image-props">
    <b-col lg="4">
      <div class="grey-box">
        <h4>Attribution</h4>
        <div class="p-3 border-bottom border-dark font-weight-bold">
          <a
            rel="license"
            :href="details.license_url"
            v-html="$store.getters.licenses[details.license.toUpperCase()].normalBannerImage">
          </a>
          <br />
          This work is licensed under
          <a rel="license" :href="details.license_url">
            {{ licenseName }}
          </a>.
          <div>
            <button class="button" v-clipboard="'This work is licensed under ' + licenseName">
              Skopiraj obogateni tekst
            </button>
          </div>
        </div>
        <div class="p-3">
          <div class="code-section">
            <!-- <pre><code>{{ details.attribution }}</code></pre> -->
            {{ this.code_section }}
          </div>
          <button class="button" v-clipboard="code_section">Skopiraj kodo za vdelavo</button>
        </div>
      </div>
    </b-col>
    <b-col lg="4">
      <div class="grey-box information">
        <h4>Informacije</h4>
        <div class="p-3">
          <h6>TITLE</h6>
          <p>{{ details.title }}</p>
          <h6>CREATOR</h6>
          <p><a :href="details.creator_url">{{ details.creator }}</a></p>
          <h6>LICENSE</h6>
          <p class="text-uppercase">
            <a :href="details.license_url">
              {{ licenseName }}
            </a>
          </p>
          <h6>SOURCE</h6>
          <p><a :href="details.url">{{ details.url }}</a></p>
          <div v-if="details.width && details.height">
            <h6>DIMENSIONS</h6>
            <p>{{ details.width }} × {{ details.height }} pixels</p>
          </div>
        </div>
      </div>
    </b-col>
    <b-col lg="4">
      <div class="grey-box">
        <h4>Deli</h4>
        <div>
          <img src="../assets/Layer_3.png" class="img-fluid">
        </div>
      </div>
      <div class="grey-box">
        <h4>Oznake</h4>
        <div class="tags m-3">
          <div
            class="text-uppercase"
            v-for="(tag, index) in details.tags"
            :key="`${tag.name}-${index}`">{{ tag.name }}</div>
        </div>
      </div>
    </b-col>
    <b-col cols="12">
      <div class="grey-box images">
        <h4>Related images</h4>
        <b-row class="px-3">
          <b-col lg="3" v-for="image in relatedImages" :key="image.id">
            <img :src="image.thumbnail" class="thumbnail" @click="openImage(image)">
          </b-col>
        </b-row>
      </div>
    </b-col>
  </b-row>
</b-container>
</template>

<script>

export default {
  name: 'IsciPodrobnosti',
  props: ['details'],
  data() {
    return {
      relatedImages: [],
    };
  },
  computed: {
    code_section() {
      return `<a rel="license" href="${this.details.license_url}">${this.$store.getters.licenses[this.details.license.toUpperCase()].normalBannerImage}</a><br />This work is licensed under a <a rel="license" href="${this.details.license_version}">${this.$store.getters.licenses[this.details.license.toUpperCase()].prefix}${this.details.license.toUpperCase()} ${this.details.license_version}</a>.`;
    },
    licenseName() {
      return `${this.$store.getters.licenses[this.details.license.toUpperCase()].prefix}${this.details.license.toUpperCase()} ${this.details.license_version}`;
    },
  },
  watch: {
    details() {
      this.getRelatedImages();
    },
  },
  created() {
    this.getRelatedImages();
  },
  methods: {
    back() {
      this.$emit('back');
    },
    openImage(image) {
      this.$emit('open-image', image);
    },
    getRelatedImages() {
      this.axios.get(`http://api.creativecommons.engineering/v1/recommendations/images/${this.details.id}`).then((response) => {
        this.relatedImages = response.data.results;
        if (this.relatedImages.length > 8) {
          this.relatedImages = this.relatedImages.slice(0, 8);
        }
      });
    },
  },
};

</script>

<style scoped lang="scss">

.grey-box {
  margin-bottom: 2rem;

  a {
    color: black;
  }
}

.back-button {
  cursor: pointer;

  span {
    font-size: 1rem;
    font-style: italic;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    height: 1.5rem;
    transform: rotate(90deg);
    margin-right: 0.3rem;
  }
}

.image-props {
  margin-top: 3rem;

  h4 {
    text-transform: uppercase;
    padding: 1rem;
    border-bottom: black 1px solid;
  }

  .information {
    h6 {
      margin-bottom: 0;
    }

    p:nth-of-type(4) {
      overflow-wrap: anywhere;
    }
  }

  .tags div {
    font-size: 0.9rem;
    font-style: italic;
    font-weight: 500;
    border: #c8eb00 2px solid;
    border-radius: 1rem;
    padding: 0.3rem 1rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    display: inline-block;
  }

  .button {
    font-size: 1rem;
    padding: 0.5rem 1.5rem;
  }
}

.images {
  .row {
    div {
      padding: 0 0.5rem;
      margin-bottom: 1rem;
    }
  }
}

.thumbnail {
  height: 200px;
  width: 100%;
  object-fit: cover;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 1rem rgba(66, 78, 0, 0.5);
  }
}

</style>
