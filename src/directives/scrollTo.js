var Vue = require('vue')
var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo,
  {
    container: 'body',
    duration: 2000,
    easing: 'ease',
    offset: 0,
    cancelable: true,
    onDone: false,
    onCancel: false,
    x: false,
    y: true}
)
