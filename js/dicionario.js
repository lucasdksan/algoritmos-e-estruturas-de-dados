function Dictionary() {
    var items = {};

    this.set = function (key, value) {
        items[key] = value;
    }

    this.delete = function (key) {
        if(this.has(key)) {
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

const d = new Dictionary();

d.set("Lucas", "lokasmega@gmail.com");
d.set("Aline", "alinesmega@gmail.com");
d.set("Alda", "aldasmega@gmail.com");
d.set("Leonardo", "leosmega@gmail.com");