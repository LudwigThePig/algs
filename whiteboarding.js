const print = (expect, result) => console.log(`\nExpected: ${expect}\nReceived`, result);





const theBestDamnFunctionInTheWest = (arr, target) => {
  let result = 0;
  if (!arr.length) {
    return result;
  }
  if (n === 0) { return count }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      result++;
    }
    return;
  }
  return result;
}

// console.log('Expect 1:\nReceived:',jordansFunction([1,2,3], 3));
// console.log('Expect 0:\nReceived:',jordansFunction([1,2,3], 4))
// console.log('Expect 0:\nReceived:',jordansFunction([], 420))

const anotherJordanFunction = (n, m) => {
  let result = {};
  for (let i = 0; i < n.length; i++) {
    result[n[i]] = m[i];
  }
  return result;
}
// console.log('Expect: e\nReceived:',theBestDamnFunctionInTheWest([], []));
// console.log('Expect 1:\nReceived:',theBestDamnFunctionInTheWest([1,2], [1,2]));

const evenIceCreamIsntAlwaysCool = ( n ) => {

  let count = 0;

  if (n === 0) { return count }

  const recurse = ( n ) => {
    if ( (n / 2) % 2 === 0) {
      count++;
      recurse( n / 2)
    }
    return;
  }
  recurse(n);

  return count;

}

// console.log('Expect: 0\nReceived:',evenIceCreamIsntAlwaysCool(2));
// console.log('Expect: 0\nReceived:',evenIceCreamIsntAlwaysCool(0));
// console.log('Expect: 0\nReceived:',evenIceCreamIsntAlwaysCool(8));
// console.log('Expect: 0\nReceived:',evenIceCreamIsntAlwaysCool(0));


function nFriends (n) {
  let friends = [];
  for (let i = 0; i < n; i++) {
    friends.push('i');
  }
  let groups = 0;
  const recurse = arr => {
    groups++;
    if (arr.length === 1) return;
    for (let i = 0; i< arr.length; i++) {
      recurse(arr.slice(0, i).concat(arr.slice(i+1)))
    }
  }
  recurse(friends);

  return groups;
} 

// console.log('Expect: 0\nReceived:',nFriends(4));

const letterCounter = (arr, target) => {
  let count = 0;
  arr.forEach(str => {
    for(let letter of str) {
      if (letter === target) {
        ++count;
      }
    }
  });
  return count;
}

// const letterCounterTest = letterCount(['a','a','a'], 'a')
// console.log('Expect: 3\nReceived:', letterCounter(['book'], 'o'));

const stringInc = char => {
  if (char === '-') return char;
  return (Number(char) + 1).toString();
}

const incDigits = (p, q) => {
  let pStr = p.toString();
  let qStr = q.toString();
  for (let i = 0; i < pStr.length; i++) {
    pStr = pStr.substr(0, i) + stringInc(pStr[i]) + pStr.substr(i); 
  } 
  for (let i = 0; i < qStr.length; i++) {
    qStr = qStr.substr(0, i) + stringInc(qStr[i]) + qStr.substr(i); 
  }
  console.log(qStr)
  return Number(pStr) + Number(qStr);
}
// console.log('Expect: 3\nReceived:', incDigits(11, 22));

const leastCurrency = (amt, cur) => {

  const recurse = (total, acc = []) => {
    if (total === 0) {
      return acc;
    }

    for (let i = cur.length - 1; i > -1; i--) {
      if (cur[i] < total) return recurse(total - cur[i], [cur[i], ...acc])
    }
  }
  return recurse(amt)
}
// console.log('Expect: \nReceived:', leastCurrency(26, [1, 5, 10, 25]));

const makeChange = (amount, arr) => {
  if (arr.includes(amount)) {
    return [amount];
  }

  let result = [];

  for (let i = arr.length -1; i >= 0; i--) {
    if (amount >= arr[i]) {
      result.push(arr[i]);
      amount -=  arr[i];
      if (!amount) break;
      i++
    }
  }
  return result;
}
// console.log('Expect: \nReceived:', makeChange(8, [1, 3, 5]));
// console.log('Expect: \nReceived:', makeChange(12, [1, 3, 5]));
// console.log('Expect: \nReceived:', makeChange(28, [1, 5, 10, 25]));


