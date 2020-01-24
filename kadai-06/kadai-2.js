//次のオブジェクトが JSON.stringify できるかどうか
// === JSON 文字列を JavaScript オブジェクトに変換できるかを確認する
const str1 = "abc"
const str2 = "'abc'"
const str3 = '"abc"'
const str4 = '{"a": undefined}'
const str5 = '{"a": 123}'
const str6 = '{a: 123}'


//解答例
// str1 のパース結果
try {
    console.log(JSON.parse(str1))    
} catch (error) {
    console.log(error)
    // abc という文字列は正しい JSON ではないから。
    // 正しくは "abc"
}

// str2 のパース結果
try {
    console.log(JSON.parse(str2))    
} catch (error) {
    console.log(error)
    // 'abc' という文字列は正しい JSON ではないから。
    // 正しくは "abc"
}


// str3 のパース結果
try {
    console.log(JSON.parse(str3))    
} catch (error) {
    console.log(error)
    // "abc" は正しい JSON なのでパースできる
}

// ..str6 まで試してみる