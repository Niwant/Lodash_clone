import { chain } from "./chainnew.js"

function includes(collect,val){
    if(collect instanceof Array){
        for(let  n of collect){
            if(n instanceof Object){
                for(let x of Object.keys(n)){
                    if(n[x]==val){
                        return true
                    }
                }
            }
            else if(n==val){
                return true
            }
        }
    }
    if(collect instanceof Object){
        for(let x of Object.keys(collect)){
            if(collect[x]==val){
                return true
            }
        }

    }
    if(typeof collect =="string"){
        if(collect.match(val)){
            return true
        }
    }
return false
}

chain.prototype.includes = function(val){
    this.target = _.includes(this.target,val)
    return this
}

export default includes
