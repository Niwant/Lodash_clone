import { chain } from "./chainnew.js"


function arrayReduce(array,iteratee,accumulator,initAccum){
    let index =-1
    const length = array ==null? 0: array.length

    if(initAccum && length){
        accumulator = array[++index]
    }
    while(++index<length){
        accumulator=iteratee(accumulator,array[index],index,array)
    }
    return accumulator
}

function baseReduce(obj,iteratee,accumulator,initAccum){
    
    for (var x of Object.keys(obj)){
        console.log(x)
        accumulator = iteratee(accumulator,obj[x],x,obj)

    }
       

    return accumulator


}

function reduce(collection , iteratee , accumulator){
 const func = Array.isArray(collection)? arrayReduce : baseReduce
 const initAccum = arguments.length<3
 return func(collection,iteratee,accumulator,initAccum)

}

chain.prototype.reduce = function(iteratee,accumulator){
    this.target = _.reduce(this.target,iteratee,accumulator)
    return this
}
export default reduce