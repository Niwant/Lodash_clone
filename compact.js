import { isfalsy } from "./isfalsy.js"
import { chain } from "./chainnew.js"

function compact(arr){
    let x = new Array
    if(arr instanceof Array){
        
        for(let i=0 ; i<arr.length;i++){
            if(isfalsy(arr[i])){
                x.push(arr[i])
            }
            
        }
      
    }
    else{
        console.error("Not array Type")
    }
    return x
}
chain.prototype.compact = function(){
    this.target=_.compact(this.target)
    return this
}

export default compact