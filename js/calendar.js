document.addEventListener("DOMContentLoaded", function () {
    flatpickr("#datum", {
      minDate: "today", // uživatel nemůže vybrat minulost
      dateFormat: "d.m.Y",
      altInput: true,
      altFormat: "j. F Y",
      locale: "cs"
    });
  });
  