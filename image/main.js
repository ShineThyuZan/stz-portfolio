function keydown() {

  try {

    var textbox = document.querySelector(

      '.footer-top-left form .hs-form-field.hs-email input[type="email"]'

    );

    var label = document.querySelector(

      ".footer-top-left form .hs-form-field.hs-email label"

    );



    textbox.addEventListener(

      "keydown",

      function () {

        label.style.display = "none";

      },

      false

    );

  } catch (e) {}

}

jQuery(document).ready(function ($) {

  setTimeout(keydown, 1000);

  try {

    const actSub = document.querySelector('.actions input[type="submit"]');

    console.log("actSub => ", actSub);

    if (actSub) {

      if (!actSub.classList.contains("btn-primary")) {

        actSub.classList.add("btn-primary");

      }

    }

  } catch (e) {}



  if ($(".counter").length > 0) {

    $(".counter").countUp();

  }



  if ($(".betterdocs-content-wrapper").length > 0) {

    $(".betterdocs-content-wrapper").addClass("uk-container container-2");

  }



  $("nav .uk-navbar-center .uk-navbar-dropdown").each(function () {

    if ($(this).find("a[data-title='true']").length > 0) {

      $(this).addClass("full-width");

    }

  });



  if ($(".slick.marquee").length > 0) {

    $(".slick.marquee").slick({

      pauseOnFocus: false,

      pauseOnHover: false,

      draggable: false,

      focusOnSelect: false,

      speed: 5000,

      autoplay: true,

      autoplaySpeed: 0,

      centerMode: true,

      cssEase: "linear",

      slidesToShow: 1,

      slidesToScroll: 1,

      variableWidth: true,

      infinite: true,

      initialSlide: 1,

      arrows: false,

      buttons: false,

      responsive: [

        {

          breakpoint: 999,

          settings: {

            slidesToShow: 3,

          },

        },

        {

          breakpoint: 600,

          settings: {

            slidesToShow: 2,

          },

        },

      ],

    });

  }



  if ($(".btn-primary").length > 0) {

    $(".btn-primary").wrapInner("<span></span>");

  }



  if ($(".btn-secondary-white").length > 0) {

    $(".btn-secondary-white").wrapInner("<span></span>");

  }



  UIkit.util.on("#toggle-usage", "beforeshow", function (e) {

    $(".header-top button").addClass("active");

  });



  UIkit.util.on("#toggle-usage", "beforehide", function (e) {

    $(".header-top button").removeClass("active");

  });



  $("#modal-full .content-left ul.uk-tab-left li")

    .not(".has-child")

    .on("click", function (e) {

      e.stopPropagation();

      window.location.href = $(this).find("a").attr("href");

    });



  if ($("#template-technologies-4").length > 0) {

    $("#template-technologies-4 .et_pb_column:nth-child(1)").attr(

      "uk-scrollspy-nav",

      "closest: .et_pb_button_module_wrapper > a; scroll: true;"

    );

  }



  function getParameterByName(name, url) {

    name = name.replace(/[\[\]]/g, "\\$&");

    let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),

      results = regex.exec(url);

    if (!results) return null;

    if (!results[2]) return "";

    return decodeURIComponent(results[2].replace(/\+/g, " "));

  }



  if ($("#offcanvas-slide").length > 0) {

    UIkit.util.on("#offcanvas-slide", "hidden", function () {

      $(".content-wrap").removeClass("active");

    });

  }



  if ($(".main-solutions-services").length > 0) {

    $(".main-solutions-services ul.uk-tab li a").on("click", function (e) {

      // e.stopPropagation();

      var type = $(this).data("type");

      console.log(type);

      $(".uk-accordion li").each(function () {

        if (type == "expand-all") {

          if (!$(this).hasClass("uk-open")) {

            UIkit.accordion(".uk-accordion").toggle($(this).index(), true);

          }

        }



        if (type == "collapse-all") {

          if ($(this).hasClass("uk-open")) {

            console.log($(this).index());

            UIkit.accordion(".uk-accordion").toggle($(this).index(), true);

          }

        }

      });

    });

  }



  // Loop through each input field with name "s"

  $('input[name="s"]').each(function () {

    var typingTimer;

    var doneTypingInterval = 100; // Time in milliseconds (0.5 seconds)

    var $searchInput = $(this);

    var $searchSuggestions = $searchInput.next(".suggestion-results"); // Assuming suggestions are next to input



    $searchInput.on("input", function (e) {

      e.preventDefault();

      clearTimeout(typingTimer);

      if ($(this).val()) {

        $searchInput.addClass("typing");

        $searchSuggestions.show();

        typingTimer = setTimeout(function () {

          getSuggestions($searchInput, $searchSuggestions);

        }, doneTypingInterval);

      } else {

        console.log($(this).val());

        $searchInput.removeClass("typing");

        if ($(this).val().trim() === "") {

          $searchSuggestions.hide();

        }

        $searchSuggestions.empty(); // Clear suggestions if input is empty

      }

    });

  });



  // AJAX call to get suggestions

  function getSuggestions($input, $suggestions) {

    var keyword = $input.val();



    console.log("Getting suggestions for: " + keyword); // Debug



    $.ajax({

      type: "GET",

      url: ajaxfilter.ajaxurl,

      data: {

        action: "get_keyword_suggestions",

        keyword: keyword,

      },

      success: function (response) {

        if (response) {

          $suggestions.show().html(response);

          console.log("Suggestions received: " + response); // Debug

        } else {

          $suggestions.hide();

        }

      },

      error: function (xhr, status, error) {

        console.error(xhr.responseText);

      },

    });

  }



  if ($(".clear-btn").length > 0) {

    $(".clear-btn").on("click", function (e) {

      e.preventDefault();

      $('input[name="s"]').val("");

    });

  }



  // Tabs functions

  //$('#tabs').tabs();

  function toRemove() {

    let icons = {

      header: "ui-icon-circle-arrow-e",

      activeHeader: "ui-icon-circle-arrow-s",

    };

    $("#accordion-0").accordion({

      heightStyle: "content",

      icons: icons,

      collapsible: true,

    });

    $("#accordion-1").accordion({

      heightStyle: "content",

      icons: icons,

      collapsible: true,

    });

    $("#accordion-2").accordion({

      heightStyle: "content",

      icons: icons,

      collapsible: true,

    });

    $("#accordion-3").accordion({

      header: function (accordionElement) {

        return accordionElement.find("h3");

      },

      heightStyle: "content",

      icons: icons,

      collapsible: true,

    });

  }



  $(".has-child span").on("click", function () {

    $(".has-child").removeClass("uk-active");

    $(this).parent().addClass("uk-active");

  });

  // expand all toggle

  $(".expand").click(function (e) {

    e.preventDefault();

    // $('#accordion-3 .ui-accordion-header').trigger("click");



    $(this).addClass("active");

    $(".collapse").removeClass("active");

    $("#accordion-3 .ui-accordion-content").show();



    $("#accordion-3 .ui-accordion-content").addClass(

      "ui-accordion-content-active"

    );

    $("#accordion-3 .ui-accordion-content").attr("aria-hidden", false);



    $("#accordion-3 .ui-accordion-header").addClass(

      "ui-accordion-header-active"

    );

    $("#accordion-3 .ui-accordion-header").addClass("ui-state-active");



    $("#accordion-3 .ui-accordion-header .ui-accordion-header-icon")

      .removeClass("ui-icon-circle-arrow-e")

      .addClass("ui-icon-circle-arrow-s");



    $("#accordion-3 .ui-accordion-header").attr("tabindex", 0);

    $("#accordion-3 .ui-accordion-header").attr("aria-selected", true);

    $("#accordion-3 .ui-accordion-header").attr("aria-expanded", true);

  });



  // collapse all toggle

  $(".collapse").click(function (e) {

    e.preventDefault();

    $("#accordion-3 .ui-accordion-header").trigger("click");



    $(this).addClass("active");

    $(".expand").removeClass("active");

    $("#accordion-3 .ui-accordion-content").hide();



    $("#accordion-3 .ui-accordion-content").removeClass(

      "ui-accordion-content-active"

    );

    $("#accordion-3 .ui-accordion-content").attr("aria-hidden", true);



    $("#accordion-3 .ui-accordion-header").removeClass(

      "ui-accordion-header-active"

    );

    $("#accordion-3 .ui-accordion-header").removeClass("ui-state-active");



    $("#accordion-3 .ui-accordion-header .ui-accordion-header-icon")

      .removeClass("ui-icon-circle-arrow-s")

      .addClass("ui-icon-circle-arrow-e");



    $("#accordion-3 .ui-accordion-header").attr("tabindex", -1);

    $("#accordion-3 .ui-accordion-header").attr("aria-selected", false);

    $("#accordion-3 .ui-accordion-header").attr("aria-expanded", false);

  });



  //custom select



  $('.searchandfilter ul li[data-sf-field-input-type="select"] select').select2(

    {

      dropdownPosition: "below",

    }

  );

});



