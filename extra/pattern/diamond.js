function diamond(n){
    let pattern = ''
    let spaceCount=n-1
    for(let i=1;i<=n;i++){
    for(let j=1;j<=n-i;j++){
        pattern=pattern+' '
        
        
    }
    for(let j=1;j<=2*i-1;j++){
        pattern= pattern+'*';
        

    }

    console.log(pattern)
    pattern=''
    
    }
    for( let k=1;k<=n;k++){
        for(let j=1;j<=k;j++){
            pattern=pattern+' '
        }
        for(let j=1;j<=2*(n-k)-1;j++){
            pattern=pattern+'*'
        }
    console.log(pattern)
    pattern=''
    }

}
diamond(5);