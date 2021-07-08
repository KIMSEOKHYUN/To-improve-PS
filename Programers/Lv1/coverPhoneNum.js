function solution(phone_number) {
    let starNum = '';
    let otherResult = phone_number.slice(-4)
    let result = phone_number.slice(0, -4);
     starNum = result.replace(/./g, "*")
    return starNum + otherResult;
}