function accordionTabs(tab) {

  try {

    let icons = {

      header: "ui-icon-circle-arrow-e",

      activeHeader: "ui-icon-circle-arrow-s",

    };

    let maintab = document.querySelector(tab);

    let item = maintab.querySelectorAll(".tab-content .tab-accordion");

    jQuery(item).accordion({

      heightStyle: "content",

      icons: icons,

      collapsible: true,

    });

  } catch (e) {

    //console.log(e);

  }

}

// function accordionMultiple(tabs) {

//   console.log("mul");

//   try {

//     let icons = {

//       header: "ui-icon-circle-arrow-e",

//       activeHeader: "ui-icon-circle-arrow-s",

//     };

//     let accordions = jQuery(".wp-tabs .tab-accordion .inner-accordion-content");

//     accordions.each(function (index) {

//       jQuery(this).accordion({

//         header: "h3",

//         active: index === 0 ? 0 : false, // Open first one, others closed

//         heightStyle: "content",

//         icons: icons,

//         collapsible: true,

//         activate: function (event, ui) {

//           // Close all other accordions when one is opened

//           //accordions.not(this).accordion("option", "active", false);

//         },

//       });

//     });

//   } catch (e) {

//     //console.log(e);

//   }

// }

//start 

// function accordionMultiple(tabs) {

