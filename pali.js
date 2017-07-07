function multi()
{

	var i,j;
	var sum=0;
	var c;
	for (i=2;i<=2000000;i++){
		 c=1;
		 for (j=2;j<=Math.sqrt(i);j++){
		 	if (i%j==0){
		 		c=0;
		 		break;
		 	}
		 }
		 if (c==1)
		 	sum=sum+i;
	}
	console.log(sum);
}
multi();