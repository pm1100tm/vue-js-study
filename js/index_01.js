/** @format */

const app1 = new Vue({
  el: '#app-1',
  data: {
    message: 'First Vue.js lesson 시작'
  }
});

const app2 = new Vue({
  el: '#app-2',
  data: {
    message: '동적으로 바인딩되는거 확인 확인' + new Date()
  }
});

const app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
});

const app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [{ text: 'CSS3 복습' }, { text: 'JavaScript' }, { text: 'Vue.js' }, { text: 'Java' }, { text: 'SpringBoot' }]
  }
});

const app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Vue.js 재밌다 재밌다 재밌다 재밌다..'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('');
    }
  }
});

const app6 = new Vue({
  el: '#app-6',
  data: {
    message: '이것이 Vue.js 다'
  }
});

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

var app7 = new Vue({
  el: '#app-7',
  data: {
    todoList: [
      { id: 0, text: 'todo list 1' },
      { id: 1, text: 'todo list 2' },
      { id: 2, text: 'todo list 3' }
    ]
  }
});
