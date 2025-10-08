
function gradeCalc(marks){
    
    if(marks>=90){
        return "A";
    }else if(marks>=80){
       return "B";
    }else if(marks>=70){
        return "C";
    }
}

temp = [1,2,3,4,5];
// console.log(temp);
// for(let i=0; i<temp.length; i++){
//     console.log(temp[i]);
// }

// let i=0;
// while(i<temp.length){
//     console.log(temp[i]);
//     i++;
// }

function sum(nums){

    let sum=0;

    for(let i=0; i<nums.length; i++){
        sum+=nums[i];
    }

    return sum;
}

let ans=sum([1,2,3,4,5,6]);
console.log(ans);