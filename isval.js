export function isval(val){
    if(val<0 || val==undefined || val==null || typeof val==="string" || val==false || val == NaN)
    {
        return false
    }
        return true

}