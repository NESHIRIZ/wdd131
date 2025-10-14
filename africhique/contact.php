<?php
  $page_title = 'Contact — AFRICHIQUE';
  $active_page = 'contact';
  include 'Includes/header.php';
?>
<section class="page-hero small">
  <div class="container">
    <h1>Contact Us</h1>
    <p>We’d love to hear from you.</p>
  </div>
</section>

<section class="container section contact-grid">
  <div>
    <h2>Studio</h2>
    <p>12 Heritage Lane, Bulawayo, Zimbabwe</p>
    <p><strong>Phone/WhatsApp:</strong> <a href="tel:+263771234567">+263 77 123 4567</a></p>
    <p><strong>Email:</strong> <a href="mailto:hello@africhique.co.zw">hello@africhique.co.zw</a></p>
    <div class="map-embed">
      <iframe title="Map" loading="lazy" allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d-20.155!2d28.58!3d-20.156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBulawayo!5e0!3m2!1sen!2sZW!4v0000000000">
      </iframe>
    </div>
  </div>

  <form id="contact-form" class="form" novalidate>
    <h2>Send a Message</h2>
    <label>Name
      <input type="text" id="cname" required />
    </label>
    <label>Email
      <input type="email" id="cemail" required />
    </label>
    <label>Message
      <textarea id="cmsg" rows="6" required></textarea>
    </label>
    <button class="btn btn-gold" type="submit">Send</button>
    <p class="form-hint">We reply within 24 hours.</p>
  </form>
</section>

<?php include 'Includes/footer.php'; ?>
