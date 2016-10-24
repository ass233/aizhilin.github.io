/**
 * Created by 北狼 on 2016/9/30.
 */
define([], function () {
       return {
            formatNum: function (n) {
              if (n < 10) return '0' + n;
              return n;
            }
       };
     });