//   // console.log("accordionMultiple");

//   try {

//     let icons = {

//       header: "ui-icon-circle-arrow-e",

//       activeHeader: "ui-icon-circle-arrow-s",

//     };

//     let accordions = jQuery(".wp-tabs .tab-accordion .inner-accordion-content");



//     accordions.each(function (index) {

//       // let $thisAccordion = jQuery(this);



//       jQuery(this).accordion({

//         header: "h3",

//         active: index === 0 ? 0 : false, // Open first accordion initially

//         heightStyle: "content",

//         icons: icons,

//         collapsible: true,

//         activate: function (event, ui) {

//           if (ui.newHeader.length) {

//             // Close all other accordions except the clicked one

//             //accordions.not(this).accordion("option", "active", false);

//           }

//         },

//       });

//     });

//   } catch (e) {

//     console.error(e);

//   }

// }

//end



function handleAccordianImage(dataId) {

  let images = document.querySelectorAll(".microsoft-365 .tab-content.active-content .image-container img");
  let header = document.querySelector(`#accordion-0 .inner-accordion-content h3[data-id=${dataId}]`);
  console.log("header test ", header)

  images && images.forEach((image) => {

    const itemId = image.getAttribute("data-id");



    if ( header.classList.contains("ui-state-active") && dataId.toLowerCase() === itemId.toLowerCase()) {

        image.style.display = "block";

    } else {

        image.style.display = "none";

    }

  });  

}



function accordionMultiple(tabs) {

  try {

    let icons = {

      header: "ui-icon-circle-arrow-e",

      activeHeader: "ui-icon-circle-arrow-s",

    };



    jQuery(".wp-tabs .tab-accordion").each(function () {

      let accordions = jQuery(this).find(".inner-accordion-content");



      accordions.each(function (index) {

        let accordion = jQuery(this);

        jQuery(this).accordion({

          header: "h3",

          active: index === 0 ? 0 : false, // Open first accordion initially

          heightStyle: "content",

          icons: icons,

          collapsible: true,

          activate: function (event, ui) {

            if (ui.newHeader.length) {

              // Close all other accordions except the clicked one within the same tab

              accordions.not(this).accordion("option", "active", false);



              let dataId = this.querySelector("h3").getAttribute("data-id");

              handleAccordianImage(dataId);

            } else {
              console.log("deactived")
            }

          },

        });

      });

    });



    // Ensure the first accordion in each tab is active when switching tabs

    jQuery(tabs).on("tabsactivate", function (event, ui) {

      let activeTab = ui.newPanel;

      activeTab.find(".inner-accordion-content").accordion("option", "active", 0);

    });



  } catch (e) {

    console.error(e);

  }

}









function fullWidthHover() {

  try {

    let sections = document.querySelectorAll(

      ".connect-people-image-grid-wrapper-section .connect-people-image-grid-item"

    );

    sections[0].classList.add("hover");

    sections.forEach((x) => {

      x.addEventListener("mouseover", () => {

        sections.forEach((h) => {

          h.classList.remove("hover");

        });

        x.classList.add("hover");

      });

    });

  } catch (e) {

    //console.log(e);

  }

}



function tabsFuntion(tab) {

  try {

    const maintab = document.querySelector(tab);

    

    let tablink = maintab.querySelectorAll(".wp-tabs-nav li a");

    let tabpanel = maintab.querySelectorAll(".tab-content");

    tablink[0].classList.add("active-link");

    tabpanel[0].classList.add("active-content");



    for (let i = 0; i < tablink.length; i++) {

      tabActive(i);

    }

    function tabActive(i) {

      tablink[i].addEventListener("click", function (e) {

        e.preventDefault();

        var active = maintab.getElementsByClassName("active-link");

        if (active.length > 0) {

          active[0].className = active[0].className.replace("active-link", "");

        }

        this.className += " active-link";



        var activecontent = maintab.getElementsByClassName("active-content");

        if (activecontent.length > 0) {

          activecontent[0].className = activecontent[0].className.replace(

            " active-content",

            ""

          );

        }

        tabpanel[i].className += " active-content";

      });

    }

  } catch (e) {

    //console.log(e);

  }

}

