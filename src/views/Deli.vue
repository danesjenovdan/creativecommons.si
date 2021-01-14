<template>
  <b-container>
    <b-row>
      <b-col>
        <h1 class="pt-4 pb-4 text-center text-md-left">Izberi primerno licenco</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="6">
        <hr>
        <p class="form-question">Ali dovoliš predelave svojega dela?</p>
        <div class="form-inputs">
          <label class="radio">
            <input type="radio" name="vprasanje-1">
            <span class="radio-control"></span>
            <span class="radio-label">Da</span>
          </label>
          <!--<input type="radio" id="v1" name="gender" value="male">
          <label for="v1">Da</label>-->
          <label class="radio">
            <input type="radio" name="vprasanje-1">
            <span class="radio-control"></span>
            <span class="radio-label">Ne</span>
          </label>
          <label class="radio">
            <input type="radio" name="vprasanje-1">
            <span class="radio-control"></span>
            <span class="radio-label">Da, če predelave ponudijo pod enakimi pogoji.</span>
          </label>
        </div>
        <hr>
        <p class="form-question">Ali dovoliš komercialno uporabo svojega dela?</p>
        <div class="form-inputs">
          <label class="radio">
            <input type="radio" name="vprasanje-2">
            <span class="radio-control"></span>
            <span class="radio-label">Da</span>
          </label>
          <label class="radio">
            <input type="radio" name="vprasanje-2">
            <span class="radio-control"></span>
            <span class="radio-label">Ne</span>
          </label>
        </div>
        <hr>
        <p class="form-question">Ali želiš, da te vedno navedejo kot avtorja?</p>
        <div class="form-inputs">
          <label class="radio">
            <input type="radio" name="vprasanje-3">
            <span class="radio-control"></span>
            <span class="radio-label">Da</span>
          </label>
          <label class="radio">
            <input type="radio" name="vprasanje-3">
            <span class="radio-control"></span>
            <span class="radio-label">Ne</span>
          </label>
        </div>
        <hr>
      </b-col>
      <b-col md="6" class="grey-box mt-4 mt-md-0">
        <h5 class="pt-4 text-uppercase">Predlagana licenca</h5>
        <div id="generated-license-icon"></div>
        <div id="generated-license-text"></div>
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col>
        <h1 class="pt-4 text-center text-md-left">Dodaj CC pasico na svoje spletno mesto</h1>
      </b-col>
    </b-row>
    <b-row class="mb-4">
      <b-col cols="12">
        <hr class="mt-4 mb-4">
        <div class="form-inputs">
          <label class="radio">
            <input type="radio" name="vprasanje-4">
            <span class="radio-control"></span>
            <span class="radio-label">navadna pasica</span>
          </label>
          <label class="radio">
            <input type="radio" name="vprasanje-4">
            <span class="radio-control"></span>
            <span class="radio-label">mala pasica</span>
          </label>
        </div>
      </b-col>
      <b-col cols="12" class="grey-box">
      </b-col>
    </b-row>
    <b-row class="mb-5">
      <b-col>
        <h1 class="pt-4 pb-4 text-center text-md-left">
          Deli svoje delo na kateri od platform, ki podpirajo CC
        </h1>
        <hr class="mb-4">
        <b-row class="my-lg-5 justify-content-center">
          <b-col md="2" class="d-flex justify-content-center align-items-center my-3 my-lg-0">
            <img src="../assets/logos/flickr.png" alt="" class="img-fluid">
          </b-col>
          <b-col md="2" class="d-flex justify-content-center align-items-center my-3 my-lg-0">
            <img src="../assets/logos/bandcamp.png" alt="" class="img-fluid">
          </b-col>
          <b-col md="2" class="d-flex justify-content-center align-items-center my-3 my-lg-0">
            <img src="../assets/logos/wikipedia.jpg" alt="" class="img-fluid">
          </b-col>
          <b-col md="2" class="d-flex justify-content-center align-items-center my-3 my-lg-0">
            <img src="../assets/logos/youtube.png" alt="" class="img-fluid">
          </b-col>
          <b-col md="2" class="d-flex justify-content-center align-items-center my-3 my-lg-0">
            <img src="../assets/logos/sketchfab.png" alt="" class="img-fluid">
          </b-col>
        </b-row>
        <b-row class="my-lg-5 justify-content-center">
          <b-col md="2" class="d-flex justify-content-center align-items-center my-3 my-lg-0">
            <img src="../assets/logos/internet_archive.png" alt="" class="img-fluid">
          </b-col>
          <b-col md="2" class="d-flex justify-content-center align-items-center my-3 my-lg-0">
            <img src="../assets/logos/vimeo.png" alt="" class="img-fluid">
          </b-col>
          <b-col md="2" class="d-flex justify-content-center align-items-center my-3 my-lg-0">
            <img src="../assets/logos/wikimedia.png" alt="" class="img-fluid">
          </b-col>
          <b-col md="2" class="d-flex justify-content-center align-items-center my-3 my-lg-0">
            <img src="../assets/logos/fma.jpg" alt="" class="img-fluid">
          </b-col>
          <b-col md="2" class="d-flex justify-content-center align-items-center my-3 my-lg-0">
            <img src="../assets/logos/skillscommon.png" alt="" class="img-fluid">
          </b-col>
        </b-row>
        <b-row class="my-lg-5 justify-content-center">
          <b-col md="2" class="d-flex justify-content-center align-items-center my-3 my-lg-0">
            <img src="../assets/logos/europeana.jpg" alt="" class="img-fluid">
          </b-col>
          <b-col md="2" class="d-flex justify-content-center align-items-center my-3 my-lg-0">
            <img src="../assets/logos/tribe_of_noise.jpg" alt="" class="img-fluid">
          </b-col>
          <b-col md="2" class="d-flex justify-content-center align-items-center my-3 my-lg-0">
            <img src="../assets/logos/Jamendo.png" alt="" class="img-fluid">
          </b-col>
          <b-col md="2" class="d-flex justify-content-center align-items-center my-3 my-lg-0">
            <img src="../assets/logos/mit.png" alt="" class="img-fluid">
          </b-col>
          <b-col md="2" class="d-flex justify-content-center align-items-center my-3 my-lg-0">
            <img src="../assets/logos/PLOS.jpg" alt="" class="img-fluid">
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped lang="scss">

hr {
  border-color: black;
  width: 100%;
  margin: 0;

  @media (min-width: 768px) {
    width: 6rem;
    margin: 0 0 0 -1rem;
  }
}

.form-question {
  font-size: 1.2rem;
  font-style: italic;
  font-weight: 500;
  padding-top: 1.5rem;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
}

.form-inputs {
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    justify-content: start;
  }
}

.radio {
  //display: grid;
  //grid-template-columns: min-content auto;
  display: flex;
  padding-bottom: 1.5rem;
  margin-right: 1rem;
  cursor: pointer;

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + .radio-control {
      background: radial-gradient(#c8eb00 34%, black 36%, black 49%, rgba(255, 0, 0, 0) 51%);
    }

    &:checked + .radio-control + .radio-label {
      font-weight: 600;
    }

    &:focus + .radio-control {
      //box-shadow: 0 0 0 0.05em #fff, 0 0 0.15em 0.1em black;
    }
  }

  .radio-control {
    display: block;
    width: 1.5rem;
    min-width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    border: 2px solid black;
  }

  .radio-label {
    padding-left: 0.5rem;
  }
}

.grey-box {
  background-color: rgba(0, 0, 0, 0.03);

  h5 {
    font-weight: 600;
  }
}

img {
  //height: 100px;
  max-height: 2rem;
  opacity: 60%;
}

</style>
