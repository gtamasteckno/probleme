function fibo(){
	var a=0;
	var b=1;
	var c=a+b;
	var sum=0;
	while (c<4000000){
		a=b;
		b=c;
		c=a+b;
		if (c%2==0)
			sum=sum+c;
	}
	console.log(sum);
}
fibo()