function multiTabsFuntion(tabs) {

  try {

    const maintab = document.querySelectorAll(tabs);

    // console.log("KImmy");

    Array.from(maintab).forEach((x) => {

      let tablink = x.querySelectorAll(".wp-tabs-nav li a");

      let tabpanel = x.querySelectorAll(".tab-content");

      // console.log(tablink);

      tablink[0].classList.add("active-link");

      tabpanel[0].classList.add("active-content");

      // openFirstAccordion(tabpanel[0]);



      let firstAccordians = tabpanel[0].querySelectorAll(".inner-accordion-content");

      if(firstAccordians && firstAccordians.length > 0) {

        let dataId = firstAccordians[0].querySelector("h3").getAttribute("data-id");

        handleAccordianImage(dataId);

      }



      for (let i = 0; i < tablink.length; i++) {

        tabActive(i);

      }

      function tabActive(i) {

        tablink[i].addEventListener("click", function (e) {

          e.preventDefault();

          var active = x.getElementsByClassName("active-link");

          if (active.length > 0) {

            active[0].className = active[0].className.replace(

              "active-link",

              ""

            );

          }

          this.className += " active-link";



          var activecontent = x.getElementsByClassName("active-content");

          if (activecontent.length > 0) {

            activecontent[0].className = activecontent[0].className.replace(

              " active-content",

              ""

            );

          }

          tabpanel[i].className += " active-content";

          // openFirstAccordion(tabpanel[i]);



          let accordians = tabpanel[i].querySelectorAll(".inner-accordion-content");

          if(accordians && accordians.length > 0) {

            accordians.forEach(accordian => {

              if(accordian.querySelector("h3").classList.contains("ui-accordion-header-active")) {

                let dataId = accordian.querySelector("h3").getAttribute("data-id");

                handleAccordianImage(dataId);

                return;

              } else {

                let dataId = accordians[0].querySelector("h3").getAttribute("data-id");

                handleAccordianImage(dataId);

              }

            })            

          }



        });

      }

      

    });

  } catch (e) {

    //console.log(e);

  }

}



function VideoTrigger() {

  try {

    let buttons = document.querySelectorAll(

      ".exchange-online .wp-tabs-4 .tab-content .player-icon"

    );

    buttons.forEach((x) => {

      x.addEventListener("click", (e) => {

        e.preventDefault();

        let parent = x.closest(".play-video-group");

        let youtube = parent.querySelector("iframe");

        let myvideo = parent.querySelector(".my-video");



        parent.classList.add("play");



        if (myvideo) {

          myvideo.play();

        } else {

          youtube[0].src += "&autoplay=1";

        }

      });

    });

  } catch (e) {

    //console.log(e)

  }

}



function copyTabContent() {

  try {

    let tab_labels = document.querySelectorAll(

      ".calling-section .btn-tag .mobile-content"

    );

    let tab_contents = document.querySelectorAll(

      ".calling-section .desktop-content .calling-item"

    );



    tab_labels.forEach((x, index) => {

      let clonedConent = tab_contents[index].cloneNode(true);

      x.appendChild(clonedConent);

      let mobile = x.querySelector(".calling-item");

      mobile.removeAttribute("id");

    });

  } catch (e) {

    //console.log(e)

  }

}

function copyTabContent2() {

  try {

    let tab_labels = document.querySelectorAll(

      ".microsoft-365 .tab-content .mobile-content"

    );

    let tab_contents = document.querySelectorAll(

      ".microsoft-365 .tab-content .desktop-content img"

    );



    tab_labels.forEach((x, index) => {

      let clonedConent = tab_contents[index].cloneNode(true);

      x.appendChild(clonedConent);

    });

  } catch (e) {

    //console.log(e)

  }

}



function countDown() {

  try {

    const options = {

      enableScrollSpy: true,

      duration: 3,

    };

    // const target = document.querySelector();

    const value = target.getAttribute("data-count");

    const countAnimation = new CountUp("counter", value);



    if (!countAnimation.error) {

      countAnimation.start();

    } else {

      //console.error(countAnimation.error);

    }

  } catch (e) {

    //console.log(e)

  }

}



