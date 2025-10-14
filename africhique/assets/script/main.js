// Mobile nav
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('primary-nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const expanded = nav.getAttribute('aria-expanded') === 'true';
    nav.setAttribute('aria-expanded', String(!expanded));
    navToggle.setAttribute('aria-expanded', String(!expanded));
  });
}

// Simple visual cart (localStorage)
const CART_KEY = 'africhique_cart';
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

function getCart(){ try{ return JSON.parse(localStorage.getItem(CART_KEY) || '[]'); }catch{ return []; } }
function setCart(cart){ localStorage.setItem(CART_KEY, JSON.stringify(cart)); updateCartCount(); }
function updateCartCount(){ const c = $('#cart-count'); if (!c) return; c.textContent = getCart().reduce((n,i)=>n+i.qty,0); }

// Add buttons on product cards
$$('.btn-add').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const item = {
      id: btn.dataset.id,
      title: btn.dataset.title,
      price: btn.dataset.price,
      img: btn.dataset.img,
      qty: 1
    };
    const cart = getCart();
    const idx = cart.findIndex(i=>i.id===item.id);
    if (idx>-1) cart[idx].qty += 1; else cart.push(item);
    setCart(cart);
    btn.textContent = 'Added ✓';
    setTimeout(()=>btn.textContent='Add to Cart', 1200);
  });
});

// Render cart on order.php
function renderCart(){
  const container = $('#cart-items');
  if (!container) return;
  const cart = getCart();
  container.innerHTML = '';
  let total = 0;

  cart.forEach((i, index)=>{
    const price = parseFloat((i.price||'').replace(/[^0-9.]/g,''))||0;
    total += price * i.qty;
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.innerHTML = `
      <img src="${i.img}" alt="${i.title}">
      <div>
        <strong>${i.title}</strong><br>
        <span>${i.price}</span> × 
        <input type="number" min="1" value="${i.qty}" style="width:64px" aria-label="Quantity">
      </div>
      <button class="btn btn-outline" aria-label="Remove">&times;</button>
    `;
    const qtyInput = $('input[type=number]', el);
    qtyInput.addEventListener('change', ()=>{
      const v = Math.max(1, parseInt(qtyInput.value||'1',10));
      const cart2 = getCart(); cart2[index].qty = v; setCart(cart2); renderCart();
    });
    const rm = $('button', el);
    rm.addEventListener('click', ()=>{
      const cart2 = getCart(); cart2.splice(index,1); setCart(cart2); renderCart();
    });
    container.appendChild(el);
  });

  const totalEl = $('#cart-total');
  if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
}
renderCart(); updateCartCount();

// Products page: simple search/filter
(function(){
  const grid = $('#product-grid'); if (!grid) return;
  const search = $('#search'); const filter = $('#filter');
  function apply(){
    const q = (search?.value||'').toLowerCase().trim();
    const cat = filter?.value||'all';
    $$('.card', grid).forEach(card=>{
      const title = $('.card-title', card)?.textContent.toLowerCase()||'';
      const desc = $('.card-desc', card)?.textContent.toLowerCase()||'';
      const matchQ = !q || title.includes(q) || desc.includes(q);
      const matchC = cat==='all' || (card.dataset.cat===cat);
      card.style.display = (matchQ && matchC) ? '' : 'none';
    });
  }
  search?.addEventListener('input', apply);
  filter?.addEventListener('change', apply);
  apply();
})();

// Order form -> WhatsApp compose (no backend)
const orderForm = $('#order-form');
if (orderForm){
  orderForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = $('#name')?.value?.trim()||'';
    const phone = $('#phone')?.value?.trim()||'';
    const email = $('#email')?.value?.trim()||'';
    const notes = $('#notes')?.value?.trim()||'';

    const cart = getCart();
    const lines = cart.map(i=>`• ${i.title} (${i.qty} × ${i.price})`).join('%0A');
    const total = $('#cart-total')?.textContent||'$0';

    const msg = `Hello Africhique,%0A%0AMy name is ${encodeURIComponent(name)}.%0A`+
      `Items:%0A${lines||'-'}%0A%0ATotal: ${encodeURIComponent(total)}%0A`+
      `Email: ${encodeURIComponent(email)}%0APhone: ${encodeURIComponent(phone)}%0A`+
      `Notes: ${encodeURIComponent(notes)}`;

    // Replace with your WhatsApp number
    const yourNumber = '263771234567';
    const url = `https://wa.me/${yourNumber}?text=${msg}`;
    window.open(url, '_blank');
  });
}

// Newsletter + contact (front-end only)
$('#newsletter-form')?.addEventListener('submit', (e)=>{
  e.preventDefault();
  const email = $('#newsletter-email')?.value||'';
  if (!email) return;
  alert('Thanks for subscribing!'); 
});

$('#contact-form')?.addEventListener('submit', (e)=>{
  e.preventDefault();
  alert('Message sent! We will reply within 24 hours.');
});
