function fibonacci(num) {
// your code here
	let n1 = 0,n2 =1 ,n3=0;

	  for(let i=1;i<n;i++){
		  n3=n1+n2;
		  n1=n2;
		  n2=n3;
	  }
return n1;
}

module.exports = fibonacci;
