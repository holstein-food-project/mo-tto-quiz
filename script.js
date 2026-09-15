const quizData = [
 {
  level: 1,
  question: "ホルスタイン牛といえば、どんな模様？",
  choices: ["茶色と白", "黒と白", "白一色", "黒一色"],
  answer: 1,
  fact: "💡ホルスタイン牛といえば黒と白の模様が代表的です。実は模様は一頭ずつ違います。"
 },
 {
  level: 1,
  question: "ホルスタイン牛は主に何のために飼われている？",
  choices: ["牛乳を生産するため", "毛をとるため", "卵をとるため", "荷物を運ぶため"],
  answer: 0,
  fact: "💡ホルスタイン種は代表的な乳用牛で、牛乳を生産するために多く飼育されています。"
 },
 {
  level: 1,
  question: "牛の鳴き声といえば？",
  choices: ["ワンワン", "メーメー", "コケコッコー", "モーモー"],
  answer: 3,
  fact: "💡牛の鳴き声は「モー」と表現されることが多いです。"
 },
 {
  level: 1,
  question: "ホルスタイン牛はどんな動物の仲間？",
  choices: ["鳥類", "哺乳類", "爬虫類", "魚類"],
  answer: 1,
  fact: "💡牛は子どもを母乳で育てる哺乳類です。"
 },
 {
  level: 1,
  question: "牛は主に何を食べる？",
  choices: ["魚", "肉", "牧草や飼料", "昆虫"],
  answer: 2,
  fact: "💡牛は牧草や、とうもろこしなどを使った飼料を食べています。"
 },
 {
  level: 1,
  question: "牛乳から作られるものはどれ？",
  choices: [ "醤油", "のり", "小麦粉", "チーズ"],
  answer: 3,
  fact: "💡牛乳はチーズ、バター、ヨーグルトなど、さまざまな食品に使われます。"
 },
 {
  level: 1,
  question: "牛の足には何がある？",
  choices: ["ひづめ", "羽", "うろこ", "水かき"],
  answer: 0,
  fact: "💡牛の足には硬いひづめがあり、歩いたり体重を支えたりします。"
 },
 {
  level: 1,
  question: "ホルスタイン牛の大きさは？",
  choices: ["ネコくらい", "ウサギくらい", "ウマくらい", "ゾウくらい"],
  answer: 2,
  fact: "💡ホルスタインは大型の牛で、成牛になるとかなり大きな体になります。"
 },
 {
  level: 1,
  question: "牛乳を出すのは基本的にオスとメスのどちら？",
  choices: ["オス", "どちらも", "メス", "子牛だけ"],
  answer: 2,
  fact: "💡牛乳を生産するのはメスの牛です。"
 },
 {
  level: 1,
  question: "ホルスタイン牛の模様は、一頭一頭同じ？",
  choices: ["全部おなじ", "オスだけ違う", "ほぼ同じ", "一頭一頭違う"],
  answer: 3,
  fact: "💡ホルスタイン牛の模様には個体差があり、一頭ずつ違います。"
 },

 {
  level: 2,
  question: "ホルスタイン牛の肉質はどんな特徴がある？",
  choices: ["脂がとても多い", "赤身が多く、あっさりした味わい", "とても柔らかい", "とても硬くて食べられない"],
  answer: 1,
  fact: "💡ホルスタイン牛の牛肉は、和牛に比べて赤身が多く、肉本来の味を楽しみやすいのが特徴です。"
 },
 {
  level: 2,
  question: "ホルスタイン牛は普段、何を食べている？",
  choices: ["魚", "他の動物の肉", "牧草や飼料", "昆虫"],
  answer: 2,
  fact: "💡ホルスタイン牛は牧草や、とうもろこしなどを使った飼料を食べています。"
 },
 {
  level: 2,
  question: "ホルスタイン牛が食べる飼料に使われることがあるのは？",
  choices: ["人とおなじごはん", "紙", "魚", "とうもろこし"],
  answer: 3,
  fact: "💡牛の飼料には、とうもろこしなどの穀類や牧草などが使われます。"
 },
 {
  level: 2,
  question: "ホルスタイン牛の英語名は？",
  choices: ["Chicken", "Horse", "Holstein", "Cowbird"],
  answer: 2,
  fact: "💡英語でも「Holstein」と呼ばれています。"
 },
 {
  level: 2,
  question: "ホルスタイン牛の牛肉の魅力の一つは？",
  choices: ["脂身が多い", "肉本来の旨みを楽しみやすい", "肉の色がカラフル", "フルーツみたいな味がする"],
  answer: 1,
  fact: "💡赤身の多いホルスタイン牛肉は、肉そのものの旨みを楽しみやすいのが魅力の一つです。"
 },
 {
  level: 2,
  question: "牛が一度飲み込んだ食べ物を口に戻して、もう一度かむことを何という？",
  choices: ["脱皮", "発芽", "反すう", "羽化"],
  answer: 2,
  fact: "💡牛は一度飲み込んだ食べ物を口に戻して、もう一度かむ「反すう」をします。"
 },
 {
  level: 2,
  question: "ホルスタイン牛は主に何を生産する牛？",
  choices: ["牛肉", "牛皮", "堆肥", "牛乳"],
  answer: 3,
  fact: "💡ホルスタインは代表的な乳用牛で、牛乳を生産するために多く飼育されています。"
 },
 {
  level: 2,
  question: "牛が食べる牧草には主にどんなものがある？",
  choices: ["海藻", "果物", "イネ科やマメ科の草", "きのこ"],
  answer: 2,
  fact: "💡牛の飼料には、イネ科牧草やマメ科牧草などが使われます。"
 },
 {
  level: 2,
  question: "牛には胃がいくつある？",
  choices: ["1つ", "2つ", "3つ", "4つ"],
  answer: 3,
  fact: "💡牛の胃は4つの部屋に分かれていて、食べた草を効率よく消化します。"
 },
 {
  level: 2,
  question: "牛乳が白く見える主な理由は？",
  choices: ["水が白いから", "牛乳中の成分が光を散らすから", "白い草を食べるから", "牛の毛が白いから"],
  answer: 1,
  fact: "💡牛乳に含まれる脂肪やたんぱく質などが光を散らすことで白く見えます。"
 },

 {
  level: 3,
  question: "「交雑種（F1）」とは、どんな牛？",
  choices: ["生まれた場所が違う牛", "異なる品種や系統を掛け合わせた牛", "白黒模様の牛", "野生の牛"],
  answer: 1,
  fact: "💡交雑種は、異なる品種や系統の牛を掛け合わせて生まれた牛です。日本ではホルスタインと黒毛和種の交配がよく知られています。"
 },
 {
  level: 3,
  question: "日本で代表的な肉用牛の品種はどれ？",
  choices: ["ジャージー", "ホルスタイン", "黒毛和種", "ブラウンスイス"],
  answer: 2,
  fact: "💡黒毛和種は日本で最も多く飼育されている和牛の品種で、牛肉として広く知られています。"
 },
 {
  level: 3,
  question: "「乳用種」とは、主に何を生産するための牛？",
  choices: ["牛乳", "チーズ", "生クリーム", "脱脂粉乳"],
  answer: 0,
  fact: "💡乳用種は、牛乳を生産することを主な目的として改良・飼育されている牛です。"
 },
 {
  level: 3,
  question: "「肉用種」とは、主に何を目的として飼育される牛？",
  choices: ["牛乳を生産すること", "毛をとること", "牛肉を生産すること", "荷物を運ぶこと"],
  answer: 2,
  fact: "💡肉用種は、肉質や肉量などを重視して牛肉を生産するために飼育されます。"
 },
 {
  level: 3,
  question: "次のうち、和牛の品種はどれ？",
  choices: ["ホルスタイン", "黒毛和種", "ジャージー", "ブラウンスイス"],
  answer: 1,
  fact: "💡黒毛和種は和牛の4品種の一つで、日本で最も多く飼育されている和牛です。"
 },
 {
  level: 3,
  question: "ホルスタインの原産国はどこ？",
  choices: ["日本", "アメリカ", "オランダ", "ドイツ"],
  answer: 2,
  fact: "💡ホルスタインはオランダ北部のフリースラント地方が原産地です。"
 },
 {
  level: 3,
  question: "和牛として認められている品種はいくつある？",
  choices: ["2品種", "4品種", "6品種", "10品種"],
  answer: 1,
  fact: "💡和牛として認められているのは、黒毛和種、褐毛和種、日本短角種、無角和種の4品種です。"
 },
 {
  level: 3,
  question: "ホルスタインと黒毛和種を掛け合わせた牛は、一般に何と呼ばれる？",
  choices: ["F1", "F2", "W1", "H1"],
  answer: 0,
  fact: "💡ホルスタインと黒毛和種を交配して生まれた牛は、一般にF1と呼ばれます。"
 },
 {
  level: 3,
  question: "次のうち、乳用牛として知られている品種はどれ？",
  choices: ["黒毛和種", "日本短角種", "ホルスタイン", "無角和種"],
  answer: 2,
  fact: "💡ホルスタインは代表的な乳用牛で、世界各地で飼育されています。"
 },
 {
  level: 3,
  question: "「和牛」と「ホルスタイン」は同じ種類の牛？",
  choices: ["同じ", "別の分類"],
  answer: 1,
  fact: "💡和牛とホルスタインは別の分類です。ホルスタインは代表的な乳用牛で、和牛には4つの品種があります。"
 },

 {
  level: 4,
  question: "4品種のうち仲間はずれはどれ？",
  choices: ["黒毛和種", "褐毛和種", "ホルスタイン", "日本短角種"],
  answer: 2,
  fact: "💡ホルスタインは和牛ではなく、代表的な乳用牛です。"
 },
 {
  level: 4,
  question: "牛の第一胃のことを別名なんという？",
  choices: ["ルーメン", "レバー", "セルロース", "カゼイン"],
  answer: 0,
  fact: "💡第一胃は「ルーメン」と呼ばれ、微生物による発酵が盛んに行われます。"
 },
 {
  level: 4,
  question: "牛が草の主成分の一つであるセルロースを利用できるのはなぜ？",
  choices: ["牛の歯が鉄だから", "微生物の働きがあるから", "胃が空っぽだから", "角が硬いから"],
  answer: 1,
  fact: "💡牛自身だけでは分解しにくいセルロースを、胃内の微生物が分解してくれます。"
 },
 {
  level: 4,
  question: "牛の第二胃は何と呼ばれる？",
  choices: ["葉胃", "皺胃", "網胃", "ルーメン"],
  answer: 2,
  fact: "💡第二胃は「網胃（もうい）」と呼ばれ、第一胃とつながっています。"
 },
 {
  level: 4,
  question: "牛の第三胃は何と呼ばれる？",
  choices: ["葉胃", "反胃", "角胃", "網胃"],
  answer: 0,
  fact: "💡第三胃は「葉胃」と呼ばれ、ひだ状の構造をしています。"
 },
 {
  level: 4,
  question: "牛の第四胃は何と呼ばれる？",
  choices: ["網胃", "皺胃", "葉胃", "ルーメン"],
  answer: 1,
  fact: "💡第四胃は「皺胃（しゅうい）」と呼ばれ、消化液を使って消化します。"
 },
 {
  level: 4,
  question: "ホルスタインの毛色には、黒白以外のタイプもある？",
  choices: ["ない", "赤白のタイプがある", "青白のタイプがある", "緑白のタイプがある"],
  answer: 1,
  fact: "💡ホルスタインには黒白だけでなく、赤白の毛色を持つ個体も存在します。"
 },
 {
  level: 4,
  question: "牛乳の生産量に影響するものはどれ？",
  choices: ["模様だけ", "角の長さだけ", "鳴き声だけ", "飼料・健康・遺伝など"],
  answer: 3,
  fact: "💡牛乳の生産には、遺伝的な能力だけでなく、飼料や健康状態、飼育環境など多くの要因が関係します。"
 },
 {
  level: 4,
  question: "乳牛の乳房には、通常いくつの乳頭がある？",
  choices: ["2つ", "3つ", "4つ", "6つ"],
  answer: 2,
  fact: "💡牛の乳房には通常4つの乳頭があります。"
 },
 {
  level: 4,
  question: "牛の胃の中で、微生物による発酵が特に盛んなのは？",
  choices: ["第一胃", "第三胃", "第四胃", "食道"],
  answer: 0,
  fact: "💡第一胃では多くの微生物が働き、植物の成分を発酵させています。"
 },

 {
  level: 5,
  question: "ホルスタインという名前の由来になった地域は現在のどの国にある？",
  choices: ["日本", "ドイツ", "オランダ", "オーストラリア"],
  answer: 1,
  fact: "💡「ホルシュタイン」は現在のドイツ北部にある地域名です。原産地のオランダどの牛との歴史的な関係もあります。"
 },
 {
  level: 5,
  question: "牛の第一胃で発酵を行う微生物として知られるものは？",
  choices: ["ミジンコ", "ウイルス", "細菌や原生動物など", "アメーバ"],
  answer: 2,
  fact: "💡ルーメンには多種多様な微生物がいて、植物の分解を助けています。"
 },
 {
  level: 5,
  question: "牛が草の繊維を利用できるようにするうえで、特に重要なのは？",
  choices: ["牛の角", "ルーメン内の微生物", "牛の耳", "ひづめ"],
  answer: 1,
  fact: "💡ルーメン内の微生物が繊維を分解・発酵し、牛の栄養利用を支えています。"
 },
 {
  level: 5,
  question: "「F1」という呼び方は、交雑種の何を表している？",
  choices: ["牛の年齢", "牛の体重", "交雑によって生まれた最初の世代", "牛の性別"],
  answer: 2,
  fact: "💡F1は異なる系統や品種を交配して生まれた最初の世代を指す言葉として使われます。"
 },
 {
  level: 5,
  question: "ホルスタインの雄牛などが牛肉として利用されることがあるのはなぜ？",
  choices: ["乳用牛でも肉として利用できるため", "ホルスタインは全頭が肉用種だから", "雄牛だけが和牛だから", "他に利用できないから"],
  answer: 0,
  fact: "💡ホルスタインは乳用種ですが、雄牛などが牛肉として利用されることがあります。"
 },
 {
  level: 5,
  question: "牛の第一胃で作られる揮発性脂肪酸は、牛にとって何に役立つ？",
  choices: ["角を伸ばすことができる", "牛の成長を促す", "消化を促進する", "エネルギー源になる"],
  answer: 3,
  fact: "💡ルーメンでの発酵によって生じる揮発性脂肪酸は、牛にとって重要なエネルギー源です。"
 },
 {
  level: 5,
  question: "牛が生み出すもので問題視されているものは？",
  choices: ["汗", "げっぷ", "フン", "食べ残し"],
  answer: 1,
  fact: "💡げっぷでメタンが排出され、地球温暖化の原因となります。"
 },
 {
  level: 5,
  question: "牛の4つの胃のうち、一般的に「本当の胃」と呼ばれるのは？",
  choices: ["第一胃", "第二胃", "第三胃", "第四胃"],
  answer: 3,
  fact: "💡第四胃は、ほかの動物の胃に近い働きをするため「本当の胃」と呼ばれます。"
 },
 {
  level: 5,
  question: "牛の舌がザラザラしているのは、どんなことに役立つ？",
  choices: ["草を扱いやすくする", "水を飲みやすくなる", "体温を測る", "角を守る"],
  answer: 0,
  fact: "💡牛の舌は表面がザラザラしており、草を巻き取ったり扱ったりするのに役立っています。"
 },
 {
  level: 5,
  question: "ホルスタイン牛が世界中で広く飼育されている大きな理由は？",
  choices: ["おいしいから", "そだてやすいから", "高い乳生産能力があるから", "かわいいから"],
  answer: 2,
  fact: "💡ホルスタインは高い乳生産能力を持つ代表的な乳用牛として、世界各地で飼育されています。"
 }
];

