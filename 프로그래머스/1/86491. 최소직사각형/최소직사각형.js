//문제를 입출력 예2번을 들어 설명 해보자면
/* 각각의 지갑들의 가로 세로 값은
10 7
12 3
8 15
14 7
5 15
이 되는데, 왼쪽은 큰 값들이, 오른쪽은 작은 값들로 나열을 해보자면
10 7
12 3
15 8
14 7
15 5
가 된다, 그래서 이 입출력의 경우 가로는 15, 세로는 8, 면적이 120인 지갑으로 모든 지갑 사이즈를 수납 가능하다는 이야기가 되는 것이다.
*/

function solution(sizes) {
    let answer = 0;
    for (let arr of sizes) {
        arr.sort((a, b) => b - a);;
    }
    //for of를 돌리면서 입력 받은 배열들을 순차적으로 돌리면서 sort 함수로 내림차순 정렬, 즉 큰 값이 앞으로 오게 합니다.

    let width = [], heigh = [];
    // 그 후 각 지갑의 가로값과 새로값을 담을 배열을 따로 만들어준 후.
    sizes.forEach(wallet => {
    // 정렬 된 배열에 foreach문을 실행하여 각 배열의 첫번째 값(wallet[0])은 width배열에, 두번째 값(wallet[1])은 heigh배열에 담습니다.
        width.push(wallet[0]);
        heigh.push(wallet[1]);
    });
    
    const widthMax = Math.max(...width);
    const heighMax = Math.max(...heigh);
    //foreach 문이 종료되면 각 배열의 가장 큰 값을 widthMax와 heightMax 변수에 할당합니다.

    return answer = (widthMax * heighMax);
    // 각각의 가장 큰 두 값(widthMax와 heightMax)을 곱하여 answer에 할당하고 반환합니다.

}