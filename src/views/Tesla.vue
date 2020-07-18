<template>
  <div class="study tesla">
    <nav class="navbar">
      <div class="brand">Ankit Karnany</div>
      <div class="toggle">
        <i class="fas fa-bars"></i>
      </div>
      <div class="nav-item">
        <div class="tab"><a href="#">Tesla</a></div>
        <div class="tab"><a href="#">Local Cook</a></div>
        <div class="tab"><a href="#">Project</a></div>
      </div>
    </nav>
    <div class="study-content">
      <span class="pin top left"></span>
      <span class="pin top right"></span>
      <span class="pin bottom left"></span>
      <span class="pin bottom right"></span>
      <div class="study-content--inner">
        <div class="hero">
          <h1
            ref="heroTitle"
            id="hero-title"
            @mouseenter="enteredTitle"
            @mouseleave="leaveTitle"
          >
            Outrun Mode
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
export default {
  name: "Tesla",
  data: function() {
    return {
      tl: null,
    };
  },
  mounted() {
    const { heroTitle } = this.$refs;

    this.tl = gsap.timeline({ paused: true });
    this.tl.from(
      heroTitle,
      {
        opacity: 0.35,
        duration: 0.55,
        ease: "sine.out",
      },
      0
    );
    this.tl.from(
      heroTitle,
      {
        z: -300,
        skewY: -11,
        duration: 1.15,
        ease: "power3.inOut",
      },
      0
    );
    this.tl.progress(1).progress(0);
  },
  methods: {
    enteredTitle() {
      this.tl.play();
    },
    leaveTitle() {
      this.tl.reverse();
    },
  },
};
</script>
