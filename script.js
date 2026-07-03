function filterBrands() {
  const checked = Array.from(
    document.querySelectorAll('input[type="checkbox"]:checked')
  ).map(cb => cb.value);

  const scored = brands.map(brand => {
    let score = 0;

    checked.forEach(tag => {
      if (brand.tags.includes(tag)) {
        score++;
      }
    });

    return { ...brand, score };
  });

  scored.sort((a, b) => b.score - a.score);

  const top3 = scored.slice(0, 3);

  renderResult(top3);
}

function renderResult(list) {
  const result = document.getElementById("result");

  result.innerHTML = "<h2>おすすめブランド</h2>";

  list.forEach((b, i) => {
    result.innerHTML += `
      <div>
        <h3>${i + 1}位：${b.name}</h3>
        <p>${b.description}</p>
        <small>一致度：${b.score}</small>
      </div>
    `;
  });
}

const priceLabel = document.getElementById("priceLabel");
const priceRange = document.getElementById("priceRange");

priceRange.addEventListener("input", () => {
  const val = Number(priceRange.value);

  const map = {
    1: "プチプラ",
    2: "中価格",
    3: "高価格"
  };

  priceLabel.textContent = map[val];
});
