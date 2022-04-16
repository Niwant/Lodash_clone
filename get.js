import { chain } from "./chainnew.js";

function get(object,keys,defaultVal=null){
    keys = Array.isArray(keys) ? keys : keys.replace(/(\[(\d)\])/g, '.$2').split('.');
    object = object[keys[0]];
    if (object && keys.length > 1) {
      return this.get(object, keys.slice(1), defaultVal);
    }
    
    return object === undefined ? defaultVal : object;
  

}

chain.prototype.get = function(keys, defaultVal=null){
  this.target = _.get(this.target,keys,defaultVal)
  return this
}

export default get