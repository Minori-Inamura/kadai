//課題（3-1）性格診断プログラムを作ってみよう
const day = parseInt(process.argv[2])

if (day % 3 === 0){
    console.log('あなたは慎重な性格です')
} else if (day % 3 === 1){
    console.log('あなたはまじめな性格です')
} else if (day % 3 === 2){
    console.log('あなたは奔放な性格です')
}
//Example

// 生まれた日を入力
//const day = parseInt(process.argv[2])

//if (day % 4 === 0) {
 //   console.log('あなたはaaaaな性格です')
//} else if(day % 4 === 1) {
   // console.log('あなたはbbbな性格です')
//} else if(day % 4 === 2) {
  //  console.log('dddd')
//} else {
//    console.log('あなたはcccな性格です')
//}