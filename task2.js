var a=[1 ,1.1,'1.1',true,null,undefined,[],{},NaN];
var b="";
for(i=0;i<a.length;i++){
    b=b+typeof(a[i])+" ";
}
console.log(b);
