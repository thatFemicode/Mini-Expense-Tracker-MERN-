import gsap from "gsap";
export const tl = gsap.timeline({ paused: true, reversed: true });
const animate = (node1, node2, node3, node4, node5, node6, node7) => {
  tl.to(
    node1,
    {
      ease: "power1.inOut",
      height: 160,
    },
    0
  )

    .to(
      node2,
      {
        ease: "power1.inOut",
        right: -90,
        height: "80px",
        top: 10,
      },
      0.6
    )
    .to(
      node3,
      {
        ease: "power1.inOut",
        left: 30,
        top: 45,
      },
      0.5
    )

    .to(
      node4,
      {
        ease: "power1.inOut",
        y: 60,
        x: 20,
        scale: 1.1,
      },
      0.5
    )

    .to(
      node5,
      {
        ease: "power1.inOut",
        y: 55,
      },
      0.5
    )
    .to(
      node6,
      {
        ease: "power1.inOut",
        right: 40,
        opacity: 0.5,
      },
      0.5
    )
    .to(
      node7,
      {
        ease: "power1.inOut",
        right: 40,
        opacity: 0.5,
      },
      0.5
    );
};
export default animate;
