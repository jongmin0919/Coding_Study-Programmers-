function solution(array, commands) {
    var answer = [];
    // 정답을 담을 배열 선언
    for (let i = 0; i < commands.length; i++) {
    // 입력 받은 commands 배열의 길이만큼 반복 하면서
        const newArr = array.slice(commands[i][0]-1, commands[i][1]);
    // 전달 받은 원본 배열을 slice로 자르는데, commands의 각 배열에서 첫번째와 두번째 인덱스는 값의 범위를 지정하므로 commands의 각 배열들(i)의 첫번째 인덱스[0] 와 두번째 인덱스[1]을 범위로 지정합니다. 
        
    // 예를 들어 array ,배열인 [1, 5, 2, 6, 3, 7, 4] 에서 첫번째 커맨드가 [2,5,3] 이라고 할때 2번째부터 다섯번째 까지인 5,2,6,3을 가져와야 하므로 commands[1][0] 부터 commands[1][1] 까지의 범위를 정하면 2와 5를 지정할 수 있는데, 다만 slice는 인덱스의 범위를 지정하므로 저 값을 고대로 넣게 되면 배열의 2번째 인덱스인 2부터 다섯번째 인덱스 바로 전 4번째 인덱스인 3까지(slice의 end point 동작은 n-1 임.)의 범위로 잡기 때문에 시작 인덱스를 n-1 시켜줍니다. 이렇게 되면 우리가 원하는 두번째 부터 다섯번째 까지인 5,2,6,3의 범위를 지정 해줄수 있습니다.
        newArr.sort((a, b) => a - b);
        // 다시 돌아와 위의 작업이 끝나면 복사된 배열을 sort 메서드로 오름차순 시켜주고
        answer.push(newArr[commands[i][2]-1]);
        // answer 배열에 정렬 된 newArr 배열의 commands[0][2]-1 번째 값을 push 해줍니다.,
    }
    return answer;
    // 작업이 끝난 후 answer 반환
}

