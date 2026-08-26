import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const rows=[];
for(let grade=1;grade<=6;grade++){
  const filename=`kanjiExampleData_${grade}.js`;
  const code=fs.readFileSync(path.join(root,filename),'utf8');
  const context={result:null};
  vm.runInNewContext(`${code}\nresult=kanjiExampleData_${grade};`,context,{filename});
  for(const [kanji,examples] of Object.entries(context.result||{}))for(let index=0;index<examples.length;index++)rows.push({grade,kanji,index,...examples[index]});
}
const normalized=r=>String(r??'').trim().replace(/\s+/g,'').replace(/[ァ-ヶ]/g,c=>String.fromCharCode(c.charCodeAt(0)-0x60));
const issues=[];let maxLength=0;const flags={smallKana:0,smallTsu:0,dakuten:0,handakuten:0,longMark:0,repeatedCharacter:0};
for(const row of rows){
  const reading=normalized(row.reading),chars=Array.from(reading),unique=new Set(chars);maxLength=Math.max(maxLength,chars.length);
  if(!reading)issues.push({...row,type:'empty-reading'});
  if(reading&&!/^[ぁ-ゖー]+$/.test(reading))issues.push({...row,type:'non-hiragana',normalized:reading});
  if(unique.size>9)issues.push({...row,type:'palette-impossible',uniqueCharacters:unique.size,normalized:reading});
  if(/[ゃゅょぁぃぅぇぉ]/.test(reading))flags.smallKana++;if(/っ/.test(reading))flags.smallTsu++;
  if(/[がぎぐげござじずぜぞだぢづでどばびぶべぼ]/.test(reading))flags.dakuten++;
  if(/[ぱぴぷぺぽ]/.test(reading))flags.handakuten++;if(/ー/.test(reading))flags.longMark++;
  if(chars.some((c,i)=>chars.indexOf(c)!==i))flags.repeatedCharacter++;
}
const report={generatedAt:new Date().toISOString(),grades:6,examples:rows.length,readings:[...new Set(rows.map(r=>`${r.kanji}::${normalized(r.reading)}`))].length,maxLength,features:flags,issueCount:issues.length,issues};
console.log(JSON.stringify(report,null,2));
if(issues.some(i=>i.type==='empty-reading'||i.type==='palette-impossible'))process.exitCode=1;
