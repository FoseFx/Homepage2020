<template>
  <section id="hero">
    <Social />
    <div id="hero-left">
      <div>
        <h1>
          <span id="hey">Hey!</span><br />
          <span id="max" class="fresh-anim">I'm Max</span>
        </h1>
        <h2>Web Developer</h2>
        <Button @click="goToAbout()">Read more</Button>
      </div>
    </div>
    <div id="hero-right">
      <Hand />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import Button from "./Button.vue";
import Hand from "./Hand.vue";
import Social from "./Social.vue";

@Component({
  components: {
    Button,
    Hand,
    Social
  }
})
export default class Hero extends Vue {
  goToAbout() {
    document.location.hash = "about";
  }
}
</script>

<style lang="scss" scoped>
#hero {
  width: 100%;
  height: 100vh;
  display: flex;
  #hero-left,
  #hero-right {
    width: 50%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

#hero-left > div {
  padding: 0 1rem;
  position: relative;
  z-index: 2;
}

h1,
h2 {
  font-weight: 400;
}

h1 {
  line-height: 90px;
  animation: 1s ease-in h1anim;
  #hey {
    position: relative;
    font-size: 80px;
    animation: 1s ease-in heyanim;
    z-index: 10;
  }
  #max {
    font-size: 144px;
  }
}

h2 {
  font-size: 36px;
  margin-bottom: 1rem;
  animation: 1s ease-in subheroanim;
}

button {
  animation: 1s ease-in subheroanim;
}

@keyframes h1anim {
  0%,
  50% {
    transform: translateY(50%);
  }
  100% {
    transform: translateY(0%);
  }
}

@keyframes heyanim {
  0%,
  50% {
    font-size: 144px;
  }
  100% {
    font-size: 80px;
  }
}

@keyframes subheroanim {
  0%,
  90% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media (max-width: 1300px) {
  h1 {
    line-height: 70px;
    #hey {
      font-size: 50px;
    }
    #max {
      font-size: 110px;
    }
  }

  @keyframes heyanim {
    0%,
    50% {
      font-size: 110px;
    }
    100% {
      font-size: 50px;
    }
  }
}

@media (max-width: 1000px) {
  h1 {
    line-height: 60px;
    #hey {
      font-size: 40px;
    }
    #max {
      font-size: 90px;
    }
  }

  @keyframes heyanim {
    0%,
    50% {
      font-size: 90px;
    }
    100% {
      font-size: 40px;
    }
  }
}

@media (max-width: 760px) {
  #hero {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: flex-end;

    #hero-left,
    #hero-right {
      width: 100%;
    }
  }
  #hero-left {
    padding: 0;
  }

  #hero-left {
    height: 70% !important;
  }
  #hero-right {
    height: 40% !important;
  }
}
</style>
