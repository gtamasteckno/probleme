function check(nr){
	var clona=0;
	var x = nr;
	while (x>0){
		clona=clona*10+x%10;
		x=x/10;
	}
	if (nr == clona)
		return 1;
	else
	return 0;

}
function show(){
	var max=100001;
	var i,j,p;
	for (i=999;i>=100;i--){
		for (j=999;j>=100;j--)
		{
			p=i*j;
			if (max<p && check(p)==1)
				max=p;
		}
	}
	console.log(max);
}