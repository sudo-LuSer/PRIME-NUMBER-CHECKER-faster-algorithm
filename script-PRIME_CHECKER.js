function PRIME_CHECKER(){
	var choice =Number (prompt("1-PRIME CHECKER : \n 2-EXIT") );
	if(choice==2){
		return 0;
	}
	var prime = Number ( prompt("Enter an intger please : ") );
	var prime_check=true;
	if(prime<=1){
		alert("PRIME == FALSE");
		PRIME_CHECKER();
	}
	for(var i = 2 ; i<Math.sqrt(prime) ; i++ ){
		if(prime % i === 0 ){
			alert("PRIME == FALSE");
			prime_check  = false;
		}
	}
	if(prime_check){
		alert("PRIME == TRUE");
	}
	return PRIME_CHECKER();
}
PRIME_CHECKER();