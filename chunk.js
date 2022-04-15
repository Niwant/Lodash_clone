import { chain } from "./chainnew.js";
import { isval } from "./isval.js";
export function sliceIntoChunks(arr, chunkSize) {
    const res = [];
    if(!Array.isArray(arr)){
        console.error("Its not array")
    }
    else{
    if(isval(chunkSize)){
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
  
}
else{
     console.error("Invalid Size")   
}
    }
    return res;
}
chain.prototype.chunk = function(val){
    this.p=abc.sliceIntoChunks(this.p,val)
    return this
}
window.sliceIntoChunks=sliceIntoChunks;