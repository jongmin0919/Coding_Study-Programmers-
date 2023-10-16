function solution(participant, completion) {
    let answer = '';

    participant.sort();
    completion.sort();
    // 우선 참가자 명단과 완주자 명단을 sort 메서드로 오름차순 정렬 합니다. 

    for(let i = 0; i < participant.length; i++) {
    // 그 다음 참가자 명단의 길이만큼 for문을 돌리면서
        if(participant[i] !== completion[i]){
    // 원래는 indexOf를 사용하려고 했는데 실패하는 테스트케이스들이 존재하여 그냥 정렬된 배열들 안의 값 자체들을 놓고 비교하는 방식으로 사용했습니다. 매커니즘은 같은 배열의 위치 상에 참가자 배열에는 존재하는 사람이 완주자 명단에는 없거나 다른 사람일때 완주하지 못한 사람을 answer로 할당하여 반환합니다.
            answer = participant[i];
    // 그 참가자의 정보(값)을 answer에 할당하고
            break;
    // for문 종료.
        }
    }
    return answer;
}
    
