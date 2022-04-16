import _ from "./lib.js"

let collect = [
    {'a':5 , 'b':12 ,'c':true ,'d':NaN },
    {'e':55,'b':22,'x':25}
]
let obj ={'a':[{'z':[55,66]},8] , 'b':12 ,'c':15 ,'d':30 }
let abj ={'e':55,'b':22,'x':25,'f':55 ,'j':55}
let arr=[2,5,6,4,8,7,8,7,null,NaN]

// console.log(_.includes(collect,99))
// console.log(_.chunk(arr,2))

// console.log(_.assign({},abj))
// console.log(_.set(obj,'f',88))
// console.log(obj)
// console.log(_.reduce([1,2,5],function(sum,n){
//     return sum + n*n
// },0))
// console.log(_.some(arr,Number))


// console.log(_.assign(obj,abj))

//console.log(_.chain(obj).get('b').end())

// console.log(_.chain(arr).compact().end())
// _.noConflict('c')
// _.noConflict('d','c')

// console.log(_.reduce(arr,function(result,value,key){
//     result+=value
//     return result

// },0))

//console.log(_.some(abj,['e',55]))