function activeMenuClass() {

  let navlink = document.querySelectorAll(

    ".uk-navbar-dropdown div[data-haschild='false'] a"

  );

  navlink.forEach((link) => {

    if (link.href === window.location.href) {

      link.classList.add("active");

    }

  });

}



function myJumpFunction() {

  const links = document.querySelectorAll(".button-row .btn-tag a");



  links.forEach((link) => {

    const id = link.getAttribute("href");

    const element = jQuery(id);



    link.addEventListener("click", (e) => {

      // e.preventDefault();

      e.stopPropagation();

      jQuery("html, body").animate(

        {

          scrollTop: jQuery(element).offset().top - 140,

        },

        500

      );

    });

  });

}

function changeCurrentLangugageName() {

  try {

    let activename = document.querySelector(".navbar-top-list .current-name");

    let activeMenu = document.querySelector(

      ".navbar-top-list .uk-dropdown .active"

    );

    console.log(activename.innerText);

    activename.innerText = activeMenu.innerText;

  } catch (e) {

    //console.log(e)

  }

}

function CopyLink() {

  try {

    let link = document.querySelector(".add-to-any .copy-link");

    link.addEventListener("click", function (e) {

      e.preventDefault();

      let copylink = window.location.href;

      navigator.clipboard.writeText(copylink);

    });

  } catch (e) {

    //console.log(e)

  }

}



// menu scroll effect

function menuScrollEffect() {

  var prevScrollpos = window.pageYOffset;

  window.onscroll = function () {

    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {

      document.querySelector("body header").style.transform = "none";

    } else {

      if (currentScrollPos > 20) {

        document.querySelector("body header").style.transform =

          "translate3d(0, -100%, 0)";

      }

    }

    prevScrollpos = currentScrollPos;

  };

}



function jumpSectionToFixPosition() {

  try {

    let jumbLink = document.querySelectorAll(".uk-tab.page li a");

    let jumbSection = document.querySelector(".mobile-side-menu .inner");

    let jumbLinkWrapper = document.querySelectorAll(".uk-tab.page li");

    jumbLink.forEach((x) => {

      x.addEventListener("click", () => {

        removeParentClass(jumbLinkWrapper);

        x.parentElement.classList.add("uk-active");

        jumbSection.classList.add("fix");

      });

    });

  } catch (e) {

    //console.log(e)

  }

}

function removeParentClass(jumbLinkWrapper) {

  jumbLinkWrapper.forEach((x) => {

    x.classList.remove("uk-active");

  });

}



function isSectionInOriginalPosition(element) {

  try {

    if (window.innerWidth > 1024) {

      let scroll = jQuery(window).scrollTop(),

        topContent = jQuery(".jump").position().top;



      if (scroll < topContent) {

        element.classList.remove("fix");

      } else {

        element.classList.add("fix");

      }

    } else {

      element = document.querySelector(".jump");

      let scroll = jQuery(window).scrollTop(),

        topContent = jQuery(".mobile-side-menu").position().top;



      if (scroll < topContent) {

        element.classList.remove("fix");

      } else {

        element.classList.add("fix");

      }

    }

  } catch (e) {

    //console.log(e)

  }

}

function callingadminInOriginalPosition(element, offset = 50) {

  try {

    // var scroll = jQuery(window).scrollTop(),

    //   topContent = jQuery('.calling-section .col-45').position().top + 150,

    //   sectionHeight = jQuery('.calling-section .col-55').height(),

    //   rightHeight = jQuery('.calling-section .button-row').height(),

    //   bottomContent = topContent + sectionHeight - rightHeight - 45;



    // if (scroll > topContent && scroll < bottomContent) {

    //   jQuery('.calling-section .button-row').removeClass('posAbs').addClass('fix');

    // } else if (scroll > bottomContent) {

    //   jQuery('.calling-section .button-row').removeClass('fix').addClass('posAbs');

    // } else if (scroll < topContent) {

    //   jQuery('.calling-section .button-row').removeClass('fix');

    // }



    // parent



    if (

      jQuery(this).scrollTop() >

      jQuery(".calling-section .col-45").position().top

    ) {

      jQuery(".calling-section .calling-content").addClass("sticky");

    } else {

      jQuery(".calling-section .calling-content").removeClass("sticky");

    }



    // var scroll = jQuery(window).scrollTop(),

    //   topContent = jQuery(".calling-section .col-45").position().top + 150,

    //   sectionHeight = jQuery(".calling-section .col-55").height(),

    //   rightHeight = jQuery(".calling-section .calling-content").height(),

    //   bottomContent = topContent + sectionHeight - rightHeight - 45;

    // console.log(

    //   "scrolling => ",

    //   scroll,

    //   jQuery(".calling-section .col-45").offset().top

    // );

    // if (scroll > topContent && scroll < bottomContent) {

    //   jQuery(".calling-section .calling-content").addClass("sticky");

    // } else {

    //   jQuery(".calling-section .calling-content").removeClass("sticky");

    // }

    // if (scroll > topContent && scroll < bottomContent) {

    //   jQuery(".calling-section .calling-content")

    //     .removeClass("posAbs")

    //     .addClass("fix");

    // } else if (scroll > bottomContent) {

    //   jQuery(".calling-section .calling-content")

    //     .removeClass("fix")

    //     .addClass("posAbs");

    // } else if (scroll < topContent) {

    //   jQuery(".calling-section .calling-content").removeClass("fix");

    // }

  } catch (e) {

    //console.warn("Error in callingadminInOriginalPosition:", e);

  }

}



