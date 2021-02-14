/** @format */

const app1 = new Vue({
  el: '#app-1',
  data: {
    msg: 'test'
  }
});

const app2 = new Vue({
  el: '#app-2',
  data: {
    msg: 'test1',
    msg2: 'test2',
    test: 'test3',
    rawHtml: '<a href="http://www.google.com">test</a>',
    isButtonDisabled: false
  }
});

const app3 = new Vue({
  el: '#app-3',
  data: {
    rawHtml: '<a href="http://www.google.com">test</a>',
    dynamicId: 'id',
    isButtonDisabled: false
  }
});

const app4 = new Vue({
  el: '#app-4',
  data: {
    number: 1,
    ok: 'NO',
    message: 'TEST',
    list: 'list'
  }
});
