(function () {
  document.querySelectorAll("#brandName, .logo-text").forEach(el => {
    el.textContent = CONFIG.storeName;
  });

  const heroDesc = document.getElementById("heroDesc");
  if (heroDesc) heroDesc.textContent = CONFIG.heroDesc;

  document.getElementById("statOrders").textContent = CONFIG.stats.orders;
  document.getElementById("statRating").textContent = CONFIG.stats.rating;
  document.getElementById("statSpeed").textContent = CONFIG.stats.speed;

  const waLink = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(
    `Halo ${CONFIG.storeName}, saya mau order joki.`
  )}`;
  document.getElementById("headerWa").href = waLink;
  document.getElementById("footerWa").href = waLink;
  document.getElementById("footerIg").href = CONFIG.instagram;
  document.getElementById("footerTt").href = CONFIG.tiktok;

  const waAfter = document.getElementById("waAfterPay");
  if (waAfter) waAfter.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(
    `Halo ${CONFIG.storeName}, saya sudah bayar via QRIS. Ini bukti transfernya:`
  )}`;

  document.getElementById("qrisOwner").textContent = CONFIG.qrisOwner;
  document.getElementById("year").textContent = new Date().getFullYear();

  const grid = document.getElementById("serviceGrid");
  if (grid) {
    grid.innerHTML = CONFIG.services.map(svc => `
      <div class="card">
        <div class="card-icon">${svc.icon}</div>
        <h3>${svc.title}</h3>
        <p>${svc.desc}</p>
        <div class="card-price">${svc.price}</div>
        <a href="#order" class="card-btn" data-service="${svc.orderLabel}">Order</a>
      </div>
    `).join("");

    grid.querySelectorAll(".card-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.getElementById("layanan").value = btn.dataset.service;
      });
    });
  }

  const gameSelect = document.getElementById("game");
  if (gameSelect) {
    gameSelect.innerHTML = `<option value="" disabled selected>Pilih game</option>` +
      CONFIG.games.map(g => `<option value="${g}">${g}</option>`).join("");
  }

  const layananSelect = document.getElementById("layanan");
  if (layananSelect) {
    layananSelect.innerHTML = `<option value="" disabled selected>Pilih layanan</option>` +
      CONFIG.services.map(s => `<option value="${s.orderLabel}">${s.title}</option>`).join("");
  }
})();
