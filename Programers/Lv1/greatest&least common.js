//the greatest common measure & the least common multiple


function solution(n, m) {
  let answer = [];
  let mostNumber = [];

for(let i = 1; i<=n*m; i++){
  if(n % i === 0 && m % i === 0){
  mostNumber.push(i)
 }
 answer=[Math.max.apply(null, mostNumber)]
 
}

let minorNumber = 1;
while(minorNumber > 0) {
  if( minorNumber % n === 0 && minorNumber % m === 0){
    break;
  }
   minorNumber ++;
}

 answer.push(minorNumber)
 return answer
}



// 배열과 반복문을 활용한 최대&최소공배수 문제풀이