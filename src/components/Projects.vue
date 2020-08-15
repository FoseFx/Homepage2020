<template>
  <section id="projects">
    <h1>Featured<br />Projects</h1>

    <div id="projects-wrapper">
      <Card id="posted">
        <h2>Posted</h2>
        <div class="badges">
          <Badge
            alt="Commision"
            path="-commission-blueviolet?style=flat-square"
          />
          <Badge
            alt="In development"
            path="-in development-green?style=flat-square"
          />
        </div>
        <img src="posted.jpg" alt="screenshot of posted" />
        <p>
          Can't tell you much right now. c;
        </p>
      </Card>

      <Card id="ecl">
        <h2>ECL 2.0 Addon</h2>
        <div class="badges">
          <Badge
            alt="Commission"
            path="-commission-blueviolet?style=flat-square"
          />
          <Badge alt="Web Extension" path="-Web Ext-orange?style=flat-square" />
          <Badge alt="Vue" path="-Vue-green?style=flat-square" />
          <Badge alt="TypeScript" path="-TypeScript-blue?style=flat-square" />
          <Badge
            alt="End of Life"
            path="-End of Life-inactive?style=flat-square"
          />
        </div>
        <img src="ecl.jpg" alt="screenshot of the addon's user interface" />
        <p>
          ECL is a matchmaking organizer for Counter-Strike: Global Offensive.
          Their games are hosted and managed by Faceit. In order to report
          misbehaving players ECL made their own report tool. Unfortunately it
          had bad UX as a lot of information must be copied over, like a link to
          the match room, the link to the reported player and so on. So
          <b>I wrote an extension which fixed some of those problems</b
          >.<br /><br />
          Check it out on my
          <a href="https://github.com/FoseFx/ECL-Report-Addon" target="__blank">
            Github</a
          >.<br /><br />
          It's frontend part was written in <b>Vue.js</b>. <b>Later</b> the
          folks over at ECL approched me and
          <b>asked to develop their official ECL addon</b>. The extension ports
          lots of features they have on their website into Faceit. I wrote it in
          <b>TypeScript</b> and used <b>Webpack</b> as a bundler
          <i>(by the way it is so incredible hard to E2E-test addons)</i>. It
          was also the first project I worked on with a small team.<br /><br />
          Check it out on their
          <a href="https://gitlab.com/ecl1/chrome-extension/" target="__blank"
            >Gitlab</a
          >.
        </p>
      </Card>

      <div class="breaker"></div>

      <Card id="bgw">
        <h2>BetterGymWue</h2>
        <div class="badges">
          <Badge alt="Angular" path="-Angular-red?style=flat-square" />
          <Badge alt="NodeJs" path="-NodeJs-green?style=flat-square" />
          <Badge alt="PWA" path="-PWA-blue?style=flat-square" />
          <Badge
            alt="End of Life"
            path="-End of Life-inactive?style=flat-square"
          />
        </div>
        <img src="bgw.jpg" alt="A screenshot of BGW's interface" />
        <p>
          My school used to have a pretty bad way organizing time- and
          substitution plans. So in the beginning of 2017 I started working on a
          project that would enhance the way students could check those plans. I
          started with a prototype written with jQuery and then moved on to
          implement BGW in <b>Angular</b>. I think this was actually my
          <b>first big Angular project</b>. The idea was to have a minimal
          backend that just acted as a proxy in order to bypass CORS policies so
          the <b>frontend could do all the work</b>. I added a caching layer
          later on. The <b>PWA</b> would <b>download</b> the timetable once and
          <b>scape</b>
          the received HTML-table in order to create a JSON representation. With
          this information I could
          <b>then determine which classes are available</b>. In an initial setup
          step the user can then choose their classes in an
          <b>intuitive way</b>. The main feature of BGW is the
          <b>personalized timetable</b> for the day. BGW would also
          <b>crawl</b> the currently available substitution plans and after
          scraping it <b>merges the information</b> into the timetable
          represented with colors. Unfortunately (or fortunately, ... depends)
          my school switched to a different system (which also has it's flaws).
          In total my PWA managed to gain about
          <b>100 daily users (about 10% of the school)</b>. I had plans to
          migrate parts of it to the backend and let users use it with their
          <b>Voice Assistants using Dialogflow</b>. Due to the lack of interest
          I removed that branch half way there.<br /><br />
          Check it out on
          <a href="https://github.com/FoseFx/BetterGymWue" target="__blank">
            Github</a
          >.<br />
          Here is a
          <a
            href="https://fosefx.github.io/Project-Demos/BGW/index.html"
            target="__blank"
            >Demo</a
          >.
        </p>
      </Card>

      <Card id="ugw">
        <h2>UltimateGymWue</h2>
        <div class="badges">
          <Badge alt="Angular" path="-Angular-red?style=flat-square" />
          <Badge alt="Rust" path="-Rust-orange?style=flat-square" />
          <Badge alt="PWA" path="-PWA-blue?style=flat-square" />
          <Badge
            alt="End of Life"
            path="-End of Life-inactive?style=flat-square"
          />
        </div>
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

      <Card id="tcbb">
        <h2>Twitch Chatbot Boilerplate</h2>
        <div class="badges">
          <Badge alt="NodeJs" path="-NodeJs-green?style=flat-square" />
          <Badge alt="TypeScript" path="-TypeScript-blue?style=flat-square" />
          <Badge alt="tmi.js" path="-tmi.js-purple?style=flat-square" />
        </div>
        <img src="tcbb.jpg" alt="TCBB banner" />
        <p>
          One day I wanted to tinker arount with twitch chatbots and exprected a
          project similar to Probot to exist for Twitch bots and found none. So
          <b>I</b> wrote it. Idealy you only have to copy and paste a few tokens
          and don't have to write any other line of code other than your
          business logic. The boilerplate is split up into two parts, the
          <a
            href="https://github.com/FoseFx/twitch-chatbot-boilerplate"
            target="__blank"
            >main project</a
          >
          and
          <a
            href="https://github.com/FoseFx/twitch-chatbot-boilerplate-core"
            target="__blank"
            >the core</a
          >. The latter includes most of it's code and is written in TypeScript.
          It wrappes around express and tmi.js and can be used in just one
          function call. If you are too lazy for that and like tools like
          TypeScript, ESlint or Jest to be set up aswell you can simply clone
          the main project, where everything is done for you. No worring about
          OAuth, refresh tokens or other a secure irc connection!
          <br />
          Have a look at the project's
          <a
            href="https://github.com/FoseFx/twitch-chatbot-boilerplate"
            target="__blank"
            >Github page</a
          >.<br />
          The core is on
          <a
            href="https://npmjs.com/twitch-chatbot-boilerplate"
            target="__blank"
            >npm</a
          >!
        </p>
      </Card>

      <Card id="mlms">
        <h2>The ML-MS Project</h2>
        <div class="badges">
          <Badge alt="Python" path="-Python-orange?style=flat-square" />
          <Badge alt="Fast.ai" path="-Fast.ai-brightgreen?style=flat-square" />
          <Badge alt="NodeJs" path="-NodeJs-green?style=flat-square" />
          <Badge alt="gRPC" path="-gRPC-blue?style=flat-square" />
          <Badge
            alt="End of Life"
            path="-End of Life-inactive?style=flat-square"
          />
        </div>
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

      <div class="breaker"></div>

      <Card id="gh">
        <h2>More on Github</h2>
        <p>
          These are just some of the projects I have worked on. On my
          <a href="https://github.com/FoseFx" target="__blank">Github page</a>
          you will find more as well as my contibutions to Open Source projects.
        </p>
      </Card>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Card from "./Card.vue";
import Badge from "./Badge.vue";

@Component({
  components: {
    Card,
    Badge
  }
})
export default class Projects extends Vue {}
</script>

<style lang="scss" scoped>
#projects {
  position: relative;
  z-index: 3;
  padding-top: 5rem;
}
h1 {
  line-height: 5rem;
  text-align: center;
  margin-bottom: 2rem;
  @media (max-width: 1500px) {
    line-height: 4rem;
  }
  @media (max-width: 1000px) {
    line-height: 3rem;
  }
}

#projects-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;

  @media (min-width: 1231px) {
    .card::nth-child(2) {
      margin-right: 0;
      margin-left: 1rem;
    }
    .card {
      margin-left: 0;
      margin-right: 1rem;
    }
  }
}

.breaker {
  width: 100%;
}

@media (min-width: 1231px) {
  #bgw {
    transform: translateY(-9rem);
  }

  #mlms {
    transform: translateY(-9rem);
  }

  #tcbb {
    transform: translateY(-7.5rem);
  }

  #gh {
    transform: translateY(-7rem);
  }
}

.badges {
  width: 100%;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