const levels = [
  {
    id: 1,
    name: "ホルスタイン見習い",
    unlock: 0,
    icon: "🌱",
    description: "基本知識をモ〜っと学ぼう！"
  },
  {
    id: 2,
    name: "牧場スタッフ",
    unlock: 150,
    icon: "🧑‍🌾",
    description: "牛肉や交雑種をくわしく知ろう！"
  },
  {
    id: 3,
    name: "牛肉マスター",
    unlock: 250,
    icon: "🎖️",
    description: "トレーサビリティにも挑戦！"
  },
  {
    id: 4,
    name: "ホルスタイン博士",
    unlock: 450,
    icon: "🎓",
    description: "かなり難しい博士問題！"
  },
  {
    id: 5,
    name: "伝説の牛博士",
    unlock: 550,
    icon: "👑",
    description: "ひっかけ問題を見抜こう！"
  }
];

const farmItems = [
  {
    id: "tree",
    icon: "🌳",
    name: "大きな木",
    cost: 40,
    unlock: 0,
    position: "left: 140px; bottom: 55px;"
  },
  {
    id: "flowers",
    icon: "🌷",
    name: "花ばたけ",
    cost: 55,
    unlock: 80,
    position: "left: 105px; bottom: 22px;"
  },
  {
    id: "grass",
    icon: "🌾",
    name: "ふかふか牧草",
    cost: 65,
    unlock: 80,
    position: "right: 13px; bottom: 18px;"
  },
  {
    id: "tractor",
    icon: "🚜",
    name: "トラクター",
    cost: 110,
    unlock: 180,
    position: "left: 145px; bottom: 15px;"
  },
  {
    id: "ribbon",
    icon: "🎀",
    name: "牛のリボン",
    cost: 75,
    unlock: 180,
    position: "right: 77px; bottom: 98px;"
  },
  {
    id: "house",
    icon: "🏡",
    name: "牧場ハウス",
    cost: 180,
    unlock: 320,
    position: "right: 7px; bottom: 68px;"
  }
];

