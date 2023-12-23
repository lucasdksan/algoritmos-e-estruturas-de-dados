function LinkedList() {
    var Node = function (element) {
        this.element = element;
        this.next = null;
    }

    var length = 0;
    var head = null;

    this.append = function (element) {
        var node = new Node(element),
            current;

        if (head === null) {
            head = node;
        } else {
            current = head;

            while (current.next != null) {
                current = current.next;
            }

            current.next = node;
        }

        length++;
    }

    this.insert = function (position, element) {
        if (position >= 0 && position < length) {
            var node = new Node(element),
            current = head,
            previous,
            index = 0;

            if(position === 0){
                node.next = current;
                head = node;
            } else {
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }

                node.next = current;
                previous.next = node
            }

            length++;
            return true;
        } else {
            return false;
        }
    }

    this.removeAt = function (position) {
        if (position > -1 && position < length) {
            var current = head,
                previous,
                index = 0;

            if (position === 0) {
                head = current.next;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }

                previous.next = current.next
            }
            length--;

            return current.element;
        } else {
            return null;
        }
    }

    this.remove = function (element) {
        var index = this.indexOf(element);

        return this.removeAt(index);
    }

    this.getHead = function (){
        return head.element;
    }

    this.getElement = function (position){
        var current = head;

        if (position >= 0 && position < this.size()) {
            for(var index = 0; index <= position; index++){
                if(index === position){
                    return current.element;
                }

                current = current.next;
            }
        }

        return -1;
    }

    this.indexOf = function (element) {
        var current = head,
        index = 0;

        while(current) {
            if(element === current.element){
                return index;
            }
            
            index++;
            current = current.next;
        }

        return -1;
    }

    this.isEmpty = function () {
        return length === 0;
    }

    this.size = function () {
        return length;
    }

    this.toString = function () {
        var current = head,
            string = "";

        while (current) {
            string += current.element + " ";
            current = current.next;
        }

        return string;
    }

    this.print = function () {
        console.log(this.toString());
    }
}

function HashTable(){
    var table = [];

    var ValuePair = function(key, value){
        this.key = key;
        this.value= value;

        this.toString = function(){
            return '[' + this.key + ' - ' + this.value + ']';
        }
    }

    // this.put = function(key, value){
    //     var position = losoloseHashCode(key);
    //     table[position] = value;
    // }

    this.put = function (key, value) { 
        var position = losoloseHashCode(key);

        if(!table[position]) {
            table[position] = new LinkedList();
        }

        table[position].append(new ValuePair(key, value));
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

