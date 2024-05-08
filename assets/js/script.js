var scroll = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-two",
    start: "2% 95%",
    end: "50% 50%",
    scrub: true,
    // markers: true,
  },
});

scroll.to(
  ".fantaimg",
  {
    top: "120%",
    left: "5%",
  },
  "orange"
);
scroll.to(
  ".orangegroupslice",
  {
    width: "15vw",
    top: "160%",
    right: "5%",
  },
  "orange"
);
scroll.to(
  ".orangeslice",
  {
    top: "160%",
    left: "25%",
  },
  "orange"
);
scroll.to(
  ".leaf1",
  {
    top: "160%",
    right: "80%",
    rotate: "160deg",
  },
  "orange"
);
scroll.to(
  ".leaf2",
  {
    top: "170%",
    left: "80%",
    rotate: "160deg",
  },
  "orange"
);
