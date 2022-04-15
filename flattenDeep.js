import { chain } from "./chainnew.js";
export function flattenDeep(ary) {
    if(Array.isArray(ary)){
    var ret = [];
    for(var i = 0; i < ary.length; i++) {
        if(Array.isArray(ary[i])) {
            ret = ret.concat(flattenDeep(ary[i]));
        } else {
            ret.push(ary[i]);
        }
    }
    return ret;
}
else{
    console.error("Its not an array");
}
}
chain.prototype.flattenDeep = function(){
    this.target=_.flattenDeep(this.target)
    return this
}
