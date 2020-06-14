<template>
  <footer>
    <div id="legal">
      <h3>© Max Baumann</h3>
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
        Cloudflare, a third party that protects my servers from malitious actors
        sets a necessary cookie. Their
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
        Operating System or cookies.
        <br />
        <br />
        <b>This site does not include any tracking scripts!</b>
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>
footer {
  padding: 2rem 2rem;
  background: #3d3d3d;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & > div {
    max-width: 30rem;
    min-width: 20rem;
    width: 50%;
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

@media (min-width: 1000px) {
  #legal p {
    padding-left: 2rem;
  }
}
</style>
