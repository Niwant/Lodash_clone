import { chain } from "./chainnew.js"

function assign(tar,src){
    if(typeof src == "object" && typeof tar == "object"){
        for(var x of Object.keys(src)){
            tar[x]=src[x]
        }
        

    }
    else{
        console.error("Both should be objects")
    }
    return tar
}
chain.prototype.assign = function(src){
    this.target = _.assign(this.target,src)
    return this
}
export default assign