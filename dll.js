export class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next || null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * Push a new value to the tail of the linked list.
     */
    // Why is this method important?
    push(value) {
        // ADD a node to the END of the dll

        //Creates a new Node
        const node = new Node(value);

        //If there is only 1 node
        if (this.length == 0) {
            this.head = node;
            this.tail = node;
        } else {
            // If the dll is NOT empty add a node to the END of dll
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
    }

    /**
     * Remove an item from the end of the linked list.
     */
    pop() {
        if (this.size === 0) {
            return 'Nothing to pop!';
        } else if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.size -= 1;
    }

    /**
     * Remove a node from the beginning of the list.
     */
    shift() {
        if (this.size === 0) {
            return 'Nothing to shift!';
        } else if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.size -= 1;
    }

    /**
     * Add a node to the head of the linked list.
     */
    unshift(value) {
        const node = new Node(value);
        if (this.size === 0) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size += 1;
    }

    /**
     * Get a Node at a specific index
     */
    getNodeAtIndex(index) {
        if (index < 0 || index >= this.length) return null;
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    /**
     *  Insert a node at a specific index.
     */
    insertAtIndex(index, val) {
        if (index === 0) return this.unshift(val);

        const previousNode = this.getNodeAtIndex(index - 1);
        if (previousNode === null) return null;

        previousNode.next = new Node(val, previousNode.next);
        this.length += 1;
    }

    /**
     * Remove a node at a specific index.
     */

    removeAtIndex(index) {
        if (index === 0) return this.shift();

        const previousNode = this.getNodeAtIndex(index - 1);
        if (previousNode === null) return null;

        previousNode.next = previousNode.next.next;
        this.length -= 1;
    }
}

// Export the Node and DLL class

// module.exports = DoubleLinkedList
export default DoubleLinkedList
