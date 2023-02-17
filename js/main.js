/* ############################### */
/* ############################### */
/* Header controllers */
const OPEN = "open";

$("#btn_menu").click(() => {
  const header = document.querySelector("header");

  let isOpen = header.classList.contains(OPEN);

  if (isOpen) {
    header.classList.remove(OPEN);
  } else {
    header.classList.add(OPEN);
  }
});

function headerResize() {
  const header = document.querySelector("header");
  let size = $(document).width();

  if (size >= 750) header.classList.remove(OPEN);
}

/* ############################### */
/* ############################### */
/* Drops list controller */
const DROP_OPEN = "drop_open";

function controllerDropList(item) {
  $(item).toggleClass(DROP_OPEN);

  const content = $(item).find("div.dropItem_content")[0];
  $(content).toggle(500);
}

$(".dropItem").map((key, item) => {
  const label = $(item).find("h3.dropItem_label")[0];

  if (label) $(label).click(() => controllerDropList(item));
});

/* ############################### */
/* ############################### */
/* Hero controller */

function slidesHide() {
  $(".hero_item").hide();
  $(".hero_dots span").removeClass("details");
}

function slideShow(slide, dot, fade) {
  slidesHide();
  if (fade) {
    $(slide).fadeIn(500);
  } else {
    $(slide).fadeIn();
  }
  $(dot).addClass("details");
}

function createSlider() {
  $(".hero_dots").html("");

  $(".hero_item").map((key, item) => {
    let dot = document.createElement("span");
    $(".hero_dots").append(dot);

    $(dot).click(() => slideShow(item, dot, true));
  });

  slideShow($(".hero_item")[0], $(".hero_dots span")[0]);
}

function heroController() {
  let size = $(document).width();

  if (size >= 750) {
    $(".hero_item").fadeIn();
    $(".hero_dots").html("");
  } else {
    createSlider();
  }
}

/* ############################### */
/* ############################### */
/* Resize */
$(window).resize(() => {
  // Header
  headerResize();

  // Hero
  heroController();
});

/* ############################### */
/* ############################### */
/* Load */
$(window).ready(() => {
  // Hero
  heroController();
});
