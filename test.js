function checkpali(a)
{ 	 
	var d=a;
	var b=a;
	var c=0;
	while (d>0)
	{
		c=c*10+a%10;
		d=d/10;
	}
	if (b==c)
		return true;
	else
		return false;
}
function checkpali(121);