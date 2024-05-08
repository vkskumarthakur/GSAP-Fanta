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
  ".main-title",
  {
    // bottom: "120%",
    left: "-80%",
  },
  "orange"
);
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
    top: "180%",
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
    top: "180%",
    left: "80%",
    rotate: "360deg",
  },
  "orange"
);

var scroll2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-three",
    start: "2% 95%",
    end: "50% 50%",
    scrub: true,
    // markers: true,
  },
});

scroll2.to(
  ".fantaimg",
  {
    width: "35vw",
    top: "220%",
    left: "32%",
  },
  "cold-drink"
);

scroll2.to(
  ".orangeslice",
  {
    width: "14vw",
    top: "220%",
    left: "38%",
  },
  "cold-drink"
);

scroll2.from(
  ".coca-cola",
  {
    left: "-100%",
    position: "absolute",
    rotate: "-90deg",
    bottom: "-100%",
  },
  "cold-drink"
);
scroll2.from(
  ".coca-lemon",
  {
    left: "-100%",
    position: "absolute",
    rotate: "360deg",
  },
  "cold-drink"
);
scroll2.from(
  ".pepsi",
  {
    right: "-100%",
    position: "absolute",
    rotate: "90deg",
    bottom: "-100%",
  },
  "cold-drink"
);
scroll2.from(
  ".pepsi-lemon",
  {
    right: "-100%",
    position: "absolute",
    // top: "200%",
    rotate: "360deg",
  },
  "cold-drink"
);