const arrRotate = (arr) => {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    let row = [];
    for (let j = arr.length - 1; j >= 0; j--){
      row.push(arr[j][i]);
    }
    output.push(row)
  }
  return output
}

const arrRotateT1 = arrRotate([[2,3], [4,5]]);

// print('rotated shit', arrRotateT1)


const srujsSpaceDestroyer = (str) => {
  if (str.length < 1) {
    return '';
  }
  let arr = str.split('');
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === ' ') {
      arr[i] = '%20'
    }
  }
  const result = arr.join('');
  return result;
}

// print('Mr%20John%20Smith', srujsSpaceDestroyer('Mr John Smith'));
// print('Mr%20John%20Smith', srujsSpaceDestroyer('Mr John Smith '));
// print('', srujsSpaceDestroyer(''));
// print('     ', srujsSpaceDestroyer('           '));


// https://leetcode.com/problems/add-two-numbers/
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var addTwoNumbers = function(l1, l2) {
  const before = new ListNode();
  let tail = before;
  let c = 0;

  while (l1 || l2 || c) {
    const v1 = l1 ? l1.val : 0;
    const v2 = l2 ? l2.val : 0;
    const v = v1+v2+c;

    tail.next = new ListNode(v%10);
    tail = tail.next;
    c = v >= 10 ? 1 : 0;
    l1 = l1&&l1.next;
    l2 = l2&&l2.next;
  }

  return before.next;
};

// https://leetcode.com/problems/number-of-islands/

var numIslandsAttempt1 = function(grid) {
  let row = grid[0].length;
  let map = [].concat.apply([], grid);
  let islandCount = 0;
  
  // if land, '1'
  // if water, '0'
  // if counted landed, -1
  
  const checkNeighbors = (idx) => {
      const up = idx - row;
      if ( map[up] === '1' ){
          map[up] = -1;
          checkNeighbors(up);
      }
      
      const down = idx + row;
      if ( map[down] === '1' ){
          map[down] = -1;
          checkNeighbors(down);
          
      }
      
      const left = idx - 1;
      if ( map[left] === '1' ){
          map[left] = -1;
          checkNeighbors(left);

      }
      
      const right = idx + 1
      if ( map[right] === '1' ){
          map[right] = -1;
          checkNeighbors(right);
      }
      return map;
  }
  
  for (let i = 0; i < map.length; i++) {
      if (map[i] === '1') {
          map[i] = -1;
          islandCount++;
          checkNeighbors(i);
      }
  }  
  
  return islandCount;
};

var numIslandsAttempt2 = function(grid) {
  if (grid.length === 0) return 0;
  let islandCount = 0;
  
  const height = grid.length;
  const width = grid[0].length;
  const checkNeighbors = function(i, j) {
      if (i >= 0 && i < height && j >= 0 && j < width && grid[i][j] == "1") {
          grid[i][j] = "0";
          checkNeighbors(i + 1, j);
          checkNeighbors(i - 1, j);
          checkNeighbors(i, j + 1);
          checkNeighbors(i, j - 1);
      }
  };
  for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
          if (grid[i][j] == "1") {
              checkNeighbors(i, j);
              islandCount++;
          }
      }
  }
  return islandCount
};

// https://leetcode.com/problems/contains-duplicate-iii/
var containsNearbyAlmostDuplicate = function(nums, k, t) {  
  for (let i = 0; i < nums.length - 1; i++) {
      for (let j = 1; j < nums.length; j++) {
          if (Math.abs(i - j) <= k && Math.abs(nums[i] - nums[j]) <= t && i !== j) {
              return true;
          }
      }
  }
  
  return false;
};

var containsNearbyAlmostDuplicate2 = function(nums, k, t) {  
  for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i+1; j < nums.length && Math.abs(i - j) <= k; j++) {
          if (Math.abs(nums[i] - nums[j]) <= t) {
              return true;
          }
      }
  }
  
  return false;
};

