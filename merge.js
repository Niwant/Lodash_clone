import { chain } from "./chainnew.js"
import assign from "./assign.js"

function merge(target, source){
    
    for(const key of Object.keys(source)){
    
    if(source[key] instanceof Object) assign(source[key],merge(target[key],source[key]))
    
    }
    
    
    assign(target|| {},source)
    
    return target
}

chain.prototype.merge = function(val){
    this.target = _.merge(this.target,val)
    return this
}
export default merge