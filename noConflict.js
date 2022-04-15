import _ from "./lib.js";

export function noConflict(val,present="_"){
    if (window[present]===_){
        window[val]=abc
        window[present]=undefined
    }

}
