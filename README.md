# 漢字読みファンタジー

小学校1〜6年生の漢字を、例文の中で読むファンタジーバトル型教材です。

## 学習の中心

- 既存の `reading` を正答として使用し、熟語全体の読みを推測しません。
- 6学年×4区分の全24ステージは、元データ順で固定です。
- 1回10問。9マス文字パレットとキーボード入力は同じ条件で記録されます。
- 苦手（自動）と「★特訓したい」（児童登録）は別管理です。
- 誤答は時間を空けた2回の再正解で克服扱いになります。
- 読み単位の保存キーは `漢字::読み` です。

## データ

`kanji-data.js` と `kanjiExampleData_1.js`〜`kanjiExampleData_6.js` は既存データをそのまま使用しています。`data-bridge.js` はデータを変更せずアプリへ公開するだけです。

## 構成

- `index.html` — 画面構造
- `style.css` — PC・タブレット横・スマホ縦の表示
- `app.js` — 出題、9マス生成、バトル、特訓、記録、共有
- `scripts/validate-readings.mjs` — 全readingの検査
- `data-check-report.json` — 検査結果

ビルド不要です。GitHub Pagesから直接動作します。保存は `edu:kanji-reading-fantasy:*` の名前空間でlocalStorageに行います。

## データ検査

```bash
node scripts/validate-readings.mjs
```

## 共通資産

`edu-kit` を起点に、`edu-components`、`edu-effects`、`sounds-recipe-`、`navi-character-` の実在する機能・軽量WebPを参照しています。
