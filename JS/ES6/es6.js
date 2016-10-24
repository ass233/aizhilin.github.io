/**
 * Created by 北狼 on 2016/9/26.
 */
var s = new Set();
 [2,3,5,4,5,2,2].map(x => s.add(x))
 for(i of s){
 console.log(i);//2 3 5 4
 }

var set = new Set([1,2,3,4,5]);
//[...set]
//[1,2,3,4]

var item = new Set([1,2,3,4,5,5,5,5])
console.log(item.size); //5
