import { chain } from "./chainnew.js"

function pick(obj,val){
    let nobj = new Object
    if(Array.isArray(val) && typeof obj =="object"){
        for(let x of val){
            if(obj[x]!= undefined){
                nobj[x] = obj[x]
            }
        }
    }
    else{
        if(obj[val]!= undefined){
            nobj[val]=obj[val]
        }
    }
    return nobj

}

chain.prototype.pick = function(val){
    this.target = _.pick(this.target,val)
    return this
}

export default pick