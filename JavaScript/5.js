const arr=[1,2,3,4,5]
//IMP for INterview 
//.forEach 

if(!Array.prototype.myForEach){
    Array.prototype.myForEach=function(userFn){
        const temp=this;

        for(let i=0; i<temp.length; i++){
            userFn(temp[i],i);
        }
    };
}

if(!Array.prototype.myMap){

    Array.prototype.myMap=function(userFn){

        const result=[];

        for(let i=0; i<this.length; i++){
            const val=userFn(this[i],i);
            result.push(val);
        }

        return result;
    };
}

arr.myForEach(function(value,index){
    console.log(`${index},${value}`)
})

//.map 
//Return - New Array, 
const ans=arr.myMap((e)=>e*2)
console.log(ans)

//filter



