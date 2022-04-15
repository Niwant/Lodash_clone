import {chain}from"./chainnew.js"

export function getdifferenceleft(arr,values){
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
    this.p = abc.getdifferenceleft(this.p,values)
    return this
}


