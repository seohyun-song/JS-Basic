function divideBy2(decNumber){
    var remStack = new Stack();
    var rem;
    var binaryString = '';

    while(decNumber > 0){
        //자바스크립트는 숫자형 데이터 타입이 있을 뿐 정수와 부동소수점을 구분하지 않음
        rem = Math.floor(decNumber%2);
        remStack.push(rem);
        decNumber = Math.floor(decNumber/2);

        
    }
    while(!remStack.isEmpty()){
        binaryString += remStack.pop().toString();
    }
    return binaryString;
}

function Stack() {
    //스택의 원소를 담아둘 자료구조
    var items = [];

    //스택의 꼭대기에 새 원소(들)를 추가
    this.push = function(element){
        items.push(element);
    };

    //스택 꼭대기에 있는 원소를 반환하고 해당 원소는 스택에서 제거
    this.pop = function(){
        return items.pop();
    };

    //peek은 일종의 헬퍼메소드로 스택에 가장 마지막으로 추가된 원소를 확인하는 용도로 사용
    this.peek = function(){
        return items[items.length-1];
    };

    //isEmpty메소드는 스택이 비어있으면 true를 아니면 false를 반환
    this.isEmpty = function(){
        return items.length == 0;
    };

    //스택의 원소개수를 반환.배열의 length프로퍼티와 비슷
    this.size = function(){
        return items.length;
    };

    //스택의 모든 원소를 삭제함
    this.clear = function(){
        items = [];
    };

    //스택에 쌓인 내용물을 콘솔에서 확인 해보는 헬퍼메소드
    this.print = function(){
        console.log(items.toString());
    };
}
