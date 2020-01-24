//課題4-1
//アロー関数を使用した処理
//() => { /*処理*/ } の形式で関数を定義できる
//数字aとbを引数として与えるとaとbの積を計算する関数product
const product = (a,b) => {return a * b}
const product2 = function(a,b) {return a * b}

//を、使って１０１と１７の積
const result1 = product(101,17)
console.log(result1)


//整数nを引数として与えると、1からnまでの和を計算する関数sum
const sum = (n) => {
    let result = 0
    for(i = 1; i <= n; i = i + 1) {
        result = result + i
    }
    return result
}

//を、使って１から３００までの和
const result2 = sum(300)
console.log(result2)

//課題４−２
//setTimeout関数を使って「３秒後に Hello! と表示し、その２秒後にByeと表示する」処理

// 3000ミリ秒(3秒)待って Hello! と表示
console.log('3秒後にHello')

//試作
//setTimeout(() => { console.log('Hello!') }, 3000)
//setTimeout(() => { console.log('Bye') }, 5000)

//本番
setTimeout(() => {console.log('Hello!');setTimeout(() => {console.log('Bye!')},2000)},3000)