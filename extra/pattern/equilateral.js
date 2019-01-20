export default function equilateral(n){
    let pattern=''
    for(let i=1;i<=n;i++){
        for(let j=1;j<=n-i;j++){
            pattern=pattern+' '
        }
        for(let j=1; j<=i*2-1;j++){
            pattern=pattern+'*'
        }
    console.log(pattern)
    pattern=''
    }
}
