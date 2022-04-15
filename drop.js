import { isval } from "./isval.js";
import { chain } from "./chainnew.js";

export function drop(arr)
{
if(Array.isArray(arr)) { 
    let x=Object.create(arr)
x.splice(0, arr.length);
return x;
}
else{
    console.log("Its not an Array");
}
}
chain.prototype.drop = function(){
    this.p=abc.drop(this.p)
    return this
}

export function dropupto(arr,val){
    let x=new Array
    
    
    if(Array.isArray(arr)) { 
        x=arr
        
       if(isval(val)) {
    x.splice(0,val)
    
}
else{
    console.error("Invalid Value")
}
}
else{
    console.error("Its not an Array");
}
return x;
}
chain.prototype.dropupto = function(val){
    this.p=abc.dropupto(this.p,val)
    return this
}

export function dropparticular(arr,n)
{
    if(Array.isArray(arr)){
       
    for( var i = 0; i < arr.length; i++){ 
        
    
        if ( arr[i] === n) { 
    
            arr.splice(i, 1); 
        }
    
    }
    return arr;
}
else{
    console.log("Its not an array");
}
}
chain.prototype.dropparticular = function(val){
    this.p=abc.dropparticular(this.p,val)
    return this
}
window.drop=drop;
window.dropparticular=dropparticular;
window.dropupto=dropupto;