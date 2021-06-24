<template>
<b-container fluid class="navigation-bg">
  <b-container class="navigation-bar pb-4">
    <b-row class="pt-4">
      <b-col md="5">
        <router-link to="/">
          <img alt="CC SLO logo" class="img-fluid" src="@/assets/cc_slo_logo.svg">
        </router-link>
      </b-col>
    </b-row>
    <b-row class="my-4 text-center text-md-left">
      <b-col>
        <p class="font-italic">
          Razvoj sodobnih digitalnih tehnologij in interneta sta dodobra pretresla svet
          avtorskega prava in sta hkrati z neskončnimi možnostmi reprodukcije in distribucije
          prinesla tudi neslutene možnosti ustvarjanja. Pri tem se je porodila in razširila ideja,
          da so se nekateri ustvarjalci pripravljeni odreči določenim pravicam, ki jim jih daje
          avtorsko pravo. Kot alternativa modelu “vse pravice pridržane” se je pojavil model
          “nekatere pravice pridržane”. Na tej ideji je osnovana tudi neprofitna organizacija
          Creative Commons (CC), katere namen je s pomočjo vnaprej pripravljenih licenc in podporo
          ustvarjalcem omogočiti in olajšati razširanje svojih del in hkrati pri ustvarjanju
          graditi na delih drugih.
        </p>
      </b-col>
    </b-row>
    <b-row id="nav">
      <router-link to="/" class="col-12 col-md-6 col-lg-3 mb-2 mb-md-4">
        <div>
          <h4>Dan odprtega znanja</h4>
          <p class="d-none d-md-block">
            TBA
          </p>
          <div class="active-tab">
            <img alt="arrow" src="@/assets/arrow.svg">
          </div>
        </div>
      </router-link>
      <router-link to="/isci" class="col-12 col-md-6 col-lg-3 mb-2 mb-md-4">
        <div>
          <h4>Poišči delo, ki ga lahko uporabiš</h4>
          <p class="d-none d-md-block">
            Išči med več kot 300 milijoni slik, ki jih lahko uporabiš. Rezultate lahko prilagajaš
            glede na tip licence, vrsto umetniškega dela, tip datoteke in njeno velikost.
          </p>
          <div class="active-tab">
            <img alt="arrow" src="@/assets/arrow.svg">
          </div>
        </div>
      </router-link>
      <router-link to="/deli" class="col-12 col-md-6 col-lg-3 mb-2 mb-md-4">
        <div>
          <h4>Deli svoje delo</h4>
          <p class="d-none d-md-block">
            Bi rad/-a delil/-a svoja dela pa ne veš, katera licenca je prava zate oziroma, kako
            to čisto zares storiš? Pripravili smo čarovnika, s katerim je to lažje kot kadarkoli
            prej.
          </p>
          <div class="active-tab">
            <img alt="arrow" src="@/assets/arrow.svg">
          </div>
        </div>
      </router-link>
      <router-link to="/kako-deluje" class="col-12 col-md-6 col-lg-3 mb-2 mb-md-4">
        <div>
          <h4>Kako delujejo CC licence?</h4>
          <p class="d-none d-md-block">
            Razišči različne tipe CC licenc.
          </p>
          <div class="active-tab">
            <img alt="arrow" src="@/assets/arrow.svg">
          </div>
        </div>
      </router-link>
    </b-row>
  </b-container>
</b-container>
</template>

<script>
export default {
  name: 'Navigation',
};
</script>

<style scoped lang="scss">

.navigation-bg {
  background-color: rgba(200,235,0,0.15);

  @media (min-width: 768px) {
    background: linear-gradient(rgba(200,235,0,0.15) 80%, white 80%);
  }
}

.navigation-bar {
  p {
    font-size: 1.6rem;
    line-height: 1.2;

    @media (min-width: 768px) {
      font-size: 1.2rem;
    }
  }
}

#nav {
  a {
    &> div {
      padding: 1rem;
      box-shadow: 0 0 2rem rgba(66, 78, 0, 0.5);
      border-radius: 0.5rem;
      background-color: white;
      color: black;
      height: 100%;
    }

    &:hover, &.router-link-exact-active {
      text-decoration: none;

      h4 {
        box-shadow: inset 0 -0.1em white, inset 0 -0.6em #c8eb00;
      }
    }

    &.router-link-exact-active {
      @media (min-width: 768px) {
        .active-tab {
          display: block;
          position: absolute;
          right: 15px;
          bottom: 0;
          background-color: #c8eb00;
          height: 3rem;
          width: 3rem;
          border-top-left-radius: 100%;
          border-bottom-right-radius: 0.5rem;

          img {
            transform: rotate(-45deg);
            height: 70%;
            margin: 0.8rem;
          }
        }
      }
    }

    h4 {
      text-transform: uppercase;
      font-weight: 600;
      display: inline;
    }

    p {
      font-size: 0.9rem;
      padding-top: 0.5rem;
    }

    .active-tab {
      display: none;
    }
  }
}
</style>
