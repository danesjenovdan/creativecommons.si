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
            <input type="radio" v-model="predelava" value="da" v-on:change="generateLicense">
            <span class="radio-control"></span>
            <span class="radio-label">Da</span>
          </label>
          <label class="radio">
            <input type="radio" v-model="predelava" value="ne" v-on:change="generateLicense">
            <span class="radio-control"></span>
            <span class="radio-label">Ne</span>
          </label>
          <label class="radio">
            <input type="radio" v-model="predelava" value="pogojno" v-on:change="generateLicense">
            <span class="radio-control"></span>
            <span class="radio-label">Da, če predelave ponudijo pod enakimi pogoji.</span>
          </label>
        </div>
        <hr>
        <p class="form-question">Ali dovoliš komercialno uporabo svojega dela?</p>
        <div class="form-inputs">
          <label class="radio">
            <input type="radio" v-model="komercialno" value="da" v-on:change="generateLicense">
            <span class="radio-control"></span>
            <span class="radio-label">Da</span>
          </label>
          <label class="radio">
            <input type="radio" v-model="komercialno" value="ne" v-on:change="generateLicense">
            <span class="radio-control"></span>
            <span class="radio-label">Ne</span>
          </label>
        </div>
        <hr>
        <p class="form-question">Ali želiš, da te vedno navedejo kot avtorja?</p>
        <div class="form-inputs">
          <label class="radio">
            <input type="radio" v-model="avtorstvo" value="da" v-on:change="generateLicense">
            <span class="radio-control"></span>
            <span class="radio-label">Da</span>
          </label>
          <label class="radio">
            <input type="radio" v-model="avtorstvo" value="ne" v-on:change="generateLicense">
            <span class="radio-control"></span>
            <span class="radio-label">Ne</span>
          </label>
        </div>
        <hr>
      </b-col>
      <b-col md="6" class="grey-box">
        <h5 class="text-uppercase pb-1">Predlagana licenca</h5>
        <div class="generated-license-icon pb-1">
          <img :src="require(`@/../public/licenses/license-${licenseName}.png`)"
               alt="license icon">
        </div>
        <div class="generated-license-code pb-3">
          <span>{{ licenseName }}</span>
        </div>
        <div class="generated-license-text" v-html="licenseText[licenseName]"></div>
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
            <input type="radio" v-model="pasica" value="navadna" checked v-on:change="shareLicense">
            <span class="radio-control"></span>
            <span class="radio-label">navadna pasica</span>
          </label>
          <label class="radio">
            <input type="radio" v-model="pasica" value="mala" v-on:change="shareLicense">
            <span class="radio-control"></span>
            <span class="radio-label">mala pasica</span>
          </label>
        </div>
      </b-col>
      <b-col cols="12" class="grey-box">
        <b-row class="justify-content-center">
          <b-col lg="9">
            <div id="pasica" class="d-inline-block" v-html="pasicaKoda">
            </div>
            <div class="code-section my-4">{{ pasicaKoda }}</div>
            <button class="button" v-clipboard="pasicaKoda">Skopiraj kodo za vdelavo</button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="my-5 platforms">
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

<script>

