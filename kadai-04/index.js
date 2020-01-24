//課題4-1
//アロー関数を使用した処理
//数字aとbを引数として与えるとaとbの積を計算する関数product
//整数nを引数として与えると、1からnまでの和を計算する関数sum

//課題４−２
//setTimeout関数を使って「３秒後に Hello! と表示し、その２秒後にByeと表示する」処理

// 3000ミリ秒(3秒)待って Hello! と表示
console.log('3秒後にHello')

setTimeout(() => { console.log('Hello!') }, 3000)
setTimeout(() => { console.log('Bye') }, 5000)

