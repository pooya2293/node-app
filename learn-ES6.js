//{
//	greet();//hi
//	function greet(){
//		console.log('hi');
//	}	
//	greet();//hi
//	{
//		greet();//hello
//		function greet(){
//			console.log('hello');
//		}
//	}
//	greet();//hi
//}


	greet();//hi
	function greet(){
		console.log('hi');
	}	
	greet();//hi
	{
		greet();//hi
	//	function greet(){
	//		console.log('hello');
	//	}
		let x = 20;
		{
			function greet(){
				console.log('hi there');
			}
		}
		
	}
	greet();//hi there
	//console.log(x);//x is not defined
	
	{
		function greet(){
			console.log('hi Hello');
		}
		
	}

greet();//hi Hello
