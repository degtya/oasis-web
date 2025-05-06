document.addEventListener("DOMContentLoaded", function () {
    flatpickr("#datum", {
      minDate: "today",
      dateFormat: "d.m.Y",
      altInput: true,
      altFormat: "j. F Y",
      locale: "cs"
    });
  });
  
