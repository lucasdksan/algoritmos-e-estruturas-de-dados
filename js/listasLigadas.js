function LinkedList() {
    this.Node = function (element) {
        this.element = element;
        this.next = null;
    }

    this.length = 0;
    this.head = null;

    this.append = function (element) {
        var node = new this.Node(element),
            current;

        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next != null) {
                current = current.next;
            }

            current.next = node;
        }

        this.length++;
    }

    this.insert = function (position, element) {
        if (position >= 0 && position < this.length) {
            var node = new this.Node(element),
            current = this.head,
            previous,
            index = 0;

            if(position === 0){
                node.next = current;
                this.head = node;
            } else {
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }

                node.next = current;
                previous.next = node
            }

            this.length++;
            return true;
        } else {
            return false;
        }
    }

    this.removeAt = function (position) {
        if (position > -1 && position < this.length) {
            var current = this.head,
                previous,
                index = 0;

            if (position === 0) {
                this.head = current.next;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }

                previous.next = current.next
            }
            this.length--;

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
        return this.head.element;
    }

    this.getElement = function (position){
        var current = this.head;

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
        var current = this.head,
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
        return this.length === 0;
    }

    this.size = function () {
        return this.length;
    }

    this.toString = function () {
        var current = this.head,
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


const ll = new LinkedList();
const arr = ["Lucas", "Aline", "Leonardo", "Alda"];

arr.forEach((name)=>{
    ll.append(name);
});