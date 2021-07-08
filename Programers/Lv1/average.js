function solution(arr) {
    let result = 0;
    let answer = 0;
    for(let i = 0; i < arr.length; i++){
        result += arr[i];
    }
        answer = result / arr.length
        return answer;
  }