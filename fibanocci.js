const fibs=(n)=>{
    const fibanocci=[0,1]
    for(let i=2;i<n;i++){
        fibanocci[i]=fibanocci[i-1]+fibanocci[i-2]
    }
    return fibanocci;
}
console.log(fibs(5));

const fibsRec=(n,arr=[0,1])=>{
    if (arr.length===n)
    return arr;

    arr.push(arr[arr.length -1]+arr[arr.length -2])
    return fibsRec(n,arr);
}

console.log(fibsRec(8));