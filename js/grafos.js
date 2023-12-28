function Dictionary() {
    var items = {};

    this.set = function (key, value) {
        items[key] = value;
    }

    this.delete = function (key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }

        return false;
    }

    this.has = function (key) {
        return items.hasOwnProperty(key);
    }

    this.get = function (key) {
        return this.has(key) ? items[key] : undefined;
    }

    this.clear = function () {
        items = {};
    }

    this.size = function () {
        return Object.keys(items).length;
    }

    this.keys = function () {
        return Object.keys(items);
    }

    this.values = function () {
        var values = [],
            keys = Object.keys(items);
        for (var i = 0; i < keys.length; i++) {
            values.push(items[keys[i]]);
        }

        return values;
    }

    this.console_log = function () {
        console.log(items)
    }
}

function Queue() {
    var items = [];

    this.enqueue = function (element) {
        items.push(element);
    }

    this.dequeue = function () {
        return items.shift();
    }

    this.front = function () {
        return items[0];
    }

    this.isEmpty = function () {
        return items.length === 0;
    }

    this.size = function () {
        return items.length;
    }

    this.print = function () {
        console.log(items.toString());
    }
}

function Graph() {
    var vertices = [];
    var adjList = new Dictionary();

    var initializeColor = function () {
        var color = [];
        for (var i = 0; i < vertices.length; i++) {
            color[vertices[i]] = "white";
        }
        return color;
    }

    var dfsVisit = function(u, color, callback){
        color[u] = "grey";
        callback(u);

        var neightbors = adjList.get(u);
        for(var i = 0; i < neightbors.length; i++){
            var w =neightbors[i];
            if(color[w] === "white"){
                dfsVisit(w, color, callback);
            }
        }
        color[u] = "black";
    }

    this.addVertex = function (v) {
        vertices.push(v);
        adjList.set(v, []);
    }

    this.addEdge = function (v, w) {
        adjList.get(v).push(w);
        adjList.get(w).push(v);
    }

    this.toString = function () {
        var s = "";
        for (var i = 0; i < vertices.length; i++) {
            s += vertices[i] + "->";
            var neightbors = adjList.get(vertices[i]);
            for (var j = 0; j < neightbors.length; j++) {
                s += neightbors[j] + "  "
            }
            s += " \n "
        }

        return s;
    }

    this.bfs = function (v, callback) {
        var color = initializeColor();
        var queue = new Queue();

        queue.enqueue(v);

        while (!queue.isEmpty()) {
            var u = queue.dequeue();
            var neightbors = adjList.get(u);
            
            color[u] = "grey";
        
            for (var i = 0; i < neightbors.length; i++) {
                var w = neightbors[i];
                
                if (color[w] === "white") {
                    color[w] = "grey";
                    queue.enqueue(w);
                }
                
            }

            color[u] = "black";
            
            callback(u);
        }
    }

    this.dfs = function (callback) {
        var color = initializeColor();
        for(var i = 0; i < vertices.length; i++){
            if(color[vertices[i]] === "white"){
                dfsVisit(vertices[i], color, callback)
            }
        }
    }
}

const graph = new Graph();
const arr = ["A", "B", "C", "D", "E", "F", "G", "H"];

function printNode(v) {
    console.log("Visited vertex: ", v);
}

arr.forEach((v) => graph.addVertex(v));

graph.addEdge("A", "H");
graph.addEdge("A", "G");
graph.addEdge("B", "H");
graph.addEdge("B", "G");
graph.addEdge("C", "E");
graph.addEdge("C", "F");
graph.addEdge("D", "F");
graph.addEdge("D", "E");
graph.addEdge("E", "B");
graph.addEdge("E", "C");
graph.addEdge("F", "C");
graph.addEdge("F", "B");
graph.addEdge("G", "A");
graph.addEdge("G", "D");
graph.addEdge("H", "D");
graph.addEdge("H", "A");

console.log(graph.toString());

graph.bfs(arr[0], printNode);
graph.dfs(printNode)