/**
 * Created by 北狼 on 2016/10/6.
 */
Function.prototype.inherit = function (baseClass) {
    for (var p in baseClass.prototype){
        this.prototype[p] = baseClass.prototype[p];
    }
}