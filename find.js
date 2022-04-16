import { chain } from "./chainnew.js"

function find(collect,val){
    if(val instanceof Array){
        if(val.length>1){
            let x ={}
            
            for(let i=0 ; i<val.length ; i+=2){
                x[val[i]] = val[i+1]

            }
            for(var n of collect){
                let flag = false
                for(var k of Object.keys(x)){
                  
                    if(n[k]==x[k]){
                        flag = true
                    }
                    else{
                        flag = false
                        break
                    }
                }
                if(flag){
                    return n
                }
            }
        }
    }
    if(typeof val == "string"){
        for(var n of collect){
            if(n[val]){
                return n
            }
        }
    }
    if(val instanceof Object){
        for(var n of collect){
            let flag = false
            for(var k of Object.keys(val)){
                if(n[k]==val[k]){
                    flag = true
                }
                else{
                    flag = false
                    break
                }
            }
            if(flag){
                return n
            }
        }
    }

}

chain.prototype.find = function(val){
    this.target = _.find(this.target,val)
    return this

}
export default find