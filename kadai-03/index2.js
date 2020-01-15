//　3の倍数でメッセージを表示する

const max = parseInt(prosess.argv[2])


for (let n = 1; n <= max; n = n + 1){
    if(n % 3 === 0){
        console.log('サァン！！！')
    } else {
        console.log(n)
    }
}