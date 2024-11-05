function zero(){
    if(func){
        return func(0)
    }else{
        return 0
    }
}

function one(func){
    if(func){
        return func(1)
    }else{
        return 1
    }
}
function two(func){
    if(func){
        return func(2)
    }else{
        return 2
    }
}

function three(func){
    if(func){
        return func(3)
    }else{
        return 3
    }
}

function four(func) {
    if(func){
        return func(4)
    }else{
        return 4
    }
}

function five(func) {
    if(func){
        return func(5)
    }else{
        return 5
    }
    
}
function six(func){
    if(func){
        return func (6)
    }else{
        return 6
    }
}

function seven(func) {
    if (func) {
        return func(7)
    } else {
        return 7
    }
}
    function eight(func){
        if(func){
            return func(8)
        }else{
            return 8
        }
    }
    
    function nine(func) {
        if(func){
            return func(8)
        }else{
            return 9
        }
    }


    // maths methods
    
    function plus (a){
        function add (b){
            return a+b
        }
        return add
    }
    console.log(four(plus(five())))
    
    
    function minus (a){
        function sub (b){
            return a-b
        }
        return sub
    }
    console.log(one(minus(four())))
            

function times (a){
    function mul (b){
        return a*b
    }
    return mul    
}
console.log(five(times(nine())))

function dividedBy(a){
    function div (b){
        console.log(b)
        return b/a
    }
    return div
}
console.log(eight(dividedBy(two())))