// https://leetcode.com/problems/median-of-two-sorted-arrays
var findMedianSortedArrays = function(arr1, arr2) {
  let i = 0;
  let j = 0;
  let result = [];
  while (i < arr1.length || j < arr2.length) {
      
  
  let elem1 = arr1[i];
  let elem2 = arr2[j];
  if(elem1 < elem2 && elem1 !== undefined){
    result.push(elem1);
    i++;
  } else if(elem1 > elem2 && elem2 !== undefined) {
    result.push(elem2);
    j++;
  } else {
    if(elem1 !== undefined) result.push(elem1);
    if(elem2 !== undefined) result.push(elem2);
    i++;
    j++;
  }
}
  return result.length % 2 === 0 
      ? (result[result.length/2 - 1] + result[result.length/2])/2 
      :  result[(result.length + 1)/2 - 1];
};




/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */


var gameOfLife = function(board) { 
  const countLiveNeighbors = (i, j) => {
    let count = 0;

    if (i - 1 >= 0 && board[i - 1][j]) count++;
    if (i + 1 < board.length && board[i + 1][j]) count++;
    if (j - 1 >= 0 && board[i][j - 1]) count++;
    if (j + 1 < board[0].length && board[i][j + 1]) count++;
    if (i - 1 >= 0 && j - 1 >= 0 && board[i - 1][j - 1]) count++;
    if (i - 1 >= 0 && j + 1 < board[0].length && board[i - 1][j + 1]) count++;
    if (i + 1 < board.length && j + 1 < board[0].length && board[i + 1][j + 1]) count++;
    if (i + 1 < board.length && j - 1 >= 0 && board[i + 1][j - 1]) count++;

    return count;
  }

  let newBoard = [];

  for (let i = 0; i < newBoard.length; i++) {
    let row = [];
      for (let j = 0; j < newBoard[0].length; j++) {
        let count = countLiveNeighbors(i,j);
        let newCell = 0;
        if (newBoard[i][j]) {
          newCell = (count < 2 || count > 3) ? 0 : 1;
        } else {
          newCell = (count === 3) ? 1 : 0;
        }
        console.log(newCell)
        row.push(newCell)
      }
      newBoard.push(row);
  }
  
  return newBoard;
};


const lifeInput = [
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
];
const lifeOutput = `[ [ 0, 0, 0 ], [ 1, 0, 1 ], [ 0, 1, 1 ], [ 0, 1, 0 ] ]`;

// print(lifeOutput.toString(), gameOfLife(lifeInput))










// https://leetcode.com/problems/zigzag-conversion/submissions/
var convert = function(s, numRows) {
  let result = [];
  let row = 0;
  let dir = 1;
  s.split('')
    .forEach(ch => {
      result[row] = result[row] || [];
      result[row].push(ch);
      row += dir;
      if (row === numRows - 1) dir = -1;
      if (row === 0) dir = 1;
  });
  return result.map(row => row.join('')).join('')
};


// 3 rows
//  P   A   H   N
//  A P L S I I G
//  Y   I   R

// 4 rows
//  P     I    N
//  A   L S  I G
//  Y A   H R
//  P     I

// print('PAHNAPLSIIGYIR', convert('PAYPALISHIRING', 3));
// print('PINALSIGYAHRPI', convert('PAYPALISHIRING', 4));




// https://leetcode.com/problems/longest-palindromic-substring/submissions/
const isPalindrome = (str) => {
  return str === str.split('').reverse().join('');
}
var longestPalindrome = function(s) {
  let longest = '';
  for (let i = 0; i < s.length - 1; i++) {
      for (let j = 0; j < s.length; j++) {
          let subStr = s.slice(i,j)
          if (isPalindrome(subStr)) {
              longest = longest.length < subStr ? subStr: longest;
          }
      }
  }
  return longest;
};



var isMatch = function(s, p) {
  if (s.length === 0) {

    if (p.length === 0) return true;
    if (p[1] === '*') return isMatch(s, p.slice(2));
    return false;

  } else {
    
    if (p[1] === '*') {
      if (p[0] === s[0] || p[0] === '.') {
        return isMatch(s.slice(1), p) || isMatch(s, p.slice(2));
      }
      return isMatch(s, p.slice(2));
    }
    
    if (s[0] === p[0] || p[0] === '.') return isMatch(s.slice(1), p.slice(1));
    return false;

  }
};


