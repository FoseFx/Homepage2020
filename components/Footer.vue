<template>
<div class="footer-wrapper">
  <footer>
    <div id="legal">
      <h3>Max Baumann</h3>
      <p>
        Thank you Twitter and contributors for the
        <a href="https://twemoji.twitter.com/" target="__blank">Emoji</a>. It’s
        licensed under
        <a href="https://creativecommons.org/licenses/by/4.0/" target="__blank"
          >CC-BY 4.0</a
        >!
      </p>
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

      <p>
        LinkedIn, the LinkedIn logo, the IN logo and InMail are registered
        trademarks or trademarks of LinkedIn Corporation and its affiliates in
        the United States and/or other countries.
      </p>
    </div>
    <div>
      <h3>Privacy</h3>
      <p>
        I use Cloudflare for caching. Their
        <a href="https://www.cloudflare.com/privacypolicy/" target="__blank"
          >privacy policy</a
        >
        applies.
        <br />
        The server used for serving this website is hosted on Google's
        <a href="https://firebase.google.com/support/privacy" target="__blank"
          >Firebase</a
        >.
        <br />
        For technical and security reasons Google and Cloudflare may store basic
        information about your browser like the User-Agent, IP-Address,
        or Operating System.
        <br />
        <br />
        <b>This site does not include any tracking scripts!</b>
      </p>
    </div>
  </footer>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

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
}

</style>
