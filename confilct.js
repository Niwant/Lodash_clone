import abc from "../main.js";

export function conflictresolve(val,present="abc"){
    if (window[present]===abc){
        window[val]=abc
        window[present]=undefined
    }

}
