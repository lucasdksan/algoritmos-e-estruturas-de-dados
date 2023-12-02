function Stack(){
    this.items = [];

    this.push = function(element){
        this.items.push(element);
    }

    this.pop = function(){  
        return this.items.pop();
    }

    this.peek = function(){
        return this.items[items.length - 1];
    }

    this.isEmpty = function(){
        return this.items.length === 0;
    } 

    this.clear = function(){
        this.items = [];
    }

    this.size = function(){
        return this.items.length;
    }

    this.print = function(){
        var size = this.size();
        for(var i = 0; i < size; i++){
            return this.items[i];
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