<?php
function render_card($item) {
  $title = htmlspecialchars($item['title'] ?? 'Item');
  $price = htmlspecialchars($item['price'] ?? '');
  $img   = htmlspecialchars($item['img'] ?? 'Assets/images/placeholder.jpg');
  $id    = htmlspecialchars($item['id'] ?? uniqid('p_'));
  $desc  = htmlspecialchars($item['desc'] ?? '');
  $cat   = htmlspecialchars($item['cat'] ?? 'all');
?>
  <article class="card" data-cat="<?= $cat ?>">
    <div class="card-media">
      <img src="<?= $img ?>" alt="<?= $title ?>" loading="lazy" />
    </div>
    <div class="card-body">
      <h3 class="card-title"><?= $title ?></h3>
      <?php if ($desc): ?><p class="card-desc"><?= $desc ?></p><?php endif; ?>
      <div class="card-meta">
        <span class="price"><?= $price ?></span>
        <button class="btn btn-add"
          data-id="<?= $id ?>"
          data-title="<?= $title ?>"
          data-price="<?= $price ?>"
          data-img="<?= $img ?>">Add to Cart</button>
      </div>
    </div>
  </article>
<?php } ?>
