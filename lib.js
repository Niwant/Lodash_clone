import chunk from "./chunk.js"
import filter from "./filter.js"
import find from "./find.js"
import drop from "./drop.js"
import findIndex from './findIndex.js'
import flattenDeep from "./flattenDeep.js"
import merge from "./merge.js"
import omit from "./omit.js"
import pick from "./pick.js"
import compact from "./compact.js"
import includes from "./includes.js"
import difference from "./difference.js"
import get from "./get.js"
import assign from "./assign.js"
import set from "./set.js"
import reduce from "./reduce.js"
import some from "./some.js"
import noConflict from "./noConflict.js"
//import chain from "./chain.js"
import chainew, { chain } from "./chainnew.js"
import groupBy from "./groupBy.js"

const _ ={
    chunk : chunk
}

_.filter = filter
_.find = find
_.drop = drop
_.findIndex = findIndex
_.flattenDeep = flattenDeep
_.merge = merge
_.omit = omit 
_.pick = pick
_.compact = compact
_.includes = includes
_.difference = difference
_.get = get
_.assign = assign
_.set = set
_.reduce = reduce
_.some = some
_.noConflict = noConflict
_.chain = chainew
_.groupBy = groupBy

if(window._==_){
    window._lib = _
}
else{
    window._ = _
}


export default _