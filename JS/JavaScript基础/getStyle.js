/**
 * Created by 北狼 on 2016/8/26.
 */
function getStyle(obj,sName) {
    return obj.currentStyle?obj.currentStyle[sName]:getComputedStyle(obj,false)[sName];
}