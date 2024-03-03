/**1. In this kata you will create a function that takes a list of non-negative 
 * integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123] */

//answer
function filter_list(l) {
    let arr=[];
    for(let i=0; i<l.length;i++){
    
    if(typeof(l[i])==='number' && l[i]>=0){
    arr.push(l[i])
    }
    }
    return arr;
    }

    //or

    function filter_list(l) {
        return l.filter(arritem => arritem>=0 && typeof arritem === 'number')

    }

    //------------------------------------------------------------------------------------------

/**2. Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3] */

    function arrayDiff(a, b) {
        return a.filter(item => !b.includes(item));
    }

    //----------------------------------------------------------------------------------------------

    /**3. Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns '' */

//answer

function list(names) {
    let finalStr = '';

    names.forEach((item, index) => {
        if (index === names.length - 1) {
            finalStr += item.name;
        } else if (index === names.length - 2) {
            finalStr += item.name + ' & ';
        } else {
            finalStr += item.name + ', ';
        }
    });

    return finalStr;
}
//--------------------------------------------------------------------------------------------

/**4. You live in the city of Cartesia where all roads are laid out in a perfect grid. 
 You arrived ten minutes too early to an appointment, so you decided to take the opportunity 
 to go for a short walk. The city provides its citizens with a Walk Generating App on their phones 
 -- everytime you press the button it sends you an array of one-letter strings representing directions 
 to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) 
 and you know it takes you one minute to traverse one city block, so create a function that will return 
 true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!)
  and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters 
('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's 
standing still!). */


//answer

function isValidWalk(walk) {


    if(walk.length !==10){
        return false;}
    
    
    let nOff=0;let sOff=0;let wOff=0;let eOff=0;
    
    
        walk.forEach(direction =>{
              switch (direction){
    
              case 'n': nOff+=1;
              break;
              case 's': sOff+=1;
              break;
              case 'w': wOff+=1;
              break;
              case 'e': eOff+=1;
    
              }
    
    });
    
    return (nOff-sOff===0 && wOff-eOff===0)
    
    
    }

    //---------------------------------------------------------------------------------------

    /**5. Write a function, persistence, that takes in a positive parameter num and returns 
     its multiplicative persistence, which is the number of times you must multiply the digits 
     in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number) */

//answer

function persistence(num) {
    var times = 0;
    
    num = num.toString();
    
    while (num.length > 1) {
      times++;
      num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    }
    
    return times;
 }

 //----------------------------------------------------------------------------------------------

 /**6. ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false */

//answer

function validatePIN(pin) {
    // Check for non-digit characters
    if (/[^0-9]/.test(pin)) { //^: Inside a character set ([]), ^ is a negation operator. It means "not" or "exclude".
        return false;
    }
    let arr = pin.split('');

    // Check for the length of PIN
    return arr.length === 4 || arr.length === 6;
}

//-----------------------------------------------------------------------------------------------

/**7. Your task is simply to count the total number of lowercase letters in a string.

Examples
"abc" ===> 3

"abcABC123" ===> 3

"abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3

"" ===> 0;

"ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0

"abcdefghijklmnopqrstuvwxyz" ===> 26 */

//answer 


function lowercaseCount(str){
    let count=0;
    let arr=str.split('');
    
    for(let i=0; i<arr.length;i++){
        if(/[a-z]/.test(arr[i])){
        count+=1
    };
    };
    return count;
    }

    //------------------------------------------------------------------------------------------
    /**8. Write a simple function that takes a Date as a parameter and returns a Boolean
      representing whether the date is today or not.

    Make sure that your function does not return a false positive by only checking the day.

 */

    //answer
    function isToday(date) {
        let d = new Date();
        return (d.getDate()==date.getDate() && d.getFullYear()==date.getFullYear() && d.getMonth()==date.getMonth());}
    //or 

    function isToday(date) {

        return new Date().toDateString() === date.toDateString()

    }

    //---------------------------------------------------------------------------------------------

    /**9. Given a string, capitalize the letters that occupy even indexes and odd indexes separately, 
     and return as shown below. Index 0 will be considered even.

    For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

    The input will be a lowercase string with no spaces.

    Good luck! */

    //answer

    function capitalize(s){
        let arr1=s.split('')
        let arr2=s.split('')
        let arr3=[];
        let arr4=[];
        let arr5=[];
      
        for(let i=0;i<arr1.length;i++){
              if(i===0 ||i%2===0 ){
                  arr3.push(arr1[i].toUpperCase());
      
                  }
              else{
                  arr3.push(arr1[i]);
                  }
              }
      
      
        for(let x=0;x<arr1.length;x++){
              if(x===0 ||x%2===0 ){
                  arr4.push(arr1[x]);
      
                  }
              else{
                  arr4.push(arr1[x].toUpperCase());
                  }
              }
      
      
      let k=arr3.join('')
      let n=arr4.join('')
      
      arr5.push(k,n)
      
        
      console.log(arr3)
      console.log(arr4)
      
      return arr5;
      
      
      };

      //------------------------------------------------------------------------------------------

      /**10. Task
Given a number , Return _The Maximum number _ could be formed from the digits of the number given .

Notes
Only Natural numbers passed to the function , numbers Contain digits [0:9] inclusive

Digit Duplications could occur , So also consider it when forming the Largest

Input >> Output Examples:
maxNumber (213) ==> return (321)
Explanation:
As 321 is _The Maximum number _ could be formed from the digits of the number 213 .

maxNumber (7389) ==> return (9873)
Explanation:
As 9873 is _The Maximum number _ could be formed from the digits of the number 7389 .

maxNumber (63729) ==> return (97632)
Explanation:
As 97632 is _The Maximum number _ could be formed from the digits of the number 63729 .

maxNumber (566797) ==> return (977665)
Explanation:
As 977665 is _The Maximum number _ could be formed from the digits of the number 566797 .

Note : Digit duplications are considered when forming the largest .

maxNumber (17693284) ==> return (98764321)
Explanation:
As 98764321 is _The Maximum number _ could be formed from the digits of the number 17693284 . */

//answer

function maxNumber(n){
    return Number(String(n).split("").sort().reverse().join(""));
  }