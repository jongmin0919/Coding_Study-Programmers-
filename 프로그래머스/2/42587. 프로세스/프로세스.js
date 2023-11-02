// 

function solution(priorities, location) {
    const copyPriorities = [...priorities]; // 우선순위 배열을 복사
    const dataset = priorities.map((priority, idx) => ({ priority, idx })); // 각 작업의 우선순위와 인덱스를 저장하는 배열 생성
    let excuteCount = 0; // 실행된 작업 수 초기화

    while (dataset.length !== 0) { // 대기열이 비어 있지 않을 동안 반복
        const maxValue = Math.max(...copyPriorities); // 가장 높은 우선순위를 찾음
        const { priority, idx } = dataset.shift(); // 대기열에서 첫 번째 작업 추출

        if (priority >= maxValue) { // 현재 작업의 우선순위가 가장 높은 우선순위와 같거나 높을 경우
            excuteCount++; // 작업을 실행하고 실행된 작업 수 증가
            copyPriorities[idx] = 1; // 해당 작업의 우선순위를 임의의 낮은 값(1)으로 설정
            if (idx === location) { // 현재 작업의 인덱스가 입력된 위치(location)와 일치하면
                break; // 반복문 종료
            }
        } else {
            dataset.push({ priority, idx }); // 현재 작업의 우선순위가 가장 높은 우선순위보다 낮으면 다시 대기열에 넣음
        }
    }
    return excuteCount; // 입력된 위치의 작업이 몇 번째로 실행되었는지 반환
}