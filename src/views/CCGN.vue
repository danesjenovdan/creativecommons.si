<template>
  <b-container>
    <b-row>
      <b-col>
        <h1 class="pt-4 pb-4 text-center">Razvoj CC gibanja v Sloveniji</h1>
      </b-col>
    </b-row>
    <b-row class="mb-5 justify-content-center text-center text-md-left">
      <b-col lg="8">
        <p>
          <a href="https://network.creativecommons.org/">Creative Commons Global Network</a> (CCGN)
          je del CC gibanja, ki ljudi s celega sveta povezuje pod skupno vizijo, tj. uresničevanje
          polnega potenciala interneta - univerzalen dostop do raziskovanja in izobraževanja, polna
          participacija pri kulturi - za spodbujanje novega obdobja razvoja, rasti in
          produktivnosti. Člane CCGN povezujejo tudi skupne vrednote (odprtost, digitalne dobrine,
          raznolikost, transparentnost in odgovornost, sodelovanje, odprto delovanje, uporaba
          zastonj in odprtih licenc ter podpiranje javne domene, medsebojno spoštovanje, sodelovanje
          in prispevanje).
        </p>
        <p>
          “Poslanstvo CCGN je zgraditi globalno skupnost ustvarjanja in znanja in negovati gibanje,
          ki se zavzema, spodbuja in omogoča odprtost in deljenje po svetu.”
        </p>
        <p>
          CCGN sestavljajo člani, ki so lahko posamezniki ali institucije. Član lahko postane
          vsakdo, ki se zavzema za cilje in vrednote CCGN. Vsi člani kot tudi ostali zainteresirani
          ljudje ali organizacije, ki delujejo na območju posamezne države, so združeni v t.i.
          chapter-je, ki služijo kot referenčna točka za njihovo delo.
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'CCGN',
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
