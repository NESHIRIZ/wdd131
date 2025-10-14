<?php
  $page_title = 'Products & Prices — AFRICHIQUE';
  $active_page = 'products';
  include 'Includes/header.php';
?>
<section class="page-hero small">
  <div class="container">
    <h1>Products & Prices</h1>
    <p>Browse popular pieces. Custom colours and sizes available on request.</p>
  </div>
</section>

<section class="container section">
  <div class="toolbar">
    <input id="search" class="input" type="search" placeholder="Search products..." aria-label="Search products">
    <select id="filter" class="select" aria-label="Filter category">
      <option value="all">All</option>
      <option value="clothing">Clothing</option>
      <option value="bags">Bags</option>
      <option value="accessories">Accessories</option>
    </select>
  </div>

  <div id="product-grid" class="grid cards-3">
    <?php
      include 'Includes/cards.php';
      $products = [
        ['id'=>'dress_kitenge','title'=>'Kitenge Flow Dress','price'=>'$90','img'=>'Assets/images/dress_kitenge.jpg','desc'=>'Graceful movement & bold print.','cat'=>'clothing'],
        ['id'=>'blazer_kente','title'=>'Kente Statement Blazer','price'=>'$120','img'=>'Assets/images/blazer_kente.jpg','desc'=>'Tailored, versatile, iconic.','cat'=>'clothing'],
        ['id'=>'bag_ankara','title'=>'Ankara Crossbody Bag','price'=>'$48','img'=>'Assets/images/bag_ankara.jpg','desc'=>'Compact everyday elegance.','cat'=>'bags'],
        ['id'=>'bag_leather_kente','title'=>'Leather-Kente Satchel','price'=>'$110','img'=>'Assets/images/bag_leather.jpg','desc'=>'Genuine leather + kente detail.','cat'=>'bags'],
        ['id'=>'headwrap_wax','title'=>'Wax-Print Headwrap','price'=>'$15','img'=>'Assets/images/headwrap.jpg','desc'=>'Statement accessory.','cat'=>'accessories'],
        ['id'=>'shirt_mens','title'=>"Men’s Heritage Shirt",'price'=>'$60','img'=>'Assets/images/shirt_mens.jpg','desc'=>'Casual-smart classic.','cat'=>'clothing'],
      ];
      foreach ($products as $item) { render_card($item); }
    ?>
  </div>
</section>

<?php include 'Includes/footer.php'; ?>
