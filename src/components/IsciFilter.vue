<template>
<b-container>
  <b-row>
    <b-col cols="4">
      <div class="grey-box">
        <div class="filter-section">
              <span v-b-toggle="'collapse-1'" class="filter-section-button">
                <img src="../assets/arrow.svg" alt="Open button">
              </span>
          <h4 class="font-italic">Iščem nekaj, kar lahko...</h4>
          <b-collapse id="collapse-1">
            <!-- v-model="checkedValue" -->
            <CCheckbox text="Uporabim za komercialne namene"></CCheckbox>
            <CCheckbox text="Išči po ustvarjalcih"></CCheckbox>
          </b-collapse>
        </div>
        <div class="filter-section">
              <span v-b-toggle="'collapse-2'" class="filter-section-button">
                <img src="../assets/arrow.svg" alt="Open button">
              </span>
          <h4 class="font-italic">Vse licence</h4>
          <b-collapse id="collapse-2">
            <CCheckbox text="CC0"></CCheckbox>
            <CCheckbox text="Public Domain Mark"></CCheckbox>
            <CCheckbox text="BY"></CCheckbox>
            <CCheckbox text="BY-SA"></CCheckbox>
            <CCheckbox text="BY-NC"></CCheckbox>
            <CCheckbox text="BY-ND"></CCheckbox>
            <CCheckbox text="BY-NC-SA"></CCheckbox>
            <CCheckbox text="BY-NC-ND"></CCheckbox>
          </b-collapse>
        </div>
        <div class="filter-section">
              <span v-b-toggle="'collapse-3'" class="filter-section-button">
                <img src="../assets/arrow.svg" alt="Open button">
              </span>
          <h4 class="font-italic">Vsi viri</h4>
          <b-collapse id="collapse-3">
            <CCheckbox text="..."></CCheckbox>
            <CCheckbox text="..."></CCheckbox>
            <CCheckbox text="..."></CCheckbox>
          </b-collapse>
        </div>
        <div class="filter-section">
              <span v-b-toggle="'collapse-4'" class="filter-section-button">
                <img src="../assets/arrow.svg" alt="Open button">
              </span>
          <h4 class="font-italic">Vrste slike</h4>
          <b-collapse id="collapse-4">
            <CCheckbox text="Fotografije"></CCheckbox>
            <CCheckbox text="Ilustracije"></CCheckbox>
            <CCheckbox text="Digitized Artworks"></CCheckbox>
          </b-collapse>
        </div>
        <div class="filter-section">
              <span v-b-toggle="'collapse-5'" class="filter-section-button">
                <img src="../assets/arrow.svg" alt="Open button">
              </span>
          <h4 class="font-italic">Vrste datoteke</h4>
          <b-collapse id="collapse-5">
            <CCheckbox text="JPEGs"></CCheckbox>
            <CCheckbox text="PNGs"></CCheckbox>
            <CCheckbox text="GIFs"></CCheckbox>
            <CCheckbox text="SVGs"></CCheckbox>
          </b-collapse>
        </div>
        <div class="filter-section">
              <span v-b-toggle="'collapse-6'" class="filter-section-button">
                <img src="../assets/arrow.svg" alt="Open button">
              </span>
          <h4 class="font-italic">Razmerje</h4>
          <b-collapse id="collapse-6">
            <CCheckbox text="Pokončno"></CCheckbox>
            <CCheckbox text="Ležeče"></CCheckbox>
            <CCheckbox text="Kvadrat"></CCheckbox>
          </b-collapse>
        </div>
        <div class="filter-section">
              <span v-b-toggle="'collapse-7'" class="filter-section-button">
                <img src="../assets/arrow.svg" alt="Open button">
              </span>
          <h4 class="font-italic">Velikost slike</h4>
          <b-collapse id="collapse-7">
            <CCheckbox text="Majhna"></CCheckbox>
            <CCheckbox text="Srednje"></CCheckbox>
            <CCheckbox text="Velika"></CCheckbox>
          </b-collapse>
        </div>
        <CCheckbox class="p-3" text="Išči po ustvarjalcih"></CCheckbox>
      </div>
      <button class="my-4">Počisti filtre</button>
    </b-col>
    <b-col cols="8" class="images">
      <b-row>
        <b-col cols="4">
          <img src="../assets/Layer_4.png" class="img-fluid">
        </b-col>
        <b-col cols="4">
          <img src="../assets/Layer_4.png" class="img-fluid">
        </b-col>
        <b-col cols="4">
          <img src="../assets/Layer_4.png" class="img-fluid">
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="4">
          <img src="../assets/Layer_4.png" class="img-fluid">
        </b-col>
        <b-col cols="4">
          <img src="../assets/Layer_4.png" class="img-fluid">
        </b-col>
        <b-col cols="4">
          <img src="../assets/Layer_4.png" class="img-fluid">
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="4">
          <img src="../assets/Layer_4.png" class="img-fluid">
        </b-col>
        <b-col cols="4">
          <img src="../assets/Layer_4.png" class="img-fluid">
        </b-col>
        <b-col cols="4">
          <img src="../assets/Layer_4.png" class="img-fluid">
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="4">
          <img src="../assets/Layer_4.png" class="img-fluid">
        </b-col>
        <b-col cols="4">
          <img src="../assets/Layer_4.png" class="img-fluid">
        </b-col>
        <b-col cols="4">
          <img src="../assets/Layer_4.png" class="img-fluid">
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</b-container>
</template>

<script>
import CCheckbox from '@/components/CCheckbox.vue';
// import { ref } from '@vue/composition-api';

export default {
  name: 'IsciFilter',
  components: {
    CCheckbox,
  },
  setup() {
    // const checkedValue = ref(false);
    // return { checkedValue };
  },
};
</script>

<style scoped lang="scss">

.filter-section {
  border-bottom: black 1px solid;
  padding: 1rem;

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
       transform: rotate(180deg);
       transition: transform 500ms ease;
     }

    img {
      height: 1.5rem;
    }
  }
}

button {
  background-color: #c8eb00;
  border: none;
  border-radius: 2rem;
  text-transform: uppercase;
  font-style: italic;
  font-weight: 500;
  font-size: 1.3rem;
  padding: 0.7rem 2.5rem;
}

.images {
  .row {
    div {
      padding: 0 0.5rem;
      margin-bottom: 1rem;
    }
  }
}

</style>
