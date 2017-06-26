
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
  	password: "",
  	database: "bamazon"
});



function start(){
	connection.connect(function(err){
		if (err) throw err;
		console.log("Connected as id: " + connection.threadId);
		
		console.log("Welcome to Bamazon!");
		console.log("\nHere is our catalog.");
		
		connection.query("SELECT * FROM products", function(err, resData){
			if (err) throw err;
			for (var i = 0; i < resData.length; i++) {
				console.log("\n==================================\n");
				console.log("Product ID: " + resData[i].item_id + "\nProduct: " + resData[i].product_name + "\nDepartment: " + resData[i].department_name + "\nPrice Per Unit: " + resData[i].price + "\nUnits In Stock: " + resData[i].stock_quantity);	
			};
			console.log("\n==================================\n");
			purchases();
		});
	});
};


function purchases(){
	inquirer.prompt([
		{
			type: "input",
			name: "productId",
			message: "Enter the Product ID for the item you want to buy.",
			validate: function(value) {
 		        if (value && isNaN(value) === false) {
        	    	return true;
         		}
         		return false;
			}
		},
		{
			type: "input",
			name: "qty",
			message: "How many of this product would you like to buy? Refer to the catalog for stock quantities.",
			validate: function(value) {
 		        if (value && isNaN(value) === false) {
        	    	return true;
         		}
         		return false;
			}

		}
	]).then(function(order){

		connection.query("SELECT * FROM products", function(err, resData){
			if (err) throw err;

			//MySQL starts counting item_ID at 1, but JS orders the array starting at 0. This causes a mismatch when selecting products,
			//so I've adjusted for it with the fixedId variable here.
			var fixedId = order.productId - 1;

			if (order.qty > resData[fixedId].stock_quantity) {

				console.log("We're terribly sorry!");
				console.log("\nWe do not have " + order.qty + "units of " + resData[fixedId].product_name + " in stock.");
				console.log("\nThere are only " + resData[fixedId].stock_quantity + " units in stock.");

				inquirer.prompt([
					{
						type: "list",
						name: "retry",
						message: "What would you like to do?",
						choices: ["Retry purchasing product", "Display store catalog again", "Exit"]
					}
				]).then(function(choice){

					if (choice == "Retry purchasing product") {
						purchases();
					} 
					else if (choice == "Display store catalog again") {
						start();
					}
					else if (choice == "Exit") {
						console.log("Thank you for using Bamazon!");
						console.log("\nWe hope to see you again.");
						connection.destroy();
						process.exit(-1);
					}
				});
			}
		// else {

		// }
		});
	});
};





start();

