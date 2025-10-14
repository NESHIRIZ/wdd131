<?php
  $page_title = 'AFRICHIQUE — Elegant African Clothing & Bags';
  $active_page = 'home';
  include 'Includes/header.php';
  include 'Includes/hero.php';
?>
<section class="container section">
  <header class="section-head">
    <h2 class="section-title">Signature Collections</h2>
    <p class="section-sub">Discover our bestsellers — premium fabrics, authentic African motifs.</p>
  </header>

  <div class="grid cards-3">
    <?php
      include 'Includes/cards.php';
      $featured = [
        ['id'=>'dress_ankara','title'=>'Ankara Grace Dress','price'=>'$85','img'=>'Assets/images/dress_ankara.jpg','desc'=>'Flowing silhouette with bold wax-print panels.','cat'=>'clothing'],
        ['id'=>'suit_kente','title'=>'Kente Heritage Suit','price'=>'$160','img'=>'Assets/images/suit_kente.jpg','desc'=>'Modern cut suit with kente accents.','cat'=>'clothing'],
        ['id'=>'bag_mudcloth','title'=>'Mudcloth Tote','price'=>'$55','img'=>'Assets/images/bag_mudcloth.jpg','desc'=>'Handcrafted tote with authentic mudcloth.','cat'=>'bags'],
      ];
      foreach ($featured as $item) { render_card($item); }
    ?>
  </div>
</section>

<section class="pattern-band">
  <div class="container band-inner">
    <h3>Custom Tailoring</h3>
    <p>Bring your vision — we’ll cut, fit, and finish to perfection. Weddings, events, and everyday elegance.</p>
    <a class="btn btn-outline" href="contact.php">Start a Custom Enquiry</a>
  </div>
</section>

<section class="container section">
  <header class="section-head"><h2 class="section-title">Why Choose Africhique</h2></header>
  <div class="grid features">
    <article class="feature">
      <h4>Premium Fabrics</h4>
      <p>Durable textiles and original prints from trusted African suppliers.</p>
    </article>
    <article class="feature">
      <h4>Tailored Fit</h4>
      <p>Measured to your style — comfort and confidence in every stitch.</p>
    </article>
    <article class="feature">
      <h4>Local Craft</h4>
      <p>Designed in Zimbabwe, supporting artisans and local jobs.</p>
    </article>
  </div>
</section>

<?php include 'Includes/footer.php'; ?>
