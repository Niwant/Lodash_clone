import { chain } from "./chainnew.js";

function set(obj, keys, val){
  keys = Array.isArray(keys) ? keys : keys.replace(/(\[(\d)\])/g, '.$2').split('.');
  const len = keys.length
  for (let i = 0; i < len - 1; i++) {
    const elem = keys[i];
    if (!obj[elem] || !typeof obj[elem] == "Object") {
      obj[elem] = {};
    }
    obj = obj[elem];
  }

  // set value to second last key
  obj[keys[len - 1]] = val;
  return obj === undefined ? null : obj;
}

chain.prototype.set = function(keys,val){
  this.target = _.set(this.target,keys,val)
  return this
}

export default set