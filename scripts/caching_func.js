//revisit this functionality..
function addAll(number){ 
  let cache = this.cache || [0];
  let answer;
if (number < cache.length){ 
   answer = cache[number]; 
} else { 
   answer = cache[cache.length - 1]; 
   for(var i = cache.length; i <= number; i++){ 
      console.log(i); answer += i; cache.push(answer) 
   } 
} return answer;
} 
addAll(3);
