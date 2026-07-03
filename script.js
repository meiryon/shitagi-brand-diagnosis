function filterBrands() {
  const checked = Array.from(
    document.querySelectorAll('input[type="checkbox"]:checked')
  ).map(cb => cb.value);

  const price = Number(document.getElementById("priceRange").value);

  const scored = brands.map(brand => {
    let score = 0;

    // チェック一致
    checked.forEach(tag => {
      if (brand.tags.includes(tag)) {
        score++;
      }
    });

    // 価格一致（重め）
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

// ⭐ STEP1：カード表示ここ
function renderResult(list) {
  const result = document.getElementById("result");

  result.innerHTML = "<h2>おすすめ</h2>";

  list.forEach((b, i) => {
    result.innerHTML += `
      <div class="card">
        <h3>${i + 1}位：${b.name}</h3>
        <p>${b.description}</p>
        <small>スコア：${b.score}</small>
      </div>
    `;
  });
}

// スライダー表示
const priceRange = document.getElementById("priceRange");
const priceLabel = document.getElementById("priceLabel");

priceRange.addEventListener("input", () => {
  const map = {
    1: "プチプラ",
    2: "中価格",
    3: "高価格"
  };
  priceLabel.textContent = map[priceRange.value];
});
