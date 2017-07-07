function multiple(){
	var n;
	var i;
	var sum;
	n=1000;
	sum=0;
	for (i=1;i<n;i++)
		if (i%3==0 || i%5==0)
			sum=sum+i;

	console.log(sum);
}
multiple();