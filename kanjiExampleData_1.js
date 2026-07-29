const kanjiExampleData = {

"一": [
 { sentence:"一ねんせいに なりました。", reading:"いち" },
 { sentence:"りんごが 一つ あります。", reading:"ひと" }
],

"右": [
 { sentence:"右てを あげます。", reading:"みぎ" },
 { sentence:"右へ まがります。", reading:"う" }
],

"雨": [
 { sentence:"雨が ふっています。", reading:"あめ" },
 { sentence:"雨やどりを します。", reading:"あま" }
],

"円": [
 { sentence:"百円を もっています。", reading:"えん" },
 { sentence:"円い かたちです。", reading:"まる" }
],

"王": [
 { sentence:"王さまの おはなしです。", reading:"おう" },
 { sentence:"王かんを かぶります。", reading:"おう" }
],

"音": [
 { sentence:"大きな 音が します。", reading:"おと" },
 { sentence:"音がくを ききます。", reading:"おん" }
],

"下": [
 { sentence:"つくえの 下に あります。", reading:"した" },
 { sentence:"いすから 下りる。", reading:"お" }
],

"火": [
 { sentence:"火が もえています。", reading:"ひ" },
 { sentence:"火よう日に あそびます。", reading:"か" }
],

"花": [
 { sentence:"花が さいています。", reading:"はな" },
 { sentence:"花だんを せわします。", reading:"か" }
],

"貝": [
 { sentence:"海で 貝を ひろいます。", reading:"かい" },
 { sentence:"貝がらを あつめます。", reading:"かい" }
],

"学": [
 { sentence:"学こうへ いきます。", reading:"がく" },
 { sentence:"いろいろ 学びます。", reading:"まな" }
],

"気": [
 { sentence:"元気に あそびます。", reading:"き" },
 { sentence:"けはいを かんじます。", reading:"け" }
],

"九": [
 { sentence:"九じに ねます。", reading:"く" },
 { sentence:"九つの りんごです。", reading:"ここの" }
],

"休": [
 { sentence:"きょうは 休みです。", reading:"やす" },
 { sentence:"休けいを します。", reading:"きゅう" }
],

"玉": [
 { sentence:"玉を なげて あそびます。", reading:"たま" },
 { sentence:"しゃぼん玉を とばします。", reading:"だま" }
],

"金": [
 { sentence:"金よう日に あそびます。", reading:"きん" },
 { sentence:"お金を ためます。", reading:"かね" }
],

"空": [
 { sentence:"空を みあげます。", reading:"そら" },
 { sentence:"空きばこを つかいます。", reading:"あ" }
],

"月": [
 { sentence:"月が きれいです。", reading:"つき" },
 { sentence:"月よう日に いきます。", reading:"げつ" }
],

"犬": [
 { sentence:"犬と さんぽします。", reading:"いぬ" },
 { sentence:"ばん犬が います。", reading:"けん" }
],

"見": [
 { sentence:"えを 見ます。", reading:"み" },
 { sentence:"見学に いきます。", reading:"けん" }
],

"五": [
 { sentence:"五じに かえります。", reading:"ご" },
 { sentence:"りんごが 五つ あります。", reading:"いつ" }
],

"口": [
 { sentence:"口を あけます。", reading:"くち" },
 { sentence:"びんの 口を しめます。", reading:"くち" }
],

"校": [
 { sentence:"校しゃへ はいります。", reading:"こう" },
 { sentence:"校ていで あそびます。", reading:"こう" }
],

"左": [
 { sentence:"左てを あげます。", reading:"ひだり" },
 { sentence:"左へ まがります。", reading:"さ" }
],

"三": [
 { sentence:"三じに おきます。", reading:"さん" },
 { sentence:"りんごが 三つ あります。", reading:"み" }
],

"山": [
 { sentence:"山に のぼります。", reading:"やま" },
 { sentence:"ふじ山を みます。", reading:"さん" }
],

"子": [
 { sentence:"子どもが あそびます。", reading:"こ" },
 { sentence:"よう子を みます。", reading:"す" }
],

"四": [
 { sentence:"四じに なりました。", reading:"し" },
 { sentence:"りんごが 四つ あります。", reading:"よ" }
],

"糸": [
 { sentence:"糸で ぬいます。", reading:"いと" },
 { sentence:"糸を まきます。", reading:"いと" }
],

"字": [
 { sentence:"字を かきます。", reading:"じ" },
 { sentence:"大きな 字です。", reading:"じ" }
],

"耳": [
 { sentence:"耳を すまします。", reading:"みみ" },
 { sentence:"耳が いたいです。", reading:"みみ" }
],

"七": [
 { sentence:"七じに おきます。", reading:"しち" },
 { sentence:"七つ あります。", reading:"なな" }
],

"車": [
 { sentence:"車に のります。", reading:"くるま" },
 { sentence:"でん車で いきます。", reading:"しゃ" }
],

"手": [
    { sentence: "手を あらいます。", reading: "て" },
    { sentence: "上手に できました。", reading: "じょう" }
],

"十": [
    { sentence: "十まで かぞえます。", reading: "とお" },
    { sentence: "十円を ひろいました。", reading: "じゅう" }
],

"出": [
    { sentence: "そとへ 出ます。", reading: "で" },
    { sentence: "てがみを 出します。", reading: "だ" }
],

"女": [
    { sentence: "女の子が あそんでいます。", reading: "おんな" },
    { sentence: "女の先生が います。", reading: "じょ" }
],

"小": [
    { sentence: "小さい はなが さいています。", reading: "ちい" },
    { sentence: "小学校へ いきます。", reading: "しょう" }
],

"上": [
    { sentence: "つくえの 上に おきます。", reading: "うえ" },
    { sentence: "上手に かけました。", reading: "じょう" }
],

"森": [
    { sentence: "森で あそびます。", reading: "もり" },
    { sentence: "森林を まもります。", reading: "しん" }
],

"人": [
    { sentence: "人が たくさん います。", reading: "ひと" },
    { sentence: "三人で あそびます。", reading: "にん" }
],

"水": [
    { sentence: "水を のみます。", reading: "みず" },
    { sentence: "水よう日に でかけます。", reading: "すい" }
],

"正": [
    { sentence: "正しい こたえを かきます。", reading: "ただ" },
    { sentence: "お正月に あそびます。", reading: "しょう" }
],

"生": [
    { sentence: "元気に 生きます。", reading: "い" },
    { sentence: "あかちゃんが 生まれました。", reading: "う" }
],

"青": [
    { sentence: "青い そらです。", reading: "あお" },
    { sentence: "青しんごうで わたります。", reading: "せい" }
],

"夕": [
    { sentence: "夕やけが きれいです。", reading: "ゆう" },
    { sentence: "夕ごはんを たべます。", reading: "ゆう" }
],

"石": [
    { sentence: "石を ひろいました。", reading: "いし" },
    { sentence: "ほう石を みました。", reading: "せき" }
],

"赤": [
    { sentence: "赤い りんごです。", reading: "あか" },
    { sentence: "赤ちゃんが わらいます。", reading: "あか" }
],

"千": [
    { sentence: "千円を ためます。", reading: "せん" },
    { sentence: "千羽づるを おります。", reading: "せん" }
],

"川": [
    { sentence: "川で あそびます。", reading: "かわ" },
    { sentence: "天の川を みます。", reading: "がわ" }
],

"先": [
    { sentence: "先生に あいさつします。", reading: "せん" },
    { sentence: "先に いきます。", reading: "さき" }
],

"早": [
    { sentence: "早く おきます。", reading: "はや" },
    { sentence: "早そうに はしります。", reading: "そう" }
],

"草": [
    { sentence: "草を ぬきます。", reading: "くさ" },
    { sentence: "ざっ草を とります。", reading: "そう" }
],

"足": [
    { sentence: "足で けります。", reading: "あし" },
    { sentence: "水が 足ります。", reading: "た" }
],

"村": [
    { sentence: "村に すんでいます。", reading: "むら" },
    { sentence: "村長さんの はなしを ききます。", reading: "そん" }
],

"大": [
    { sentence: "大きな いぬです。", reading: "おお" },
    { sentence: "大じな ものです。", reading: "だい" }
],

"男": [
    { sentence: "男の子が あそんでいます。", reading: "おとこ" },
    { sentence: "男の人が います。", reading: "だん" }
],

"竹": [
    { sentence: "竹を きります。", reading: "たけ" },
    { sentence: "竹林を あるきます。", reading: "ちく" }
],

"中": [
    { sentence: "はこの 中を みます。", reading: "なか" },
    { sentence: "中学校へ いきます。", reading: "ちゅう" }
],

"虫": [
    { sentence: "虫を つかまえます。", reading: "むし" },
    { sentence: "昆虫を しらべます。", reading: "ちゅう" }
],

"町": [
    { sentence: "町を あるきます。", reading: "まち" },
    { sentence: "町長さんの はなしを ききます。", reading: "ちょう" }
],

"天": [
    { sentence: "天気が いいです。", reading: "てん" },
    { sentence: "天の川を みます。", reading: "あま" }
],

"田": [
    { sentence: "田んぼを みます。", reading: "た" },
    { sentence: "水田で お米を つくります。", reading: "でん" }
],

"土": [
    { sentence: "土を さわります。", reading: "つち" },
    { sentence: "土よう日に あそびます。", reading: "ど" }
],

"二": [
    { sentence: "二人で あそびます。", reading: "ふた" },
    { sentence: "二年生に なります。", reading: "に" }
],

"日": [
    { sentence: "日が のぼります。", reading: "ひ" },
    { sentence: "日よう日に あそびます。", reading: "にち" }
],

"入": [
    { sentence: "おふろに 入ります。", reading: "はい" },
    { sentence: "かばんに 入れます。", reading: "い" }
],

"年": [
    { sentence: "一年生に なりました。", reading: "ねん" },
    { sentence: "年を とりました。", reading: "とし" }
],

"白": [
    { sentence: "白い ゆきです。", reading: "しろ" },
    { sentence: "白鳥を みました。", reading: "はく" }
],

"八": [
    { sentence: "八じに おきます。", reading: "はち" },
    { sentence: "りんごが 八つ あります。", reading: "や" }
],

"百": [
    { sentence: "百円を ためます。", reading: "ひゃく" },
    { sentence: "百てんを とりました。", reading: "ひゃく" }
],

"文": [
    { sentence: "文を かきます。", reading: "ぶん" },
    { sentence: "文もんを たずねます。", reading: "もん" }
],

"木": [
    { sentence: "木に のぼります。", reading: "き" },
    { sentence: "木よう日に あそびます。", reading: "もく" }
],

"本": [
    { sentence: "本を よみます。", reading: "ほん" },
    { sentence: "木の 本を みます。", reading: "もと" }
],

"名": [
    { sentence: "名まえを かきます。", reading: "な" },
    { sentence: "名人の わざを みます。", reading: "めい" }
],

"目": [
    { sentence: "目を とじます。", reading: "め" },
    { sentence: "目ひょうを きめます。", reading: "もく" }
],

"立": [
    { sentence: "いすから 立ちます。", reading: "た" },
    { sentence: "国立の たてものです。", reading: "りつ" }
],

"力": [
    { sentence: "力を だします。", reading: "ちから" },
    { sentence: "協力して がんばります。", reading: "りょく" }
],

"林": [
    { sentence: "林を あるきます。", reading: "はやし" },
    { sentence: "森林を まもります。", reading: "りん" }
],

"六": [
    { sentence: "六じに おきます。", reading: "ろく" },
    { sentence: "りんごが 六つ あります。", reading: "む" }
]

};