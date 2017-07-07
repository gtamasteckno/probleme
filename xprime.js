function multi()
{

	var i,j;
	var counter=0;
	var c;
	i=1;
	while (counter<=10001)
	{
		 c=1;
		 for (j=2;j<=Math.sqrt(i);j++){
		 	if (i%j==0){
		 		c=0;
		 		break;
		 	}
		 }
		 if (c==1)
		 	counter=counter+1;
		 i++;
	}
	console.log(i);
}
multi();