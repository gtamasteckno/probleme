function fibo(){
	var a=1;
	var b=2;
	var sum=0;
	while (b<4000000)
	{
		if (b%2==0)
			sum=sum+b;

		aux=b;
		b=b+a;
		a=b;
	}

return sum;

}
console.log(fibo());