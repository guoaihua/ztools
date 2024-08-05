
// 定义链表节点
function ListNode(value){
    this.value = value
    this.next = null
    this.prev = null
}

// LRUCache 类
function LRUCache(capacity){ 
    // 容量
    this.capacity = capacity
    
    // 链表头
    this.head = new ListNode(null)
    // 链表尾
    this.tail = new ListNode(null)
    // 链表头尾相连
    this.head.next = this.tail
    this.tail.prev = this.head
    
    // 哈希表
    this.map = new Map()
}

const cache1 = new LRUCache(2)
console.log(cache1)
