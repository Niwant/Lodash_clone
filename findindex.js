import { chain } from "./chainnew.js";
export function findindex(arraytosearch, valuetosearch) {
    if(Array.isArray(arraytosearch)){
    for (var i = 0; i < arraytosearch.length; i++) {

    if (arraytosearch[i] == valuetosearch) {
    return i;
    }
    
        
   
    }
    console.error("Undefined Value")
}
    else{
        console.error("Its not an array");
    }
    }
    chain.prototype.findindex = function(val){
        this.p=abc.findindex(this.p,val)
        return this
    }
    window.findindex=findindex;