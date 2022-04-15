import  "../main.js"

class chain {
    constructor(arr){
        this.p = arr
    }
}

function chainnew(val){

    var c =new chain(val)
    //console.log(c)
    return c

}

chain.prototype.end = function(){
    return this.p
}

export {chain}
export default chainnew