export default {
  name: 'Deli',
  data() {
    return {
      predelava: 'da',
      komercialno: 'da',
      avtorstvo: 'ne',
      pasica: 'navadna',
      pasicaKoda: '<a rel="license" href="http://creativecommons.org/licenses/zero/1.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/zero/1.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/zero/1.0/">CC0 1.0 Universal (CC0 1.0) Public Domain Dedication</a>.',
      pasicaNavadna: '88x31',
      pasicaMala: '80x15',
      licenseName: 'CC0',
      licenseText: {
        CC0: '<h5 class="text-uppercase">Javna domena</h5>'
          + '<p>Avtor svoje delo da v javno domeno in se tako odpove vsem pravicam, ki se jim lahko '
          + ' odpove. Uporabnikom je dovoljeno reproduciranje, distribuiranje, dajanje v najem, javna '
          + ' priobčitev in predelava avtorskega dela v vse namene, tudi komercialne, brez da bi jim '
          + 'bilo treba navesti avtorja izvirnega dela.</p>',
        'CC BY': '<h5 class="text-uppercase">Priznanje avtorstva</h5>'
          + '<p>Uporabnikom je dovoljeno reproduciranje, distribuiranje, dajanje v najem, javna '
          + 'priobčitev in predelava avtorskega dela v vse namene, tudi komercialne, pod pogojem, da '
          + 'navedejo avtorja izvirnega dela.</p>',
        'CC BY-SA': '<h5 class="text-uppercase">Priznanje avtorstva - Deljenje pod enakimi pogoji</h5>'
          + '<p>Uporabnikom je dovoljeno reproduciranje, distribuiranje, dajanje v najem, javna '
          + 'priobčitev in predelava izvirnega oziroma derivativnega avtorskega dela v vse namene, tudi '
          + 'komercialne, pod pogojem, da navedejo avtorja dela in da širijo izvirno oziroma derivativno '
          + 'avtorsko delo pod istimi pogoji.</p>',
        'CC BY-ND': '<h5 class="text-uppercase">Priznanje avtorstva - Brez predelav</h5>'
          + '<p>Uporabnikom je dovoljeno reproduciranje, distribuiranje, dajanje v najem in javna '
          + 'priobčitev izvirnega avtorskega dela v vse namene, tudi komercialne, pod pogojem, da '
          + 'navedejo avtorja izvirnega dela in da dela ne spreminjajo.</p>',
        'CC BY-NC': '<h5 class="text-uppercase">Priznanje avtorstva - Nekomercialno</h5>'
          + '<p>Uporabnikom je dovoljeno reproduciranje, distribuiranje, dajanje v najem, javna '
          + 'priobčitev in predelava izvirnega ali derivativnega avtorskega dela, vendar samo v '
          + 'nekomercialne namene ter pod pogojem, da navedejo avtorja dela.</p>',
        'CC BY-NC-SA': '<h5 class="text-uppercase">Priznanje avtorstva - Nekomercialno - Deljenje pod enakimi pogoji</h5>'
          + '<p>Uporabnikom je dovoljeno reproduciranje, distribuiranje, dajanje v najem, javna '
          + 'priobčitev in predelava izvirnega oziroma derivativnega avtorskega dela, vendar samo v '
          + 'nekomercialne namene, pod pogojem, da navedejo avtorja dela in da širijo izvirno oziroma '
          + 'derivativno avtorsko delo pod istimi pogoji.</p>',
        'CC BY-NC-ND': '<h5 class="text-uppercase">Priznanje avtorstva - Nekomercialno - Brez predelav</h5>'
          + '<p>Uporabnikom je dovoljeno reproduciranje, distribuiranje, dajanje v najem in javna '
          + 'priobčitev izvirnega avtorskega dela, vendar samo v nekomercialne namene, pod pogojem, da '
          + 'navedejo avtorja izvirnega dela in da dela ne spreminjajo.</p>',
      },
      navadnaPasica: {
        CC0: '<a rel="license" href="http://creativecommons.org/licenses/zero/1.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/zero/1.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/zero/1.0/">CC0 1.0 Universal (CC0 1.0) Public Domain Dedication</a>.',
        'CC BY': '<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.',
        'CC BY-SA': '<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.',
        'CC BY-ND': '<a rel="license" href="http://creativecommons.org/licenses/by-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nd/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nd/4.0/">Creative Commons Attribution-NoDerivatives 4.0 International License</a>.',
        'CC BY-NC': '<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>.',
        'CC BY-NC-SA': '<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.',
        'CC BY-NC-ND': '<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.',
      },
      malaPasica: {
        CC0: '<a rel="license" href="http://creativecommons.org/licenses/zero/1.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/zero/1.0/80x15.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/zero/1.0/">CC0 1.0 Universal (CC0 1.0) Public Domain Dedication</a>.',
        'CC BY': '<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/80x15.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.',
        'CC BY-SA': '<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.',
        'CC BY-ND': '<a rel="license" href="http://creativecommons.org/licenses/by-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nd/4.0/80x15.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nd/4.0/">Creative Commons Attribution-NoDerivatives 4.0 International License</a>.',
        'CC BY-NC': '<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/80x15.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>.',
        'CC BY-NC-SA': '<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.',
        'CC BY-NC-ND': '<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/80x15.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.',
      },
    };
  },
  methods: {
    generateLicense() {
      if (this.avtorstvo === 'ne') {
        this.licenseName = 'CC0';
      } else {
        this.licenseName = 'CC BY';
        if (this.komercialno === 'ne') {
          this.licenseName = this.licenseName.concat('-NC');
        }
        if (this.predelava === 'ne') {
          this.licenseName = this.licenseName.concat('-ND');
        } else if (this.predelava === 'pogojno') {
          this.licenseName = this.licenseName.concat('-SA');
        }
      }
      this.shareLicense();
    },
    shareLicense() {
      if (this.pasica === 'navadna') {
        this.pasicaKoda = this.navadnaPasica[this.licenseName];
      } else {
        this.pasicaKoda = this.malaPasica[this.licenseName];
      }
    },
  },
};

</script>

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

button {
  position: absolute;
  padding: 0.5rem 2.5rem;
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

  .radio {
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
}

.grey-box {
  padding: 2rem;

  .generated-license-icon img {
    max-height: 50px;
  }

  .generated-license-code span {
    font-size: 2.5rem;
    font-weight: 600;
    box-shadow: inset 0 -0.6em #c8eb00;
  }
}

.platforms {
  img {
    max-height: 2rem;
    opacity: 60%;
  }
}

</style>
