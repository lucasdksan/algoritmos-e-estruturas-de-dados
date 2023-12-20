function HashTable(){
    var table = [];

    this.put = function(key, value){
        var position = losoloseHashCode(key);
        table[position] = value;
    }

    this.remove = function(key){
        table[losoloseHashCode(key)] = undefined;
    }

    this.get = function(key){
        return table[losoloseHashCode(key)];
    }

    this.console_log = function(){
        console.log(table);
    }

    var losoloseHashCode = function(key){
        var hash = 0;

        for(var i = 0; i < key.length; i++){
            hash += key.charCodeAt(i);
        }

        return hash % 37;
    }   
}

const table = new HashTable();

