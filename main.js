/* Mobile Menu
 * ---------------------------------------------------- */
const ssMobileMenu = function () {
  const $navWrap = $(".s-header__nav-wrap");
  const $closeNavWrap = $navWrap.find(".s-header__overlay-close");
  const $menuToggle = $(".s-header__toggle-menu");
  const $siteBody = $("body");

  $menuToggle.on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    $siteBody.addClass("nav-wrap-is-visible");
  });

  $closeNavWrap.on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    if ($siteBody.hasClass("nav-wrap-is-visible")) {
      $siteBody.removeClass("nav-wrap-is-visible");
    }
  });

  // open (or close) submenu items in mobile view menu.
  // close all the other open submenu items.
  $(".s-header__nav .has-children")
    .children("a")
    .on("click", function (e) {
      e.preventDefault();

      if ($(".close-mobile-menu").is(":visible") == true) {
        $(this)
          .toggleClass("sub-menu-is-open")
          .next("ul")
          .slideToggle(200)
          .end()
          .parent(".has-children")
          .siblings(".has-children")
          .children("a")
          .removeClass("sub-menu-is-open")
          .next("ul")
          .slideUp(200);
      }
    });
}; // end ssMobileMenu
