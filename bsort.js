let a=[2,3,4,522,32,1,4]

for(let i=0;i<a.length-1;i++){
    for(let j=0;j<a.length-i-1;j++){
        if(a[j]>a[j+1]){
            let temp=a[j]
            a[j]=a[j+1]
            a[j+1]=temp
        }
    }
}

console.log(a);
