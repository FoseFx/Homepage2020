<template>
  <section id="projects">
    <h1>Featured<br />Projects</h1>

    <div id="projects-wrapper">
      <Card>
        <h2>posted.gg</h2>
        <img src="https://via.placeholder.com/500x200" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nihil
          nulla harum quas quis. Maiores non harum est eaque mollitia minus
          voluptates maxime esse commodi, odit reiciendis tempora. Sequi, porro.
        </p>
      </Card>

      <Card>
        <h2>ECL 2.0 Addon</h2>
        <img src="ecl.jpg" alt="screenshot of the addon's user interface" />
        <p>
          ECL is a matchmaking organizer for Counter-Strike: Global Offensive.
          Their games are hosted and managed by Faceit. In order to report
          misbehaving players ECL made their own report tool. Unfortunately it
          had bad UX as a lot of information must be copied over, like a link to
          the match room, the link to the reported player and so on. So I wrote
          an extension which fixed some of those problems. Check it out on
          <a href="https://github.com/FoseFx/ECL-Report-Addon" target="__blank"
            >Github</a
          >. It's frondend part was written in Vue.js. Later the folks over at
          ECL approched me and asked to develop their official ECL addon. The
          extension ports lots of features they have on their website into
          Faceit. I wrote it in TypeScript and used Webpack as a bundler (by the
          way it is so incredible hard to E2E-test addons). It was also the
          first project I worked on with a small team. Check it out on their
          <a href="https://gitlab.com/ecl1/chrome-extension/" target="__blank"
            >Gitlab</a
          >.
        </p>
      </Card>

      <div class="breaker"></div>

      <Card>
        <h2>BetterGymWue</h2>
        <img src="bgw.jpg" alt="A screenshot of BGW's interface" />
        <p>
          My school used to have a pretty bad way organizing time- and
          substitution plans. So in the beginning of 2017 I started working on a
          project that would enhance the way students could check those plans. I
          started with a prototype written with jQuery and then moved on to
          implement BGW in Angular. I think this was actually my first big
          Angular project. The idea was to have a minimal backend that just
          acted as a proxy in order to bypass CORS policies so the frontend
          could do all the work. I added a caching layer later on. The pwa would
          download the timetable once and scape the received HTML-table in order
          to create a JSON representation. With this information I could then
          determine which classes are available. In an initial setup step the
          user can then choose their classes in an intuitive way. The main
          feature of BGW is the personalized timetable for the day. BGW would
          also crawl the currently available substitution plans and after
          scraping it merges the information into the timetable represented with
          colors. Unfortunately (or fortunately, ... depends) my school switched
          to a different system (which also has it's flaws). In total my PWA
          managed to gain about 100 daily users (~10% of the school). I had
          plans to migrate parts of it to the backend and let users use it with
          their Voice Assistants using Dialogflow. Due to the lack of interest I
          removed that branch half way there. Check it out on
          <a href="https://github.com/FoseFx/BetterGymWue" target="__blank">
            Github</a
          >. Here is a
          <a
            href="https://fosefx.github.io/Project-Demos/BGW/index.html"
            target="__blank"
            >Demo</a
          >.
        </p>
      </Card>

      <Card>
        <h2>UltimateGymWue</h2>
        <img src="ugw-o.jpg" alt="A screenshot of UGW's interface" />
        <p>
          As BGW's main intent was to provide a code base that theoretically
          could be picked up by anyone that knows how to spin up a node server
          UGW's intent was to create an ultimate platform. My plans included
          notifications for changes on the substitution plans, a collective
          calendar and so on. The backend was written in rust and node and also
          did the analysis needed. This enabled heavy caching which brought
          response times down to 5ms on the same machine. This project died
          because of the same reason BGW did. For the first time I took testing
          seriously and came up with a 95.5% coverage. In hindsight rocket.rs
          was the wrong framework for rust, Actix-Web is way better. Check it
          out on
          <a href="https://github.com/FoseFx/UltimateGymWue" target="__blank">
            Github</a
          >. Here is a
          <a
            href="https://fosefx.github.io/Project-Demos/UGW/index.html"
            target="__blank"
            >Demo</a
          >.
        </p>
      </Card>

      <div class="breaker"></div>

      <Card>
        <h2>The ML-MS Project</h2>
        <p>
          Imagine an application that is able to tell Glowsticks, Books and
          Stick Notes apart. So, how do I say this... I made it. I am interested
          in machine learning (ML) for quite some time now. However I found my
          time mostly spend on theoretical stuff like courses and other learning
          resources. At some point I just wanted to develop something that is
          working in production. But as you see I like to combine problems and I
          therefore added another nice buzzword to the mix: Microservices (MS).
          The app is divided into a core ML-Backend, a Rest-API Gateway and the
          frontend. ML-Backend and the Rest-API are connected using gRPC (using
          ProtoBuffs). The whole thing can be deployed to a k8s cluster. Quick
          and fun project, ngl.
          <a href="https://github.com/FoseFx-ml-ms" target="__blank">Github</a>.
        </p>
      </Card>

      <Card>
        <h2>More on Github</h2>
        <p>
          These are just some of the projects I have worked on. On my
          <a href="https://github.com/FoseFx" target="__blank">Github page</a>
          you will find more.
        </p>
      </Card>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Card from "./Card.vue";

@Component({
  components: {
    Card
  }
})
export default class Projects extends Vue {}
</script>

<style lang="scss" scoped>
#projects {
  padding-top: 5rem;
}
h1 {
  line-height: 5rem;
  text-align: center;
  margin-bottom: 2rem;
}

#projects-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;

  .card::nth-child(2) {
    margin-right: 0;
    margin-left: 1rem;
  }
  .card {
    margin-left: 0;
    margin-right: 1rem;
  }
}

.breaker {
  width: 100%;
}
</style>
