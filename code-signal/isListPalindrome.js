let paling = [1, 2, 2, 3]

// Definition for singly-linked list:
function ListNode(x) {
  this.value = x;
  this.next = null;
}

function isListPalindrome(l) {
    let list = new ListNode()
    list.next = l;
    let t = list.next;
    let values = []
    while(t){
        values.push(t.value)
        t = t.next;
    }
    
    return [...values].reverse().join('') === values.join('')
}


console.log( isListPalindrome(paling));