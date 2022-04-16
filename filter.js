import { chain } from "./chainnew.js"

function filter(collect , val){
    let fin=[]
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
                    fin.push(n)
                }
                
            }
        }
    }
    if(typeof val == "string"){
        for(var n of collect){
            if(n[val]){
                fin.push(n)
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
                fin.push(n)
            }
        }
    }

return fin
}

chain.prototype.filter = function(val){
    this.target = _.filter(this.target,val)
    return this
}

export default filter