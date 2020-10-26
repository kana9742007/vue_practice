new Vue({
  el: '#app', //el=element
  data: {
    message: 'テキストのデータバインディング',
    count: 0,
    user: {
      lastName: 'kakinuma',
      firstName: 'kana',
      prefecture: 'Tokyo'
    },
    colors: ['Red','Green','Blue']
  }
})