const books = [
  {
    name: "ホルスタイン",
    icon: "🐄",
    unlock: 0,
    text: "代表的な乳用牛。高い泌乳能力と白黒模様で有名。"
  },
  {
    name: "黒毛和種",
    icon: "🐮",
    unlock: 150,
    text: "和牛の代表的な品種。肉質の良さで知られる。"
  },
  {
    name: "ジャージー種",
    icon: "🐂",
    unlock: 250,
    text: "乳脂率が高めのミルクで知られる乳用牛。"
  },
  {
    name: "交雑種（F1）",
    icon: "🌟",
    unlock: 350,
    text: "ホルスタイン雌と黒毛和種雄の交配が代表例。"
  },
  {
    name: "トレーサビリティ",
    icon: "🔎",
    unlock: 450,
    text: "個体識別番号で牛の情報を確認できる仕組み。"
  }
];

const recipes = [
  {
    name: "牛肉の基本のステーキ",
    icon: "🥩",
    unlock: 0,
    difficulty: "★☆☆☆☆",
    text: "赤身のうま味をシンプルに味わう定番レシピ。"
  },
  {
    name: "牛肉の甘辛炒め",
    icon: "🍗",
    unlock: 100,
    difficulty: "★☆☆☆☆",
    text: "甘辛い味つけでごはんが進む！"
  },
  {
    name: "牛肉と卵のふんわり炒め",
    icon: "🥚",
    unlock: 150,
    difficulty: "★☆☆☆☆",
    text: "ふわふわの卵が相性抜群！"
  },
  {
    name: "牛肉のすき焼き丼",
    icon: "🍚",
    unlock: 210,
    difficulty: "★☆☆☆☆",
    text: "すき焼きのうまさがどんぶり一杯に！"
  },
  {
    name: "牛肉じゃが",
    icon: "🥔",
    unlock: 250,
    difficulty: "★★☆☆☆",
    text: "牛肉の旨みたっぷりで、ほっとする味。"
  },
 {
    name: "とろけるチーズ牛丼",
    icon: "🧀",
    unlock: 300,
    difficulty: "★★☆☆☆",
    text: "牛丼とチーズの相性バッチリ！"
  },
 {
    name: "牛肉オムライス",
    icon: "🍳",
    unlock: 350,
    difficulty: "★★☆☆☆",
    text: "ふわとろ卵に牛肉の旨味が合う！"
  },
{
    name: "牛肉コロッケ",
    icon: "🥔",
    unlock: 420,
    difficulty: "★★☆☆☆",
    text: "ホクホクのいもと牛肉。"
  },
{
    name: "牛肉チーズ春巻き",
    icon: "🫔",
    unlock: 500,
    difficulty: "★★★☆☆",
    text: "やみつき注意！牛肉チーズのパリパリ春巻き。"
  },
{
    name: "牛肉ピロシキ",
    icon: "🥐",
    unlock: 550,
    difficulty: "★★★☆☆",
    text: "おやつにもご飯にも！"
  },
{
    name: "牛肉ピザ",
    icon: "🍕",
    unlock: 580,
    difficulty: "★★★☆☆",
    text: "牛肉たっぷり、贅沢ピザ！"
  },
{
    name: "牛肉サンド",
    icon: "🥪",
    unlock: 630,
    difficulty: "★★★☆☆",
    text: "ひとくちで牛肉のごちそう！"
  },
{
    name: "ビーフカレー",
    icon: "🍛",
    unlock: 700,
    difficulty: "★★★★☆",
    text: "ごろっと牛肉の濃厚カレー！"
  },
{
    name: "牛肉ミートパスタ",
    icon: "🍝",
    unlock: 800,
    difficulty: "★★★★☆",
    text: "いつものパスタを牛肉で贅沢に！"
  },
{
    name: "すき焼き",
    icon: "🍲",
    unlock: 840,
    difficulty: "★★★★☆",
    text: "甘辛うまい！とろける牛肉！"
  },
{
    name: "牛肉ドリア",
    icon: "🥛",
    unlock: 880,
    difficulty: "★★★★★",
    text: "新感覚ドリア！"
  },
{
    name: "牛肉グラタン",
    icon: "🧀",
    unlock: 880,
    difficulty: "★★★★★",
    text: "とろ～りチーズの牛肉グラタン！"
  },
{
    name: "牛肉焼きおにぎり",
    icon: "🍙",
    unlock: 900,
    difficulty: "★★★★★",
    text: "いつものおにぎりを特別に！"
  },
{
    name: "牛肉ミートパイ",
    icon: "🥧",
    unlock: 950,
    difficulty: "★★★★★",
    text: "自分へのご褒美に！"
  },
{
    name: "極上・牛ステーキ ～特製赤ワインソース～",
    icon: "✨️",
    unlock: 1050,
    difficulty: "★★★★★",
    text: "いちばん特別な日に！"
  }


];

const defaultState = {
  points: 0,
  highScore: 0,
  ownedItems: [],
  lastQuestions: []
};

let state = JSON.parse(localStorage.getItem("mooQuizState")) || defaultState;

if (!Array.isArray(state.ownedItems)) {
  state.ownedItems = [];
}

if (!Array.isArray(state.lastQuestions)) {
  state.lastQuestions = [];
}

let currentQuiz = {
  level: 1,
  questions: [],
  index: 0,
  correct: 0,
  earned: 0,
  combo: 0,
  answered: false,
  levelBeforeQuiz: 1
};

const $ = (selector) => document.querySelector(selector);

function saveState() {
  localStorage.setItem("mooQuizState", JSON.stringify(state));
}

function getCurrentLevel() {
  let currentLevel = 1;

  levels.forEach((level) => {
    if (state.points >= level.unlock) {
      currentLevel = level.id;
    }
  });

  return currentLevel;
}

