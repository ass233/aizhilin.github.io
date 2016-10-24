/**
 * Created by 北狼 on 2016/9/7.
 */
/*
1、
function CreatePerson(name) {
    var obj = new  Object();
    obj.name = name;
    obj.showName = function () {
        alert(this.name);
    }

    return obj;
}*/
function CreatePerson(name) {
    this.name = name;
}

CreatePerson.prototype.showName = function () {
    alert(this.name);
}
