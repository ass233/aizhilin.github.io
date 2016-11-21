/**
 * Created by 北狼 on 2016/11/20.
 */
var Calculator = function (eq) {
    var eqCtl = document.getElementById(eq);
    return {
        //暴露公开的成员
        add:function (x,y) {
            var val = x + y;
            eqCtl.innerHTML = val;
        }

    }
}