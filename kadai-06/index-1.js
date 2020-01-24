//課題6-1
//次のオブジェクトがJSON.stringifyできるか
// =JavaScript オブジェクトを JSON 文字列に変換できるか確認する

const obl1 = "abc"
const obj2 = 123
const obj3 = false
const obj4 = { a: 123}
const obj5 = { func: () => console.log('Hi!')}
const obj6 = { property: undefined }
const obj7 = {a: "aaa", b: { c: "ccc", d: undefined} }


//const cat = {
  // "species": "cat",
   //"name": "Tama",
   //"age": 2,
   //"sex": "male"
 //}JSON.stringify(cat)

//解答例

const obj1 = "abc"
const obj2 = 123
const obj3 = false
const obj4 = { a: 123 }
const obj5 = { func: () => console.log('Hi!') }
const obj6 = { property: undefined }
const obj7 = {a: "aaa", b: { c: "ccc", d: undefined } }

console.log(JSON.stringify(obj1))
console.log(JSON.stringify(obj2))
console.log(JSON.stringify(obj5))
console.log(JSON.stringify(obj7))