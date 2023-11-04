function solution(n, lost, reserve) {
    
    let answer = 0;
    
    // 체육복을 도난당하고 여벌이 없는 학생을 선별합니다. 옷을 잃어버렸는데 여벌의 옷이 있다? 말이 되지 않죠.
    let noReserveLost = lost.filter((lost) => !reserve.includes(lost)).sort();
    
    // 마찬가지로 여벌이 있고 체육복을 도난당하지 않은 학생을 선별합니다. 반대로 체육복을 도난 당하지 않았는데 여벌의 옷이 없다면 그것 또한 넌센스일 것입니다.
    let hasReserve = reserve.filter((reverse) => !lost.includes(reverse)).sort();
    
     for (let i = 0; i < hasReserve.length; i++) {
    // for문을 hasReserve 배열의 길이만큼 돌려서
    if (noReserveLost.includes(hasReserve[i] - 1)) {
        // 만약 noR 배열에 haR 배열에 현재 학생(i) 사이즈에서 작은 치수의 값(빌려줄 수 있는 범위)을 가진 학생이 있다면
          noReserveLost = noReserveLost.filter(v => v !== hasReserve[i] - 1);
        // 해당 noR 배열에서 filter로 해당 학생을 제거합니다.(filter 함수로 값을 거짓으로 만들어 해당 요소를 삭제하고 새 배열로 noR 배열에 다시 반환 받습니다.)
    } else if (noReserveLost.includes(hasReserve[i] + 1)) {
        // 위 if문과 조건이 같되 이번엔 한 치수 큰 학생을 찾습니다.
      noReserveLost = noReserveLost.filter(v => v !== hasReserve[i] + 1);
        // 조건에 만족하면 또한 그 학생도 noR 배열에서 삭제합니다.
    }
  }

  return n - noReserveLost.length;
  // 위 코드에서 빌려줄 수 있는 학생들은 noR 배열에서 삭제를 했기 때문에 실질적으로 noR에 남은 학생들은 빌릴수도, 여분도 없는 학생들일 것입니다. 그러므로 현재 학생수에서 체육복이 없는 학생(길이)을 빼면 수업을 들을 수 있는 학생의 수가 나오게 되는 것이죠.
}