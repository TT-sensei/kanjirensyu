// 小学校3年生で習う漢字（200字）の書き取り練習用例文。
// reading は、文中の対象漢字の読み（送り仮名を除く）だけを記録する。
const kanjiExampleData_3 = {
    "悪": [
        { sentence: "悪い ことを しません。", reading: "わる", level: 1 },
        { sentence: "悪てんこうです。", reading: "あく", level: 2 },
        { sentence: "悪い ことを しません。 そのときの ことを、あとで 家の 人に 話しました。", reading: "わる", level: 3 }
    ],
    "安": [
        { sentence: "安い ねだんです。", reading: "やす", level: 1 },
        { sentence: "安しんします。", reading: "あん", level: 2 },
        { sentence: "安い ねだんです。 その日の 出来事を、日記に くわしく 書きました。", reading: "やす", level: 3 }
    ],
    "暗": [
        { sentence: "暗い へやです。", reading: "くら", level: 1 },
        { sentence: "暗い 夜道を あるきます。", reading: "くら", level: 2 },
        { sentence: "暗い へやです。 そのときに 思った ことを、友だちに 話しました。", reading: "くら", level: 3 }
    ],
    "医": [
        { sentence: "医しゃに なりたいです。", reading: "い", level: 1 },
        { sentence: "医がくを べんきょうします。", reading: "い", level: 2 },
        { sentence: "医しゃに なりたいです。 家に 帰ってから、もう 一度 思い出しました。", reading: "い", level: 3 }
    ],
    "委": [
        { sentence: "委いんに なりました。", reading: "い", level: 1 },
        { sentence: "しいく委員に なりました。", reading: "い", level: 2 },
        { sentence: "委いんに なりました。 次の 日、先生にも その ことを 話しました。", reading: "い", level: 3 }
    ],
    "意": [
        { sentence: "意みを しらべます。", reading: "い", level: 1 },
        { sentence: "先生の ちゅう意を 聞きます。", reading: "い", level: 2 },
        { sentence: "意みを しらべます。 そのときの ことを、あとで 家の 人に 話しました。", reading: "い", level: 3 }
    ],
    "育": [
        { sentence: "花を 育てます。", reading: "そだ", level: 1 },
        { sentence: "たい育の じかんです。", reading: "いく", level: 2 },
        { sentence: "花を 育てます。 その日の 出来事を、日記に くわしく 書きました。", reading: "そだ", level: 3 }
    ],
    "員": [
        { sentence: "かい員に なります。", reading: "いん", level: 1 },
        { sentence: "てん員さんに ききます。", reading: "いん", level: 2 },
        { sentence: "かい員に なります。 そのときに 思った ことを、友だちに 話しました。", reading: "いん", level: 3 }
    ],
    "院": [
        { sentence: "びょう院に いきます。", reading: "いん", level: 1 },
        { sentence: "にゅう院しました。", reading: "いん", level: 2 },
        { sentence: "びょう院に いきます。 家に 帰ってから、もう 一度 思い出しました。", reading: "いん", level: 3 }
    ],
    "飲": [
        { sentence: "水を 飲みます。", reading: "の", level: 1 },
        { sentence: "水とうの 水を 飲みます。", reading: "の", level: 2 },
        { sentence: "水を 飲みます。 次の 日、先生にも その ことを 話しました。", reading: "の", level: 3 }
    ],
    "運": [
        { sentence: "にもつを 運びます。", reading: "はこ", level: 1 },
        { sentence: "運どうかいです。", reading: "うん", level: 2 },
        { sentence: "にもつを 運びます。 そのときの ことを、あとで 家の 人に 話しました。", reading: "はこ", level: 3 }
    ],
    "泳": [
        { sentence: "プールで 泳ぎます。", reading: "およ", level: 1 },
        { sentence: "すい泳を ならいます。", reading: "えい", level: 2 },
        { sentence: "プールで 泳ぎます。 その日の 出来事を、日記に くわしく 書きました。", reading: "およ", level: 3 }
    ],
    "駅": [
        { sentence: "駅で まちあわせます。", reading: "えき", level: 1 },
        { sentence: "駅いんさんに ききます。", reading: "えき", level: 2 },
        { sentence: "駅で まちあわせます。 そのときに 思った ことを、友だちに 話しました。", reading: "えき", level: 3 }
    ],
    "央": [
        { sentence: "中央に たちます。", reading: "おう", level: 1 },
        { sentence: "中央こうえんに いきます。", reading: "おう", level: 2 },
        { sentence: "中央に たちます。 家に 帰ってから、もう 一度 思い出しました。", reading: "おう", level: 3 }
    ],
    "横": [
        { sentence: "横に ならびます。", reading: "よこ", level: 1 },
        { sentence: "横だんほどうを わたります。", reading: "おう", level: 2 },
        { sentence: "横に ならびます。 次の 日、先生にも その ことを 話しました。", reading: "よこ", level: 3 }
    ],
    "屋": [
        { sentence: "パン屋さんに いきます。", reading: "や", level: 1 },
        { sentence: "屋がいで あそびます。", reading: "おく", level: 2 },
        { sentence: "パン屋さんに いきます。 そのときの ことを、あとで 家の 人に 話しました。", reading: "や", level: 3 }
    ],
    "温": [
        { sentence: "温かい スープです。", reading: "あたた", level: 1 },
        { sentence: "温どを はかります。", reading: "おん", level: 2 },
        { sentence: "温かい スープです。 その日の 出来事を、日記に くわしく 書きました。", reading: "あたた", level: 3 }
    ],
    "化": [
        { sentence: "へん化します。", reading: "か", level: 1 },
        { sentence: "きつねが 化けます。", reading: "ば", level: 2 },
        { sentence: "へん化します。 そのときに 思った ことを、友だちに 話しました。", reading: "か", level: 3 }
    ],
    "荷": [
        { sentence: "にもつを 荷づくりします。", reading: "に", level: 1 },
        { sentence: "重い 荷物を 運びます。", reading: "に", level: 2 },
        { sentence: "にもつを 荷づくりします。 家に 帰ってから、もう 一度 思い出しました。", reading: "に", level: 3 }
    ],
    "界": [
        { sentence: "せ界ちずを みます。", reading: "かい", level: 1 },
        { sentence: "世界の 国々を しらべます。", reading: "かい", level: 2 },
        { sentence: "せ界ちずを みます。 次の 日、先生にも その ことを 話しました。", reading: "かい", level: 3 }
    ],
    "開": [
        { sentence: "とびらを 開けます。", reading: "あ", level: 1 },
        { sentence: "会が 開きます。", reading: "ひら", level: 2 },
        { sentence: "とびらを 開けます。 そのときの ことを、あとで 家の 人に 話しました。", reading: "あ", level: 3 }
    ],
    "階": [
        { sentence: "二階に あがります。", reading: "かい", level: 1 },
        { sentence: "階だんを のぼります。", reading: "かい", level: 2 },
        { sentence: "二階に あがります。 その日の 出来事を、日記に くわしく 書きました。", reading: "かい", level: 3 }
    ],
    "寒": [
        { sentence: "寒い ふゆです。", reading: "さむ", level: 1 },
        { sentence: "寒い 日は 手ぶくろを します。", reading: "さむ", level: 2 },
        { sentence: "寒い ふゆです。 そのときに 思った ことを、友だちに 話しました。", reading: "さむ", level: 3 }
    ],
    "感": [
        { sentence: "感どうしました。", reading: "かん", level: 1 },
        { sentence: "感しゃします。", reading: "かん", level: 2 },
        { sentence: "感どうしました。 家に 帰ってから、もう 一度 思い出しました。", reading: "かん", level: 3 }
    ],
    "漢": [
        { sentence: "漢じを かきます。", reading: "かん", level: 1 },
        { sentence: "新しい 漢字を 習います。", reading: "かん", level: 2 },
        { sentence: "漢じを かきます。 次の 日、先生にも その ことを 話しました。", reading: "かん", level: 3 }
    ],
    "館": [
        { sentence: "としょ館に いきます。", reading: "かん", level: 1 },
        { sentence: "びじゅつ館を みます。", reading: "かん", level: 2 },
        { sentence: "としょ館に いきます。 そのときの ことを、あとで 家の 人に 話しました。", reading: "かん", level: 3 }
    ],
    "岸": [
        { sentence: "岸で つりを します。", reading: "きし", level: 1 },
        { sentence: "かい岸を あるきます。", reading: "がん", level: 2 },
        { sentence: "岸で つりを します。 その日の 出来事を、日記に くわしく 書きました。", reading: "きし", level: 3 }
    ],
    "起": [
        { sentence: "はやく 起きます。", reading: "お", level: 1 },
        { sentence: "起てんに もどります。", reading: "き", level: 2 },
        { sentence: "はやく 起きます。 そのときに 思った ことを、友だちに 話しました。", reading: "お", level: 3 }
    ],
    "期": [
        { sentence: "夏期きゅうかです。", reading: "き", level: 1 },
        { sentence: "に学期が はじまります。", reading: "き", level: 2 },
        { sentence: "夏期きゅうかです。 家に 帰ってから、もう 一度 思い出しました。", reading: "き", level: 3 }
    ],
    "客": [
        { sentence: "お客さんが きます。", reading: "きゃく", level: 1 },
        { sentence: "客せきに すわります。", reading: "きゃく", level: 2 },
        { sentence: "お客さんが きます。 次の 日、先生にも その ことを 話しました。", reading: "きゃく", level: 3 }
    ],
    "究": [
        { sentence: "けん究します。", reading: "きゅう", level: 1 },
        { sentence: "理科で 生き物を 研究します。", reading: "きゅう", level: 2 },
        { sentence: "けん究します。 そのときの ことを、あとで 家の 人に 話しました。", reading: "きゅう", level: 3 }
    ],
    "急": [
        { sentence: "急いで あるきます。", reading: "いそ", level: 1 },
        { sentence: "急いで 教室へ もどります。", reading: "いそ", level: 2 },
        { sentence: "急いで あるきます。 その日の 出来事を、日記に くわしく 書きました。", reading: "いそ", level: 3 }
    ],
    "級": [
        { sentence: "一級を とりました。", reading: "きゅう", level: 1 },
        { sentence: "学級会で し合います。", reading: "きゅう", level: 2 },
        { sentence: "一級を とりました。 そのときに 思った ことを、友だちに 話しました。", reading: "きゅう", level: 3 }
    ],
    "宮": [
        { sentence: "お宮まいりを します。", reading: "みや", level: 1 },
        { sentence: "町の お宮を 見学します。", reading: "みや", level: 2 },
        { sentence: "お宮まいりを します。 家に 帰ってから、もう 一度 思い出しました。", reading: "みや", level: 3 }
    ],
    "球": [
        { sentence: "野球を します。", reading: "きゅう", level: 1 },
        { sentence: "校庭で 球を 投げます。", reading: "たま", level: 2 },
        { sentence: "野球を します。 次の 日、先生にも その ことを 話しました。", reading: "きゅう", level: 3 }
    ],
    "去": [
        { sentence: "去ねんの できごとです。", reading: "きょ", level: 1 },
        { sentence: "去年の 写真を 見ます。", reading: "きょ", level: 2 },
        { sentence: "去ねんの できごとです。 そのときの ことを、あとで 家の 人に 話しました。", reading: "きょ", level: 3 }
    ],
    "橋": [
        { sentence: "橋を わたります。", reading: "はし", level: 1 },
        { sentence: "てつ橋を みます。", reading: "きょう", level: 2 },
        { sentence: "橋を わたります。 その日の 出来事を、日記に くわしく 書きました。", reading: "はし", level: 3 }
    ],
    "業": [
        { sentence: "じゅ業を うけます。", reading: "ぎょう", level: 1 },
        { sentence: "じゅ業で 手を あげます。", reading: "ぎょう", level: 2 },
        { sentence: "じゅ業を うけます。 そのときに 思った ことを、友だちに 話しました。", reading: "ぎょう", level: 3 }
    ],
    "曲": [
        { sentence: "みちが 曲がります。", reading: "ま", level: 1 },
        { sentence: "音楽の 曲を きく。", reading: "きょく", level: 2 },
        { sentence: "みちが 曲がります。 家に 帰ってから、もう 一度 思い出しました。", reading: "ま", level: 3 }
    ],
    "局": [
        { sentence: "ゆうびん局に いきます。", reading: "きょく", level: 1 },
        { sentence: "局ちょうさんに あいます。", reading: "きょく", level: 2 },
        { sentence: "ゆうびん局に いきます。 次の 日、先生にも その ことを 話しました。", reading: "きょく", level: 3 }
    ],
    "銀": [
        { sentence: "銀いろの さらです。", reading: "ぎん", level: 1 },
        { sentence: "銀色の おり紙を 使います。", reading: "ぎん", level: 2 },
        { sentence: "銀いろの さらです。 そのときの ことを、あとで 家の 人に 話しました。", reading: "ぎん", level: 3 }
    ],
    "区": [
        { sentence: "区やくしょに いきます。", reading: "く", level: 1 },
        { sentence: "地図を 四つの 区画に 分けます。", reading: "く", level: 2 },
        { sentence: "区やくしょに いきます。 その日の 出来事を、日記に くわしく 書きました。", reading: "く", level: 3 }
    ],
    "苦": [
        { sentence: "苦い くすりです。", reading: "にが", level: 1 },
        { sentence: "苦しい きもちです。", reading: "くる", level: 2 },
        { sentence: "苦い くすりです。 そのときに 思った ことを、友だちに 話しました。", reading: "にが", level: 3 }
    ],
    "具": [
        { sentence: "どう具を つかいます。", reading: "ぐ", level: 1 },
        { sentence: "図工の 道具を そろえます。", reading: "ぐ", level: 2 },
        { sentence: "どう具を つかいます。 家に 帰ってから、もう 一度 思い出しました。", reading: "ぐ", level: 3 }
    ],
    "君": [
        { sentence: "君と あそびます。", reading: "きみ", level: 1 },
        { sentence: "たなか君と はなします。", reading: "くん", level: 2 },
        { sentence: "君と あそびます。 次の 日、先生にも その ことを 話しました。", reading: "きみ", level: 3 }
    ],
    "係": [
        { sentence: "とうばん係を します。", reading: "かかり", level: 1 },
        { sentence: "かん係を しらべます。", reading: "けい", level: 2 },
        { sentence: "とうばん係を します。 そのときの ことを、あとで 家の 人に 話しました。", reading: "かかり", level: 3 }
    ],
    "軽": [
        { sentence: "軽い にもつです。", reading: "かる", level: 1 },
        { sentence: "軽しょくを たべます。", reading: "けい", level: 2 },
        { sentence: "軽い にもつです。 その日の 出来事を、日記に くわしく 書きました。", reading: "かる", level: 3 }
    ],
    "血": [
        { sentence: "血が でました。", reading: "ち", level: 1 },
        { sentence: "ころんだ ひざから 血が 出ました。", reading: "ち", level: 2 },
        { sentence: "血が でました。 そのときに 思った ことを、友だちに 話しました。", reading: "ち", level: 3 }
    ],
    "決": [
        { sentence: "やることを 決めます。", reading: "き", level: 1 },
        { sentence: "決しょうせんです。", reading: "けつ", level: 2 },
        { sentence: "やることを 決めます。 家に 帰ってから、もう 一度 思い出しました。", reading: "き", level: 3 }
    ],
    "研": [
        { sentence: "研きゅうします。", reading: "けん", level: 1 },
        { sentence: "虫めがねで 研究します。", reading: "けん", level: 2 },
        { sentence: "研きゅうします。 次の 日、先生にも その ことを 話しました。", reading: "けん", level: 3 }
    ],
    "県": [
        { sentence: "県ちょうしょに いきます。", reading: "けん", level: 1 },
        { sentence: "自分の 県を 地図で さがします。", reading: "けん", level: 2 },
        { sentence: "県ちょうしょに いきます。 そのときの ことを、あとで 家の 人に 話しました。", reading: "けん", level: 3 }
    ],
    "庫": [
        { sentence: "れいぞう庫を あけます。", reading: "こ", level: 1 },
        { sentence: "しゃ庫に くるまを いれます。", reading: "こ", level: 2 },
        { sentence: "れいぞう庫を あけます。 その日の 出来事を、日記に くわしく 書きました。", reading: "こ", level: 3 }
    ],
    "湖": [
        { sentence: "湖で ボートに のります。", reading: "みずうみ", level: 1 },
        { sentence: "大きな 湖で 鳥を 見ました。", reading: "みずうみ", level: 2 },
        { sentence: "湖で ボートに のります。 そのときに 思った ことを、友だちに 話しました。", reading: "みずうみ", level: 3 }
    ],
    "向": [
        { sentence: "こっちを 向きます。", reading: "む", level: 1 },
        { sentence: "ほう向を しらべます。", reading: "こう", level: 2 },
        { sentence: "こっちを 向きます。 家に 帰ってから、もう 一度 思い出しました。", reading: "む", level: 3 }
    ],
    "幸": [
        { sentence: "幸せな きもちです。", reading: "しあわ", level: 1 },
        { sentence: "幸うんを ねがいます。", reading: "こう", level: 2 },
        { sentence: "幸せな きもちです。 次の 日、先生にも その ことを 話しました。", reading: "しあわ", level: 3 }
    ],
    "港": [
        { sentence: "港に ふねが とまります。", reading: "みなと", level: 1 },
        { sentence: "くう港に いきます。", reading: "こう", level: 2 },
        { sentence: "港に ふねが とまります。 そのときの ことを、あとで 家の 人に 話しました。", reading: "みなと", level: 3 }
    ],
    "号": [
        { sentence: "ばん号を かきます。", reading: "ごう", level: 1 },
        { sentence: "しん号を まもります。", reading: "ごう", level: 2 },
        { sentence: "ばん号を かきます。 その日の 出来事を、日記に くわしく 書きました。", reading: "ごう", level: 3 }
    ],
    "根": [
        { sentence: "木の 根を みます。", reading: "ね", level: 1 },
        { sentence: "あさがおの 根を 観察します。", reading: "ね", level: 2 },
        { sentence: "木の 根を みます。 そのときに 思った ことを、友だちに 話しました。", reading: "ね", level: 3 }
    ],
    "祭": [
        { sentence: "お祭りに いきます。", reading: "まつり", level: 1 },
        { sentence: "ぶんか祭を します。", reading: "さい", level: 2 },
        { sentence: "お祭りに いきます。 家に 帰ってから、もう 一度 思い出しました。", reading: "まつり", level: 3 }
    ],
    "皿": [
        { sentence: "お皿を あらいます。", reading: "さら", level: 1 },
        { sentence: "おお皿に もりつけます。", reading: "さら", level: 2 },
        { sentence: "お皿を あらいます。 次の 日、先生にも その ことを 話しました。", reading: "さら", level: 3 }
    ],
    "仕": [
        { sentence: "仕ごとを します。", reading: "し", level: 1 },
        { sentence: "仕あげを します。", reading: "し", level: 2 },
        { sentence: "仕ごとを します。 そのときの ことを、あとで 家の 人に 話しました。", reading: "し", level: 3 }
    ],
    "死": [
        { sentence: "むしが 死にました。", reading: "し", level: 1 },
        { sentence: "かれた 虫が 死んで いました。", reading: "し", level: 2 },
        { sentence: "むしが 死にました。 その日の 出来事を、日記に くわしく 書きました。", reading: "し", level: 3 }
    ],
    "使": [
        { sentence: "はさみを 使います。", reading: "つか", level: 1 },
        { sentence: "じょうぎを 使って 線を 引きます。", reading: "つか", level: 2 },
        { sentence: "はさみを 使います。 そのときに 思った ことを、友だちに 話しました。", reading: "つか", level: 3 }
    ],
    "始": [
        { sentence: "べんきょうを 始めます。", reading: "はじ", level: 1 },
        { sentence: "朝の 会を 始めます。", reading: "はじ", level: 2 },
        { sentence: "べんきょうを 始めます。 家に 帰ってから、もう 一度 思い出しました。", reading: "はじ", level: 3 }
    ],
    "指": [
        { sentence: "指を まげます。", reading: "ゆび", level: 1 },
        { sentence: "ゆびで 指します。", reading: "さ", level: 2 },
        { sentence: "指を まげます。 次の 日、先生にも その ことを 話しました。", reading: "ゆび", level: 3 }
    ],
    "歯": [
        { sentence: "歯を みがきます。", reading: "は", level: 1 },
        { sentence: "歯いしゃさんに いきます。", reading: "し", level: 2 },
        { sentence: "歯を みがきます。 そのときの ことを、あとで 家の 人に 話しました。", reading: "は", level: 3 }
    ],
    "詩": [
        { sentence: "詩を かきます。", reading: "し", level: 1 },
        { sentence: "国語で 詩を 読みます。", reading: "し", level: 2 },
        { sentence: "詩を かきます。 その日の 出来事を、日記に くわしく 書きました。", reading: "し", level: 3 }
    ],
    "次": [
        { sentence: "次の えきで おります。", reading: "つぎ", level: 1 },
        { sentence: "次回の 係を 決めます。", reading: "じ", level: 2 },
        { sentence: "次の えきで おります。 そのときに 思った ことを、友だちに 話しました。", reading: "つぎ", level: 3 }
    ],
    "事": [
        { sentence: "たいせつな 事です。", reading: "こと", level: 1 },
        { sentence: "今日の 出来事を 日記に 書きます。", reading: "ごと", level: 2 },
        { sentence: "たいせつな 事です。 家に 帰ってから、もう 一度 思い出しました。", reading: "こと", level: 3 }
    ],
    "持": [
        { sentence: "かばんを 持ちます。", reading: "も", level: 1 },
        { sentence: "自分の えんぴつを 持って きます。", reading: "も", level: 2 },
        { sentence: "かばんを 持ちます。 次の 日、先生にも その ことを 話しました。", reading: "も", level: 3 }
    ],
    "式": [
        { sentence: "にゅう学式です。", reading: "しき", level: 1 },
        { sentence: "けっこん式に いきます。", reading: "しき", level: 2 },
        { sentence: "にゅう学式です。 そのときの ことを、あとで 家の 人に 話しました。", reading: "しき", level: 3 }
    ],
    "実": [
        { sentence: "木の 実が なりました。", reading: "み", level: 1 },
        { sentence: "実けんを します。", reading: "じつ", level: 2 },
        { sentence: "木の 実が なりました。 その日の 出来事を、日記に くわしく 書きました。", reading: "み", level: 3 }
    ],
    "写": [
        { sentence: "しゃしんを 写します。", reading: "うつ", level: 1 },
        { sentence: "黒板の 文を 写します。", reading: "うつ", level: 2 },
        { sentence: "しゃしんを 写します。 そのときに 思った ことを、友だちに 話しました。", reading: "うつ", level: 3 }
    ],
    "者": [
        { sentence: "い者に なりたいです。", reading: "しゃ", level: 1 },
        { sentence: "けがを した 者は いません。", reading: "もの", level: 2 },
        { sentence: "い者に なりたいです。 家に 帰ってから、もう 一度 思い出しました。", reading: "しゃ", level: 3 }
    ],
    "主": [
        { sentence: "主じんこうです。", reading: "しゅ", level: 1 },
        { sentence: "物語の 主人公を たしかめます。", reading: "しゅ", level: 2 },
        { sentence: "主じんこうです。 次の 日、先生にも その ことを 話しました。", reading: "しゅ", level: 3 }
    ],
    "守": [
        { sentence: "きそくを 守ります。", reading: "まも", level: 1 },
        { sentence: "交通の きまりを 守ります。", reading: "まも", level: 2 },
        { sentence: "きそくを 守ります。 そのときの ことを、あとで 家の 人に 話しました。", reading: "まも", level: 3 }
    ],
    "取": [
        { sentence: "本を 取ります。", reading: "と", level: 1 },
        { sentence: "かるたを 一まい 取ります。", reading: "と", level: 2 },
        { sentence: "本を 取ります。 その日の 出来事を、日記に くわしく 書きました。", reading: "と", level: 3 }
    ],
    "酒": [
        { sentence: "お酒を のみます。", reading: "さけ", level: 1 },
        { sentence: "お酒は 大人の 飲み物です。", reading: "さけ", level: 2 },
        { sentence: "お酒を のみます。 そのときに 思った ことを、友だちに 話しました。", reading: "さけ", level: 3 }
    ],
    "受": [
        { sentence: "テストを 受けます。", reading: "う", level: 1 },
        { sentence: "先生から せつ明を 受けます。", reading: "う", level: 2 },
        { sentence: "テストを 受けます。 家に 帰ってから、もう 一度 思い出しました。", reading: "う", level: 3 }
    ],
    "州": [
        { sentence: "ほん州に すんで います。", reading: "しゅう", level: 1 },
        { sentence: "本州を 地図で さがします。", reading: "しゅう", level: 2 },
        { sentence: "ほん州に すんで います。 次の 日、先生にも その ことを 話しました。", reading: "しゅう", level: 3 }
    ],
    "拾": [
        { sentence: "ごみを 拾います。", reading: "ひろ", level: 1 },
        { sentence: "道で 拾った 物を とどけます。", reading: "ひろ", level: 2 },
        { sentence: "ごみを 拾います。 そのときの ことを、あとで 家の 人に 話しました。", reading: "ひろ", level: 3 }
    ],
    "終": [
        { sentence: "じゅぎょうが 終わります。", reading: "お", level: 1 },
        { sentence: "そうじが 終わったら 帰ります。", reading: "お", level: 2 },
        { sentence: "じゅぎょうが 終わります。 その日の 出来事を、日記に くわしく 書きました。", reading: "お", level: 3 }
    ],
    "習": [
        { sentence: "字を 習います。", reading: "なら", level: 1 },
        { sentence: "自習します。", reading: "しゅう", level: 2 },
        { sentence: "字を 習います。 そのときに 思った ことを、友だちに 話しました。", reading: "なら", level: 3 }
    ],
    "集": [
        { sentence: "切手を 集めます。", reading: "あつ", level: 1 },
        { sentence: "集ごうします。", reading: "しゅう", level: 2 },
        { sentence: "切手を 集めます。 家に 帰ってから、もう 一度 思い出しました。", reading: "あつ", level: 3 }
    ],
    "住": [
        { sentence: "町に 住んで います。", reading: "す", level: 1 },
        { sentence: "自分の 住む 町を しらべます。", reading: "す", level: 2 },
        { sentence: "町に 住んで います。 次の 日、先生にも その ことを 話しました。", reading: "す", level: 3 }
    ],
    "重": [
        { sentence: "重い にもつです。", reading: "おも", level: 1 },
        { sentence: "たい重を はかります。", reading: "じゅう", level: 2 },
        { sentence: "重い にもつです。 そのときの ことを、あとで 家の 人に 話しました。", reading: "おも", level: 3 }
    ],
    "宿": [
        { sentence: "宿だいを します。", reading: "しゅく", level: 1 },
        { sentence: "宿に とまります。", reading: "やど", level: 2 },
        { sentence: "宿だいを します。 その日の 出来事を、日記に くわしく 書きました。", reading: "しゅく", level: 3 }
    ],
    "所": [
        { sentence: "この 所が すきです。", reading: "ところ", level: 1 },
        { sentence: "じゅう所を かきます。", reading: "しょ", level: 2 },
        { sentence: "この 所が すきです。 そのときに 思った ことを、友だちに 話しました。", reading: "ところ", level: 3 }
    ],
    "暑": [
        { sentence: "暑い なつです。", reading: "あつ", level: 1 },
        { sentence: "暑い 日は 水を よく 飲みます。", reading: "あつ", level: 2 },
        { sentence: "暑い なつです。 家に 帰ってから、もう 一度 思い出しました。", reading: "あつ", level: 3 }
    ],
    "助": [
        { sentence: "友だちを 助けます。", reading: "たす", level: 1 },
        { sentence: "友だちの そうじを 助けます。", reading: "たす", level: 2 },
        { sentence: "友だちを 助けます。 次の 日、先生にも その ことを 話しました。", reading: "たす", level: 3 }
    ],
    "昭": [
        { sentence: "昭わじだいの おはなしです。", reading: "しょう", level: 1 },
        { sentence: "昭和の くらしを しらべます。", reading: "しょう", level: 2 },
        { sentence: "昭わじだいの おはなしです。 そのときの ことを、あとで 家の 人に 話しました。", reading: "しょう", level: 3 }
    ],
    "消": [
        { sentence: "でんきを 消します。", reading: "け", level: 1 },
        { sentence: "消ぼうしゃが きました。", reading: "しょう", level: 2 },
        { sentence: "でんきを 消します。 その日の 出来事を、日記に くわしく 書きました。", reading: "け", level: 3 }
    ],
    "商": [
        { sentence: "商てんがいを あるきます。", reading: "しょう", level: 1 },
        { sentence: "町の 商店を たんけんします。", reading: "しょう", level: 2 },
        { sentence: "商てんがいを あるきます。 そのときに 思った ことを、友だちに 話しました。", reading: "しょう", level: 3 }
    ],
    "章": [
        { sentence: "だいいち章を よみます。", reading: "しょう", level: 1 },
        { sentence: "物語の 第一章を 読みます。", reading: "しょう", level: 2 },
        { sentence: "だいいち章を よみます。 家に 帰ってから、もう 一度 思い出しました。", reading: "しょう", level: 3 }
    ],
    "勝": [
        { sentence: "しあいに 勝ちます。", reading: "か", level: 1 },
        { sentence: "けっ勝せんに でます。", reading: "しょう", level: 2 },
        { sentence: "しあいに 勝ちます。 次の 日、先生にも その ことを 話しました。", reading: "か", level: 3 }
    ],
    "乗": [
        { sentence: "バスに 乗ります。", reading: "の", level: 1 },
        { sentence: "乗しゃけんを かいます。", reading: "じょう", level: 2 },
        { sentence: "バスに 乗ります。 そのときの ことを、あとで 家の 人に 話しました。", reading: "の", level: 3 }
    ],
    "植": [
        { sentence: "花を 植えます。", reading: "う", level: 1 },
        { sentence: "植ぶつを かんさつします。", reading: "しょく", level: 2 },
        { sentence: "花を 植えます。 その日の 出来事を、日記に くわしく 書きました。", reading: "う", level: 3 }
    ],
    "申": [
        { sentence: "名まえを 申します。", reading: "もう", level: 1 },
        { sentence: "先生に 係を 申し出ます。", reading: "もう", level: 2 },
        { sentence: "名まえを 申します。 そのときに 思った ことを、友だちに 話しました。", reading: "もう", level: 3 }
    ],
    "身": [
        { sentence: "身を まもります。", reading: "み", level: 1 },
        { sentence: "身ちょうを はかります。", reading: "しん", level: 2 },
        { sentence: "身を まもります。 家に 帰ってから、もう 一度 思い出しました。", reading: "み", level: 3 }
    ],
    "神": [
        { sentence: "神さまに おねがいします。", reading: "かみ", level: 1 },
        { sentence: "神しゃに いきます。", reading: "じん", level: 2 },
        { sentence: "神さまに おねがいします。 次の 日、先生にも その ことを 話しました。", reading: "かみ", level: 3 }
    ],
    "真": [
        { sentence: "写真を とります。", reading: "しん", level: 1 },
        { sentence: "真ん中に すわります。", reading: "ま", level: 2 },
        { sentence: "写真を とります。 そのときの ことを、あとで 家の 人に 話しました。", reading: "しん", level: 3 }
    ],
    "深": [
        { sentence: "深い 川です。", reading: "ふか", level: 1 },
        { sentence: "水そうの 深さを はかります。", reading: "ふか", level: 2 },
        { sentence: "深い 川です。 その日の 出来事を、日記に くわしく 書きました。", reading: "ふか", level: 3 }
    ],
    "進": [
        { sentence: "前に 進みます。", reading: "すす", level: 1 },
        { sentence: "進こうを かんがえます。", reading: "しん", level: 2 },
        { sentence: "前に 進みます。 そのときに 思った ことを、友だちに 話しました。", reading: "すす", level: 3 }
    ],
    "世": [
        { sentence: "世かいちずを みます。", reading: "せい", level: 1 },
        { sentence: "この 世の なかです。", reading: "よ", level: 2 },
        { sentence: "世かいちずを みます。 家に 帰ってから、もう 一度 思い出しました。", reading: "せい", level: 3 }
    ],
    "整": [
        { sentence: "つくえを 整えます。", reading: "ととの", level: 1 },
        { sentence: "整列に ならびます。", reading: "せい", level: 2 },
        { sentence: "つくえを 整えます。 次の 日、先生にも その ことを 話しました。", reading: "ととの", level: 3 }
    ],
    "昔": [
        { sentence: "昔ばなしを ききます。", reading: "むかし", level: 1 },
        { sentence: "昔の 道具を 見学します。", reading: "むかし", level: 2 },
        { sentence: "昔ばなしを ききます。 そのときの ことを、あとで 家の 人に 話しました。", reading: "むかし", level: 3 }
    ],
    "全": [
        { sentence: "全ぶ たべました。", reading: "ぜん", level: 1 },
        { sentence: "全員で こえを そろえます。", reading: "ぜん", level: 2 },
        { sentence: "全ぶ たべました。 その日の 出来事を、日記に くわしく 書きました。", reading: "ぜん", level: 3 }
    ],
    "相": [
        { sentence: "相だんします。", reading: "そう", level: 1 },
        { sentence: "相ての きもちを かんがえます。", reading: "あい", level: 2 },
        { sentence: "相だんします。 そのときに 思った ことを、友だちに 話しました。", reading: "そう", level: 3 }
    ],
    "送": [
        { sentence: "てがみを 送ります。", reading: "おく", level: 1 },
        { sentence: "ほう送します。", reading: "そう", level: 2 },
        { sentence: "てがみを 送ります。 家に 帰ってから、もう 一度 思い出しました。", reading: "おく", level: 3 }
    ],
    "想": [
        { sentence: "想ぞうします。", reading: "そう", level: 1 },
        { sentence: "本を 読んだ 感想を 話します。", reading: "そう", level: 2 },
        { sentence: "想ぞうします。 次の 日、先生にも その ことを 話しました。", reading: "そう", level: 3 }
    ],
    "息": [
        { sentence: "息を すいます。", reading: "いき", level: 1 },
        { sentence: "きゅう息を とります。", reading: "そく", level: 2 },
        { sentence: "息を すいます。 そのときの ことを、あとで 家の 人に 話しました。", reading: "いき", level: 3 }
    ],
    "速": [
        { sentence: "速い でんしゃです。", reading: "はや", level: 1 },
        { sentence: "速どを あげます。", reading: "そく", level: 2 },
        { sentence: "速い でんしゃです。 その日の 出来事を、日記に くわしく 書きました。", reading: "はや", level: 3 }
    ],
    "族": [
        { sentence: "か族で でかけます。", reading: "ぞく", level: 1 },
        { sentence: "家族で 夕ごはんを 食べます。", reading: "ぞく", level: 2 },
        { sentence: "か族で でかけます。 そのときに 思った ことを、友だちに 話しました。", reading: "ぞく", level: 3 }
    ],
    "他": [
        { sentence: "他の ひとに ききます。", reading: "た", level: 1 },
        { sentence: "他こうの ようすを ききます。", reading: "た", level: 2 },
        { sentence: "他の ひとに ききます。 家に 帰ってから、もう 一度 思い出しました。", reading: "た", level: 3 }
    ],
    "打": [
        { sentence: "ボールを 打ちます。", reading: "う", level: 1 },
        { sentence: "打球を うけとめます。", reading: "だ", level: 2 },
        { sentence: "ボールを 打ちます。 次の 日、先生にも その ことを 話しました。", reading: "う", level: 3 }
    ],
    "対": [
        { sentence: "対りつします。", reading: "たい", level: 1 },
        { sentence: "二人一組で 対話します。", reading: "たい", level: 2 },
        { sentence: "対りつします。 そのときの ことを、あとで 家の 人に 話しました。", reading: "たい", level: 3 }
    ],
    "待": [
        { sentence: "バスを 待ちます。", reading: "ま", level: 1 },
        { sentence: "しずかに じゅん番を 待ちます。", reading: "ま", level: 2 },
        { sentence: "バスを 待ちます。 その日の 出来事を、日記に くわしく 書きました。", reading: "ま", level: 3 }
    ],
    "代": [
        { sentence: "せんせいに 代わって はなします。", reading: "か", level: 1 },
        { sentence: "じ代を しらべます。", reading: "だい", level: 2 },
        { sentence: "せんせいに 代わって はなします。 そのときに 思った ことを、友だちに 話しました。", reading: "か", level: 3 }
    ],
    "第": [
        { sentence: "第一に かんがえます。", reading: "だい", level: 1 },
        { sentence: "第二に すすめます。", reading: "だい", level: 2 },
        { sentence: "第一に かんがえます。 家に 帰ってから、もう 一度 思い出しました。", reading: "だい", level: 3 }
    ],
    "題": [
        { sentence: "しゅく題を します。", reading: "だい", level: 1 },
        { sentence: "算数の 問題を ときます。", reading: "だい", level: 2 },
        { sentence: "しゅく題を します。 次の 日、先生にも その ことを 話しました。", reading: "だい", level: 3 }
    ],
    "炭": [
        { sentence: "炭で やきます。", reading: "すみ", level: 1 },
        { sentence: "木炭で 絵を かきます。", reading: "たん", level: 2 },
        { sentence: "炭で やきます。 そのときの ことを、あとで 家の 人に 話しました。", reading: "すみ", level: 3 }
    ],
    "短": [
        { sentence: "短い えんぴつです。", reading: "みじか", level: 1 },
        { sentence: "短い 文を 作ります。", reading: "みじか", level: 2 },
        { sentence: "短い えんぴつです。 その日の 出来事を、日記に くわしく 書きました。", reading: "みじか", level: 3 }
    ],
    "談": [
        { sentence: "そう談します。", reading: "だん", level: 1 },
        { sentence: "こまった ことを 先生に 相談します。", reading: "だん", level: 2 },
        { sentence: "そう談します。 そのときに 思った ことを、友だちに 話しました。", reading: "だん", level: 3 }
    ],
    "着": [
        { sentence: "ふくを 着ます。", reading: "き", level: 1 },
        { sentence: "えきに 着きます。", reading: "つ", level: 2 },
        { sentence: "ふくを 着ます。 家に 帰ってから、もう 一度 思い出しました。", reading: "き", level: 3 }
    ],
    "注": [
        { sentence: "みずを 注ぎます。", reading: "そそ", level: 1 },
        { sentence: "先生の 注意を よく 聞きます。", reading: "ちゅう", level: 2 },
        { sentence: "みずを 注ぎます。 次の 日、先生にも その ことを 話しました。", reading: "そそ", level: 3 }
    ],
    "柱": [
        { sentence: "柱に もたれます。", reading: "はしら", level: 1 },
        { sentence: "でん柱を みます。", reading: "ちゅう", level: 2 },
        { sentence: "柱に もたれます。 そのときの ことを、あとで 家の 人に 話しました。", reading: "はしら", level: 3 }
    ],
    "丁": [
        { sentence: "一丁めです。", reading: "ちょう", level: 1 },
        { sentence: "丁ねいに かきます。", reading: "ちょう", level: 2 },
        { sentence: "一丁めです。 その日の 出来事を、日記に くわしく 書きました。", reading: "ちょう", level: 3 }
    ],
    "帳": [
        { sentence: "手帳を つかいます。", reading: "ちょう", level: 1 },
        { sentence: "つう帳を みます。", reading: "ちょう", level: 2 },
        { sentence: "手帳を つかいます。 そのときに 思った ことを、友だちに 話しました。", reading: "ちょう", level: 3 }
    ],
    "調": [
        { sentence: "しゅくだいを 調べます。", reading: "しら", level: 1 },
        { sentence: "調しを たしかめます。", reading: "ちょう", level: 2 },
        { sentence: "しゅくだいを 調べます。 家に 帰ってから、もう 一度 思い出しました。", reading: "しら", level: 3 }
    ],
    "追": [
        { sentence: "ボールを 追いかけます。", reading: "お", level: 1 },
        { sentence: "にげた ボールを 追います。", reading: "お", level: 2 },
        { sentence: "ボールを 追いかけます。 次の 日、先生にも その ことを 話しました。", reading: "お", level: 3 }
    ],
    "定": [
        { sentence: "よ定を たてます。", reading: "てい", level: 1 },
        { sentence: "時間を 決めて、予定を 立てます。", reading: "てい", level: 2 },
        { sentence: "よ定を たてます。 そのときの ことを、あとで 家の 人に 話しました。", reading: "てい", level: 3 }
    ],
    "庭": [
        { sentence: "庭で あそびます。", reading: "にわ", level: 1 },
        { sentence: "こう庭を はしります。", reading: "てい", level: 2 },
        { sentence: "庭で あそびます。 その日の 出来事を、日記に くわしく 書きました。", reading: "にわ", level: 3 }
    ],
    "笛": [
        { sentence: "笛を ふきます。", reading: "ふえ", level: 1 },
        { sentence: "音楽で 笛を ふきます。", reading: "ふえ", level: 2 },
        { sentence: "笛を ふきます。 そのときに 思った ことを、友だちに 話しました。", reading: "ふえ", level: 3 }
    ],
    "鉄": [
        { sentence: "鉄ぼうで あそびます。", reading: "てつ", level: 1 },
        { sentence: "体育で 鉄ぼうを します。", reading: "てつ", level: 2 },
        { sentence: "鉄ぼうで あそびます。 家に 帰ってから、もう 一度 思い出しました。", reading: "てつ", level: 3 }
    ],
    "転": [
        { sentence: "転んで しまいました。", reading: "ころ", level: 1 },
        { sentence: "自転しゃに のります。", reading: "てん", level: 2 },
        { sentence: "転んで しまいました。 次の 日、先生にも その ことを 話しました。", reading: "ころ", level: 3 }
    ],
    "都": [
        { sentence: "とうきょう都に すんで います。", reading: "と", level: 1 },
        { sentence: "都の まちなみです。", reading: "みやこ", level: 2 },
        { sentence: "とうきょう都に すんで います。 そのときの ことを、あとで 家の 人に 話しました。", reading: "と", level: 3 }
    ],
    "度": [
        { sentence: "おん度を はかります。", reading: "ど", level: 1 },
        { sentence: "一度 やってみます。", reading: "ど", level: 2 },
        { sentence: "おん度を はかります。 その日の 出来事を、日記に くわしく 書きました。", reading: "ど", level: 3 }
    ],
    "投": [
        { sentence: "ボールを 投げます。", reading: "な", level: 1 },
        { sentence: "投しゅです。", reading: "とう", level: 2 },
        { sentence: "ボールを 投げます。 そのときに 思った ことを、友だちに 話しました。", reading: "な", level: 3 }
    ],
    "豆": [
        { sentence: "豆を たべます。", reading: "まめ", level: 1 },
        { sentence: "だい豆から できて います。", reading: "とう", level: 2 },
        { sentence: "豆を たべます。 家に 帰ってから、もう 一度 思い出しました。", reading: "まめ", level: 3 }
    ],
    "島": [
        { sentence: "島に わたります。", reading: "しま", level: 1 },
        { sentence: "はん島を さんぽします。", reading: "とう", level: 2 },
        { sentence: "島に わたります。 次の 日、先生にも その ことを 話しました。", reading: "しま", level: 3 }
    ],
    "湯": [
        { sentence: "お湯を わかします。", reading: "ゆ", level: 1 },
        { sentence: "せん湯に いきます。", reading: "とう", level: 2 },
        { sentence: "お湯を わかします。 そのときの ことを、あとで 家の 人に 話しました。", reading: "ゆ", level: 3 }
    ],
    "登": [
        { sentence: "山に 登ります。", reading: "のぼ", level: 1 },
        { sentence: "登こうします。", reading: "とう", level: 2 },
        { sentence: "山に 登ります。 その日の 出来事を、日記に くわしく 書きました。", reading: "のぼ", level: 3 }
    ],
    "等": [
        { sentence: "等しい おおきさです。", reading: "ひと", level: 1 },
        { sentence: "一等しょうを とりました。", reading: "とう", level: 2 },
        { sentence: "等しい おおきさです。 そのときに 思った ことを、友だちに 話しました。", reading: "ひと", level: 3 }
    ],
    "動": [
        { sentence: "からだを 動かします。", reading: "うご", level: 1 },
        { sentence: "うん動かいです。", reading: "どう", level: 2 },
        { sentence: "からだを 動かします。 家に 帰ってから、もう 一度 思い出しました。", reading: "うご", level: 3 }
    ],
    "童": [
        { sentence: "童わを よみます。", reading: "どう", level: 1 },
        { sentence: "じ童かんに いきます。", reading: "どう", level: 2 },
        { sentence: "童わを よみます。 次の 日、先生にも その ことを 話しました。", reading: "どう", level: 3 }
    ],
    "農": [
        { sentence: "農かを たずねます。", reading: "のう", level: 1 },
        { sentence: "農さぎょうを します。", reading: "のう", level: 2 },
        { sentence: "農かを たずねます。 そのときの ことを、あとで 家の 人に 話しました。", reading: "のう", level: 3 }
    ],
    "波": [
        { sentence: "波が うちよせます。", reading: "なみ", level: 1 },
        { sentence: "でん波を うけとります。", reading: "は", level: 2 },
        { sentence: "波が うちよせます。 その日の 出来事を、日記に くわしく 書きました。", reading: "なみ", level: 3 }
    ],
    "配": [
        { sentence: "プリントを 配ります。", reading: "くば", level: 1 },
        { sentence: "しん配します。", reading: "はい", level: 2 },
        { sentence: "プリントを 配ります。 そのときに 思った ことを、友だちに 話しました。", reading: "くば", level: 3 }
    ],
    "倍": [
        { sentence: "二倍に なります。", reading: "ばい", level: 1 },
        { sentence: "倍りつを けいさんします。", reading: "ばい", level: 2 },
        { sentence: "二倍に なります。 家に 帰ってから、もう 一度 思い出しました。", reading: "ばい", level: 3 }
    ],
    "箱": [
        { sentence: "箱に いれます。", reading: "はこ", level: 1 },
        { sentence: "ほん箱を せいりします。", reading: "はこ", level: 2 },
        { sentence: "箱に いれます。 次の 日、先生にも その ことを 話しました。", reading: "はこ", level: 3 }
    ],
    "畑": [
        { sentence: "畑で やさいを そだてます。", reading: "はたけ", level: 1 },
        { sentence: "はな畑を みます。", reading: "はたけ", level: 2 },
        { sentence: "畑で やさいを そだてます。 そのときの ことを、あとで 家の 人に 話しました。", reading: "はたけ", level: 3 }
    ],
    "発": [
        { sentence: "発けんしました。", reading: "はつ", level: 1 },
        { sentence: "学校を 八時に 出発します。", reading: "ぱつ", level: 2 },
        { sentence: "発けんしました。 その日の 出来事を、日記に くわしく 書きました。", reading: "はつ", level: 3 }
    ],
    "反": [
        { sentence: "反たいします。", reading: "はん", level: 1 },
        { sentence: "いたが 反ります。", reading: "そ", level: 2 },
        { sentence: "反たいします。 そのときに 思った ことを、友だちに 話しました。", reading: "はん", level: 3 }
    ],
    "坂": [
        { sentence: "坂を のぼります。", reading: "さか", level: 1 },
        { sentence: "きゅうな 坂です。", reading: "さか", level: 2 },
        { sentence: "坂を のぼります。 家に 帰ってから、もう 一度 思い出しました。", reading: "さか", level: 3 }
    ],
    "板": [
        { sentence: "板を きります。", reading: "いた", level: 1 },
        { sentence: "こく板に かきます。", reading: "ばん", level: 2 },
        { sentence: "板を きります。 次の 日、先生にも その ことを 話しました。", reading: "いた", level: 3 }
    ],
    "皮": [
        { sentence: "りんごの 皮を むきます。", reading: "かわ", level: 1 },
        { sentence: "木の 皮を よく 見ます。", reading: "かわ", level: 2 },
        { sentence: "りんごの 皮を むきます。 そのときの ことを、あとで 家の 人に 話しました。", reading: "かわ", level: 3 }
    ],
    "悲": [
        { sentence: "悲しい きもちです。", reading: "かな", level: 1 },
        { sentence: "友だちの 悲しい 話を 聞きます。", reading: "かな", level: 2 },
        { sentence: "悲しい きもちです。 その日の 出来事を、日記に くわしく 書きました。", reading: "かな", level: 3 }
    ],
    "美": [
        { sentence: "美しい はなです。", reading: "うつく", level: 1 },
        { sentence: "美じゅつかんに いきます。", reading: "び", level: 2 },
        { sentence: "美しい はなです。 そのときに 思った ことを、友だちに 話しました。", reading: "うつく", level: 3 }
    ],
    "鼻": [
        { sentence: "鼻を かみます。", reading: "はな", level: 1 },
        { sentence: "花の においを 鼻で かぎます。", reading: "はな", level: 2 },
        { sentence: "鼻を かみます。 家に 帰ってから、もう 一度 思い出しました。", reading: "はな", level: 3 }
    ],
    "筆": [
        { sentence: "筆で かきます。", reading: "ふで", level: 1 },
        { sentence: "えん筆を つかいます。", reading: "ひつ", level: 2 },
        { sentence: "筆で かきます。 次の 日、先生にも その ことを 話しました。", reading: "ふで", level: 3 }
    ],
    "氷": [
        { sentence: "氷を たべます。", reading: "こおり", level: 1 },
        { sentence: "水を こおらせて 氷を 作ります。", reading: "こおり", level: 2 },
        { sentence: "氷を たべます。 そのときの ことを、あとで 家の 人に 話しました。", reading: "こおり", level: 3 }
    ],
    "表": [
        { sentence: "きもちを 表します。", reading: "あらわ", level: 1 },
        { sentence: "表を みます。", reading: "ひょう", level: 2 },
        { sentence: "きもちを 表します。 その日の 出来事を、日記に くわしく 書きました。", reading: "あらわ", level: 3 }
    ],
    "秒": [
        { sentence: "十秒 かぞえます。", reading: "びょう", level: 1 },
        { sentence: "秒しんを みます。", reading: "びょう", level: 2 },
        { sentence: "十秒 かぞえます。 そのときに 思った ことを、友だちに 話しました。", reading: "びょう", level: 3 }
    ],
    "病": [
        { sentence: "病きに なりました。", reading: "びょう", level: 1 },
        { sentence: "病気の ときは むりを しません。", reading: "びょう", level: 2 },
        { sentence: "病きに なりました。 家に 帰ってから、もう 一度 思い出しました。", reading: "びょう", level: 3 }
    ],
    "品": [
        { sentence: "品を えらびます。", reading: "しな", level: 1 },
        { sentence: "さく品を つくります。", reading: "ひん", level: 2 },
        { sentence: "品を えらびます。 次の 日、先生にも その ことを 話しました。", reading: "しな", level: 3 }
    ],
    "負": [
        { sentence: "しあいに 負けます。", reading: "ま", level: 1 },
        { sentence: "赤組に 負けないように 走ります。", reading: "ま", level: 2 },
        { sentence: "しあいに 負けます。 そのときの ことを、あとで 家の 人に 話しました。", reading: "ま", level: 3 }
    ],
    "部": [
        { sentence: "部かつを します。", reading: "ぶ", level: 1 },
        { sentence: "文を 三つの 部分に 分けます。", reading: "ぶ", level: 2 },
        { sentence: "部かつを します。 その日の 出来事を、日記に くわしく 書きました。", reading: "ぶ", level: 3 }
    ],
    "服": [
        { sentence: "服を きます。", reading: "ふく", level: 1 },
        { sentence: "せい服を きます。", reading: "ふく", level: 2 },
        { sentence: "服を きます。 そのときに 思った ことを、友だちに 話しました。", reading: "ふく", level: 3 }
    ],
    "福": [
        { sentence: "こう福な きもちです。", reading: "ふく", level: 1 },
        { sentence: "みんなの 幸福を ねがいます。", reading: "ふく", level: 2 },
        { sentence: "こう福な きもちです。 家に 帰ってから、もう 一度 思い出しました。", reading: "ふく", level: 3 }
    ],
    "物": [
        { sentence: "たべ物を かいます。", reading: "もの", level: 1 },
        { sentence: "どう物えんに いきます。", reading: "ぶつ", level: 2 },
        { sentence: "たべ物を かいます。 次の 日、先生にも その ことを 話しました。", reading: "もの", level: 3 }
    ],
    "平": [
        { sentence: "平らな みちです。", reading: "たいら", level: 1 },
        { sentence: "平らな 台に はこを 置きます。", reading: "たいら", level: 2 },
        { sentence: "平らな みちです。 そのときの ことを、あとで 家の 人に 話しました。", reading: "たいら", level: 3 }
    ],
    "返": [
        { sentence: "本を 返します。", reading: "かえ", level: 1 },
        { sentence: "友だちに 本を 返します。", reading: "かえ", level: 2 },
        { sentence: "本を 返します。 その日の 出来事を、日記に くわしく 書きました。", reading: "かえ", level: 3 }
    ],
    "勉": [
        { sentence: "勉きょうします。", reading: "べん", level: 1 },
        { sentence: "毎日 三十分、勉強します。", reading: "べん", level: 2 },
        { sentence: "勉きょうします。 そのときに 思った ことを、友だちに 話しました。", reading: "べん", level: 3 }
    ],
    "放": [
        { sentence: "とりを 放します。", reading: "はな", level: 1 },
        { sentence: "放かごに あそびます。", reading: "ほう", level: 2 },
        { sentence: "とりを 放します。 家に 帰ってから、もう 一度 思い出しました。", reading: "はな", level: 3 }
    ],
    "味": [
        { sentence: "味が いいです。", reading: "あじ", level: 1 },
        { sentence: "きょう味が あります。", reading: "み", level: 2 },
        { sentence: "味が いいです。 次の 日、先生にも その ことを 話しました。", reading: "あじ", level: 3 }
    ],
    "命": [
        { sentence: "命を たいせつに します。", reading: "いのち", level: 1 },
        { sentence: "命れいします。", reading: "めい", level: 2 },
        { sentence: "命を たいせつに します。 そのときの ことを、あとで 家の 人に 話しました。", reading: "いのち", level: 3 }
    ],
    "面": [
        { sentence: "つくえの 面を ふきます。", reading: "めん", level: 1 },
        { sentence: "直方体の 面を 数えます。", reading: "めん", level: 2 },
        { sentence: "つくえの 面を ふきます。 その日の 出来事を、日記に くわしく 書きました。", reading: "めん", level: 3 }
    ],
    "問": [
        { sentence: "しつ問します。", reading: "もん", level: 1 },
        { sentence: "先生に 質問します。", reading: "もん", level: 2 },
        { sentence: "しつ問します。 そのときに 思った ことを、友だちに 話しました。", reading: "もん", level: 3 }
    ],
    "役": [
        { sentence: "役わりを します。", reading: "やく", level: 1 },
        { sentence: "主役に なりました。", reading: "やく", level: 2 },
        { sentence: "役わりを します。 家に 帰ってから、もう 一度 思い出しました。", reading: "やく", level: 3 }
    ],
    "薬": [
        { sentence: "薬を のみます。", reading: "くすり", level: 1 },
        { sentence: "薬きょくに いきます。", reading: "やく", level: 2 },
        { sentence: "薬を のみます。 次の 日、先生にも その ことを 話しました。", reading: "くすり", level: 3 }
    ],
    "由": [
        { sentence: "自由に あそびます。", reading: "ゆう", level: 1 },
        { sentence: "理由を はなします。", reading: "ゆ", level: 2 },
        { sentence: "自由に あそびます。 そのときの ことを、あとで 家の 人に 話しました。", reading: "ゆう", level: 3 }
    ],
    "油": [
        { sentence: "油で あげます。", reading: "あぶら", level: 1 },
        { sentence: "せき油を つかいます。", reading: "ゆ", level: 2 },
        { sentence: "油で あげます。 その日の 出来事を、日記に くわしく 書きました。", reading: "あぶら", level: 3 }
    ],
    "有": [
        { sentence: "有めいな ひとです。", reading: "ゆう", level: 1 },
        { sentence: "学校には 古い 木が 有ります。", reading: "あ", level: 2 },
        { sentence: "有めいな ひとです。 そのときに 思った ことを、友だちに 話しました。", reading: "ゆう", level: 3 }
    ],
    "遊": [
        { sentence: "こうえんで 遊びます。", reading: "あそ", level: 1 },
        { sentence: "遊えんちに いきます。", reading: "ゆう", level: 2 },
        { sentence: "こうえんで 遊びます。 家に 帰ってから、もう 一度 思い出しました。", reading: "あそ", level: 3 }
    ],
    "予": [
        { sentence: "予ていを たてます。", reading: "よ", level: 1 },
        { sentence: "明日の 予定を たしかめます。", reading: "よ", level: 2 },
        { sentence: "予ていを たてます。 次の 日、先生にも その ことを 話しました。", reading: "よ", level: 3 }
    ],
    "羊": [
        { sentence: "羊が います。", reading: "ひつじ", level: 1 },
        { sentence: "羊もうの セーターです。", reading: "よう", level: 2 },
        { sentence: "羊が います。 そのときの ことを、あとで 家の 人に 話しました。", reading: "ひつじ", level: 3 }
    ],
    "洋": [
        { sentence: "洋ふくを きます。", reading: "よう", level: 1 },
        { sentence: "西洋の くらしを しらべます。", reading: "よう", level: 2 },
        { sentence: "洋ふくを きます。 その日の 出来事を、日記に くわしく 書きました。", reading: "よう", level: 3 }
    ],
    "様": [
        { sentence: "たなか様に てがみを かきます。", reading: "さま", level: 1 },
        { sentence: "様子を みます。", reading: "よう", level: 2 },
        { sentence: "たなか様に てがみを かきます。 そのときに 思った ことを、友だちに 話しました。", reading: "さま", level: 3 }
    ],
    "葉": [
        { sentence: "葉が おちます。", reading: "は", level: 1 },
        { sentence: "こう葉を みます。", reading: "よう", level: 2 },
        { sentence: "葉が おちます。 家に 帰ってから、もう 一度 思い出しました。", reading: "は", level: 3 }
    ],
    "陽": [
        { sentence: "たい陽が でて います。", reading: "よう", level: 1 },
        { sentence: "太陽の 動きを 観察します。", reading: "よう", level: 2 },
        { sentence: "たい陽が でて います。 次の 日、先生にも その ことを 話しました。", reading: "よう", level: 3 }
    ],
    "落": [
        { sentence: "はっぱが 落ちます。", reading: "お", level: 1 },
        { sentence: "木の 実が 地面に 落ちます。", reading: "お", level: 2 },
        { sentence: "はっぱが 落ちます。 そのときの ことを、あとで 家の 人に 話しました。", reading: "お", level: 3 }
    ],
    "流": [
        { sentence: "川が 流れます。", reading: "なが", level: 1 },
        { sentence: "水の 流れを 観察します。", reading: "なが", level: 2 },
        { sentence: "川が 流れます。 その日の 出来事を、日記に くわしく 書きました。", reading: "なが", level: 3 }
    ],
    "旅": [
        { sentence: "旅に でます。", reading: "たび", level: 1 },
        { sentence: "家族で 一日の 旅に 出ます。", reading: "たび", level: 2 },
        { sentence: "旅に でます。 そのときに 思った ことを、友だちに 話しました。", reading: "たび", level: 3 }
    ],
    "両": [
        { sentence: "両ほうの てです。", reading: "りょう", level: 1 },
        { sentence: "両手で ボールを 受けます。", reading: "りょう", level: 2 },
        { sentence: "両ほうの てです。 家に 帰ってから、もう 一度 思い出しました。", reading: "りょう", level: 3 }
    ],
    "緑": [
        { sentence: "緑いろの はっぱです。", reading: "みどり", level: 1 },
        { sentence: "緑ちゃを のみます。", reading: "りょく", level: 2 },
        { sentence: "緑いろの はっぱです。 次の 日、先生にも その ことを 話しました。", reading: "みどり", level: 3 }
    ],
    "礼": [
        { sentence: "お礼を いいます。", reading: "れい", level: 1 },
        { sentence: "助けて くれた 人に お礼を 言います。", reading: "れい", level: 2 },
        { sentence: "お礼を いいます。 そのときの ことを、あとで 家の 人に 話しました。", reading: "れい", level: 3 }
    ],
    "列": [
        { sentence: "列に ならびます。", reading: "れつ", level: 1 },
        { sentence: "行列です。", reading: "れつ", level: 2 },
        { sentence: "列に ならびます。 その日の 出来事を、日記に くわしく 書きました。", reading: "れつ", level: 3 }
    ],
    "練": [
        { sentence: "練しゅうします。", reading: "れん", level: 1 },
        { sentence: "生地を 練ります。", reading: "ね", level: 2 },
        { sentence: "練しゅうします。 そのときに 思った ことを、友だちに 話しました。", reading: "れん", level: 3 }
    ],
    "路": [
        { sentence: "道路を あるきます。", reading: "ろ", level: 1 },
        { sentence: "学校までの 道路を 地図に 書きます。", reading: "ろ", level: 2 },
        { sentence: "道路を あるきます。 家に 帰ってから、もう 一度 思い出しました。", reading: "ろ", level: 3 }
    ],
    "和": [
        { sentence: "和ふくを きます。", reading: "わ", level: 1 },
        { sentence: "平和な せかいです。", reading: "わ", level: 2 },
        { sentence: "和ふくを きます。 次の 日、先生にも その ことを 話しました。", reading: "わ", level: 3 }
    ]
};
