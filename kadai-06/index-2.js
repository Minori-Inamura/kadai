//次のオブジェクトが JSON.parse できるかできないか
// ===  JSON 文字列を JavaScript オブジェクトに変換できるかどうかを確認する

const str1 = 'abc'

const str2 = "'abc'"
const str3 = '"abc"'
const str4 = '{"a": undefined}'
const str4d = '{"a":' + undefined + '}'
const str5 = '{"a": 123}'
const str6 = '{a: 123}'


// str1 のパース結果
console.log('check str1:'+str1)
try {
    const obj = JSON.parse(str1)    
} catch (error) {
    console.log('Error!')
    console.error(error)
    // abc という文字列は正しい JSON ではないから。
    // 正しくは "abc"
}

// str2 のパース結果
console.log('check str2:' + str2)
try {
    JSON.parse(str2)
} catch (error) {
    console.log('Error!')
    console.error(error)
    // Unexpected token ' in JSON at position 0
    // str2の先頭にある ' が JSON の文法エラー
    // 正しくは "abc"
}

console.log('check str3:'+str3)

// str3 のパース結果
try {
    JSON.parse(str3)
} catch (error) {
    console.log('Error!')
    console.error(error)

    // "abc" は正しい JSON なのでパースできる
}
// str4 のパース結果
console.log('check str4:'+str4)
try {
    JSON.parse(str4)
} catch (error) {
    console.log('Error!')
    console.error(error)
    // undefined は　Java　の予約語であって　JSON　文法内では意味をなさないため　そのままだと Error になる
    // 正しくは "Undefined" (JSONは””で囲まれてないと文字列だとわからない)
}

// str５ のパース結果
console.log('check str5:'+str5)
try {
    JSON.parse(str5)
} catch (error) {
    console.log('Error!')
    console.error(error)
    // 正しい JSON 文法なので perse できる
}

// str6 のパース結果
console.log('check str6:'+str6)
try {
    JSON.parse(str6)
} catch (error) {
    console.log('Error!')
    console.error(error)
    // a が "" で囲まれていないため正しい JSON 文法ではない
}

console.log('~Fin~')