function callingAdminActive() {

  try {

    let jumbLink = document.querySelectorAll(".calling-section .btn-tag a");

    let jumbLinkWrapper = document.querySelectorAll(

      ".calling-section .btn-tag"

    );

    let sections = document.querySelectorAll(".calling-item");



    jumbLink.forEach((x) => {

      x.addEventListener("click", (e) => {

        e.preventDefault();

        removeParentClass(jumbLinkWrapper);

        x.parentElement.classList.add("uk-active");



        // Get the href value and scroll to the target section

        const targetId = x.getAttribute("href");

        const targetElement = document.querySelector(targetId);

        sections.forEach((s) => {

          s.classList.remove("active");

        });

        targetElement.classList.add("active");

        

        if (targetElement && window.innerWidth > 999) {

          targetElement.scrollIntoView({ behavior: "smooth" });

        }

      });



      if (x.parentElement.classList.contains("uk-active")) {

        id = x.getAttribute("href");

        document.querySelector(id).classList.add("active");

      }

    });

  } catch (e) {

    //console.log(e)

  }

}





let lastScrollTop = window.scrollY; 

const item1 = document.getElementById("calling-1");

const item2 = document.getElementById("calling-2");

const callingsections = [item1, item2];



function checkSectionsInView() {

  const currentScroll = window.scrollY;

  const isScrollingDown = currentScroll > lastScrollTop;



  callingsections && callingsections.forEach((section) => {

    if (!section) return;



    const rect = section.getBoundingClientRect();

    const id = section.getAttribute("id");



    const isFullyVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

    const isPartiallyVisible = rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.2;



    if (isFullyVisible || isPartiallyVisible) {

        if (isScrollingDown) {

            handleActiveMenu(id, "down");

        } else {

            handleActiveMenu(id, "up");

        }

    }

  });

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 

}



let callingMenus = document.querySelectorAll(".calling-section .btn-tag .btn-link");

function handleActiveMenu(id, direction) {

  callingMenus.forEach((item) => {

      item.parentElement.classList.remove("uk-active");

      let link = item.getAttribute("href");

      if (link.includes(id)) {

          item.parentElement.classList.add("uk-active");

      }

  });

}



window.addEventListener("scroll", () => {

  // try {

  //   let jumbSectionScroll = document.querySelector(".mobile-side-menu .jump");

  //   isSectionInOriginalPosition(jumbSectionScroll);

  // } catch (e) {

  //   //console.log(e)

  // }



  try {

    // let callingadmin = document.querySelector(".calling-section .button-row");

    // callingadminInOriginalPosition(callingadmin, 50);



    let callingadmin = document.querySelector(".calling-section .col-45");

    callingadminInOriginalPosition(callingadmin, 50);

  } catch (e) {

    //console.log(e)

  }



  try {

    checkSectionsInView();

  } catch(e) {



  }



});



function clearFilter() {

  try {

    document

      .querySelector(".filter-results .sf-field-reset")

      .addEventListener("click", () => {

        jQuery(".category-filter .searchandfilter select")

          .val(null)

          .trigger("change");

      });

  } catch (e) {}

}

function loadfilter() {

  try {

    let filterList = document.querySelectorAll(

      ".category-filter .searchandfilter li"

    );

    filterList.forEach((x) => {

      x.addEventListener("click", () => {

        setTimeout(clearFilter, 5000);

      });

    });

  } catch (e) {}

}



