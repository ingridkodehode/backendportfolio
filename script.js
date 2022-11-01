// CONTENT SCROLL ANIMATION //
gsap.registerPlugin(ScrollTrigger);
// REVEAL Trigger
gsap.utils.toArray(".reveal").forEach(function (elem) {
  // triggers the animation at 80% and 20% of the screen
  ScrollTrigger.create({
    trigger: elem,
    start: "top 80%",
    end: "bottom 20%",
    // set "true" to see animation start and end points guidelines
    // should always be set to false.
    markers: false,
    // once div reach start point it will ease in opacity 0% = 100%
    onEnter: function () {
      gsap.fromTo(
        elem,
        { y: 100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto",
        }
      );
    },
    // once div reach end point it will ease in opacity 100% = 0%
    onLeave: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    },
    // once div reach start point from top back down it will ease in opacity 0% = 100%
    onEnterBack: function () {
      gsap.fromTo(
        elem,
        { y: -100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto",
        }
      );
    },
    // once div reach end point at the bottom it will ease in opacity 100% = 0%
    onLeaveBack: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    },
  });
});

$(document).on("click", ".naccs .menu div", function () {
  var numberIndex = $(this).index();

  if (!$(this).is("active")) {
    $(".naccs .menu div").removeClass("active");
    $(".naccs ul li").removeClass("active");

    $(this).addClass("active");
    $(".naccs ul")
      .find("li:eq(" + numberIndex + ")")
      .addClass("active");

    var listItemHeight = $(".naccs ul")
      .find("li:eq(" + numberIndex + ")")
      .innerHeight();
    $(".naccs ul").height(listItemHeight + "px");
  }
});
