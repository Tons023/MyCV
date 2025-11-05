/*========================= EMAIL JS ==========================*/
(function() {
  emailjs.init("user_zxy76iJQ8ci9Lz5KZ"); // EmailJS public key
})();

const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  emailjs.sendForm('service_jfen8t4', 'template_1r7Ip7e', '#contact-form')
    .then(() => {
      contactMessage.textContent = '✅ Message sent successfully!';
      contactMessage.style.color = 'green';
      contactForm.reset();

      // Clear message after 5 seconds
      setTimeout(() => {
        contactMessage.textContent = '';
      }, 5000);
    }, (error) => {
      contactMessage.textContent = '❌ Failed to send message. Try again later.';
      contactMessage.style.color = 'red';
      console.error('EmailJS error:', error);
    });
});