function GallerySlider() {

  try {

    // gallery and light box

    var gallery = document.querySelector(".more-success-section .gallery-list");

    if (gallery) {

      var galleryflkty = new Flickity(gallery, {

        // options

        arrowShape: "M8 0.999999L1 8M1 8L8 15M1 8L15 8",

        cellAlign: "left",

        contain: false,

        wrapAround: true,

        autoPlay: true,
        
        autoPlay: 1500,

      });

      var carouselStatus = document.querySelector(".gallery .carousel-status");



      function updateStatus() {

        var slideNumber = galleryflkty.selectedIndex + 1;

        carouselStatus.textContent =

          slideNumber + " of " + galleryflkty.slides.length;

      }

      updateStatus();



      galleryflkty.on("select", updateStatus);



      // Flickity - select cell on staticClick, vanilla JS

      galleryflkty.on(

        "staticClick",

        function (event, pointer, cellElement, cellIndex) {

          if (typeof cellIndex == "number") {

            galleryflkty.selectCell(cellIndex);

          }

        }

      );

    }



    // fancybox insilaze & options //

    jQuery("[data-fancybox]").fancybox({

      loop: true,

      hash: true,

      /* uncomment to get extra buttons */

      buttons: [

        //'slideShow',

        //'fullScreen',

        //'thumbs',

        //'share',

        //'download',

        //'zoom',

        "close",

      ],

      infobar: true,

      transitionEffect: "slide",

      thumbs: {

        autoStart: false, // Display thumbnails on opening

        hideOnClose: true, // Hide thumbnail grid when closing animation starts

        parentEl: ".fancybox-container", // Container is injected into this element

        axis: "y", // Vertical (y) or horizontal (x) scrolling

      },



      /* Change click to zoom - to click to next////////////////////

      clickContent - i modify the deafult - now when you click on the image you go to the next image - i more like this approach than zoom on desktop (This idea was in the classic/first lightbox) */

      clickContent: function (current, event) {

        return current.type === "image" ? "next" : false;

      },



      //EVENT UPDATE Flickity index when you close fancybox3 zoom mode

      beforeClose: function (instance, slide) {

        // Reference to DOM element of the slide

        galleryflkty.select(this.index, false, true);

      },

    });

  } catch (e) {}

}

function bannerslider() {

  try {

    // gallery and light box

    var banner = document.querySelector(".banner-slideshow");

    if (banner) {

      var bannerflkty = new Flickity(banner, {

        // options

        cellAlign: "left",

        contain: false,

        prevNextButtons: false,

        pageDots: false,

        wrapAround: true,

        autoPlay: true,

        autoPlay: 1500,
      });



      // Generate custom dots dynamically

      const slideCount = banner.querySelectorAll("li");

      const customDotsContainer = document.querySelector(".dotnav");

      if (slideCount.length > 0) {

        slideCount.forEach((_, index) => {

          const button = document.createElement("li");

          button.setAttribute("data-slide", index);

          customDotsContainer.appendChild(button);

        });

      }



      // Get updated dots list after appending new dots

      const dots = customDotsContainer.querySelectorAll("li");



      dots.forEach((dot) => {

        dot.addEventListener("click", () => {

          const index = dot.getAttribute("data-slide");

          bannerflkty.select(index);

          updateActiveDot(index);

        });

      });



      // Update active dot styling

      function updateActiveDot(activeIndex) {

        dots.forEach((dot, index) => {

          dot.classList.toggle("active", index == activeIndex);

        });

      }



      // Sync custom dots with carousel changes

      bannerflkty.on("change", (index) => {

        console.log(index);

        updateActiveDot(index);

      });



      // Set initial active dot

      updateActiveDot(0);

    }

  } catch (e) {}

}

function tabslider() {

  try {

    // gallery and light box

    var banner = document.querySelector(".category-filter .uk-tab");

    var bannerflkty = new Flickity(banner, {

      // options

      cellAlign: "left",

      contain: false,

      prevNextButtons: false,

      pageDots: false,

      wrapAround: false,

    });

  } catch (e) {}

}

// function mobileDropdown() {

//   try {

//     let tab = document.querySelector(".jump .inner");

//     let toggle = document.querySelector(".mobile-sb-toggle");

//     toggle.addEventListener("click", (e) => {

//       e.preventDefault();

//       tab.classList.toggle("open");

//     });

//   } catch (e) {}

// }

function workPlacesCount() {

  try {

    let works = document.querySelectorAll(".worksmarter .main-workplaces");

    works.forEach((w) => {

      if (w.childElementCount == 1) {

        w.classList.add("workplaces-1");

      }

      if (w.childElementCount == 2) {

        w.classList.add("workplaces-2");

      }

      if (w.childElementCount == 3) {

        w.classList.add("workplaces-3");

      }

      if (w.childElementCount == 4) {

        w.classList.add("workplaces-4");

      }

    });

  } catch (e) {}

}



