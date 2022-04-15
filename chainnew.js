import  "./lib.js"

class chain {
    constructor(arr){
        this.target = arr
    }
}

function chainnew(val){

    var c =new chain(val)
    //console.log(c)
    return c

}

chain.prototype.end = function(){
    return this.target
}

export {chain}
export default chainnew