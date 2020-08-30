// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map

/*
    根据 MDN， Map中的key是有序的。 因此，当迭代的时候，一个 Map 对象以插入的顺序返回键值。
    因此假设
        map.set('A', 1); map.set('B', 2); 那么顺序是 A:1 -> B:2
    删除后，插入新数据
        map.delete('A'); map.set('A', 1); 顺序变为 B:2 -> A:1

    总结下来就是，采用的 LRU 置换策略    
*/

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.cache = new Map();
    }

    get(key) {
        if(!this.cache.has(key)) return -1;

        // 利用 Map keys 是有序的特点，将 最近访问的 “挪到” 最后。
        let value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
    }

    put(key, value) {
        if(this.cache.has(key)) {
            this.cache.delete(key); 
        }
        else {
            if(this.cache.size >= this.capacity) {
                // 删除最久未使用的数据值
                let firstKey = this.cache.keys().next(); // return { value: '', done: false}
                this.cache.delete(firstKey.value);

            }
        }

        // put or update existing value
        this.cache.set(key, value);
    }
    
}



/*
    写一个 LFU 置换策略的
*/
class LFUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map(); 
        
        // Map item : {value : X, freq : Y }
    }

    get(key) {
        if(!this.cache.get(key)) return -1;

        let itemVal = this.cache.get(key);
        itemVal.freq++;
        return itemVal.value;
    }

    put(key, value) {
        // 首次写入
        if(!this.cache.get(key)) {
            let itemVal = {
                value,
                freq: 1
            };

            if(this.cache.size < this.capacity) {
                this.cache.set(key, itemVal);
            }
            else {
                let keyWithLFU = this.findKeyWithLFU();
                this.cache.delete(keyWithLFU);
                this.cache.set(key, itemVal);
            }
        }
        else {
            let itemVal = this.cache.get(key); 
            itemVal.value = value;
            itemVal.freq++;
            // update existing value
            this.cache.set(key, itemVal);
        }
    }

    findKeyWithLFU() {

        let entries = [...this.cache.entries()];
        entries.sort((item1, item2) => {
            return item1[1].freq - item2[1].freq;
        })

        console.log(entries);

        return entries[0][0];
    }
}


let lfu = new LFUCache(3);
lfu.put('A', 1);
lfu.put('B', 2);
lfu.put('C', 3);

// update 
lfu.put('A', 4);

// put 
lfu.put('D', 4);
lfu.put('E', 5);
lfu.put('A', 1);

// // get
lfu.get('A');
lfu.get('A');
lfu.get('D');
console.log(lfu.get('X')); // -1

// // put
lfu.put('X', 100);

console.log(lfu);

