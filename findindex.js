import { chain } from "./chainnew.js"
function findIndex(arraytosearch, valuetosearch) {
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
    chain.prototype.findIndex = function(val){
        this.target=_.findIndex(this.target,val)
        return this
    }
    
export default findIndex