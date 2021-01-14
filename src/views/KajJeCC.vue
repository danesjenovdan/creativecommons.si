<template>
  <b-container>
    <b-row>
      <b-col>
        <h1 class="pt-4 pb-4 text-center">Kaj je CC?</h1>
      </b-col>
    </b-row>
    <b-row class="mb-5 justify-content-center text-center text-md-left">
      <b-col lg="8">
        <p>
          <a href="http://creativecommons.org/">Creative Commons</a> je globalno gibanje, ki se
          odziva na dve izraziti dejstvi, ki sta značilni za trenutno pravno urejanje ustvarjalnosti
          oziroma za avtorsko pravo. Prvič, avtorska pravica je nujna za dostojanstvo avtorjev in
          pogosto tudi osnova za zagotavljanje spodbud za ustvarjanje. Drugič, obstoječi sistem
          avtorskega prava je preveč zapleten in nemalokrat celo v nasprotju z interesi
          ustvarjalcev, kar je postalo še bolj problematično z najnovejšimi zakonodajnimi
          spremembami, ki so bile sprejete zaradi pojava digitalnih tehnologij.
        </p>
        <p>
          Creative Commons avtorjem/ustvarjalcem ponuja zelo enostavna in prosto dostopna orodja, s
          katerimi lahko svoja dela ponudijo javnosti, pri čemer zadržijo vse tiste pravice po
          avtorskem pravu, za katere menijo, da jih na delih morajo zadržati. Tak model ponujanja
          avtorskih del, kjer so le “nekatere pravice pridržane”, nikakor ni v nasprotju z avtorskim
          pravom. Prav nasprotno; Creative Commons model temelji na avtorski pravici, kot je
          določena v zakonu. Preprosto povedano to pomeni, da lahko ustvarjalec svoje delo objavi v
          elektronski obliki (npr. na svoji spletni strani) in ga enostavno in brez dodatnega
          posredovanja pravnikov opremi z eno izmed Creative Commons licenc, ki natančno določajo,
          katere uporabe njegovega dela so dovoljene in katere pravice so pridržane. Avtor z licenco
          ne more omejiti izjem od avtorske pravice, kakor so določene z avtorskim zakonom.
        </p>
        <p>
          Tako oblikovano licenco avtor preprosto “prilepi” k svojemu objavljenemu avtorskemu delu,
          ki ga opremi tudi s CC ikono. Vsi uporabniki, ki bodo tako objavljena dela želeli
          uporabiti, bodo s klikom na ikono na enostaven način razbrali obvestilo, katere svoboščine
          jim je avtor naklonil in katere pravice v skladu z zakonom si je pridržal.
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'KajJeCC',
};
</script>

<style scoped lang="scss">
p {
  margin-bottom: 1rem;
}

a {
  color: black;
  text-decoration: underline;

  &:hover {
    color: #c8eb00;
  }
}
</style>
