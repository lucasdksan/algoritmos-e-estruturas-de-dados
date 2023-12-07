function Queue() {
    this.items = [];

    this.enqueue = function (element) {
        this.items.push(element);
    }

    this.dequeue = function () {
        return this.items.shift()
    }

    this.front = function () {
        return this.items[0];
    }

    this.isEmpty = function () {
        return this.items.length === 0;
    }

    this.size = function () {
        return this.items.length;
    }

    this.print = function () {
        console.log(this.items.toString());
    }
}

function PriorityQueue() {
    this.items = [];

    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }

    this.enqueue = function (element, priority) {
        var queueElement = new QueueElement(element, priority);
        var added = false;

        for (var i = 0; i < this.items.length; i++) {
            if (queueElement.priority < this.items[i].priority) {
                this.items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }

        if (!added) {
            this.items.push(queueElement);
        }
    }

    this.dequeue = function () {
        return this.items.shift();
    }

    this.print = function(){
        for(var i = 0; i < this.items.length; i++){
            console.log(this.items[i].element + " " + this.items[i].priority);
        }
    }
}

function hotPotato(nameList, num){
    var queue = new Queue();

    for(var i = 0; i < nameList.length; i++){
        queue.enqueue(nameList[i]);
    }

    var eliminated = "";

    while(queue.size() > 1){
        for(var i = 0; i < num; i++){
            queue.enqueue(queue.dequeue());
        }

        eliminated = queue.dequeue()
        console.log(eliminated + " was eliminated from the Hot Potato game!");
    }

    return queue.dequeue();
}