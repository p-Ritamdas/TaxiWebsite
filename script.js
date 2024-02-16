document.addEventListener("DOMContentLoaded", function() {
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mobileDropdownContainer = document.querySelector(
    ".mobile-dropdown-container"
  );

  mobileMenuToggle.addEventListener("click", function() {
    mobileDropdownContainer.classList.toggle("active");
  });

  const mobileDropdowns = document.querySelectorAll(".mobile-dropdown");

  mobileDropdowns.forEach(function(dropdown) {
    dropdown.addEventListener("click", function() {
      dropdown
        .querySelector(".mobile-dropdown-content")
        .classList.toggle("show");
    });
  });
}); 

document.addEventListener("DOMContentLoaded", function() {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".carousel-item");

  function showSlide() {
    slides.forEach((slide, i) => {
      slide.style.display = i === currentSlide ? "flex" : "none";
    });
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide();
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide();
  }

  showSlide();

  document
    .querySelector(".fa-square-caret-left")
    .addEventListener("click", prevSlide);
  document
    .querySelector(".fa-square-caret-right")
    .addEventListener("click", nextSlide);
});

$(document).ready(function() {
  var owl = $(".owl-carousel").owlCarousel({
    items: 3,
    loop: true,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
    autoHeight: true,
  });

  owl.on("changed.owl.carousel", function(event) {
    var $currentStage = $(event.target).find(".owl-stage");
    setTimeout(function() {
      var maxHeight = 0;
      $currentStage.find(".owl-item.active").each(function() {
        var itemHeight = $(this).height();
        maxHeight = Math.max(maxHeight, itemHeight);
      });
      $currentStage.height(maxHeight);
    }, 1);
  });
});

function prevSlide() {
  $(".owl-carousel").trigger("prev.owl.carousel");
}

function nextSlide() {
  $(".owl-carousel").trigger("next.owl.carousel");
}
