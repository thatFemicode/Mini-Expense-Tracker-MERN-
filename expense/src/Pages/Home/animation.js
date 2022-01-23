import gsap from "gsap";
let tl = gsap.timeline();
const animate = (node1, node2, node3, node4, node5, node6, node7) => {
  tl.from(node7, {
    duration: 1,
    ease: "power3.inOut",
    autoAlpha: 0,
  })
    .from(
      node1,
      {
        duration: 2,
        opacity: 0,
        y: 200,
        ease: "power3.inOut",
      },
      "-=1"
    )
    .from(
      node2,
      {
        duration: 2,
        opacity: 0,
        x: 200,
        skewY: 10,
        ease: "power3.inOut",
      },
      "-=1"
    )
    .from(
      node3,
      {
        duration: 2,
        opacity: 0,
        x: -200,
        skewY: 10,
        ease: "power3.inOut",
      },
      "-=1"
    )
    .from(
      node4,
      {
        duration: 2,
        opacity: 0,
        x: 200,
        skewY: 10,
        ease: "power3.inOut",
      },
      "-=1"
    )
    .from(
      node5,
      {
        duration: 3,
        opacity: 0,
        x: 200,
        skewY: 10,
        ease: "power3.inOut",
      },
      "-=1"
    )
    .from(
      node6,
      {
        duration: 2,
        opacity: 0,
        y: 200,
        skewY: 10,
        ease: "power3.inOut",
      },
      "-=1"
    );
};
export default animate;