function getLevelData(levelId) {
  return levels.find((level) => level.id === levelId);
}

function updateHeader() {
  const currentLevel = getCurrentLevel();
  const level = getLevelData(currentLevel);
  const nextLevel = levels.find((item) => item.id === currentLevel + 1);

  $("#pointText").textContent = state.points;
  $("#homeLevelText").textContent = `Lv.${level.id} ${level.name}`;

  if (nextLevel) {
    const range = nextLevel.unlock - level.unlock;
    const progress = Math.max(
      0,
      Math.min(100, ((state.points - level.unlock) / range) * 100)
    );

    $("#homeProgress").style.width = `${progress}%`;
    $("#nextLevelText").textContent = `次のレベルまで ${Math.max(
      0,
      nextLevel.unlock - state.points
    )}P`;
  } else {
    $("#homeProgress").style.width = "100%";
    $("#nextLevelText").textContent = "伝説の牛博士！ モ〜完璧！";
  }
}

function showScreen(screenName) {
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.remove("active");
  });

  const screen = document.querySelector(`#${screenName}Screen`);

  if (screen) {
    screen.classList.add("active");
  }

  document.querySelectorAll(".nav-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.go === screenName);
  });

  $("#backBtn").style.visibility = screenName === "home" ? "hidden" : "visible";

  if (screenName === "levels") {
    renderLevels();
  }

  if (screenName === "farm") {
    renderFarm();
  }

  if (screenName === "encyclopedia") {
    renderBooks();
  }

  if (screenName === "recipes") {
    renderRecipes();
  }

  if (screenName === "ranking") {
    renderRanking();
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function shuffle(items) {
  const copied = [...items];

  for (let i = copied.length - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [copied[i], copied[randomIndex]] = [copied[randomIndex], copied[i]];
  }

  return copied;
}

function renderLevels() {
  const currentLevel = getCurrentLevel();

  $("#levelList").innerHTML = levels
    .map((level) => {
      const unlocked = level.id <= currentLevel;

      return `
        <button
          class="level-card ${unlocked ? "unlocked" : "locked"}"
          ${unlocked ? `data-level="${level.id}"` : ""}
        >
          <span class="level-num">Lv.${level.id}</span>
          <h3>${level.icon} ${level.name}</h3>
          <p>${level.description}</p>
          ${
            unlocked
              ? `<div class="unlock-info">▶ 10問チャレンジ！</div>`
              : `
                <span class="lock-icon">🔒</span>
                <div class="unlock-info">
                  あと ${Math.max(0, level.unlock - state.points)}P で解放
                </div>
              `
          }
        </button>
      `;
    })
    .join("");

  document.querySelectorAll("[data-level]").forEach((button) => {
    button.addEventListener("click", () => {
      startQuiz(Number(button.dataset.level));
    });
  });
}

function startQuiz(levelId) {
  const pool = quizData.filter((question) => question.level === levelId);
  let available = pool.filter(
    (question) => !state.lastQuestions.includes(question.question)
  );

  if (available.length < 10) {
    state.lastQuestions = [];
    available = pool;
  }

  const selectedQuestions = shuffle(available).slice(0, 10);

  currentQuiz = {
    level: levelId,
    questions: selectedQuestions,
    index: 0,
    correct: 0,
    earned: 0,
    combo: 0,
    answered: false,
    levelBeforeQuiz: getCurrentLevel()
  };

  showScreen("quiz");
  renderQuestion();
}

function renderQuestion() {
  const question = currentQuiz.questions[currentQuiz.index];

  if (!question) {
    finishQuiz();
    return;
  }

  currentQuiz.answered = false;

  $("#quizLevel").textContent = `Lv.${currentQuiz.level} ${
    getLevelData(currentQuiz.level).name
  }`;

  $("#questionNumber").textContent = `Q ${currentQuiz.index + 1} / ${
    currentQuiz.questions.length
  }`;

  $("#quizProgress").style.width = `${
    (currentQuiz.index / currentQuiz.questions.length) * 100
  }%`;

  $("#questionText").textContent = question.question;
  $("#quizCow").className = "quiz-cow";

  if (currentQuiz.combo >= 2) {
    $("#quizSpeech").textContent = `コンボ ${currentQuiz.combo}！すごいモ〜！`;
    $("#comboText").textContent = `🔥 ${currentQuiz.combo}連続正解中！ ボーナスチャンス！`;
  } else {
    $("#quizSpeech").textContent = "モ〜どっちかな？";
    $("#comboText").textContent = "🔥 連続正解でコンボボーナス！";
  }

  const letters = ["A", "B", "C", "D"];

  $("#choices").innerHTML = question.choices
    .map(
      (choice, index) => `
        <button
          class="choice-btn"
          data-index="${index}"
          data-letter="${letters[index]}"
        >
          ${choice}
        </button>
      `
    )
    .join("");

  document.querySelectorAll(".choice-btn").forEach((button) => {
    button.addEventListener("click", () => {
      answerQuestion(Number(button.dataset.index));
    });
  });
}

function getPointGain() {
  if (currentQuiz.combo >= 5) {
    return 20;
  }

  if (currentQuiz.combo >= 3) {
    return 15;
  }

  return 10;
}

function answerQuestion(selectedIndex) {
  if (currentQuiz.answered) {
    return;
  }

  currentQuiz.answered = true;

  const question = currentQuiz.questions[currentQuiz.index];
  const isCorrect = selectedIndex === question.answer;
  const choiceButtons = document.querySelectorAll(".choice-btn");

  choiceButtons.forEach((button, index) => {
    button.disabled = true;

    if (index === question.answer) {
      button.classList.add("correct");
    }

    if (index === selectedIndex && !isCorrect) {
      button.classList.add("wrong");
    }
  });

  if (isCorrect) {
    currentQuiz.correct += 1;
    currentQuiz.combo += 1;

    const gain = getPointGain();
    currentQuiz.earned += gain;

    $("#quizCow").classList.add("happy");
    $("#quizSpeech").textContent =
      currentQuiz.combo >= 3 ? "モ〜絶好調！" : "やったモ〜！";
  } else {
    currentQuiz.combo = 0;
    $("#quizCow").classList.add("sad");
    $("#quizSpeech").textContent = "モ〜おしい…！";
  }

  setTimeout(() => {
    showAnswer(isCorrect, question);
  }, 850);
}

function showAnswer(isCorrect, question) {
  showScreen("answer");

  const letters = ["A", "B", "C", "D"];
  const gain = isCorrect ? getPointGain() : 0;

  $("#answerIcon").textContent = isCorrect ? "🎉" : "💦";
  $("#answerTitle").textContent = isCorrect ? "正解！！" : "モ〜おしい！";
  $("#answerTitle").style.color = isCorrect ? "#e77d49" : "#6e88b3";

  $("#answerCow").className = `answer-cow ${isCorrect ? "happy" : "sad"}`;
  $("#answerSpeech").textContent = isCorrect
    ? "モ〜完璧！"
    : "正しい答えを覚えよう！";

  $("#correctAnswer").textContent = `正解：${letters[question.answer]}. ${
    question.choices[question.answer]
  }`;

  $("#factText").textContent = question.fact;

  if (isCorrect) {
    $("#earnedPointText").style.display = "inline-block";
    $("#earnedPointText").textContent =
      gain > 10
        ? `⭐ +${gain}ポイント（コンボ！）`
        : `⭐ +${gain}ポイント`;

    createConfetti();
  } else {
    $("#earnedPointText").style.display = "none";
  }

  $("#nextBtn").textContent =
    currentQuiz.index === currentQuiz.questions.length - 1
      ? "結果を見る →"
      : "次の問題へ →";
}

function nextQuestion() {
  const previousQuestion = currentQuiz.questions[currentQuiz.index];

  if (previousQuestion) {
    state.lastQuestions.push(previousQuestion.question);

    if (state.lastQuestions.length > 30) {
      state.lastQuestions.shift();
    }

    saveState();
  }

  currentQuiz.index += 1;

  if (currentQuiz.index >= currentQuiz.questions.length) {
    finishQuiz();
    return;
  }

  showScreen("quiz");
  renderQuestion();
}

function finishQuiz() {
  const clearBonus = currentQuiz.correct >= 7 ? 20 : 0;
  const totalPoints = currentQuiz.earned + clearBonus;
  const oldLevel = currentQuiz.levelBeforeQuiz;

  state.points += totalPoints;
  state.highScore = Math.max(state.highScore, currentQuiz.correct);

  saveState();
  updateHeader();

  const newLevel = getCurrentLevel();
  const currentLevelData = getLevelData(newLevel);
  const nextLevel = levels.find((level) => level.id === newLevel + 1);

  showScreen("result");

  $("#resultScore").textContent = `${currentQuiz.correct} / ${
    currentQuiz.questions.length
  }問 正解！`;

  let starCount = 1;

  if (currentQuiz.correct >= 9) {
    starCount = 5;
  } else if (currentQuiz.correct >= 7) {
    starCount = 4;
  } else if (currentQuiz.correct >= 5) {
    starCount = 3;
  } else if (currentQuiz.correct >= 3) {
    starCount = 2;
  }

  $("#resultStars").textContent =
    "⭐".repeat(starCount) + "☆".repeat(5 - starCount);

  $("#resultPoint").textContent = clearBonus
    ? `⭐ +${totalPoints}P（クリア+${clearBonus}）`
    : `⭐ +${totalPoints}P`;

  $("#resultLevel").textContent = `Lv.${currentLevelData.id} ${currentLevelData.name}`;

  $("#resultNextLevel").textContent = nextLevel
    ? `あと ${Math.max(0, nextLevel.unlock - state.points)}P で Lv.${nextLevel.id}「${nextLevel.name}」！`
    : "全レベル制覇！ あなたは伝説の牛博士です！";

  if (newLevel > oldLevel) {
    setTimeout(() => {
      showLevelUp(newLevel);
    }, 650);
  }
}

function showLevelUp(levelId) {
  const level = getLevelData(levelId);

  $("#modalLevelTitle").textContent = `${level.name}になった！`;
  $("#levelModal").classList.add("show");

  createConfetti();
}

function createConfetti() {
  const colors = ["#ff7fa0", "#ffcf5b", "#75cbed", "#71c98c", "#b78be9"];
  const confettiBox = $("#confetti");

  for (let index = 0; index < 42; index += 1) {
    const piece = document.createElement("span");

    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.setProperty(
      "--move-x",
      `${(Math.random() - 0.5) * 280}px`
    );
    piece.style.animationDelay = `${Math.random() * 0.35}s`;

    confettiBox.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 2200);
  }
}

