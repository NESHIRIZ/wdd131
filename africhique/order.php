<?php
  $page_title = 'Order — AFRICHIQUE';
  $active_page = 'order';
  include 'Includes/header.php';
?>
<section class="page-hero small">
  <div class="container">
    <h1>Your Order</h1>
    <p>Review items and send an enquiry. No online payment required.</p>
  </div>
</section>

<section class="container section order-wrap">
  <div class="cart">
    <h2>Cart</h2>
    <div id="cart-items" class="cart-items" aria-live="polite"></div>
    <div class="cart-summary">
      <span>Total:</span>
      <strong id="cart-total">$0</strong>
    </div>
  </div>

  <aside class="order-form">
    <h2>Order Enquiry</h2>
    <form id="order-form" class="form" novalidate>
      <label>Full Name
        <input type="text" id="name" required />
      </label>
      <label>Phone / WhatsApp
        <input type="tel" id="phone" required />
      </label>
      <label>Email (optional)
        <input type="email" id="email" />
      </label>
      <label>Notes / Sizes / Colours
        <textarea id="notes" rows="5" placeholder="e.g., Size 10, emerald green, event date 20 Sept"></textarea>
      </label>
      <button type="submit" class="btn btn-gold full">Send Enquiry via WhatsApp</button>
      <p class="form-hint">We’ll confirm availability, price, and pickup/delivery options.</p>
    </form>
  </aside>
</section>

<?php include 'Includes/footer.php'; ?>
