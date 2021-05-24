import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiImageSearchUrl: 'https://api.creativecommons.engineering/v1/images',
    apiImageSearchPageSize: 12,
    licenses: {
      CC0: {
        prefix: '',
        text: {
          title: 'Javna domena',
          content: 'Avtor svoje delo da v javno domeno in se tako odpove vsem pravicam, ki se jim lahko '
            + ' odpove. Uporabnikom je dovoljeno reproduciranje, distribuiranje, dajanje v najem, javna '
            + ' priobčitev in predelava avtorskega dela v vse namene, tudi komercialne, brez da bi jim '
            + 'bilo treba navesti avtorja izvirnega dela.',
        },
        normalBannerImage: '<img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/zero/1.0/88x31.png" />',
        smallBannerImage: '<img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/zero/1.0/80x15.png" />',
        normalBanner: '<a rel="license" href="http://creativecommons.org/licenses/zero/1.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/zero/1.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/zero/1.0/">CC0 1.0 Universal (CC0 1.0) Public Domain Dedication</a>.',
        smallBanner: '<a rel="license" href="http://creativecommons.org/licenses/zero/1.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/zero/1.0/80x15.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/zero/1.0/">CC0 1.0 Universal (CC0 1.0) Public Domain Dedication</a>.',
      },
      BY: {
        prefix: 'CC ',
        text: {
          title: 'Priznanje avtorstva',
          content: 'Uporabnikom je dovoljeno reproduciranje, distribuiranje, dajanje v najem, javna '
            + 'priobčitev in predelava avtorskega dela v vse namene, tudi komercialne, pod pogojem, da '
            + 'navedejo avtorja izvirnega dela.',
        },
        normalBannerImage: '<img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" />',
        smallBannerImage: '<img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/80x15.png" />',
        normalBanner: '<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.',
        smallBanner: '<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/80x15.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.',
      },
      'BY-SA': {
        prefix: 'CC ',
        text: {
          title: 'Priznanje avtorstva - Deljenje pod enakimi pogoji',
          content: 'Uporabnikom je dovoljeno reproduciranje, distribuiranje, dajanje v najem, javna '
            + 'priobčitev in predelava izvirnega oziroma derivativnega avtorskega dela v vse namene, tudi '
            + 'komercialne, pod pogojem, da navedejo avtorja dela in da širijo izvirno oziroma derivativno '
            + 'avtorsko delo pod istimi pogoji.',
        },
        normalBannerImage: '<img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" />',
        smallBannerImage: '<img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png" />',
        normalBanner: '<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.',
        smallBanner: '<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.',
      },
      'BY-ND': {
        prefix: 'CC ',
        text: {
          title: 'Priznanje avtorstva - Brez predelave',
          content: 'Uporabnikom je dovoljeno reproduciranje, distribuiranje, dajanje v najem in javna '
            + 'priobčitev izvirnega avtorskega dela v vse namene, tudi komercialne, pod pogojem, da '
            + 'navedejo avtorja izvirnega dela in da dela ne spreminjajo.',
        },
        normalBannerImage: '<img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nd/4.0/88x31.png" />',
        smallBannerImage: '<img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nd/4.0/80x15.png" />',
        normalBanner: '<a rel="license" href="http://creativecommons.org/licenses/by-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nd/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nd/4.0/">Creative Commons Attribution-NoDerivatives 4.0 International License</a>.',
        smallBanner: '<a rel="license" href="http://creativecommons.org/licenses/by-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nd/4.0/80x15.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nd/4.0/">Creative Commons Attribution-NoDerivatives 4.0 International License</a>.',
      },
      'BY-NC': {
        prefix: 'CC ',
        text: {
          title: 'Priznanje avtorstva - Nekomercialno',
          content: 'Uporabnikom je dovoljeno reproduciranje, distribuiranje, dajanje v najem, javna '
            + 'priobčitev in predelava izvirnega ali derivativnega avtorskega dela, vendar samo v '
            + 'nekomercialne namene ter pod pogojem, da navedejo avtorja dela.',
        },
        normalBannerImage: '<img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" />',
        smallBannerImage: '<img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/80x15.png" />',
        normalBanner: '<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>.',
        smallBanner: '<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/80x15.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>.',
      },
      'BY-NC-SA': {
        prefix: 'CC ',
        text: {
          title: 'Priznanje avtorstva - Nekomercialno - Deljenje pod enakimi pogoji',
          content: 'Uporabnikom je dovoljeno reproduciranje, distribuiranje, dajanje v najem, javna '
            + 'priobčitev in predelava izvirnega oziroma derivativnega avtorskega dela, vendar samo v '
            + 'nekomercialne namene, pod pogojem, da navedejo avtorja dela in da širijo izvirno oziroma '
            + 'derivativno avtorsko delo pod istimi pogoji.',
        },
        normalBannerImage: '<img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" />',
        smallBannerImage: '<img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" />',
        normalBanner: '<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.',
        smallBanner: '<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.',
      },
      'BY-NC-ND': {
        prefix: 'CC ',
        text: {
          title: 'Priznanje avtorstva - Nekomercialno - Brez predelav',
          content: 'Uporabnikom je dovoljeno reproduciranje, distribuiranje, dajanje v najem in javna '
            + 'priobčitev izvirnega avtorskega dela, vendar samo v nekomercialne namene, pod pogojem, da '
            + 'navedejo avtorja izvirnega dela in da dela ne spreminjajo.',
        },
        normalBannerImage: '<img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" />',
        smallBannerImage: '<img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/80x15.png" />',
        normalBanner: '<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.',
        smallBanner: '<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/80x15.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.',
      },
    },
  },
  getters: {
    licenses: (state) => state.licenses,
    apiImageSearchUrl: (state) => state.apiImageSearchUrl,
    apiImageSearchPageSize: (state) => state.apiImageSearchPageSize,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
