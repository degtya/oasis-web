document.addEventListener("DOMContentLoaded", function () {
    
    const thumbs = document.querySelectorAll(".gallery-grid a img");
  
    thumbs.forEach(img => {
      img.addEventListener("click", () => {
        img.classList.add("clicked-img");
        setTimeout(() => img.classList.remove("clicked-img"), 500);
      });
    });
  });
  