import {chain}from"./chainnew.js"

function difference(arr,values){
    let x= new Array
    if(arr instanceof Array && values instanceof Array){
        for(let i=0 ; i<arr.length; i++){
            if(!values.includes(arr[i])){
                x.push(arr[i])
            }
        }
    }
    else{
        console.error("Not an Array Type")
    }
  
    return x

}

chain.prototype.difference = function(values){
    this.target = _.difference(this.target,values)
    return this
}

export default difference
