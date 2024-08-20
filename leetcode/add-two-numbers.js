function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(0);
  let curr = dummy;
  let carry = 0;
  while (l1 || l2 || carry) {
    let sum = carry;
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
  }
  return dummy.next;
};

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  let dummy = new ListNode(0);
  let curr = dummy;
  for (let val of arr) {
    curr.next = new ListNode(val);
    curr = curr.next;
  }
  return dummy.next;
}

// Helper function to convert linked list to array
function linkedListToArray(head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
}

// Test
let l1 = createLinkedList([2, 4, 3]);
let l2 = createLinkedList([5, 6, 4]);
let result = addTwoNumbers(l1, l2);
console.log(linkedListToArray(result)); // Output: [7, 0, 8]
