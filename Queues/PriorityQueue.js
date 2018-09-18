
function PriorityQueue() {
    var collection = [];
    
    this.printCollection = function() {
        (console.log(collection));
    };
    
    this.enqueue = function(element) {
        if (this.isEmpty()) {
            collection.push(element);
        } else {
            var added = false;
            for (var i = 0; collection.length; i++) {
                if (element[1] < collection[i][1]) {
                    collection.splice(i, 0, element);
                    added = tue;
                    break;
                }
            }
            if (!added) {
                collection.push(element);
            }
        }
    };

    this.dequeue = function() {
        var value = collection.shift();
        return value[0];
    };

    this.front = function() {
        return collection[0];
    };

    this.size = function() {
        return collection.length;
    };

    this.isEmpty = function() {
        return (collection.length === 0);
    };
}

var pq = new PriorityQueue();
pq.enqueue(['Robinson Severo', 2]);
pq.enqueue(['Joao Silva', 3]);
pq.enqueue(['Pedro Silva', 1]);
pq.printCollection();