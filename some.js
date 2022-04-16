import { chain } from "./chainnew.js"
import find from "./find.js"

function arraySome(array,predicate){
    const length = array == null? 0: array.length
    for(var index =0 ; index <length ; index++){
         if(predicate(array[index],index,array)){
             return true
         }
        
    }
    return false
}

function objectSome(obj,predicate){
    if(typeof predicate == 'function'){
        for(let x of Object.keys(obj)){
            if(predicate(obj[x],x,obj)){
                return true
            }
        }
    }
    else{
        if(find(obj,predicate)){
            return true
        }
    }
    return false

}


function some(target,predicate){
    if(Array.isArray(target)){
        if(typeof target[0]!= "object") return arraySome(target,predicate)
        return objectSome(target,predicate)
    }
    target =[target]
    return objectSome(target,predicate)
    

}

chain.prototype.some = function(predicate){
    this.target = _.some(this.target,predicate)
    return this
}

export default some