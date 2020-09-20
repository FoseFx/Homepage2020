<template>
  <section id="about-sec">
    <img src="/about.svg" alt="Flatline drawing of a Web Developer" />
    <div>
      <div id="about">
        <h1 ref="heading" class="fresh-anim fast">About me</h1>
        <p>
          My name is Max Baumann, 18 years old and a <b>Web Developer</b> by
          heart for many years now. If you are interested in some of the
          projects I have worked on <a href="#projects">scroll down</a> or visit
          my
          <a href="https://www.github.com/fosefx" target="__blank">Github</a>.
          Obviously you will not find everything I’m working on there because I
          like to tinker around with all kinds of technology (systems, mobile,
          DevOps, you name it). At the time of writing I just finished school
          and am about to study CompSci in Aachen, Germany. There are two things
          I care most about when developing something:
          <b>Security and usability</b>. This means I try to stay up to date on
          what is happening in the InfoSec world and consider <b>A11y</b> and
          <b>performance</b> where I can. I love <b>Open Source</b> and have
          contributed to numerous bigger projects. I’m sure you and me will get
          along fine, so hit me up on my socials above 🙃
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class About extends Vue {}
</script>

<style lang="scss" scoped>
#about-sec {
  padding-top: 2rem;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    width: 50%;
  }
}

#about {
  width: 70%;
  border-top: 0.5rem solid black;
  border-bottom: 0.5rem solid black;
  padding-top: 1rem;
  padding-bottom: 1rem;

  p {
    font-size: 1.2rem;
  }
}

img {
  transform: scale(0.8);
}

@media (max-width: 1000px) {
  #about-sec {
    flex-direction: column;
    & > * {
      width: 100%;
    }
  }
  #about {
    border: none;

    width: 90% !important;
    max-width: 40rem;
    margin: 0 auto;
    text-align: center;
  }
  img {
    transform: scale(1);
    width: 60% !important;
  }
}
</style>
