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


// 	greet();//hi
// 	function greet(){
// 		console.log('hi');
// 	}	
// 	greet();//hi
// 	{
// 		greet();//hi
// 	//	function greet(){
// 	//		console.log('hello');
// 	//	}
// 		let x = 20;
// 		{
// 			function greet(){
// 				console.log('hi there');
// 			}
// 		}
		
// 	}
// 	greet();//hi there
// 	//console.log(x);//x is not defined
	
// 	{
// 		function greet(){
// 			console.log('hi Hello');
// 		}
		
// 	}

// greet();//hi Hello


//--------------------

// greet();//can not acsess
	let greet = function(){
		console.log('hi');
	}	
	greet();//hi
	{
		// greet();//can not acsess
		let greet = function(){
			console.log('hello');
		}
		let x = 20;
		{
			let greet = function(){
				console.log('hi there');
			}
		}
	greet();//hello
		
	}
	//console.log(x);//x is not defined
	
	{
		let greet = function(){
			console.log('hi Hello');
		}
		
	}

greet();//hi
