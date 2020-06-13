<template>
  <section id="about-sec">
    <img src="/about.svg" alt="Flatline drawing of a Web Developer" />
    <div>
      <div id="about">
        <h1>About me</h1>
        <p>
          My name is Max Baumann, 18 years old and a Web Developer by heart for
          many years now. If you are interested in some of the projects I have
          worked on scroll down or visit my Github. Obviously you will not find
          everything I’m working on there because I like to tinker around with
          all kinds of technology (systems, mobile, DevOps, you name it). At the
          time of writing I just finished school and am about to study CompSci
          in Aachen, Germany. There are two things I care most about when
          developing something: Security and usability. This means I try to stay
          up to date on what is happening in the InfoSec world and consider A11y
          and performance where I can. I’m sure you and me will get along fine,
          so hit me up on my socials c:
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
  padding-bottom: 1rem;
}

img {
  transform: scale(0.8);
}
</style>
