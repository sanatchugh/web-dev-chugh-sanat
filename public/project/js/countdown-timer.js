//window.onload=function(){
var start=Date.now(),r=document.getElementById('time');
(function f(){
    var diff=Date.now()-start,ns=(((3e5-diff)/1000)>>0),m=(ns/60)>>0,s=ns-m*60;
    r.textContent="Registration closes in "+m+':'+((''+s).length>1?'':'0')+s+' minutes';
    if(diff>(3e5)){start=Date.now()}
    setTimeout(f,1000);
})();
//}