function renderFarm() {
  $("#farmShop").innerHTML = farmItems
    .map((item) => {
      const isOwned = state.ownedItems.includes(item.id);
      const isLocked = state.points < item.unlock;

      const levelForItem = levels.find(
        (level) => level.unlock === item.unlock
      );

      let actionButton = "";

      if (isOwned) {
        actionButton = `<button disabled>設置済み</button>`;
      } else if (isLocked) {
        actionButton = `<button disabled>🔒 Lv.${levelForItem.id}で解放</button>`;
      } else {
        actionButton = `<button data-buy="${item.id}">⭐ ${item.cost}Pで購入</button>`;
      }

      return `
        <article class="shop-card ${isOwned ? "owned" : ""}">
          <span class="shop-icon">${item.icon}</span>
          <b>${item.name}</b>
          <small>${
            isLocked
              ? `あと ${Math.max(0, item.unlock - state.points)}Pで解放`
              : `牧場をかわいくしよう`
          }</small>
          ${actionButton}
        </article>
      `;
    })
    .join("");

  $("#farmDecorations").innerHTML = state.ownedItems
    .map((itemId) => {
      const item = farmItems.find((farmItem) => farmItem.id === itemId);

      if (!item) {
        return "";
      }

      return `
        <span
          class="farm-decoration"
          style="${item.position}"
          title="${item.name}"
        >${item.icon}</span>
      `;
    })
    .join("");

  document.querySelectorAll("[data-buy]").forEach((button) => {
    button.addEventListener("click", () => {
      buyFarmItem(button.dataset.buy);
    });
  });
}

function buyFarmItem(itemId) {
  const item = farmItems.find((farmItem) => farmItem.id === itemId);

  if (!item || state.ownedItems.includes(itemId)) {
    return;
  }

  if (state.points < item.cost) {
    alert(`モ〜少しポイントが必要です！\nあと ${item.cost - state.points}P 集めよう。`);
    return;
  }

  state.points -= item.cost;
  state.ownedItems.push(itemId);

  saveState();
  updateHeader();
  renderFarm();
}

