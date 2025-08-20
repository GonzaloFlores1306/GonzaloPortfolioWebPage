(function() {
  // Inicializa EmailJS con tu Public Key
  emailjs.init("oNgpTCjujFLbGW_hW");
})();

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("service_299mg9d", "template_m5pxkmn", this)
      .then(
        function() {
          alert("✅ Message sent successfully! I'll contact you soon.");
          form.reset();
        },
        function(error) {
          alert("❌ Failed to send message. Error: " + JSON.stringify(error));
        }
      );
  });
});