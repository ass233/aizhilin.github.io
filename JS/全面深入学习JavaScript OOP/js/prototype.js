/**
 * Created by 北狼 on 2016/10/6.
 */
Object.extend = function (destination,source) {
    for (prototype in source){
        destination[prototype] = source[prototype];
    }
    return destination;
}
Object.prototype.extend = function (object) {
    return Object.extend.apply(this,[this, object]);
}