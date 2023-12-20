function Stack(){
    var items = [];

    this.push = function(element){
        items.push(element);
    }

    this.pop = function(){  
        return items.pop();
    }

    this.peek = function(){
        return items[items.length - 1];
    }

    this.isEmpty = function(){
        return items.length === 0;
    } 

    this.clear = function(){
        items = [];
    }

    this.size = function(){
        return items.length;
    }

    this.print = function(){
        var size = this.size();
        for(var i = 0; i < size; i++){
            return items[i];
        }
    }
}

function dec2Bin(value){
    var restStack = [];
    var restStack;
    var binaryString = "";

    while(value > 0){
        rest = Math.floor(value % 2);
        restStack.push(rest);
        value = Math.floor(value / 2);
    }

    while(restStack.length > 0){
        binaryString += restStack.pop().toString();
    }

    return binaryString;
}

function baseConverter(decNumber, base){
    var restStack = [],
    rest,
    baseString = "",
    digits = "0123456789ABCDEF";

    while(decNumber > 0){
        rest = Math.floor(decNumber%base);
        restStack.push(rest);
        decNumber = Math.floor(decNumber / base);
    }

    while(restStack.length > 0) {
        baseString += digits[restStack.pop()];
    }

    return baseString;
}