
<?php
  if (!isset($page_title)) { $page_title = 'AFRICHIQUE — Elegant African Clothing & Bags'; }
  if (!isset($active_page)) { $active_page = ''; }
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title><?= htmlspecialchars($page_title) ?></title>
  <meta name="description" content="Africhique designs elegant African clothing and luxury bags." />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <!-- LDS-inspired typography: calm, readable -->
  <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/Styles/styles.css?v=1" />
  <script defer src="assets/script/main.js?v=1"></script>
</head>
<body>
  <a class="skip-link" href="#content">Skip to content</a>

  <header class="topbar">
    <div class="container topbar-inner">
      <a class="brand" href="index.php" aria-label="AFRICHIQUE Home">
        <img src="assets/images/logo2.svg" alt="Africhique logo" class="logo">
        <span class="brand-text">AFRICHIQUE</span>
      </a>

      <button class="nav-toggle" aria-controls="primary-nav" aria-expanded="false" aria-label="Toggle menu">
        <span class="nav-toggle-bar"></span>
        <span class="nav-toggle-bar"></span>
        <span class="nav-toggle-bar"></span>
      </button>

      <nav id="primary-nav" class="nav" aria-label="Primary">
        <ul>
          <li><a class="<?= $active_page==='home'?'active':'' ?>" href="index.php">Home</a></li>
          <li><a class="<?= $active_page==='about'?'active':'' ?>" href="about.php">About</a></li>
          <li><a class="<?= $active_page==='products'?'active':'' ?>" href="products.php">Products & Prices</a></li>
          <li><a class="<?= $active_page==='order'?'active':'' ?>" href="order.php">Order</a></li>
          <li><a class="<?= $active_page==='contact'?'active':'' ?>" href="contact.php">Contact</a></li>
        </ul>
      </nav>

      <a href="order.php" class="cart-link" aria-label="Cart">
        <span class="cart-icon">🛍️</span>
        <span class="cart-count" id="cart-count" aria-live="polite">0</span>
      </a>
    </div>
  </header>

  <main id="content">
