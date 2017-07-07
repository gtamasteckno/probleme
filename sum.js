function sum()
{
	var i;
	var sum = 0;
	for (i=1;i<=100;i++)
		sum=sum+i*i;
	return sum;
}
function squaresum(){
	var i;
	var squaresum=0;
	for (i=1;i<=100;i++)
		squaresum=squaresum+i;
	squaresum=squaresum*squaresum;
	return squaresum;
}
console.log(squaresum()-sum());