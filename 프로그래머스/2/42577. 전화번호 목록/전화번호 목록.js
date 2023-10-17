// 문제는 sort와 substr을 중심으로 해결한 듯 보입니다. 즉 새로운 배열에 넘겨 받은 매개배열을 sort로 정렬 할 경우 사전식으로 작은 값부터 정렬이 되고, 지금 값에서 그 다음 값의 접두어를 비교할 때 substr로 비교할 다음 값을 지금 값의 길이만큼 빼준 후 비교하여 비교하는 로직으로 해석됩니다.

function solution(phone_book) {
    let answer = true;
    let arr = [...phone_book]
    arr = arr.sort();
    // arr 변수에 인자로 받아온 배열값을 복사한 후 정렬해 줍니다. sort를 사용할 경우 사전식으로 정렬되기 때문에 접두어를 손쉽게 비교할 수 있습니다. 
    // let arr = phone_book.sort(); 이렇게 작성도 가능하나, 그럴 경우 바깥의 원본 데이터의 값도 바뀔 경우가 있으므로 스프레드를 사용하여 복사해 줍니다.

    for(let i = 0; i < arr.length - 1; i++) {
    // 그 다음 for문을 i-1 만큼 반복하는데, 그 이유는 마지막 값에 대해서는 비교를 하지 않을 것이기에 그 범위인 -1을 붙여줍니다.
        let nextString = arr[i+1].substr(0, arr[i].length);
    // nextString 변수에 arr 배열의 현재 기준이 되는 값의 다음 값(i+1)에서 기준이 되는 값의 길이만큼 뺀 후 할당합니다. 즉 기준이 되는 값이 12고, 다음 값이 12579일때, nextString에는 12579에서 12의 길이인 2만큼을 뺀 12가 할당됩니다. 참고로 subString을 사용하지 않은 이유는 subString은 인덱스의 값을 정확하게 넣어줘야 한다는 단점이 있기에 substr을 사용한 것으로 보입니다.
        if (arr[i] === nextString){
        //만약 현재의 값이 다음 값에서 현재의 값의 길이만큼 뺀 값과 같다면, 즉 다음의 값이 접두어를 포함하고 있다면 (이 경우 전화번호부에 특정 번호가 겹치는 경우)
            return false;
        // false 반환
        }
    }

    return answer;
    //for 문이 완전히 끝난 것이라면 겹치는 번호가 없는 것이기에 원래 answer의 값(true)를 반환.
}