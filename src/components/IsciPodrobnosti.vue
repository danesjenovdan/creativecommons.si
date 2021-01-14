<template>
<b-container>
  <b-row class="justify-content-center my-4">
    <div class="back-button d-flex">
      <img src="../assets/arrow.svg">
      <span>Nazaj na rezultate iskanja</span>
    </div>
  </b-row>
  <b-row class="justify-content-center">
    <b-col lg="10">
      <img src="../assets/Layer_4.png" class="img-fluid">
    </b-col>
  </b-row>
  <b-row class="justify-content-center">
    <button class="my-4">Prenesi sliko</button>
  </b-row>
  <b-row class="image-props">
    <b-col lg="4">
      <div class="grey-box">
        <h4>Attribution</h4>
        <div class="p-3 border-bottom border-dark">
          <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
            <img alt="Creative Commons License"
                 style="border-width:0"
                 src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" />
          </a>
          <br />
          This work is licensed under a
          <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
            Creative Commons Attribution-ShareAlike 4.0 International License
          </a>.
          <div>
            <button>Skopiraj obogateni tekst</button>
          </div>
        </div>
        <div class="p-3">
          <div class="code-section">
            <pre><code>...</code></pre>
          </div>
          <button>Skopiraj kodo za vdelavo</button>
        </div>
      </div>
    </b-col>
    <b-col lg="4">
      <div class="grey-box information">
        <h4>Informacije</h4>
        <div class="p-3">
          <h6>TITLE</h6>
          <p>Beauty & Makeup Line Icons</p>
          <h6>CREATOR</h6>
          <p>Katerine Melina</p>
          <h6>LICENSE</h6>
          <p>CC BY-NC-ND 4.0 cc-iconby license iconnc license iconnd license icon</p>
          <h6>SOURCE</h6>
          <p>https://www.behance.net/gallery/82077021/Beauty-Makeup-Line-Icons</p>
          <h6>DIMENSIONS</h6>
          <p>1400 × 934 pixels</p>
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
          <div>ICON</div>
          <div>BEAUTY ICONS</div>
          <div>ICON PACKS</div>
        </div>
      </div>
    </b-col>
    <b-col cols="12">
      <div class="grey-box images">
        <h4>Related images</h4>
        <b-row class="px-3">
          <b-col lg="3">
            <img src="../assets/Layer_4.png" class="img-fluid">
          </b-col>
          <b-col lg="3">
            <img src="../assets/Layer_4.png" class="img-fluid">
          </b-col>
          <b-col lg="3">
            <img src="../assets/Layer_4.png" class="img-fluid">
          </b-col>
          <b-col lg="3">
            <img src="../assets/Layer_4.png" class="img-fluid">
          </b-col>
        </b-row>
        <b-row class="px-3">
          <b-col lg="3">
            <img src="../assets/Layer_4.png" class="img-fluid">
          </b-col>
          <b-col lg="3">
            <img src="../assets/Layer_4.png" class="img-fluid">
          </b-col>
          <b-col lg="3">
            <img src="../assets/Layer_4.png" class="img-fluid">
          </b-col>
          <b-col lg="3">
            <img src="../assets/Layer_4.png" class="img-fluid">
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
};

/*
function escapeHTML(html) {
  return html.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
*/
</script>

<style scoped lang="scss">

.grey-box {
  margin-bottom: 2rem;
}

.back-button {
  cursor: pointer;

  span {
    font-size: 1rem;
    font-style: italic;
    font-weight: 500;
  }

  img {
    height: 1.5rem;
    transform: rotate(90deg);
    margin-right: 0.3rem;
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
  margin: 1rem 0;
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

  .code-section {
    background-color: white;
    border: 3px solid black;
    border-radius: 1rem;
    padding: 1rem;
  }

  button {
    border: none;
    border-radius: 2rem;
    text-transform: uppercase;
    font-style: italic;
    font-weight: 500;
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

</style>
