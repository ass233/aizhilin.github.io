/**
 * Created by 北狼 on 2016/10/5.
 */
function Person() {
    this.personName ="zs";
    this.personAge = 27;
    this.showInfo = function () {
        alert(this.personName+","+this.personAge)
    }
}