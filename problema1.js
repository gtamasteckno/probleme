	console.log('hello');

	function myFunction(){

	var sum = 0;
	var i;
	for (i=1000;i>=3;i--)
		if (i%3==0)
			sum=sum+i;
		else
			if (i%5==0)
				sum=sum+i;
	console.log(sum);
	}
myFunction();