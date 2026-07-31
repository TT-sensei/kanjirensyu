// 小学校2年生で習う漢字（160字）の書き取り練習用例文。
// reading は、文中の対象漢字の読み（送り仮名を除く）だけを記録する。
const kanjiExampleData_2 = {
    "引": [
        { sentence: "つなを 引きます。", reading: "ひ", level: 1 },
        { sentence: "ノートに せんを 引きます。", reading: "ひ", level: 2 },
        { sentence: "おもい とびらを ゆっくり 引きました。", reading: "ひ", level: 3 }
    ],
    "羽": [
        { sentence: "白い 羽を ひろいました。", reading: "はね", level: 1 },
        { sentence: "とりが 羽を ひろげます。", reading: "はね", level: 2 },
        { sentence: "こうえんで ちゃいろの 羽を 一まい 見つけました。", reading: "はね", level: 3 }
    ],
    "雲": [
        { sentence: "白い 雲が うかびます。", reading: "くも", level: 1 },
        { sentence: "雨雲が 近づいて きました。", reading: "ぐも", level: 2 },
        { sentence: "大きな 雲の あいだから 日が さしました。", reading: "くも", level: 3 }
    ],
    "園": [
        { sentence: "こう園で あそびます。", reading: "えん", level: 1 },
        { sentence: "どうぶつ園で ぞうを 見ます。", reading: "えん", level: 2 },
        { sentence: "日よう日に 家ぞくと しょくぶつ園へ 行きました。", reading: "えん", level: 3 }
    ],
    "遠": [
        { sentence: "遠くに 山が 見えます。", reading: "とお", level: 1 },
        { sentence: "あしたは 遠足です。", reading: "えん", level: 2 },
        { sentence: "遠くの 友だちに 手がみを 書きました。", reading: "とお", level: 3 }
    ],
    "何": [
        { sentence: "これは 何ですか？", reading: "なん", level: 1 },
        { sentence: "何いろを つかいますか？", reading: "なに", level: 2 },
        { sentence: "はこの 中に 何が 入って いるか 考えました。", reading: "なに", level: 3 }
    ],
    "科": [
        { sentence: "理科が すきです。", reading: "か", level: 1 },
        { sentence: "生活科で 町を たんけんします。", reading: "か", level: 2 },
        { sentence: "理科の じかんに しょくぶつを よく 見ました。", reading: "か", level: 3 }
    ],
    "夏": [
        { sentence: "夏に うみへ 行きます。", reading: "なつ", level: 1 },
        { sentence: "夏休みに 本を よみます。", reading: "なつ", level: 2 },
        { sentence: "あつい 夏の よるに 家ぞくで 花火を 見ました。", reading: "なつ", level: 3 }
    ],
    "家": [
        { sentence: "家に 帰ります。", reading: "いえ", level: 1 },
        { sentence: "家ぞくで ごはんを 食べます。", reading: "か", level: 2 },
        { sentence: "雨が ふったので 友だちと 家の 中で あそびました。", reading: "いえ", level: 3 }
    ],
    "歌": [
        { sentence: "みんなで 歌います。", reading: "うた", level: 1 },
        { sentence: "音楽で 校歌を うたいます。", reading: "か", level: 2 },
        { sentence: "学げい会で 元気な 歌を はっぴょうしました。", reading: "うた", level: 3 }
    ],
    "画": [
        { sentence: "えい画を 見ます。", reading: "が", level: 1 },
        { sentence: "図工で 画用紙を つかいます。", reading: "が", level: 2 },
        { sentence: "大きな 画用紙に みんなで 町の 絵を かきました。", reading: "が", level: 3 }
    ],
    "回": [
        { sentence: "こまが 回ります。", reading: "まわ", level: 1 },
        { sentence: "なわとびを 十回 とびました。", reading: "かい", level: 2 },
        { sentence: "こうていを 二回 走ってから 水を のみました。", reading: "かい", level: 3 }
    ],
    "会": [
        { sentence: "友だちに 会います。", reading: "あ", level: 1 },
        { sentence: "じどう会で はなし合います。", reading: "かい", level: 2 },
        { sentence: "お楽しみ会で みんなと ゲームを しました。", reading: "かい", level: 3 }
    ],
    "海": [
        { sentence: "海で およぎます。", reading: "うみ", level: 1 },
        { sentence: "海べで かいがらを ひろいます。", reading: "うみ", level: 2 },
        { sentence: "夏休みに 青い 海で 小さな 魚を 見つけました。", reading: "うみ", level: 3 }
    ],
    "絵": [
        { sentence: "花の 絵を かきます。", reading: "え", level: 1 },
        { sentence: "絵本を よみます。", reading: "え", level: 2 },
        { sentence: "図工の じかんに 友だちの 顔を 絵に かきました。", reading: "え", level: 3 }
    ],
    "外": [
        { sentence: "外で あそびます。", reading: "そと", level: 1 },
        { sentence: "ぼうしを 外します。", reading: "はず", level: 2 },
        { sentence: "雨が やんだので 外に 出て むしを さがしました。", reading: "そと", level: 3 }
    ],
    "角": [
        { sentence: "しかの 角を 見ました。", reading: "つの", level: 1 },
        { sentence: "三角の かたちを かきます。", reading: "かく", level: 2 },
        { sentence: "おり紙の 角どうしを ぴったり 合わせました。", reading: "かど", level: 3 }
    ],
    "楽": [
        { sentence: "えんそくが 楽しみです。", reading: "たの", level: 1 },
        { sentence: "音楽で けんばんを ひきます。", reading: "がく", level: 2 },
        { sentence: "休みじかんに 友だちと 楽しく あそびました。", reading: "たの", level: 3 }
    ],
    "活": [
        { sentence: "元気に 活どうします。", reading: "かつ", level: 1 },
        { sentence: "生活科で 花を そだてます。", reading: "かつ", level: 2 },
        { sentence: "はんの 活どうで 町の よい ところを さがしました。", reading: "かつ", level: 3 }
    ],
    "間": [
        { sentence: "いすの 間を とおります。", reading: "あいだ", level: 1 },
        { sentence: "休み時間に 本を よみます。", reading: "かん", level: 2 },
        { sentence: "電車を まつ 間に えきの ちずを 見ました。", reading: "あいだ", level: 3 }
    ],
    "丸": [
        { sentence: "丸い 石を ひろいます。", reading: "まる", level: 1 },
        { sentence: "こたえに 丸を つけます。", reading: "まる", level: 2 },
        { sentence: "ねん土を 手のひらで ころがして 丸く しました。", reading: "まる", level: 3 }
    ],
    "岩": [
        { sentence: "大きな 岩が あります。", reading: "いわ", level: 1 },
        { sentence: "海べの 岩に かにが います。", reading: "いわ", level: 2 },
        { sentence: "川の そばに ある 岩に こしを かけて 休みました。", reading: "いわ", level: 3 }
    ],
    "顔": [
        { sentence: "顔を あらいます。", reading: "かお", level: 1 },
        { sentence: "わらった 顔を かきます。", reading: "かお", level: 2 },
        { sentence: "あさ おきたら 顔を あらって はを みがきます。", reading: "かお", level: 3 }
    ],
    "汽": [
        { sentence: "汽車が 走ります。", reading: "き", level: 1 },
        { sentence: "汽車の きてきが なりました。", reading: "き", level: 2 },
        { sentence: "山の あいだを 汽車が ゆっくり すすみました。", reading: "き", level: 3 }
    ],
    "記": [
        { sentence: "日記を 書きます。", reading: "き", level: 1 },
        { sentence: "見つけた ことを 記ろくします。", reading: "き", level: 2 },
        { sentence: "きょう あった 楽しい できごとを 日記に 書きました。", reading: "き", level: 3 }
    ],
    "帰": [
        { sentence: "家に 帰ります。", reading: "かえ", level: 1 },
        { sentence: "帰りの 会を はじめます。", reading: "かえ", level: 2 },
        { sentence: "じゅぎょうが おわったので 友だちと いっしょに 帰りました。", reading: "かえ", level: 3 }
    ],
    "弓": [
        { sentence: "弓を 引きます。", reading: "ゆみ", level: 1 },
        { sentence: "むかしの 弓を 見ました。", reading: "ゆみ", level: 2 },
        { sentence: "はくぶつかんで 木から できた 弓を 見つけました。", reading: "ゆみ", level: 3 }
    ],
    "牛": [
        { sentence: "牛が 草を 食べます。", reading: "うし", level: 1 },
        { sentence: "きゅう食で 牛にゅうを のみます。", reading: "ぎゅう", level: 2 },
        { sentence: "ぼくじょうで 大きな 牛に えさを あげました。", reading: "うし", level: 3 }
    ],
    "魚": [
        { sentence: "魚が およぎます。", reading: "さかな", level: 1 },
        { sentence: "水そうで 金魚を かいます。", reading: "ぎょ", level: 2 },
        { sentence: "川の 水を のぞくと 小さな 魚が 見えました。", reading: "さかな", level: 3 }
    ],
    "京": [
        { sentence: "東京へ 行きます。", reading: "きょう", level: 1 },
        { sentence: "京とには おてらが あります。", reading: "きょう", level: 2 },
        { sentence: "しゃしんを 見ながら 東京の 名しょを しらべました。", reading: "きょう", level: 3 }
    ],
    "強": [
        { sentence: "強い かぜが ふきます。", reading: "つよ", level: 1 },
        { sentence: "かん字を べん強します。", reading: "きょう", level: 2 },
        { sentence: "雨が 強く なったので いそいで 家に 入りました。", reading: "つよ", level: 3 }
    ],
    "教": [
        { sentence: "先生が 教えます。", reading: "おし", level: 1 },
        { sentence: "教しつで 本を よみます。", reading: "きょう", level: 2 },
        { sentence: "わからない もんだいを 友だちに 教えて もらいました。", reading: "おし", level: 3 }
    ],
    "近": [
        { sentence: "学校は 近いです。", reading: "ちか", level: 1 },
        { sentence: "近くの こうえんへ 行きます。", reading: "ちか", level: 2 },
        { sentence: "雨が ふりそうなので 近い 道を とおって 帰りました。", reading: "ちか", level: 3 }
    ],
    "兄": [
        { sentence: "兄と あそびます。", reading: "あに", level: 1 },
        { sentence: "兄弟で そうじを します。", reading: "きょう", level: 2 },
        { sentence: "休みの日に 兄と いっしょに こうえんへ 行きました。", reading: "あに", level: 3 }
    ],
    "形": [
        { sentence: "丸い 形です。", reading: "かたち", level: 1 },
        { sentence: "三角の 形を つくります。", reading: "かたち", level: 2 },
        { sentence: "色紙を 星の 形に 切って かざりを つくりました。", reading: "かたち", level: 3 }
    ],
    "計": [
        { sentence: "時計を 見ます。", reading: "けい", level: 1 },
        { sentence: "ものさしで 長さを 計ります。", reading: "はか", level: 2 },
        { sentence: "りょうりに つかう 水を けいりょうカップで 計りました。", reading: "はか", level: 3 }
    ],
    "元": [
        { sentence: "元気に あいさつします。", reading: "げん", level: 1 },
        { sentence: "本を 元の ばしょへ もどします。", reading: "もと", level: 2 },
        { sentence: "かぜが なおって 元気に 学校へ 行きました。", reading: "げん", level: 3 }
    ],
    "言": [
        { sentence: "ありがとうと 言います。", reading: "い", level: 1 },
        { sentence: "先生の 言ばを よく ききます。", reading: "こと", level: 2 },
        { sentence: "こまって いる 友だちに いっしょに やろうと 言いました。", reading: "い", level: 3 }
    ],
    "原": [
        { sentence: "原っぱを 走ります。", reading: "はら", level: 1 },
        { sentence: "草原に 花が さきます。", reading: "げん", level: 2 },
        { sentence: "ひろい 原っぱで 友だちと おにごっこを しました。", reading: "はら", level: 3 }
    ],
    "戸": [
        { sentence: "戸を あけます。", reading: "と", level: 1 },
        { sentence: "雨戸を しめます。", reading: "ど", level: 2 },
        { sentence: "さむい かぜが 入るので げんかんの 戸を しめました。", reading: "と", level: 3 }
    ],
    "古": [
        { sentence: "古い 本を よみます。", reading: "ふる", level: 1 },
        { sentence: "古本やへ 行きます。", reading: "ふる", level: 2 },
        { sentence: "ものおきで おじいさんの 古い 時計を 見つけました。", reading: "ふる", level: 3 }
    ],
    "午": [
        { sentence: "午前に べんきょうします。", reading: "ご", level: 1 },
        { sentence: "正午に おひるを 食べます。", reading: "ご", level: 2 },
        { sentence: "午前 十じに こうえんの 入り口で あいましょう。", reading: "ご", level: 3 }
    ],
    "後": [
        { sentence: "後ろを 見ます。", reading: "うし", level: 1 },
        { sentence: "そうじの 後で 手を あらいます。", reading: "あと", level: 2 },
        { sentence: "学校から 帰った 後に しゅくだいを しました。", reading: "あと", level: 3 }
    ],
    "語": [
        { sentence: "国語を べんきょうします。", reading: "ご", level: 1 },
        { sentence: "もの語を よみます。", reading: "がた", level: 2 },
        { sentence: "国語の じかんに すきな 本を しょうかいしました。", reading: "ご", level: 3 }
    ],
    "工": [
        { sentence: "図工で はこを つくります。", reading: "こう", level: 1 },
        { sentence: "大工さんが 家を たてます。", reading: "く", level: 2 },
        { sentence: "図工の じかんに 木の えだで おもちゃを つくりました。", reading: "こう", level: 3 }
    ],
    "公": [
        { sentence: "公園で あそびます。", reading: "こう", level: 1 },
        { sentence: "公みんかんで おまつりが あります。", reading: "こう", level: 2 },
        { sentence: "近くの 公園で 友だちと ボールを けりました。", reading: "こう", level: 3 }
    ],
    "広": [
        { sentence: "広い にわです。", reading: "ひろ", level: 1 },
        { sentence: "ちずを 広げます。", reading: "ひろ", level: 2 },
        { sentence: "広い こうていで みんなと リレーを しました。", reading: "ひろ", level: 3 }
    ],
    "交": [
        { sentence: "あいさつを 交わします。", reading: "か", level: 1 },
        { sentence: "交さてんで とまります。", reading: "こう", level: 2 },
        { sentence: "町の 交さてんでは 右と 左を よく 見て わたります。", reading: "こう", level: 3 }
    ],
    "光": [
        { sentence: "日が 光ります。", reading: "ひか", level: 1 },
        { sentence: "まどから 光が 入ります。", reading: "ひかり", level: 2 },
        { sentence: "朝の 光が まどから さして へやが 明るく なりました。", reading: "ひかり", level: 3 }
    ],
    "考": [
        { sentence: "こたえを 考えます。", reading: "かんが", level: 1 },
        { sentence: "みんなで 考えを はなします。", reading: "かんが", level: 2 },
        { sentence: "どうすれば うまく できるか はんの 友だちと 考えました。", reading: "かんが", level: 3 }
    ],
    "行": [
        { sentence: "学校へ 行きます。", reading: "い", level: 1 },
        { sentence: "うんどう会を 行います。", reading: "おこな", level: 2 },
        { sentence: "日よう日に 家ぞくと どうぶつ園へ 行きました。", reading: "い", level: 3 }
    ],
    "高": [
        { sentence: "高い 木です。", reading: "たか", level: 1 },
        { sentence: "ボールを 高く なげます。", reading: "たか", level: 2 },
        { sentence: "高い 山の 上には 白い 雪が のこって いました。", reading: "たか", level: 3 }
    ],
    "黄": [
        { sentence: "黄いろの 花です。", reading: "き", level: 1 },
        { sentence: "しんごうが 黄色に なります。", reading: "き", level: 2 },
        { sentence: "秋に なると 木の はが 黄色く かわります。", reading: "き", level: 3 }
    ],
    "合": [
        { sentence: "こたえが 合います。", reading: "あ", level: 1 },
        { sentence: "みんなで 合しょうします。", reading: "がっ", level: 2 },
        { sentence: "音楽会に むけて まい日 合しょうの れんしゅうを しました。", reading: "がっ", level: 3 }
    ],
    "谷": [
        { sentence: "谷に 川が ながれます。", reading: "たに", level: 1 },
        { sentence: "山と 山の 谷あいを 見ます。", reading: "たに", level: 2 },
        { sentence: "高い 山から 下の 谷を 見ると 川が 光って いました。", reading: "たに", level: 3 }
    ],
    "国": [
        { sentence: "わたしの 国は 日本です。", reading: "くに", level: 1 },
        { sentence: "国語の 本を よみます。", reading: "こく", level: 2 },
        { sentence: "図かんで いろいろな 国の どうぶつを しらべました。", reading: "くに", level: 3 }
    ],
    "黒": [
        { sentence: "黒い ねこです。", reading: "くろ", level: 1 },
        { sentence: "黒ばんに 字を 書きます。", reading: "こく", level: 2 },
        { sentence: "ずこうで 白い 紙に 黒い クレヨンで せんを 引きました。", reading: "くろ", level: 3 }
    ],
    "今": [
        { sentence: "今から はじめます。", reading: "いま", level: 1 },
        { sentence: "今日は 水よう日です。", reading: "きょう", level: 2 },
        { sentence: "今まで できなかった さか上がりが できました。", reading: "いま", level: 3 }
    ],
    "才": [
        { sentence: "八才に なりました。", reading: "さい", level: 1 },
        { sentence: "弟は 五才です。", reading: "さい", level: 2 },
        { sentence: "たん生日が きて わたしは 八才に なりました。", reading: "さい", level: 3 }
    ],
    "細": [
        { sentence: "細い ひもです。", reading: "ほそ", level: 1 },
        { sentence: "紙を 細かく 切ります。", reading: "こま", level: 2 },
        { sentence: "細い ふでを つかって 花の もようを かきました。", reading: "ほそ", level: 3 }
    ],
    "作": [
        { sentence: "紙で 花を 作ります。", reading: "つく", level: 1 },
        { sentence: "図工の 作ひんを かざります。", reading: "さく", level: 2 },
        { sentence: "友だちと いっしょに 大きな 町の もけいを 作りました。", reading: "つく", level: 3 }
    ],
    "算": [
        { sentence: "算数を べんきょうします。", reading: "さん", level: 1 },
        { sentence: "たし算の もんだいを ときます。", reading: "ざん", level: 2 },
        { sentence: "算数の じかんに 九九を 声に 出して となえました。", reading: "さん", level: 3 }
    ],
    "止": [
        { sentence: "あかで 止まります。", reading: "と", level: 1 },
        { sentence: "水を 止めます。", reading: "と", level: 2 },
        { sentence: "こうさてんでは いちど 止まって 車が こないか 見ます。", reading: "と", level: 3 }
    ],
    "市": [
        { sentence: "市に すんで います。", reading: "し", level: 1 },
        { sentence: "市りつ 図しょかんへ 行きます。", reading: "し", level: 2 },
        { sentence: "生活科で わたしたちの 市に ある しせつを しらべました。", reading: "し", level: 3 }
    ],
    "矢": [
        { sentence: "矢が とびます。", reading: "や", level: 1 },
        { sentence: "右むきの 矢じるしです。", reading: "や", level: 2 },
        { sentence: "えきの ゆかに ある 矢じるしの ほうへ すすみました。", reading: "や", level: 3 }
    ],
    "姉": [
        { sentence: "姉と はなします。", reading: "あね", level: 1 },
        { sentence: "姉妹で ピアノを ひきます。", reading: "し", level: 2 },
        { sentence: "姉が 図書かんで おもしろい 本を かりて くれました。", reading: "あね", level: 3 }
    ],
    "思": [
        { sentence: "そうだと 思います。", reading: "おも", level: 1 },
        { sentence: "友だちを 思いやります。", reading: "おも", level: 2 },
        { sentence: "この お話の つづきが どうなるか 思いうかべました。", reading: "おも", level: 3 }
    ],
    "紙": [
        { sentence: "紙を おります。", reading: "かみ", level: 1 },
        { sentence: "色紙で 花を つくります。", reading: "がみ", level: 2 },
        { sentence: "大きな 紙に えのぐで 海の 絵を かきました。", reading: "かみ", level: 3 }
    ],
    "寺": [
        { sentence: "お寺へ 行きます。", reading: "てら", level: 1 },
        { sentence: "古い 寺を 見学します。", reading: "てら", level: 2 },
        { sentence: "町たんけんで 大きな かねの ある お寺を 見ました。", reading: "てら", level: 3 }
    ],
    "自": [
        { sentence: "自分で できます。", reading: "じ", level: 1 },
        { sentence: "自てん車に のります。", reading: "じ", level: 2 },
        { sentence: "むずかしかったけれど 自分で さいごまで やりました。", reading: "じ", level: 3 }
    ],
    "時": [
        { sentence: "今は 三時です。", reading: "じ", level: 1 },
        { sentence: "休み時間に あそびます。", reading: "じ", level: 2 },
        { sentence: "小さい 時に つかった おもちゃを 見つけました。", reading: "とき", level: 3 }
    ],
    "室": [
        { sentence: "教室に 入ります。", reading: "しつ", level: 1 },
        { sentence: "音楽室で 歌います。", reading: "しつ", level: 2 },
        { sentence: "休みじかんに 図書室で どうぶつの 本を よみました。", reading: "しつ", level: 3 }
    ],
    "社": [
        { sentence: "神社へ 行きます。", reading: "じゃ", level: 1 },
        { sentence: "会社で はたらきます。", reading: "しゃ", level: 2 },
        { sentence: "お正月に 家ぞくと 近くの 神社へ おまいりしました。", reading: "じゃ", level: 3 }
    ],
    "弱": [
        { sentence: "弱い かぜです。", reading: "よわ", level: 1 },
        { sentence: "火を 弱く します。", reading: "よわ", level: 2 },
        { sentence: "雨が 弱く なったので かさを とじました。", reading: "よわ", level: 3 }
    ],
    "首": [
        { sentence: "首を まわします。", reading: "くび", level: 1 },
        { sentence: "首に タオルを まきます。", reading: "くび", level: 2 },
        { sentence: "たいそうで 首を ゆっくり 左右に うごかしました。", reading: "くび", level: 3 }
    ],
    "秋": [
        { sentence: "秋に なりました。", reading: "あき", level: 1 },
        { sentence: "秋の 木のはを ひろいます。", reading: "あき", level: 2 },
        { sentence: "秋の こうえんで 赤や 黄色の はを あつめました。", reading: "あき", level: 3 }
    ],
    "週": [
        { sentence: "一週かんが たちました。", reading: "しゅう", level: 1 },
        { sentence: "毎週 本を かります。", reading: "しゅう", level: 2 },
        { sentence: "らい週の 音楽会に むけて 歌を れんしゅうします。", reading: "しゅう", level: 3 }
    ],
    "春": [
        { sentence: "春に 花が さきます。", reading: "はる", level: 1 },
        { sentence: "春休みに でかけます。", reading: "はる", level: 2 },
        { sentence: "あたたかい 春に なると 虫たちが うごきはじめます。", reading: "はる", level: 3 }
    ],
    "書": [
        { sentence: "名まえを 書きます。", reading: "か", level: 1 },
        { sentence: "図書室で 本を かります。", reading: "しょ", level: 2 },
        { sentence: "見学して わかった ことを ノートに 書きました。", reading: "か", level: 3 }
    ],
    "少": [
        { sentence: "水が 少ないです。", reading: "すく", level: 1 },
        { sentence: "もう 少し まちます。", reading: "すこ", level: 2 },
        { sentence: "時間が 少し のこったので 本を よみました。", reading: "すこ", level: 3 }
    ],
    "場": [
        { sentence: "この 場に ならびます。", reading: "ば", level: 1 },
        { sentence: "うんどう場を 走ります。", reading: "じょう", level: 2 },
        { sentence: "えんそくの しゅう合場所を ちずで たしかめました。", reading: "ば", level: 3 }
    ],
    "色": [
        { sentence: "すきな 色は 青です。", reading: "いろ", level: 1 },
        { sentence: "色紙を おります。", reading: "いろ", level: 2 },
        { sentence: "赤と 青の えのぐを まぜて できた 色を 見ました。", reading: "いろ", level: 3 }
    ],
    "食": [
        { sentence: "ごはんを 食べます。", reading: "た", level: 1 },
        { sentence: "きゅう食を のこさず いただきます。", reading: "しょく", level: 2 },
        { sentence: "こうえんで おべんとうを 友だちと 食べました。", reading: "た", level: 3 }
    ],
    "心": [
        { sentence: "やさしい 心です。", reading: "こころ", level: 1 },
        { sentence: "心を こめて 歌います。", reading: "こころ", level: 2 },
        { sentence: "友だちの やさしい 言ばを きいて 心が あたたかく なりました。", reading: "こころ", level: 3 }
    ],
    "新": [
        { sentence: "新しい 本です。", reading: "あたら", level: 1 },
        { sentence: "新聞を よみます。", reading: "しん", level: 2 },
        { sentence: "新しい クラスで となりの せきの 子と 友だちに なりました。", reading: "あたら", level: 3 }
    ],
    "親": [
        { sentence: "親と 出かけます。", reading: "おや", level: 1 },
        { sentence: "親子で 本を よみます。", reading: "おや", level: 2 },
        { sentence: "休みの日に 親子で ちかくの 山を あるきました。", reading: "おや", level: 3 }
    ],
    "図": [
        { sentence: "図を 見ます。", reading: "ず", level: 1 },
        { sentence: "図書かんで しらべます。", reading: "と", level: 2 },
        { sentence: "先生が かいた 図を 見ながら はこの 作りかたを 考えました。", reading: "ず", level: 3 }
    ],
    "数": [
        { sentence: "星の 数を かぞえます。", reading: "かず", level: 1 },
        { sentence: "算数で 九九を ならいます。", reading: "すう", level: 2 },
        { sentence: "こうていに さいて いる 花の 数を みんなで かぞえました。", reading: "かず", level: 3 }
    ],
    "西": [
        { sentence: "西に 日が しずみます。", reading: "にし", level: 1 },
        { sentence: "学校の 西もんに あつまります。", reading: "にし", level: 2 },
        { sentence: "ゆう方に 西の 空が 赤く そまりました。", reading: "にし", level: 3 }
    ],
    "声": [
        { sentence: "大きな 声で よみます。", reading: "こえ", level: 1 },
        { sentence: "歌声が きこえます。", reading: "ごえ", level: 2 },
        { sentence: "こまって いる 友だちに やさしく 声を かけました。", reading: "こえ", level: 3 }
    ],
    "星": [
        { sentence: "星が 光ります。", reading: "ほし", level: 1 },
        { sentence: "星空を 見上げます。", reading: "ほし", level: 2 },
        { sentence: "よるに まどを あけると たくさんの 星が 見えました。", reading: "ほし", level: 3 }
    ],
    "晴": [
        { sentence: "空が 晴れました。", reading: "は", level: 1 },
        { sentence: "あしたは 晴天です。", reading: "せい", level: 2 },
        { sentence: "雨が やんで 晴れたので こうていで あそびました。", reading: "は", level: 3 }
    ],
    "切": [
        { sentence: "紙を 切ります。", reading: "き", level: 1 },
        { sentence: "大切に つかいます。", reading: "せつ", level: 2 },
        { sentence: "はさみで 色紙を 丸く 切って 花を つくりました。", reading: "き", level: 3 }
    ],
    "雪": [
        { sentence: "雪が ふります。", reading: "ゆき", level: 1 },
        { sentence: "雪だるまを つくります。", reading: "ゆき", level: 2 },
        { sentence: "朝 おきると 白い 雪が にわに つもって いました。", reading: "ゆき", level: 3 }
    ],
    "船": [
        { sentence: "船に のります。", reading: "ふね", level: 1 },
        { sentence: "大きな 船が みなとに つきます。", reading: "ふね", level: 2 },
        { sentence: "海の むこうから 白い 船が ゆっくり 近づいて きました。", reading: "ふね", level: 3 }
    ],
    "線": [
        { sentence: "まっすぐな 線を 引きます。", reading: "せん", level: 1 },
        { sentence: "赤い 線で むすびます。", reading: "せん", level: 2 },
        { sentence: "ものさしを つかって 二つの 点を 線で むすびました。", reading: "せん", level: 3 }
    ],
    "前": [
        { sentence: "前を 見て あるきます。", reading: "まえ", level: 1 },
        { sentence: "午前 九じに はじまります。", reading: "ぜん", level: 2 },
        { sentence: "みんなの 前に 出て すきな 本を しょうかいしました。", reading: "まえ", level: 3 }
    ],
    "組": [
        { sentence: "二人で 組みます。", reading: "く", level: 1 },
        { sentence: "二年一組です。", reading: "くみ", level: 2 },
        { sentence: "となりの 人と 組んで ボールを なげ合いました。", reading: "く", level: 3 }
    ],
    "走": [
        { sentence: "こうていを 走ります。", reading: "はし", level: 1 },
        { sentence: "ときょう走に 出ます。", reading: "そう", level: 2 },
        { sentence: "うんどう会で ゴールまで 力いっぱい 走りました。", reading: "はし", level: 3 }
    ],
    "多": [
        { sentence: "人が 多いです。", reading: "おお", level: 1 },
        { sentence: "今日は 雲が 多いです。", reading: "おお", level: 2 },
        { sentence: "雨の あとには 水たまりが 多く できて いました。", reading: "おお", level: 3 }
    ],
    "太": [
        { sentence: "太い 木です。", reading: "ふと", level: 1 },
        { sentence: "太い せんを 引きます。", reading: "ふと", level: 2 },
        { sentence: "大きな 紙に 太い ふでで 文字を 書きました。", reading: "ふと", level: 3 }
    ],
    "体": [
        { sentence: "体を うごかします。", reading: "からだ", level: 1 },
        { sentence: "体育で なわとびを します。", reading: "たい", level: 2 },
        { sentence: "外から 帰ったら 手を あらって 体を 休めます。", reading: "からだ", level: 3 }
    ],
    "台": [
        { sentence: "台の 上に おきます。", reading: "だい", level: 1 },
        { sentence: "一台の 車が とまります。", reading: "だい", level: 2 },
        { sentence: "はっぴょうする 人は 前の 台に 上がりました。", reading: "だい", level: 3 }
    ],
    "地": [
        { sentence: "地めんに 絵を かきます。", reading: "じ", level: 1 },
        { sentence: "町の 地図を 見ます。", reading: "ち", level: 2 },
        { sentence: "地図で 学校から こうえんまでの 道を たしかめました。", reading: "ち", level: 3 }
    ],
    "池": [
        { sentence: "池に こいが います。", reading: "いけ", level: 1 },
        { sentence: "池の まわりを あるきます。", reading: "いけ", level: 2 },
        { sentence: "こうえんの 池で かもが およぐ ようすを 見ました。", reading: "いけ", level: 3 }
    ],
    "知": [
        { sentence: "こたえを 知って います。", reading: "し", level: 1 },
        { sentence: "お知らせを よみます。", reading: "し", level: 2 },
        { sentence: "図かんを よんで 虫の そだちかたを 知りました。", reading: "し", level: 3 }
    ],
    "茶": [
        { sentence: "お茶を のみます。", reading: "ちゃ", level: 1 },
        { sentence: "茶いろの くつです。", reading: "ちゃ", level: 2 },
        { sentence: "あそんだ あとで つめたい お茶を のみました。", reading: "ちゃ", level: 3 }
    ],
    "昼": [
        { sentence: "昼に ごはんを 食べます。", reading: "ひる", level: 1 },
        { sentence: "お昼休みに あそびます。", reading: "ひる", level: 2 },
        { sentence: "昼に なると こうていから 元気な 声が きこえます。", reading: "ひる", level: 3 }
    ],
    "長": [
        { sentence: "長い ひもです。", reading: "なが", level: 1 },
        { sentence: "校長先生の 話を ききます。", reading: "ちょう", level: 2 },
        { sentence: "長い れつに ならんで じゅんばんを まちました。", reading: "なが", level: 3 }
    ],
    "鳥": [
        { sentence: "鳥が とびます。", reading: "とり", level: 1 },
        { sentence: "小鳥の 声が きこえます。", reading: "とり", level: 2 },
        { sentence: "大きな 木の えだに 青い 鳥が とまって いました。", reading: "とり", level: 3 }
    ],
    "朝": [
        { sentence: "朝に おきます。", reading: "あさ", level: 1 },
        { sentence: "毎朝 花に 水を やります。", reading: "あさ", level: 2 },
        { sentence: "朝 学校へ 行くと 先生が もんで まって いました。", reading: "あさ", level: 3 }
    ],
    "直": [
        { sentence: "まちがいを 直します。", reading: "なお", level: 1 },
        { sentence: "線を まっ直ぐ 引きます。", reading: "す", level: 2 },
        { sentence: "こわれた おもちゃを お父さんと いっしょに 直しました。", reading: "なお", level: 3 }
    ],
    "通": [
        { sentence: "学校に 通います。", reading: "かよ", level: 1 },
        { sentence: "車が 道を 通ります。", reading: "とお", level: 2 },
        { sentence: "いつもの 道が こうじ中なので べつの 道を 通りました。", reading: "とお", level: 3 }
    ],
    "弟": [
        { sentence: "弟と あそびます。", reading: "おとうと", level: 1 },
        { sentence: "弟に 本を よみます。", reading: "おとうと", level: 2 },
        { sentence: "ないて いた 弟に おもちゃを かして あげました。", reading: "おとうと", level: 3 }
    ],
    "店": [
        { sentence: "店で パンを 買います。", reading: "みせ", level: 1 },
        { sentence: "本店は えきの 近くです。", reading: "てん", level: 2 },
        { sentence: "町たんけんで むかしから ある お店の 人に はなしを ききました。", reading: "みせ", level: 3 }
    ],
    "点": [
        { sentence: "点を 書きます。", reading: "てん", level: 1 },
        { sentence: "百点を とりました。", reading: "てん", level: 2 },
        { sentence: "二つの 点を ものさしで まっすぐ むすびました。", reading: "てん", level: 3 }
    ],
    "電": [
        { sentence: "電気を つけます。", reading: "でん", level: 1 },
        { sentence: "電車に のります。", reading: "でん", level: 2 },
        { sentence: "えきの ホームで 黄色い 電車が くるのを まちました。", reading: "でん", level: 3 }
    ],
    "刀": [
        { sentence: "刀を 見ました。", reading: "かたな", level: 1 },
        { sentence: "木の 刀で あそびます。", reading: "かたな", level: 2 },
        { sentence: "はくぶつかんで むかしの 長い 刀を 見ました。", reading: "かたな", level: 3 }
    ],
    "冬": [
        { sentence: "冬は さむいです。", reading: "ふゆ", level: 1 },
        { sentence: "冬休みに 雪で あそびます。", reading: "ふゆ", level: 2 },
        { sentence: "さむい 冬の 朝に 池の 水が こおって いました。", reading: "ふゆ", level: 3 }
    ],
    "当": [
        { sentence: "ボールが 当たります。", reading: "あ", level: 1 },
        { sentence: "こたえを 当てます。", reading: "あ", level: 2 },
        { sentence: "はこの 中に 何が あるか 手で さわって 当てました。", reading: "あ", level: 3 }
    ],
    "東": [
        { sentence: "東から 日が のぼります。", reading: "ひがし", level: 1 },
        { sentence: "東京に 行きます。", reading: "とう", level: 2 },
        { sentence: "朝 はやく おきて 東の 空が 明るく なるのを 見ました。", reading: "ひがし", level: 3 }
    ],
    "答": [
        { sentence: "もんだいに 答えます。", reading: "こた", level: 1 },
        { sentence: "答えを ノートに 書きます。", reading: "こた", level: 2 },
        { sentence: "よく 考えてから 先生の しつもんに 答えました。", reading: "こた", level: 3 }
    ],
    "頭": [
        { sentence: "頭を さげます。", reading: "あたま", level: 1 },
        { sentence: "先頭に ならびます。", reading: "とう", level: 2 },
        { sentence: "ぼうしが とばないように 頭を 手で おさえました。", reading: "あたま", level: 3 }
    ],
    "同": [
        { sentence: "同じ いろです。", reading: "おな", level: 1 },
        { sentence: "友だちと 同時に こたえます。", reading: "どう", level: 2 },
        { sentence: "わたしと 同じ 本を よんだ 友だちと はなしを しました。", reading: "おな", level: 3 }
    ],
    "道": [
        { sentence: "道を あるきます。", reading: "みち", level: 1 },
        { sentence: "水道の 水を とめます。", reading: "どう", level: 2 },
        { sentence: "学校までの 道で きれいな 花を 見つけました。", reading: "みち", level: 3 }
    ],
    "読": [
        { sentence: "本を 読みます。", reading: "よ", level: 1 },
        { sentence: "音読の れんしゅうを します。", reading: "どく", level: 2 },
        { sentence: "図書室で かりた もの語を 家ぞくに 読みました。", reading: "よ", level: 3 }
    ],
    "内": [
        { sentence: "はこの 内がわを 見ます。", reading: "うち", level: 1 },
        { sentence: "校内を しずかに あるきます。", reading: "ない", level: 2 },
        { sentence: "雨の日は 校しゃの 内で 休みじかんを すごします。", reading: "うち", level: 3 }
    ],
    "南": [
        { sentence: "南へ すすみます。", reading: "みなみ", level: 1 },
        { sentence: "南口で まちます。", reading: "みなみ", level: 2 },
        { sentence: "あたたかい 南の ほうへ とりが とんで 行きました。", reading: "みなみ", level: 3 }
    ],
    "肉": [
        { sentence: "肉を 食べます。", reading: "にく", level: 1 },
        { sentence: "やさいと 肉を いためます。", reading: "にく", level: 2 },
        { sentence: "今日の きゅう食には 肉と やさいの スープが 出ました。", reading: "にく", level: 3 }
    ],
    "馬": [
        { sentence: "馬が 走ります。", reading: "うま", level: 1 },
        { sentence: "木馬に のります。", reading: "ば", level: 2 },
        { sentence: "ぼくじょうで ちゃいろの 馬に にんじんを あげました。", reading: "うま", level: 3 }
    ],
    "売": [
        { sentence: "店で パンを 売ります。", reading: "う", level: 1 },
        { sentence: "売り場は 二かいです。", reading: "う", level: 2 },
        { sentence: "学校の おまつりで 自分たちが 作った ものを 売りました。", reading: "う", level: 3 }
    ],
    "買": [
        { sentence: "本を 買います。", reading: "か", level: 1 },
        { sentence: "買いものに 行きます。", reading: "か", level: 2 },
        { sentence: "お店で えんぴつと 新しい ノートを 買いました。", reading: "か", level: 3 }
    ],
    "麦": [
        { sentence: "麦が そだちます。", reading: "むぎ", level: 1 },
        { sentence: "麦ちゃを のみます。", reading: "むぎ", level: 2 },
        { sentence: "はたけで 金いろに なった 麦が かぜに ゆれて いました。", reading: "むぎ", level: 3 }
    ],
    "半": [
        { sentence: "半分に わけます。", reading: "はん", level: 1 },
        { sentence: "三じ半に 帰ります。", reading: "はん", level: 2 },
        { sentence: "大きな ケーキを 半分に 切って 二人で 食べました。", reading: "はん", level: 3 }
    ],
    "番": [
        { sentence: "一番に ならびます。", reading: "ばん", level: 1 },
        { sentence: "こうたいで 当番を します。", reading: "ばん", level: 2 },
        { sentence: "きょうは わたしが きゅう食当番なので はやく じゅんびしました。", reading: "ばん", level: 3 }
    ],
    "父": [
        { sentence: "父と 出かけます。", reading: "ちち", level: 1 },
        { sentence: "お父さんが りょうりを します。", reading: "とう", level: 2 },
        { sentence: "日よう日に 父と いっしょに 自てん車を なおしました。", reading: "ちち", level: 3 }
    ],
    "風": [
        { sentence: "風が ふきます。", reading: "かぜ", level: 1 },
        { sentence: "台風が 近づきます。", reading: "ふう", level: 2 },
        { sentence: "つよい 風で こうえんの 木のはが とびました。", reading: "かぜ", level: 3 }
    ],
    "分": [
        { sentence: "おかしを 分けます。", reading: "わ", level: 1 },
        { sentence: "あと 五分で はじまります。", reading: "ふん", level: 2 },
        { sentence: "おかしを みんなで 同じ 数ずつ 分けました。", reading: "わ", level: 3 }
    ],
    "聞": [
        { sentence: "先生の 話を 聞きます。", reading: "き", level: 1 },
        { sentence: "新聞を よみます。", reading: "ぶん", level: 2 },
        { sentence: "町たんけんで お店の 人に しごとの 話を 聞きました。", reading: "き", level: 3 }
    ],
    "米": [
        { sentence: "米を たきます。", reading: "こめ", level: 1 },
        { sentence: "新米を 食べます。", reading: "まい", level: 2 },
        { sentence: "生活科で 米が できるまでの ようすを しらべました。", reading: "こめ", level: 3 }
    ],
    "歩": [
        { sentence: "道を 歩きます。", reading: "ある", level: 1 },
        { sentence: "一歩ずつ すすみます。", reading: "ぽ", level: 2 },
        { sentence: "こうつうルールを まもって 学校まで 歩きました。", reading: "ある", level: 3 }
    ],
    "母": [
        { sentence: "母と はなします。", reading: "はは", level: 1 },
        { sentence: "お母さんに 手がみを 書きます。", reading: "かあ", level: 2 },
        { sentence: "母と いっしょに 台どころで カレーを 作りました。", reading: "はは", level: 3 }
    ],
    "方": [
        { sentence: "あちらの 方へ 行きます。", reading: "ほう", level: 1 },
        { sentence: "ゆう方に 帰ります。", reading: "がた", level: 2 },
        { sentence: "わからない ときは 先生に やり方を ききました。", reading: "かた", level: 3 }
    ],
    "北": [
        { sentence: "北へ すすみます。", reading: "きた", level: 1 },
        { sentence: "北口に あつまります。", reading: "きた", level: 2 },
        { sentence: "冬に なると 北から つめたい かぜが ふきます。", reading: "きた", level: 3 }
    ],
    "毎": [
        { sentence: "毎日 本を よみます。", reading: "まい", level: 1 },
        { sentence: "毎週 水よう日に およぎます。", reading: "まい", level: 2 },
        { sentence: "わたしは 毎朝 わすれずに 花へ 水を やります。", reading: "まい", level: 3 }
    ],
    "妹": [
        { sentence: "妹と あそびます。", reading: "いもうと", level: 1 },
        { sentence: "妹に 絵本を よみます。", reading: "いもうと", level: 2 },
        { sentence: "小さな 妹の 手を 引いて こうえんへ 行きました。", reading: "いもうと", level: 3 }
    ],
    "万": [
        { sentence: "一万まで 数えます。", reading: "まん", level: 1 },
        { sentence: "一万円さつを 見ます。", reading: "まん", level: 2 },
        { sentence: "算数で 千を 十こ あつめると 一万に なると ならいました。", reading: "まん", level: 3 }
    ],
    "明": [
        { sentence: "明るい へやです。", reading: "あか", level: 1 },
        { sentence: "明日は 遠足です。", reading: "あした", level: 2 },
        { sentence: "朝に なって 空が 明るくなると とりが なきはじめました。", reading: "あか", level: 3 }
    ],
    "鳴": [
        { sentence: "犬が 鳴きます。", reading: "な", level: 1 },
        { sentence: "ベルが 鳴ります。", reading: "な", level: 2 },
        { sentence: "じゅぎょうの おわりを しらせる チャイムが 鳴りました。", reading: "な", level: 3 }
    ],
    "毛": [
        { sentence: "ねこの 毛は やわらかいです。", reading: "け", level: 1 },
        { sentence: "毛糸で かざりを つくります。", reading: "け", level: 2 },
        { sentence: "白い うさぎの 毛を やさしく なでました。", reading: "け", level: 3 }
    ],
    "門": [
        { sentence: "門を くぐります。", reading: "もん", level: 1 },
        { sentence: "校門で 先生に あいます。", reading: "もん", level: 2 },
        { sentence: "朝 学校の 門を 入ると 友だちが まって いました。", reading: "もん", level: 3 }
    ],
    "夜": [
        { sentence: "夜に 星を 見ます。", reading: "よる", level: 1 },
        { sentence: "今夜は 月が きれいです。", reading: "や", level: 2 },
        { sentence: "夏の 夜に 家ぞくで 大きな 花火を 見ました。", reading: "よる", level: 3 }
    ],
    "野": [
        { sentence: "野原で あそびます。", reading: "の", level: 1 },
        { sentence: "野さいを 食べます。", reading: "や", level: 2 },
        { sentence: "ひろい 野原で しろつめくさを たくさん つみました。", reading: "の", level: 3 }
    ],
    "友": [
        { sentence: "友だちと あそびます。", reading: "とも", level: 1 },
        { sentence: "親友に 手がみを 書きます。", reading: "ゆう", level: 2 },
        { sentence: "こまって いると 友だちが いっしょに 考えて くれました。", reading: "とも", level: 3 }
    ],
    "用": [
        { sentence: "用じが あります。", reading: "よう", level: 1 },
        { sentence: "図工で 画用紙を つかいます。", reading: "よう", level: 2 },
        { sentence: "あしたの じゅぎょうで 用いる ものを じゅんびしました。", reading: "もち", level: 3 }
    ],
    "曜": [
        { sentence: "今日は 月曜日です。", reading: "よう", level: 1 },
        { sentence: "土曜日に こうえんへ 行きます。", reading: "よう", level: 2 },
        { sentence: "毎週 火曜日には 図書室で 本を かります。", reading: "よう", level: 3 }
    ],
    "来": [
        { sentence: "友だちが 来ます。", reading: "き", level: 1 },
        { sentence: "来週は 音楽会です。", reading: "らい", level: 2 },
        { sentence: "おきゃくさんが 来るので へやを きれいに しました。", reading: "く", level: 3 }
    ],
    "里": [
        { sentence: "山里へ 行きます。", reading: "ざと", level: 1 },
        { sentence: "ふる里の しゃしんを 見ます。", reading: "さと", level: 2 },
        { sentence: "山に かこまれた 小さな 里に 川が ながれて います。", reading: "さと", level: 3 }
    ],
    "理": [
        { sentence: "理科で 虫を 見ます。", reading: "り", level: 1 },
        { sentence: "りゆうを 理かいします。", reading: "り", level: 2 },
        { sentence: "理科の じかんに 花の つくりを よく しらべました。", reading: "り", level: 3 }
    ],
    "話": [
        { sentence: "友だちと 話します。", reading: "はな", level: 1 },
        { sentence: "むかし話を よみます。", reading: "ばなし", level: 2 },
        { sentence: "みんなの 前で 夏休みの できごとを 話しました。", reading: "はな", level: 3 }
    ]
};
