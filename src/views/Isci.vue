<template>
  <div class="about">
    <b-container>
      <b-row>
        <b-col>
          <h1 class="py-4 text-center">Kaj iščeš?</h1>
        </b-col>
      </b-row>
      <b-row class="justify-content-center align-items-center mb-4">
        <img src="../assets/bulb.svg" class="bulb-icon">
        <span class="sub-header text-center font-italic">
          Vsi materiali, ki jih najdeš med zadetki, so na voljo za ponovno uporabo.
        </span>
      </b-row>
      <b-row class="mt-2 mb-5 justify-content-center">
        <b-col cols="7">
          <img src="../assets/search.svg" class="search-icon">
          <input type="text" name="s">
        </b-col>
      </b-row>
    </b-container>
    <IsciFilter></IsciFilter>
    <IsciPodrobnosti></IsciPodrobnosti>
  </div>
</template>

<script>
import IsciFilter from '@/components/IsciFilter.vue';
import IsciPodrobnosti from '@/components/IsciPodrobnosti.vue';

export default {
  components: { IsciFilter, IsciPodrobnosti },
};

</script>

<style scoped lang="scss">

.sub-header {
  margin-left: 0.5rem;
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
