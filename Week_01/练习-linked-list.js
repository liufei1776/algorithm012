/*
* JS本身没有链表的数据结构。
* 自己练习写一个。
*/


// Node
class Node {

    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


// Linked-List
class LinkedList {

    constructor() {
        this._head = null;
        this._size = 0;
    }

    size() {
        return this._size;
    }

    insert(data) {
        let newNode = new Node(data);

        if(this._head == null) {
            this._head = newNode;
            
        }
        else {
            let current = this._head;

            while(current.next != null) {
                current = current.next;
            }

            current.next = newNode;
        }

        this._size++;
    }


    printList() {
        let arr = [];
        let current = this._head;
        while(current != null) {
            arr.push(current.data);
            current = current.next;
        }

        console.log('Print list: ', this._size, arr);
    }


    removeByData(data) {
        console.log('Remove by data, size ', this._size);

        if(this._size == 0) {
            console.log("List is empty!");
            return ;
        } 
        
        if(this._size == 1) {
            console.log("List has only one node.");

            if(this._head.data != data) {
               console.log("Head node mismatch");
               return;
            }

            this._head = null;
            this._size--;

            return;
            
        }

        
        if(this._head.data == data) {
            // 如果正好删除的是头节点
            let current = this._head;

            this._head = this._head.next;  // head 必须要挪动新位置

            current.next = null;  // 处理无用节点
            current = null;

            this._size--;
            
        }
        else {
            let current = this._head;
            let prev = this._head;

            while(current != null) {
                if(current.data == data) {

                    prev.next = current.next;  // 跨节点

                    current.next = null; // 处理无用节点

                    current = prev.next;  // current继续

                    this._size--;

                    return;
                }
                else {
                    prev = current;
                    current = current.next;
                }
            }

            console.log("All nodes mismatch");
        }
        
    }   

}


let list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(1);
list.insert(4);
list.removeByData(4);
list.removeByData(1);
list.removeByData(1);
list.removeByData(1);
list.removeByData(43);
list.printList();
console.log(list);



