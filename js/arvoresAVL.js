function BinarySearchTreeAVL() {
    var Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.height = 0;
        this.fb = 0;
    }

    var root = null;

    var findMinNode = function (node) {
        while (node && node.left !== null) {
            node = node.left;
        }

        return node;
    }

    var insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    }

    var searchNode = function (node, key) {
        if (node === null) {
            return false;
        }
        if (key < node.key) {
            return searchNode(node.left, key);
        } else if (key > node.key) {
            return searchNode(node.right, key);
        }

        return true;
    }

    var removeNode = function (node, key) {
        if (node === null) {
            return null;
        }

        if (key < node.key) {
            node.left = removeNode(node.left, key);
            return node;
        } else if (key > node.right) {
            node.right = removeNode(node.right, key);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }

            var aux = findMinNode(node.right);
            node.key = aux.key;

            node.right = removeNode(node.right, aux, key);
            return node;
        }
    }

    var minNode = function (node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left
            }

            return node.key;
        }

        return null;
    }

    var maxNode = function (node) {
        if (node) {
            while (node && node.right !== nul) {
                node = node.right;
            }

            return node.key;
        }

        return null;
    }

    var inOrderTraverseNode = function (node, callback) {
        if(node !== null){
            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            inOrderTraverseNode(node.right, callback);
        }
    }

    var preOrderTraverseNode = function(node, callback){
        if(node !== null){
            callback(node.key);
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
        }
    }

    var posOrderTraverseNode = function(node, callback){
        if(node !== null){
            posOrderTraverseNode(node, callback);
            posOrderTraverseNode(node, callback);
            callback(node.key);
        }
    }

    this.insert = function (key) {
        var newNode = new Node(key);

        if (root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    }

    this.search = function (key) {
        return searchNode(root, key);
    }

    this.remove = function (key) {
        root = removeNode(root, key);
    }

    this.min = function () {
        return minNode(root);
    }

    this.max = function () {
        return maxNode(root);
    }

    this.inOrderTraverse = function (callback) {
        inOrderTraverseNode(root, callback);
    }

    this.preOrderTraverse = function (callback) {
        preOrderTraverseNode(root, callback);
    }

    this.posOrderTraverse = function () {

    }

    this.console_log = function () {
        console.log(root);
    }
}

const tree = new BinarySearchTreeAVL();

const arr = [54, 91, 16, 54, 67, 1, 6, 26, 65, 90, 3, 65, 79, 11, 28, 102];

arr.forEach((element, key) => {
    tree.insert(element);
});