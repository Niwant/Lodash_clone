import assign from "./assign.js"
import { chain } from "./chainnew.js"

function omit(obj,val){
    let g = assign({},obj)
    console.log(g)
    if(Array.isArray(val)&& typeof obj =="object"){
        for(let x of val ){
            if(obj[x]!= undefined){
                delete g[x]
            }
        }
    }
    else{
        delete g[val]
    }
    return g
}

chain.prototype.omit = function(val){
    this.target = _.omit(this.target,val)
    return this
}


export default omit