// https://leetcode.com/problems/powx-n/
var myPow = function(x, n) {
  if (n === 0) return 1;
  if (n === 1) return x;
  if (x === 0) return 0;
  
  if (n > 0) {
     if (n % 2 === 0) {
        const half = myPow(x, n/2);
        return half * half;
     } else {
       return x * myPow(x, n-1);
     }
  } else {
    return myPow(1/x, -n);
  }
};






// https://leetcode.com/problems/string-to-integer-atoi/
var myAtoi = function(str) {
  const regex =  /^ *([\+|\-]?)(\D*)(\d*)/;
  const [, sign, noDigits, digits] = regex.exec(str);
  const max = 2 ** 31 - 1;
  const min = (-2) ** 31;
  if (noDigits || !digits) return 0;
  
  const res = sign === '-' ? digits * -1 : digits;
  if (res > max) return max;  
  if (res < min) return min    
  return res;
};

// print(-42, myAtoi('-42'));



// https://leetcode.com/problems/container-with-most-water/

var maxArea = function(height) {
  let maxVol = -1;
  let start = 0;
  let end = height.length - 1;
  
  while (start < end) {
      const tempVol = Math.min(height[start], height[end]) * (end - start);
      if (tempVol > maxVol) maxVol = tempVol;
      
      height[start] <= height[end] ? start++ : end--;
  }
  return maxVol;
};

// print(49, maxArea([1,8,6,2,5,4,8,3,7]))



/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let trap = Array(height.length).fill(1);
  for (let i = 0; i < height.length; i++) {
    // check for higher neighbors.
    let l = i > 0 ? i - 1 : 0
    let r = i < height.length - 1 ? i + 1 : height.length - 1;
    let tempHeight = height[i];
    while(height[l] > tempHeight && height[r] > tempHeight) {
      trap[i] = tempHeight;
    }
  }
  return trap.reduce( (acc, cur) => acc+cur);
};

// print(6, trap([0,1,0,2,1,0,1,3,2,1,2,1]));





const romanTuple = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
];
// https://leetcode.com/problems/integer-to-roman/
var intToRoman = function(n) {
  if (n === 0) return n;
  
  let result = '';
  
  while (n > 0) {
    for (let tuple of romanTuple) {
      let [arabic, roman] = tuple;
      if(arabic <= n) {
        result += roman;
        n -= arabic; 
        break;
      }
    };
  }
  return result;
};
// print('III', intToRoman(3));
// print('IV', intToRoman(4));
// print('XV', intToRoman(15));





// https://leetcode.com/problems/roman-to-integer/submissions/
const romanHash = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1
};


var romanToInt = function(s) {
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        let next = i + 1 < s.length ? romanHash[s[i+1]] : 0;
        let cur = romanHash[s[i]];
        if (next > cur) {
            result -= cur;
        } else {
            result += cur;
        }
    }
    return result;
};


// https://leetcode.com/problems/longest-common-prefix/submissions/

var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];
  let result = '';
  for (let i = 0; i < strs[0].length; i++) {
      let char = strs[0][i];
      let common = true;
      for (let j = 0; j < strs.length; j++) {
          if (strs[j][i] !== char) {
              common = false;
              break;
          }
      }
      if (common) {
          result += char;
      } else {
          break;
      }
  }
  return result;
};


// https://leetcode.com/problems/3sum/

var threeSum = function(nums) {
  let sortedNums = nums.sort((a, b) => a - b)
  let results = [];

  for (let i = 0; i < sortedNums.length - 2; i++) {
    const first = sortedNums[i];

    if (first > 0) break;
    if (first === sortedNums[i - 1]) continue;

    for (let j = i + 1, k = sortedNums.length - 1; j < k;) {
      const sum = first + sortedNums[j] + sortedNums[k];

      if (sum === 0) {
        results.push([first, sortedNums[j], sortedNums[k]]);
        
        j++;
        k--;

        while (j < k && sortedNums[j] === sortedNums[j - 1]) j++;
        while ( j < k && sortedNums[k] === sortedNums[k + 1]) k--;

      } else if (sum > 0) {
        k--;
      } else {
        j++;
      }
    }
  }
  return results;
};




