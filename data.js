const brands = [
  {
    name: "HEAVEN Japan",
    description: "しっかり支える補整系ブランド",
    styles: ["サポート", "セクシー"],
    cups: ["C","D","E","F","G","H","I"],
    underMin: 70,
    underMax: 85
  },
  {
    name: "Risa Magli",
    description: "かわいくて華やか",
    styles: ["かわいい"],
    cups: ["A","B","C","D","E"],
    underMin: 65,
    underMax: 75
  },
  {
    name: "tu-hacci",
    description: "楽ちん＆コスパ",
    styles: ["シンプル","楽"],
    cups: ["A","B","C","D","E","F"],
    underMin: 70,
    underMax: 80
  },

  {
    name: "PEACH JOHN",
    description: "トレンド重視でかわいい系",
    styles: ["かわいい","セクシー"],
    cups: ["A","B","C","D","E","F"],
    underMin: 65,
    underMax: 75
  },
  {
    name: "aimerfeel",
    description: "プチプラで盛れる系",
    styles: ["かわいい","セクシー","楽"],
    cups: ["A","B","C","D","E","F","G"],
    underMin: 65,
    underMax: 80
  },
  {
    name: "Wacoal",
    description: "機能性と安定の王道",
    styles: ["サポート","シンプル"],
    cups: ["A","B","C","D","E","F","G","H"],
    underMin: 65,
    underMax: 85
  },
  {
    name: "Triumph",
    description: "フィット感重視の定番",
    styles: ["サポート","シンプル"],
    cups: ["A","B","C","D","E","F","G","H"],
    underMin: 65,
    underMax: 85
  },
  {
    name: "PEACH",
    description: "フェミニン系デザイン",
    styles: ["かわいい"],
    cups: ["A","B","C","D","E"],
    underMin: 65,
    underMax: 75
  },
  {
    name: "AMOSTYLE",
    description: "若年層向けかわいい系",
    styles: ["かわいい","楽"],
    cups: ["A","B","C","D","E","F"],
    underMin: 65,
    underMax: 80
  },
  {
    name: "Wing",
    description: "シンプルで日常使い",
    styles: ["シンプル","楽"],
    cups: ["A","B","C","D","E","F","G"],
    underMin: 65,
    underMax: 80
  },

  {
    name: "BRADELIS New York",
    description: "補整特化の本格派",
    styles: ["サポート"],
    cups: ["C","D","E","F","G","H","I"],
    underMin: 70,
    underMax: 85
  },
  {
    name: "Lounge Bra",
    description: "ノンワイヤー楽ちん系",
    styles: ["楽","シンプル"],
    cups: ["A","B","C","D","E","F"],
    underMin: 65,
    underMax: 80
  },
  {
    name: "Une nana cool",
    description: "ナチュラル志向",
    styles: ["シンプル","楽"],
    cups: ["A","B","C","D","E"],
    underMin: 65,
    underMax: 75
  },
  {
    name: "Lise Charmel",
    description: "高級セクシー系",
    styles: ["セクシー"],
    cups: ["B","C","D","E","F","G"],
    underMin: 70,
    underMax: 80
  },
  {
    name: "Chantelle",
    description: "フランス系シンプル上質",
    styles: ["シンプル","サポート"],
    cups: ["B","C","D","E","F","G","H"],
    underMin: 70,
    underMax: 85
  },
  {
    name: "Simone Pérèle",
    description: "上品セクシー",
    styles: ["セクシー","サポート"],
    cups: ["B","C","D","E","F","G"],
    underMin: 70,
    underMax: 85
  },
  {
    name: "Intimissimi",
    description: "イタリアンデザイン",
    styles: ["セクシー","シンプル"],
    cups: ["A","B","C","D","E","F"],
    underMin: 65,
    underMax: 80
  },
  {
    name: "Calvin Klein",
    description: "ミニマルシンプル",
    styles: ["シンプル"],
    cups: ["A","B","C","D","E","F"],
    underMin: 65,
    underMax: 80
  },
  {
    name: "UNIQLO Bra",
    description: "超楽ちん日常用",
    styles: ["楽","シンプル"],
    cups: ["A","B","C","D","E"],
    underMin: 65,
    underMax: 75
  },
  {
    name: "GU Bra",
    description: "プチプラ楽系",
    styles: ["楽","かわいい"],
    cups: ["A","B","C","D","E"],
    underMin: 65,
    underMax: 75
  },

  {
    name: "Savage X Fenty",
    description: "セクシー＆多様性",
    styles: ["セクシー"],
    cups: ["A","B","C","D","E","F","G","H"],
    underMin: 65,
    underMax: 85
  },
  {
    name: "Victoria's Secret",
    description: "王道セクシー",
    styles: ["セクシー","かわいい"],
    cups: ["A","B","C","D","E","F"],
    underMin: 65,
    underMax: 80
  },
  {
    name: "Adore Me",
    description: "バランス型海外ブランド",
    styles: ["かわいい","セクシー","楽"],
    cups: ["A","B","C","D","E","F","G"],
    underMin: 65,
    underMax: 80
  },
  {
    name: "ThirdLove",
    description: "フィット重視",
    styles: ["シンプル","サポート"],
    cups: ["A","B","C","D","E","F","G","H"],
    underMin: 65,
    underMax: 85
  },
  {
    name: "Knix",
    description: "ノンワイヤー快適",
    styles: ["楽","シンプル"],
    cups: ["A","B","C","D","E","F"],
    underMin: 65,
    underMax: 80
  },
  {
    name: "Parfait",
    description: "グラマー対応海外ブランド",
    styles: ["サポート","セクシー"],
    cups: ["C","D","E","F","G","H","I"],
    underMin: 70,
    underMax: 85
  },
  {
    name: "Elomi",
    description: "大きめサイズ特化",
    styles: ["サポート"],
    cups: ["D","E","F","G","H","I","J"],
    underMin: 75,
    underMax: 90
  },
  {
    name: "Panache",
    description: "しっかり支える海外定番",
    styles: ["サポート","シンプル"],
    cups: ["D","E","F","G","H","I"],
    underMin: 70,
    underMax: 85
  }
];
