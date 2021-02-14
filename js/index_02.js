/** @format */

// var vm = new Vue({
//   // 옵션
// });

/* 데이터 객체 */
let testData = {
  a: 1
};

/* Vue 인스턴스에 데이터 객체를 추가함 */
let vm = new Vue({
  data: testData
});

/* 인스턴스에 있는 속성은 원본 데이터의 값을 반환한다. */
console.log(testData.a === vm.a);

/* 인스턴스에 있는 값을 변경하면, 원본 데이터에 영향을 미침. 그 반대도 마찬가지임 */
vm.a = 2;
console.log(testData.a);

testData.a = 3;
console.log(vm.a === 3);

// 데이터가 변경되면 화면은 다시 렌더링 된다.
// 유의할 점은 data 에 있는 속성들은 인스턴스가 생서될 때 존재한 것들만 반응형이라는 것.
// 즉, 아래의 코드에 b 가 변경되어도 화면은 갱신되지 않는다.
vm.b = 'test';

// 따라서, 어떤 속성이 나중에 필요하다는 것을 알고 있고, 빈 값이거나 존재하지 않은 상태로 시작한다면 초기 값을 지정할 필요가 있다.

let testData2 = {
  newTodoText: '',
  visitCount: 0,
  hideCompletedTodoList: false,
  todos: [],
  error: null
};

// 유일한 예외는 Object.freeze() 를 사용한 경우. 이는 기존 속성이 변경되는 것을 막아, 반응형 시스템이 추적할 필요가 없다는 것을 알림.
let obj = {
  foo: 'bar'
};

Object.freeze(obj);

new Vue({
  el: '#app-1',
  data: obj
});

/* Vue 인스턴스는 데이터 속성 이외에도 유용한 인스턴스 속성 및 메소드를 제공.
다른 사용자 정의 속성과 구분하기 위해 $ 접두어를 붙인다.*/

let testData3 = {
  a: 1
};

const vm2 = new Vue({
  el: '#example',
  data: testData3
});

console.log('vm2.data === testData3', vm2.$data === testData3);
console.log('compare el', vm2.$el === document.getElementById('example'));

console.clear();
vm2.$watch('a', function (newVal, oldVal) {
  // vm2.a 가 변경되면 호출 됨
  console.log(oldVal);
  console.log(newVal);
  console.log('호출되어랏!');
});

testData3.a = '한 번 바꿔보고';
vm2.$data.a = '두 번 바꿔보고';

/* 인스턴스 라이프사이클 훅 */
// 각 Vue 인스턴스는 생성될 때 일련의 초기화 단계를 거치는데,
// - 데이터 관찰 설정이 필요한 경우
// - 템플릿을 컴파일 하는 경우
// - 인스턴스를 DOM 에 마운트 하는 경우
// - 데이터가 변경되어 DOM 를 업데이트하는 경우
// 이 과정에서 라이프사이클 훅 도 호출 된다.
// 예를 들어, created 훅은 인스턴스가 생성된 후에 호출된다.

new Vue({
  data: {
    a: 1
  },
  created: function () {
    // this 는 vm 인스턴스를 가리킨다.
    console.log('a is: ' + this.a);
  }
});
