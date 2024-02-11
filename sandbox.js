


function range(x,y){
    let nums = []
    if(y){
        for(let i = x;i < y;i++){
            nums.push(i)
        }
    }else{
        for(let i = 0;i < x;i++){
            nums.push(i)
        }
    }


   return nums
}


for(x of range(9)){
    console.log(x)
}