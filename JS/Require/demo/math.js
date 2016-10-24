/**
 * Created by 北狼 on 2016/9/30.
 */
define(['num'],function (num) {
    return{
        getRadom:function () {
            return parseInt(Math.random()*num);
        }
    };
});