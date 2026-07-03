function filterBrands() {
  const checked = Array.from(
    document.querySelectorAll('input[type="checkbox"]:checked')
  ).map(cb => cb.value);

  const priceRange = document.getElementById("priceRange");
  const price = priceRange ? Number(priceRange.value) : 2;

  const scored = brands.map(brand => {
    let score = 0;

    checked.forEach(tag => {
      if (brand.tags.includes(tag)) {
        score++;
      }
    });

    if (
      (price === 1 && brand.tags.includes("プチプラ")) ||
      (price === 2 && brand.tags.includes("中価格")) ||
      (price === 3 && brand.tags.includes("高価格"))
    ) {
      score += 2;
    }

    return { ...brand, score };
  });

  scored.sort((a, b) => b.score - a.score);

  renderResult(scored.slice(0, 3));
}

function renderResult(list) {
  const result = document.getElementById("result");

  result.innerHTML = "<h2>おすすめブランド</h2>";

  list.forEach((b, i) => {
    result.innerHTML += `
      <div style="margin:10px 0;padding:10px;border:1px solid #ddd;border-radius:8px;">
        <h3>${i + 1}位：${b.name}</h3>
        <p>${b.description}</p>
        <small>スコア：${b.score}</small>
      </div>
    `;
  });
}
