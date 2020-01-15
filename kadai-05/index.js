const profile = {
    name:'MinoriInada',
    age: 24,
    hobby:'watch Budaixi,Taiwanese puppet show',
    major:'Chinese Literature',
    //TEST:'Chinese Literature',
 };

// 辞書型のprofile の中の キー要素 を 配列にして全部寄越せ。
const keys = Object.keys(profile);

for(let i = 0; i < keys.length; i = i + 1){
    const key = keys[i];
    const value = profile[key];
    const text = "私の" + key + "は" + value + "です。";
    console.log(text)
    //console.log(profile[text])
}

return

//こんな事もできる（条件付のreturn）
if(keys.length == 5){
    return;
}

//以下、勉強コード.
const values = Object.values(profile);//object先輩まじぱねぇ
console.log("keysの中身を出力します。配列です。")
console.log(keys)
console.log("")
console.log("valuesの中身を出力します。配列です。")
console.log(values)
console.log("")

{
    const index = 1
    const key = keys[index];

    const key_d = keys[0];

    console.log("変数indexを添字に使った場合："+key)
    console.log("数字の0を添字に使った場合:"+key_d)

    const value = profile[key];
    const text = "私の" + key + "は" + value + "です。";
    console.log(text)
    //console.log(profile[text])
}