function renderBooks() {
  $("#bookList").innerHTML = books
    .map((book) => {
      const unlocked = state.points >= book.unlock;
      const isNew =
        unlocked && book.unlock > 0 && state.points < book.unlock + 50;

      return `
        <article class="book-card ${unlocked ? "" : "locked"}">
          <div class="book-icon">${unlocked ? book.icon : "🔒"}</div>
          <div>
            <h3>
              ${unlocked ? book.name : "？？？"}
              ${isNew ? '<span class="new-tag">NEW!</span>' : ""}
            </h3>
            <p>
              ${
                unlocked
                  ? book.text
                  : `あと ${Math.max(0, book.unlock - state.points)}P で図鑑に追加されます。`
              }
            </p>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderRecipes() {
  $("#recipeList").innerHTML = recipes
    .map((recipe) => {
      const unlocked = state.points >= recipe.unlock;
      const isNew =
        unlocked && recipe.unlock > 0 && state.points < recipe.unlock + 50;

      return `
        <article class="recipe-card ${unlocked ? "" : "locked"}">
          <div class="recipe-icon">${unlocked ? recipe.icon : "🔒"}</div>
          <div>
            <h3>
              ${unlocked ? recipe.name : "？？？"}
              ${isNew ? '<span class="new-tag">NEW!</span>' : ""}
            </h3>
            <p>
              ${
                unlocked
                  ? recipe.text
                  : `あと ${Math.max(0, recipe.unlock - state.points)}P でアンロック！`
              }
            </p>
            ${
              unlocked
                ? `<p class="difficulty">難易度 ${recipe.difficulty}</p>`
                : ""
            }
          </div>
        </article>
      `;
    })
    .join("");
}

function renderRanking() {
  $("#highScoreText").textContent = `${state.highScore} / 10問`;
  $("#rankingPointText").textContent = `⭐ ${state.points}P`;
}

function goHome() {
  updateHeader();
  showScreen("home");
}

$("#startQuizBtn").addEventListener("click", () => {
  showScreen("levels");
});

$("#nextBtn").addEventListener("click", () => {
  nextQuestion();
});

$("#retryBtn").addEventListener("click", () => {
  startQuiz(currentQuiz.level || 1);
});

$("#homeBtn").addEventListener("click", () => {
  goHome();
});

$("#backBtn").addEventListener("click", () => {
  goHome();
});

$("#modalCloseBtn").addEventListener("click", () => {
  $("#levelModal").classList.remove("show");
});

$("#levelModal").addEventListener("click", (event) => {
  if (event.target.id === "levelModal") {
    $("#levelModal").classList.remove("show");
  }
});

document.querySelectorAll("[data-go]").forEach((button) => {
  button.addEventListener("click", () => {
    const destination = button.dataset.go;

    if (destination === "home") {
      goHome();
    } else {
      showScreen(destination);
    }
  });
});

updateHeader();
showScreen("home");
/* =========================================
   追加機能：クリック音・牛の鳴き声・演出
========================================= */

let mooAudioContext = null;

function getMooAudioContext() {
  const AudioAPI = window.AudioContext || window.webkitAudioContext;

  if (!AudioAPI) {
    return null;
  }

  if (!mooAudioContext) {
    mooAudioContext = new AudioAPI();
  }

  if (mooAudioContext.state === "suspended") {
    mooAudioContext.resume();
  }

  return mooAudioContext;
}

function playMooTone(
  frequency,
  duration,
  type = "sine",
  volume = 0.06,
  delay = 0
) {
  const context = getMooAudioContext();

  if (!context) {
    return;
  }

  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(
    frequency,
    context.currentTime + delay
  );

  gain.gain.setValueAtTime(0.0001, context.currentTime + delay);
  gain.gain.exponentialRampToValueAtTime(
    volume,
    context.currentTime + delay + 0.01
  );
  gain.gain.exponentialRampToValueAtTime(
    0.0001,
    context.currentTime + delay + duration
  );

  oscillator.connect(gain);
  gain.connect(context.destination);

  oscillator.start(context.currentTime + delay);
  oscillator.stop(context.currentTime + delay + duration + 0.04);
}

/* ボタンを押したときのかわいい音 */
function playCuteClickSound() {
  playMooTone(720, 0.06, "sine", 0.04);
  playMooTone(980, 0.08, "sine", 0.03, 0.05);
}

/* 正解時のキラキラ音 */
function playCorrectSoundExtra() {
  playMooTone(523, 0.12, "triangle", 0.08);
  playMooTone(659, 0.12, "triangle", 0.08, 0.11);
  playMooTone(784, 0.23, "triangle", 0.09, 0.22);
}

/* 不正解時の残念な音 */
function playWrongSoundExtra() {
  playMooTone(280, 0.18, "sine", 0.065);
  playMooTone(210, 0.3, "sine", 0.055, 0.14);
}

/* 嬉しそうなモ〜！ */
function playHappyMooExtra() {
  playMooTone(255, 0.13, "sawtooth", 0.05);
  playMooTone(350, 0.25, "sawtooth", 0.055, 0.12);
  playMooTone(460, 0.2, "sine", 0.04, 0.31);
}

/* 悲しそうなモ〜… */
function playSadMooExtra() {
  playMooTone(245, 0.2, "sawtooth", 0.045);
  playMooTone(165, 0.45, "sawtooth", 0.04, 0.15);
}

/* すべてのボタンにクリック音 */
document.addEventListener(
  "click",
  (event) => {
    const button = event.target.closest("button");

    if (!button || button.disabled) {
      return;
    }

    playCuteClickSound();
  },
  true
);

/* 選択肢を押した瞬間の正解・不正解音と牛の鳴き声 */
document.addEventListener(
  "click",
  (event) => {
    const choiceButton = event.target.closest(".choice-btn");

    if (!choiceButton || currentQuiz.answered) {
      return;
    }

    const question = currentQuiz.questions[currentQuiz.index];

    if (!question) {
      return;
    }

    const selectedIndex = Number(choiceButton.dataset.index);
    const isCorrect = selectedIndex === question.answer;

    if (isCorrect) {
      playCorrectSoundExtra();
      playHappyMooExtra();

      setTimeout(() => {
        createConfetti();
      }, 100);
    } else {
      playWrongSoundExtra();
      playSadMooExtra();
    }
  },
  true
);

/* 牧場を開いたときに牛を歩かせる */
document.addEventListener("click", (event) => {
  const farmButton = event.target.closest('[data-go="farm"]');

  if (!farmButton) {
    return;
  }

  setTimeout(() => {
    const farmCow = document.querySelector(".farm-cow");

    if (farmCow) {
      farmCow.classList.add("walking");
    }
  }, 100);
});

/* レシピ詳細画面を閉じるボタン */
const recipeModalCloseButton = document.querySelector("#recipeModalCloseBtn");
const recipeModal = document.querySelector("#recipeModal");

if (recipeModalCloseButton) {
  recipeModalCloseButton.addEventListener("click", () => {
    recipeModal.classList.remove("show");
  });
}

if (recipeModal) {
  recipeModal.addEventListener("click", (event) => {
    if (event.target.id === "recipeModal") {
      recipeModal.classList.remove("show");
    }
  });
}/* =========================================
   レシピカードを押したときに詳細を表示する機能
========================================= */

const recipeDetails = {
  "牛肉の基本のステーキ": {
    level: "Lv.1 牛肉レシピ集",
    ingredients: `・ホルスタイン牛肉(ステーキ用)……200g
・塩……少々
・こしょう……少々
・サラダ油……小さじ1`,
    steps: [
      "牛肉に塩・こしょうをする。",
      "フライパンを熱して油を入れ、牛肉を焼く。",
      "両面に焼き色がついたらアルミホイルで包む。",
      "余熱で火を通したら完成！"
    ]
  },

  "牛肉の甘辛炒め": {
    level: "Lv.1 牛肉レシピ集",
    ingredients: `・ホルスタイン牛肉(こま切れ肉)……200g
・玉ねぎ……1/2個
・醤油……大さじ1
・砂糖……大さじ1
・みりん……大さじ1
・酒……大さじ1
・サラダ油……小さじ1`,
    steps: [
      "玉ねぎを薄切りにする。",
      "フライパンに油を熱して、牛肉と玉ねぎを炒める。",
      "醤油、砂糖、みりん、酒、水を加えて煮る。",
      "牛肉に火が通ったら、調味料をすべて加える。",
      "汁気が少なくなるまで炒めて完成！"
    ]
  },

  "牛肉と卵のふんわり炒め": {
    level: "Lv.1 牛肉レシピ集",
    ingredients: `・ホルスタイン牛肉(こま切れ肉)……150g
・卵……2個
・玉ねぎ……1/2個
・ピーマン……1個
・サラダ油……大さじ1
・醤油……大さじ1
・みりん……大さじ1
・酒……大さじ1
・砂糖……小さじ1
・鶏ガラスープの素……小さじ1/2
・ごま油……小さじ1`,
    steps: [
      "玉ねぎは薄切り、ピーマンは細切りにする。牛肉は食べやすい大きさに切る。",
      "卵をボウルに割り入れて溶く。フライパンにサラダ油の半量を入れ、中火で熱する。",
    　"卵を流し入れ、大きく混ぜながら半熟くらいまで炒め、一度お皿に取り出す。",
      "同じフライパンに残りの油を入れ、牛肉を広げて焼く。",
      "牛肉の色が変わってきたら、玉ねぎとピーマンを加える。",
      "牛肉にしっかり火が通り、玉ねぎが少ししんなりするまで炒める。",
      "醤油、みりん、酒、砂糖、鶏ガラスープの素を加え、全体を炒め合わせる。",
      "最後にごま油を加え、弱火にする。先ほどの卵をフライパンに戻す。",
      "卵を崩しすぎないように、全体を大きく混ぜる。",
      "卵が温まったら完成！"
    ]
  },

  "牛肉のすき焼き丼": {
    level: "Lv.1 牛肉レシピ集",
    ingredients: `・ホルスタイン牛肉(こま切れ肉)……200g
・玉ねぎ……1/2個
・卵……2個
・ご飯……2杯分
・醤油……大さじ2
・砂糖……大さじ1
・みりん……大さじ1
・酒……大さじ1
・水……50ml`,
    steps: [
      "玉ねぎを薄切りにする。",
      "フライパンで牛肉と玉ねぎを炒める。",
      "醤油、砂糖、みりん、酒、水を加えて煮る。",
      "玉ねぎが柔らかくなったら火を止める。",
      "ご飯に盛り、卵を乗せて完成！"
    ]
  },

  "とろけるチーズ牛丼": {
    level: "Lv.2 牛肉レシピ集",
    ingredients: `・ホルスタイン牛肉(こま切れ肉)……200g
・じゃがいも……3個
・玉ねぎ……1個
・にんじん……1/2本
・しらたき……100g
・水……300ml
・醤油……大さじ2
・砂糖……大さじ1と1/2
・みりん……大さじ1
・酒……大さじ1
・和風だし……小さじ1
・サラダ油……大さじ1`,
    steps: [
      "野菜と牛肉を食べやすい大きさに切る。",
      "鍋に油を熱し、牛肉、玉ねぎ、にんじん、じゃがいもを炒める。",
      "水と和風だしを加えて沸騰させ、アクを取る。",
      "砂糖、酒、みりんを加えて10分ほど煮る。",
      "醤油としらたきを加え、さらに10〜15分煮る。",
      "じゃがいもが柔らかくなったら完成！"
    ]
  },

  "牛肉オムライス": {
    level: "Lv.2 牛肉レシピ集",
    ingredients: `・ホルスタイン牛肉(こま切れ肉)……120g
・玉ねぎ……1/2個
・ご飯……400g
・卵……4個
・ケチャップ……大さじ4
・コンソメ……小さじ1
・バター……10g
・塩・こしょう……少々`,
    steps: [
      "牛肉と玉ねぎを細かく切る。",
      "フライパンにバターを熱し、牛肉と玉ねぎを炒める。",
      "ご飯を加えて炒め、ケチャップとコンソメ、塩・こしょうで味付けする。",
      "別のフライパンで卵2個分を焼く。",
      "牛肉入りご飯を卵で包んで完成！"
    ]
  },

  "牛肉コロッケ": {
    level: "Lv.2 牛肉レシピ集",
    ingredients: `・ホルスタイン牛肉(ひき肉)……150g
・じゃがいも……400g
・玉ねぎ……1/2個
・塩・こしょう……少々
・醤油……小さじ1
・薄力粉……適量
・卵……1個
・パン粉……適量
・サラダ油……適量`,
    steps: [
      "じゃがいもを茹でて潰す。",
      "玉ねぎと牛ひき肉を炒める。",
      "じゃがいもと合わせ、塩・こしょう、醤油で味付けする。",
      "8個に丸める。",
      "薄力粉、溶き卵、パン粉の順につける。",
      "170〜180℃の油でこんがり揚げて完成！"
    ]
  },

  "牛肉チーズ春巻き": {
    level: "Lv.3 牛肉レシピ集",
    ingredients: `・ホルスタイン牛肉(こま切れ肉)……200g
・玉ねぎ……1/2個
・ピザ用チーズ……80g
・春巻きの皮……10枚
・醤油……大さじ1
・砂糖……小さじ2
・みりん……小さじ2
・酒……小さじ2
・水溶き薄力粉……適量
・サラダ油……適量`,
    steps: [
      "牛肉と玉ねぎを細切りにする。",
      "フライパンで牛肉と玉ねぎを炒め、調味料を加える。",
      "汁気がなくなったら冷ます。",
      "春巻きの皮に牛肉とチーズを乗せて包む。",
      "巻き終わりを水溶き薄力粉で留める。",
      "170℃程度の油で揚げて完成！"
    ]
  },

  "牛肉ピロシキ": {
    level: "Lv.3 牛肉レシピ集",
    ingredients: `【生地】
・強力粉……300g
・牛乳……200ml
・バター……30g
・ドライイースト……6g
・塩……15g
・砂糖……45g
・サラダ油……5g
【具】
・ホルスタイン牛肉(肩ロース)……100g
・玉ねぎ……1/2個
・長ねぎ……30g
・しらたき……50g
・白玉粉……20g
・水……120g
・めんみ……30ml
・みりん……30ml
・砂糖……15g
・溶き卵……適量
・のり……適量
・スライスチーズ……適量`,
    steps: [
      "牛乳を36〜37℃程度に温め、バターは室温に戻しておく。",
      "ボウルに強力粉、ドライイースト、砂糖、塩、サラダ油、牛乳を入れてよく混ぜる。",
      "バターを加え、10分ほどこねる。こね終わったら暖かい場所（30℃前後）で30分発酵させる。",
      "長ねぎを斜め切り、玉ねぎを薄切りにする。牛肉としらたきも食べやすい大きさに切る。",
      "白玉粉に水20gを加え、耳たぶくらいの柔らかさになるまでこね、一口サイズに丸める。",
      "めんみ、みりん、砂糖、水100gを混ぜて割り下を作る。",
      "鍋に牛肉、しらたき、長ねぎ、玉ねぎ、白玉を入れ、割り下で煮る。",
      "すき焼きの具を牛の形（顔・耳・角）に成形した生地で包む。",
      "40℃で15分発酵させる。",
      "表面に溶き卵を塗り、200℃に予熱したオーブンで12分焼く。",
      "焼き上がったら、のりとスライスチーズで目や鼻などを作って飾り、完成！"
    ]
  },

 "牛肉ピザ": {
    level: "Lv.3 牛肉レシピ集",
    ingredients: `・ホルスタイン牛肉(こま切れ肉)……100g
・玉ねぎ……1/4個
・ピザ生地……1枚
・ピザソース……大さじ3
・ピザ用チーズ……80g
・ミニトマト……4個
・塩・こしょう……少々`,
    steps: [
      "牛肉と玉ねぎを炒め、塩・こしょうする。",
      "生地にピザソースを塗る。",
      "牛肉、玉ねぎ、トマト、チーズを乗せる。",
      "200〜220℃のオーブンで10〜15分焼いて完成！"
    ]
  },

 "牛肉サンド": {
    level: "Lv.3 牛肉レシピ集",
    ingredients: `・ホルスタイン牛肉(こま切れ肉)……150g
・食パン……4枚
・レタス……2枚
・玉ねぎ……1/4個
・マヨネーズ……大さじ2
・醤油……大さじ1
・砂糖……小さじ1
・みりん……小さじ1`,
    steps: [
      "玉ねぎを薄切りにする。",
      "牛肉と玉ねぎを炒める。",
      "醤油、砂糖、みりんで味付けする。",
      "食パンにマヨネーズを塗る。",
      "レタスと牛肉を挟む。",
      "半分に切って完成！"
    ]
  },

 "ビーフカレー": {
    level: "Lv.4 牛肉レシピ集",
    ingredients: `・ホルスタイン牛肉(こま切れ肉)……300g
・玉ねぎ……1個
・じゃがいも……2個
・にんじん……1本
・カレールウ……4皿分
・水……500ml
・油……大さじ1`,
    steps: [
      "野菜と牛肉を食べやすい大きさに切る。",
      "鍋で牛肉と玉ねぎを炒める。",
      "じゃがいも、にんじん、水を加える。",
      "沸騰したらアクを取り、15〜20分煮る。",
      "火を止めてカレールウを溶かす。",
      "再び弱火で5分ほど煮込んで完成！"
    ]
  },

 "牛肉ミートパスタ": {
    level: "Lv.4 牛肉レシピ集",
    ingredients: `・ホルスタイン牛肉(ひき肉)……200g
・玉ねぎ……1/2個
・にんにく……1片
・スパゲッティ……200g
・カットトマト缶……1/2缶（200g）
・ケチャップ……大さじ2
・コンソメ……小さじ1
・塩・こしょう……少々
・オリーブオイル……大さじ1
・粉チーズ……適量`,
    steps: [
      "玉ねぎとにんにくをみじん切りにする。",
      "フライパンにオリーブオイルを熱し、にんにく、玉ねぎ、牛ひき肉を炒める。",
      "牛肉に火が通ったら、トマト缶、ケチャップ、コンソメを加える。",
      "弱火で10分ほど煮込み、塩・こしょうで味を整える。",
      "茹でたスパゲッティを加えて絡める。",
      "お好みで粉チーズをかけて完成！"
    ]
  },

 "すき焼き": {
    level: "Lv.4 牛肉レシピ集",
    ingredients: `・ホルスタイン牛肉(薄切り肉)……300g
・白菜……1/4個
・長ねぎ……1本
・しいたけ……4個
・焼き豆腐……1/2丁
・しらたき……100g
・卵……2個
・醤油……80ml
・みりん……80ml
・酒……40ml
・砂糖……大さじ3
・水……80ml`,
    steps: [
      "野菜、豆腐、しらたきを食べやすい大きさに切る。",
      "鍋で牛肉を軽く焼く。",
      "醤油、みりん、酒、砂糖、水を混ぜた割り下を加える。",
      "野菜、豆腐、しらたきなどを加えて煮る。",
      "火が通ったら、溶き卵につけて食べて完成！"
    ]
  },

 "牛肉ドリア": {
    level: "Lv.5 牛肉レシピ集",
    ingredients: `・ホルスタイン牛肉(こま切れ肉)……150g
・ご飯……300g
・玉ねぎ……1/2個
・すき焼きのタレ……適量
・ピザ用チーズ……80g
・バター……20g
・薄力粉……20g
・牛乳……250ml
・コンソメ……小さじ1
・塩・こしょう……少々`,
    steps: [
      "牛肉と玉ねぎを細かく切る。",
      "フライパンで牛肉と玉ねぎを炒め、すき焼きのタレで味付けする。",
      "別の鍋でバターを溶かし、薄力粉を炒める。",
      "牛乳を少しずつ加えて混ぜ、ホワイトソースを作る。コンソメ、塩・こしょうで味を整える。",
      "耐熱皿にご飯、ホワイトソース、牛肉、チーズの順に乗せる。",
      "200℃のオーブンで10〜15分焼いて完成！"
    ]
  },

 "牛肉グラタン": {
    level: "Lv.5 牛肉レシピ集",
    ingredients: `・ホルスタイン牛肉(こま切れ肉)……150g
・じゃがいも……2個
・玉ねぎ……1/2個
・ピザ用チーズ……80g
・バター……30g
・薄力粉……20g
・牛乳……250ml
・コンソメ……小さじ1
・塩・こしょう……少々`,
    steps: [
      "じゃがいもを薄切りにして、電子レンジで柔らかくする。",
      "牛肉と玉ねぎをバター10gで炒め、塩・こしょうする。",
      "別の鍋に残りのバター20gを溶かし、薄力粉を炒める。",
      "牛乳を少しずつ加えて混ぜ、ホワイトソースを作る。コンソメ、塩・こしょうで味を整える。",
      "耐熱皿にじゃがいも、牛肉と玉ねぎを入れる。",
      "ホワイトソースをかけ、チーズを乗せる。",
      "200℃のオーブンで15分ほど焼いて完成！"
    ]
  },

 "牛肉焼きおにぎり": {
    level: "Lv.5 牛肉レシピ集",
    ingredients: `・ご飯……400g
・牛ひき肉……150g
・玉ねぎ……1/4個
・醤油……大さじ1
・砂糖……小さじ1
・みりん……小さじ1
・ごま油……小さじ1
・白ごま……大さじ1`,
    steps: [
      "玉ねぎをみじん切りにする。",
      "牛ひき肉と玉ねぎを炒める。",
      "醤油、砂糖、みりんで味付けする。",
      "ご飯に牛肉と白ごまを混ぜる。",
      "三角形に握る。",
      "フライパンにごま油を薄く引き、両面を焼く。",
      "表面に醤油を薄く塗って、さらに焼いて完成！"
    ]
  },

 "牛肉ミートパイ": {
    level: "Lv.5 牛肉レシピ集",
    ingredients: `・ホルスタイン牛肉(ひき肉)……200g
・玉ねぎ……1/2個
・にんじん……1/3本
・冷凍パイシート……2枚
・ケチャップ……大さじ2
・ウスターソース……大さじ1
・コンソメ……小さじ1
・塩・こしょう……少々
・卵黄……1個分`,
    steps: [
      "玉ねぎとにんじんをみじん切りにする。",
      "牛ひき肉と一緒に炒める。",
      "ケチャップ、ウスターソース、コンソメを加える。",
      "汁気がなくなるまで炒め、しっかり冷ます。",
      "パイシートを4等分にする。",
      "牛肉の具を乗せ、パイシートをかぶせて端を閉じる。",
      "表面に卵黄を塗る。",
      "200℃のオーブンで15〜20分焼いて完成！"
    ]
  },

 "極上・牛ステーキ ～特製赤ワインソース～": {
    level: "Lv.5 牛肉レシピ集",
    ingredients: `【牛ステーキ】
・ホルスタイン牛肉(ステーキ肉)……2枚（各180〜200g）
・塩……肉の重量の約1％
・黒こしょう……少々
・にんにく……1片
・無塩バター……20g
・サラダ油……小さじ1
・ローズマリー……1枝（あれば）

【特製赤ワインソース】
・赤ワイン……50ml
・醤油……小さじ2
・はちみつ……小さじ1
・バター……10g
・肉を焼いた後の肉汁……全量`,
    steps: [
      "ステーキ肉の表面の水分をキッチンペーパーで拭き取り、焼く直前に塩と黒こしょうを振る。",
      "フライパンにサラダ油と潰したにんにくを入れ、弱火で加熱する。にんにくの香りが出たら取り出す。",
      "フライパンをしっかり熱し、牛肉を入れる。動かさずに焼き、焼き色がついたら裏返す。",
      "バターとローズマリーを加え、溶けたバターをスプーンですくって牛肉にかけながら焼く。",
      "好みの焼き加減になったら牛肉を取り出し、アルミホイルなどで軽く覆って数分休ませる。",
      "同じフライパンに赤ワインを入れて加熱し、少し煮詰める。醤油とはちみつを加えてさらに煮詰める。",
      "最後にバターと牛肉から出た肉汁を加えて混ぜる。",
      "ステーキを食べやすい大きさに切って皿に盛り、特製赤ワインソースをかけて完成！"
    ]
  },
};

/* 既存のレシピ表示を、押せるカードに変更 */
function renderRecipes() {
  $("#recipeList").innerHTML = recipes
    .map((recipe, index) => {
      const unlocked = state.points >= recipe.unlock;
      const isNew =
        unlocked &&
        recipe.unlock > 0 &&
        state.points < recipe.unlock + 50;

      return `
        <button
          class="recipe-card ${unlocked ? "" : "locked"}"
          type="button"
          ${unlocked ? `data-recipe-index="${index}"` : "disabled"}
        >
          <div class="recipe-icon">${unlocked ? recipe.icon : "🔒"}</div>

          <div>
            <h3>
              ${unlocked ? recipe.name : "？？？"}
              ${isNew ? '<span class="new-tag">NEW!</span>' : ""}
            </h3>

            <p>
              ${
                unlocked
                  ? recipe.text
                  : `あと ${Math.max(
                      0,
                      recipe.unlock - state.points
                    )}P でアンロック！`
              }
            </p>

            ${
              unlocked
                ? `<p class="difficulty">難易度 ${recipe.difficulty}</p>`
                : ""
            }

            ${
              unlocked
                ? `<p>タップしてレシピを見る →</p>`
                : ""
            }
          </div>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll("[data-recipe-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const recipeIndex = Number(button.dataset.recipeIndex);
      openRecipeDetail(recipeIndex);
    });
  });
}

/* 詳細モーダルを開く */
function openRecipeDetail(recipeIndex) {
  const recipe = recipes[recipeIndex];

if (!recipe) {
  return;
}

const detail = recipeDetails[recipe.name];

if (!detail) {
  return;
}

  $("#recipeModalIcon").textContent = recipe.icon;
  $("#recipeModalLevel").textContent = detail.level;
  $("#recipeModalTitle").textContent = recipe.name;
  $("#recipeModalDifficulty").textContent = `難易度 ${recipe.difficulty}`;
  $("#recipeModalIngredients").textContent = detail.ingredients;

  $("#recipeModalSteps").innerHTML = detail.steps
    .map((step) => `<li>${step}</li>`)
    .join("");

$("#recipeModal").classList.add("show");
}

/* すでにレシピ画面を開いている場合も、すぐ表示を更新 */
renderRecipes();
