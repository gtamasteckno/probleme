function multi()
{

	var i,j;
	var sum=0;
	var c;
	var largest;
	for (i=2;i<=Math.sqrt(600851475143);i++){
		 c=1;
		 for (j=2;j<=Math.sqrt(i);j++){
		 	if (i%j==0){
		 		c=0;
		 		break;
		 	}
		 }
		 if (c==1 && 600851475143%j==0)
		 	largest=i;
	}
	console.log(largest);
	
}
multi();

