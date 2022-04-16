function groupBy(item,f){
    var groups = {}
    item.forEach(function( o ){
        var group = f(o)
        groups[group] = groups[group] || []
        groups[group].push(o)
    })
    return groups
}


export default groupBy