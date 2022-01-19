<template>
  <div class="footer-wrapper">
    <footer>
      <div id="legal">
        <h3>Max Baumann</h3>
        <p>
          Thanks Twitter and contributors for the
          <a href="https://twemoji.twitter.com/" target="__blank">Emoji</a>.
          <br />
          It’s licensed under
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="__blank"
            >CC-BY 4.0</a
          >!
        </p>
        <br />
        <p>
          Thank you
          <a href="https://www.manypixels.co/gallery/" target="__blank"
            >ManyPixels</a
          >
          and <a href="https://undraw.co/" target="__blank">unDraw</a> for the
          Illustrations!
        </p>

        <p>
          Email Icon made by
          <a
            href="https://www.flaticon.com/authors/pixel-perfect"
            title="Pixel perfect"
            >Pixel perfect</a
          >
          from
          <a href="https://www.flaticon.com/" title="Flaticon"
            >www.flaticon.com</a
          >
        </p>
        <br />

        <p>
          <small>
            LinkedIn, the LinkedIn logo, the IN logo and InMail are registered
            trademarks or trademarks of LinkedIn Corporation and its affiliates
            in the United States and/or other countries.
          </small>
        </p>
      </div>
      <div>
        <h3>Privacy</h3>
        <p>
          This website is hosted on Cloudflare Pages. Their
          <a href="https://www.cloudflare.com/privacypolicy/" target="__blank"
            >privacy policy</a
          >
          applies.
          <br />
          For technical and security reasons Cloudflare may store basic
          information about your browser like the User-Agent, IP-Address, or
          Operating System.
          <br />
          <br />
          <p>No tracking scripts, no cookies. Just a website.</p>
        </p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>
.footer-wrapper {
  background: #3d3d3d;
}

footer {
  max-width: 75rem;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 2rem 2rem;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & > div {
    margin: 0 auto;
    width: 50%;
    padding: 0.5rem 0.8rem;

    & > p {
      padding-left: 0.1rem;
    }

    @media (max-width: 900px) {
      width: 80%;
    }
  }
}

a {
  color: white;
}

h3 {
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
  margin-bottom: 0.8rem;
}
</style>
