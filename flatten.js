import { chain } from "./chainnew.js";
export function flatten(ary) {
    if(Array.isArray(ary)){
    var ret = [];
    for(var i = 0; i < ary.length; i++) {
        if(Array.isArray(ary[i])) {
            ret = ret.concat(flatten(ary[i]));
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
chain.prototype.flatten = function(){
    this.p=abc.flatten(this.p)
    return this
}
window.flatten=flatten;