// https://leetcode.com/problems/3sum-closest/
var threeSumClosest = function(nums, target) {
  const sorted = nums.sort((a, b) => a - b);
  let closest;
  let result;
  for (let i = 0; i < sorted.length - 2; i++) {
    if (sorted[i] === sorted[i - 1]) continue;

    let  j = i + 1;
    let k = sorted.length - 1
    while (j < k) {
      const sum = sorted[i] + sorted[j] + sorted[k];
      const curNet = Math.abs(sum - target);
      
      if (closest === undefined || curNet < closest) {
        closest = curNet;
        result = sum;
        if (sum === target) return target;

        // while(j < k && sorted[j] === sorted[j - 1]) j++;
        // while(j < k && sorted[k] === sorted[k + 1]) k--;
      }
      if (sum > target) {
        k--;
      } else {
        j++;
      }
    }
  }

  return result;
};

// print(-1, threeSumClosest([1,1,-1,-1,3], -1))




const phone = {
    '2': ['a','b','c'],
    '3':['d','e','f'],
    '4':['g','h','i'],
    '5':['j','k','l'],
    '6':['m','n','o'],
    '7':['p','r','q','s'],
    '8':['t','u','v'],
    '9':['w','x','y','z']
}

var letterCombinations = function(digits) {
  if (digits.length === 0) return [];
  let combinations = [];

  const recurse = (digs, comb) => {
    if (digs.length === 0) return combinations.push(comb);
    phone[digs[0]].forEach(char => {
      recurse(digs.slice(1), comb.concat(char));
    })
  };
  recurse(digits, '');
  return combinations;
};

// print('', letterCombinations('23'))








// https://leetcode.com/problems/remove-nth-node-from-end-of-list/submissions/
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
* @param {ListNode} head
* @param {number} n
* @return {ListNode}
*/
var removeNthFromEnd = function(head, n) {
let result = new ListNode();
result.next = head;
const recurse = (node, j) => {
    if (!node) return 0;
    let temp = recurse(node.next, j)
    if (temp === j) {
        node.next = node.next ? node.next.next : null;
    }
    return ++temp;
}

recurse(result, n);
return result.next;
};






// https://leetcode.com/problems/valid-parentheses/
var isValid = function(s) {
  const map = {
    ')': '(', 
    '}': '{', 
    ']': '['
  };
  const stack = [];
  for (const ch of s) {
    if (ch === '(' || ch === '{' || ch === '[')  {
      stack.push(ch)
    } else {
      const popped = stack.pop();
      if (popped !== map[ch]) {
        return false
      }
    }
  }
  return stack.length === 0;
};

// print(true, isValid('{[]}'));
// print(false, isValid('{'));
// print(false, isValid(']'));
// print(false, isValid('[{]}'));




// https://leetcode.com/problems/generate-parentheses/
var generateParenthesis = function(n) {
  if (n === 0) return [];
  let combs = [];
  const recurse = (str, open, close) => {
    if (str.length / 2 === n) combs.push(str);
    if (open >= close + 1) recurse(str + ')', open, close + 1);
    if (open < n) recurse(str + '(', open + 1, close);
  }
  recurse('(', 1, 0);
  return combs;
};
// print(["((()))","(()())","(())()","()(())","()()()"], generateParenthesis(3))







// https://leetcode.com/problems/swap-nodes-in-pairs/

  function ListNode(val) {
      this.val = val;
      this.next = null;
  }
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let result = new ListNode(-1);
  result.next = head;
  let cur = result;
  while(cur.next !== null || cur.next.next !== null) {
    let first = cur.next;
    let second = cur.next.next;
    cur.next.next = cur.next.next.next;
    cur.next = second;
    cur.next.next = first;

    cur = cur.next.next;
  }
  return result.next;
};





// https://leetcode.com/problems/search-in-rotated-sorted-array/

