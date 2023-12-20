function Set() {
    var items = {};

    this.add = function (value) {
        if (!this.has(value)) {
            items[value] = value;

            return true;
        }

        return false;
    }

    this.delete = function (value) {
        if (this.has(value)) {
            delete items[value];
            return true;
        }

        return false;
    }

    this.has = function (value) {
        return items.hasOwnProperty(value);
    }

    this.clear = function () {
        items = {};
    }

    this.size = function () {
        return Object.keys(items).length;
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

    this.union = function (otherSet) {
        var unionSet = new Set(),
            values = this.values();

        for (var i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }

        values = otherSet.values();

        for (var j = 0; j < values.length; j++) {
            unionSet.add(values[j]);
        }

        return unionSet;
    }

    this.intersection = function (otherSet) {
        var intersectionSet = new Set(),
            values = this.values();

        for (var i = 0; i < values.length; i++) {
            if (otherSet.has(values[i])) {
                intersectionSet.add(values[i]);
            }
        }

        return intersectionSet;
    }

    this.difference = function (otherSet) {
        var differenceSet = new Set(),
            values = this.values();

        for(var i = 0; i< values.length; i++){
            if(!otherSet.has(values[i])){
                differenceSet.add(values[i]);
            }
        }

        return differenceSet;
    }

    this.subset = function (otherSet) {
        if(this.size() > otherSet.size()) {
            return false;
        } else {
            var values = this.values();

            for(var i = 0; i < values.length; i++){
                if(!otherSet.has(values[i])){
                    return false;
                }
            }

            return true;
        }
    }
}

const sets = new Set();

sets.add(1);
sets.add(2);
sets.add(3);
sets.add(4);
sets.add(5);
sets.add(6);

const sets_1 = new Set();

sets_1.add(7);
sets_1.add(8);
sets_1.add(9);
sets_1.add(10);
sets_1.add(11);
sets_1.add(12);

const sets_2 = sets.union(sets_1);
const sets_3 = sets_2.intersection(sets_1);
const sets_4 = sets_2.difference(sets_3);