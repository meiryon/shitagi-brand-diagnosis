function filterBrands() {

  const checked = Array.from(
    document.querySelectorAll('input[type="checkbox"]:checked')
  ).map(cb => cb.value);

  const sizeInput = document.getElementById("sizeInput").value.toUpperCase().trim();

  if (sizeInput.length < 2) {
    alert("サイズをC75みたいに入力してね");
    return;
  }

  const cup = sizeInput.slice(0, 1);
  const under = Number(sizeInput.slice(1));

  const scored = brands.map(brand => {

    let score = 0;

    // 好み・機能
    checked.forEach(tag => {
      if (brand.styles.includes(tag)) score += 1;
    });

    // カップ一致
    if (brand.cups.includes(cup)) score += 2;

    // アンダー一致
    if (under >= brand.underMin && under <= brand.underMax) {
      score += 3;
    }

    return { ...brand, score };
  });

  scored.sort((a, b) => b.score - a.score);

  renderResult(scored.slice(0, 3));
}

function renderResult(list) {

  const result = document.getElementById("result");

  if (!list.length) {
    result.innerHTML = "該当なし";
    return;
  }

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
