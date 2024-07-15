const bindFunc = function(fn, context){
    var args = [].slice.apply(arguments,[2]);
    return function(){
        const finalArgs = [].slice.apply(arguments);
        return fn.apply(context, args.concat(finalArgs))
    }
}