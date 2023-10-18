// 문제 해설 : 이 문제는 주어진 2차원 배열에서 각 배열마다 종류가 겹치지 않는 조건으로 착용 가능한 방법을 구하는 문제입니다. 

function solution(clothes) {
    let answer = 0;
    let obj = {};
    // 옷들을 종류 별로 담을 obj 객체를 하나 선언 후

    clothes.forEach ( i => {
        // forEach문을 돌리면서
        const key = i[1];
        // key 변수애 의상 종류를 할당합니다.
        if(obj[key] === undefined) {
        // 만약 obj의 key에 값이 할당 전인 상태, 즉 종류가 없는 상태(undefined)라면 
            obj[key] = [i[0]];
        // 현재 clothes 배열 안의 i번째 배열의 첫번째 값(0 | 옷 이름)을 해당 key의 값으로 할당합니다.
        } else {
        // 그렇지 않고 만약 해당 옷 종류에 기존 옷이 있을 경우
            obj[key].push(i[0]);
        // 해당 프로퍼티(옷 종류)에 추가로 현재 배열의 옷 이름을 추가합니다.
        }
    });
    // 이쪽까지 왔다면, obj 객체 안에는 옷의 종류 별로 이름들이 저장 되어있을 것입니다.
    answer = 1;
    // answer을 1로 할당 후
    const entries = Object.entries(obj);
    // Object의 내장 함수인entries를 이용해 obj 객체를 배열로 반환한 후 entries 변수에 할당합니다.
    for (let [key, value] of entries) {
    // 그리고 for of문을 돌리는데, 이때 entries 메서드에 의해 반환된 배열을 가지고 있는 entries 배열 변수의 각각의 값을 for of문이 도는 동안 key와 value에 각각 할당하고
        answer *= (obj[key].length + 1);
    // 옷의 수 +1을 한 값을 answer에 곱하고 누적시킵니다. 예를들어 A 종류의 옷이 3개라고 한다면 answer에는 4가 저장 될것이고, 그 다음 B 종류의 옷이 4개라고 한다면 5*4 = 20의 값이 answer에 저장 될것입니다. 그 이유는 각 옷들을 중복 되지 않는 선에서 입을 뿐만 아니라 하나만 입을 선택지 또한 가져야 하기 때문에 +1을 하는 것이죠.
    }

    answer -= 1;
    // 그리고 얻어낸 answer에 1을 빼준다면 이제 각 옷의 종류마다 겹치지 않고 입으면서, 같이 입지 않고 한 종류의 옷만 입는 선택지 까지 합한 값을 얻을 수 있습니다.

    return answer;
}