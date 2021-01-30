{
	greet();//hi
	function greet(){
		console.log('hi');
	}	
	greet();//hi
	{
		greet();//hello
		function greet(){
			console.log('hello');
		}
	}
	greet();//hi
}
