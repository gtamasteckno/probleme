
function fibo()
{
	var a=1;
	var b=1;
	var c=2;
	var aux;
	var sum=0;
	while (a<=4000000)
	{
		if (a%2==0)
			sum=sum+a;
	
	aux=c;
	c=a+b;
	a=b;
	b=aux;
	}
	return sum;
}
console.log(fibo());