var search = function(nums, target) {
  if (nums.length < 2) return nums[0] === target ? 0 : -1;
  let left = 0;
  let right = nums.length - 1;
  let center = Math.floor((right + left) / 2);
  while (left < right) {
    if (nums[left] <= nums[center]) {
        if (nums[left] <= target && target <= nums[center]) {
            right = center;
        } else {
            left = center + 1;
        }
    } else {
        if (nums[center] < target && target <= nums[right]) {
            left = center + 1;
        } else {
            right = center;
        }
    }
    center = Math.floor((right+left)/2);
    if (nums[center] === target) return center;
}
    return -1;
};
print(-1, search([4,5,6,7,0,1,2], 3))


// https://leetcode.com/problems/jewels-and-stones/
var numJewelsInStones = function(J, S) {
  let count = 0;
  
  S.split('').forEach(ch => {
      if (J.indexOf(ch) !== -1) count++;
  });
  
  return count;
};

// https://leetcode.com/problems/two-sum/discuss/417949/javascript-better-than-97
var twoSum = function(nums, target) {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
      // if compliment exists, return compliment index and i
      if (hash.hasOwnProperty(nums[i])) return [hash[nums[i]], i];
      
      // else, save the compliment
      const compliment = target - nums[i];
      hash[compliment] = i;
  }
}


// https://leetcode.com/problems/largest-perimeter-triangle/
var largestPerimeter = function(A) {
  const sorted = A.sort((a, b) => b - a);
  for (let i = 0; i <= sorted.length - 3; i++) {
      if (sorted[i+2] + sorted[i+1] > sorted[i]) return sorted[i] + sorted[i+1] + sorted[i+2];
  }
  return 0;
};


// https://leetcode.com/problems/unique-email-addresses/
var numUniqueEmailsREADABLE = function(emails) {
  const hash = {};

  emails.forEach(email => {
      let [localName, domain] = email.split('@');
      localName = localName.split('.').join('')
      localName = localName.split('+')[0];
      hash[`${localName}@${domain}`] = true;
  });
  return Object.keys(hash).length;
};

var numUniqueEmails = emails => emails.reduce((acc, cur) => acc.add(cur.replace(/(\+.*(?=@)|(\.(?=.*@)))/g, '')),new Set()).size;



// https://leetcode.com/problems/battleships-in-a-board/
var countBattleships = function(board) {
  let count = 0;

  
  const checkNeighbors = (i, j) => { // [check neighbors helper func]
      board[i][j] = '.';
              
      const lenI = board.length - 1;
      const lenJ = board[0].length - 1;
      
      if (i < lenI && board[i+1][j] === 'X') return checkNeighbors(i+1, j);
      if (i > 0 && board[i-1][j] === 'X') return checkNeighbors(i-1, j);
      if (j < lenJ && board[i][j+1] === 'X') return checkNeighbors(i, j+1);
      if (j > 0 && board[i][j-1] === 'X') return checkNeighbors(i, j-1);
  }
  
  
  // loop through matrix.
  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
          if (board[i][j] === 'X') {   // if char == x
              count++;                 // increment count
              checkNeighbors(i, j); // call check neighbors helper func

          }
      }
  }

  return count;
};


// https://leetcode.com/problems/counting-bits/
var countBits = function(num) {
  let res = [];
  for (let i = 0; i <= num; i++){
      const binary = Number(i).toString(2);
      res.push(binary.replace(/0/g, '').length);
  }
  return res;
};



// https://leetcode.com/problems/largest-rectangle-in-histogram/submissions/
var largestRectangleArea = function(heights) {
  let max = 0;
  for (let i = 0; i< heights.length; i++) {
      const base = heights[i];
      const arr = [heights[i]];
      
      // go right
      for (let j = i + 1; j < heights.length; j++) {
          if (heights[j] < base) break;
          arr.push(heights[j])
      }
      // go left
      for (let j = i - 1; j >= 0; j--) {
          if (heights[j] < base) break;
          arr.push(heights[j])
      }
      
      // calc and compare
      const area = arr.length * base
      if (area > max) max = area;
  }
  
  return max;
};