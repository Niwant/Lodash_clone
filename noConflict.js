import _ from "./lib.js";

function noConflict(val,present="_"){
    if (window[present]===_){
        window[val]=abc
        window[present]=undefined
    }

}

export default noConflict