function popupModal() {

  try {

    let btns = document.querySelectorAll(".leaders .popup-btn");

    let close = document.querySelector(".uk-modal-close-default");

    btns.forEach((b) => {

      b.addEventListener("click", (e) => {

        e.preventDefault();

        console.log("click");

        let id = b.getAttribute("href");

        let modal = document.querySelector(id);

        let close = modal.querySelector(".uk-modal-close-default");

        modal.classList.add("uk-open");

        closeModal(close, modal);

      });

    });



    function closeModal(btn, modal) {

      btn.addEventListener("click", () => {

        modal.classList.remove("uk-open");

      });

    }

  } catch (e) {}

}



document.addEventListener("DOMContentLoaded", () => {

  popupModal();

  //mobileDropdown();

  //tabslider();

  bannerslider();

  callingAdminActive();

  loadfilter();

  jumpSectionToFixPosition();

  fullWidthHover();

  //countDown();

  //menuScrollEffect();

  CopyLink();

  activeMenuClass();

  changeCurrentLangugageName();

  //accordionTabs(".wp-tabs-1");

  accordionMultiple(".wp-tabs");

  //tabsFuntion(".wp-tabs-1");

  multiTabsFuntion(".wp-tabs");

  // tabsFuntion(".wp-tabs-2");

  // tabsFuntion(".wp-tabs-3");

  // tabsFuntion(".wp-tabs-4");

  VideoTrigger();

  // copyTabContent();

  myJumpFunction();

  GallerySlider();

  //copyTabContent2();

  workPlacesCount();

  addRoundedCorner();

  planCheck();

});

window.addEventListener("resize", addRoundedCorner);



const sliders = document.querySelectorAll(

  ".mobile-side-menu .page.uk-tab,.wp-tabs .wp-tabs-nav,.category-filter .uk-tab"

);

let isDown = false;

let startX;

let scrollLeft;

sliders.forEach((slider) => {

  if (slider) {

    slider.addEventListener("mousedown", (e) => {

      isDown = true;

      slider.classList.add("active");

      startX = e.pageX - slider.offsetLeft;

      scrollLeft = slider.scrollLeft;

    });

    slider.addEventListener("mouseleave", () => {

      isDown = false;

      slider.classList.remove("active");

    });

    slider.addEventListener("mouseup", () => {

      isDown = false;

      slider.classList.remove("active");

    });

    slider.addEventListener("mousemove", (e) => {

      if (!isDown) return;

      e.preventDefault();

      const x = e.pageX - slider.offsetLeft;

      const walk = (x - startX) * 3; //scroll-fast

      slider.scrollLeft = scrollLeft - walk;

      console.log(walk);

    });

  }

});



setTimeout(function () {

  window.onload = function () {

    var iframe = document.getElementById("hs-form-iframe-1");

    console.log("iframe => ", iframe);

    // Ensure iframe content is fully loaded

    if (iframe) {

      iframe.onload = function () {

        var iframeDocument =

          iframe.contentDocument || iframe.contentWindow.document;



        var style = document.createElement("style");

        style.innerHTML = `

              input[type="text"] {

                  font-size: 16px;

                  border-radius: 4px;

              }

    

              input[type="submit"] {

                  padding: 10px;

                  font-size: 16px;

                  border: none;

                  border-radius: 50px;

                  box-shadow: 0px 4px 4px 0px #0000000D inset;

                  color: white;

                  cursor: pointer;

              }

          `;

        iframeDocument.head.appendChild(style);

      };

    }

  };

}, 300);



function addRoundedCorner() {

  const colLeft = document.querySelectorAll(

    "body .exchange-online .tab-content .col-1 .col-row > * "

  );

  console.log(

    document.querySelectorAll(

      "body .exchange-online .tab-content .col-1 .col-row > * "

    )

  );

  const colMiddle = document.querySelectorAll(

    "body .exchange-online .tab-content .col-4.middle .col-row .col-item"

  );

  const colRight = document.querySelectorAll(

    "body .exchange-online .tab-content .col-2.right .col-row .col-item"

  );

  if (colLeft) {

    addRoundedClass(colLeft);

  }

  if (colMiddle) {

    addRoundedClass(colMiddle);

  }

  if (colRight) {

    addRoundedClass(colRight);

  }

}

function addRoundedClass(main) {

  main.forEach((child, index, arr) => {

    if (arr.length === 1) {

      child.classList.add("first-rounded", "last-rounded"); // If only one child, apply both classes

    } else {

      if (index === 0) {

        child.classList.add("first-rounded"); // First element

      }

      if (index === arr.length - 1) {

        child.classList.add("last-rounded"); // Last element

      }

    }

  });

}

function planCheck() {

  const businessPlan = document.querySelectorAll(

    ".microsoft-business-plans.techno-detail-plan .plans"

  );

  if (businessPlan) {

    businessPlan.forEach((child, index, arr) => {

      if (child.childElementCount <= 3) {

        child.classList.add("lthree");

      }

    });

  }

}

