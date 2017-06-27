BAMAZON README
---------------


SCREENSHOT GUIDE

-1BamazonCatalog.jpg
	-Upon running the .js file, the catalog is displayed and the two purchase parameters are delivered via Inquirer.


-2Bamazon-PurchaseComplete-Menu.jpg
	-If order quantity < stock quantity, the purchase completes.
	-Stock quantity is reduced by the order quantity via MySQL.
	-Price is calculated via MySQL and a bit of math.
	-Menu displayed.
		-If user chooses 'exit', the program ends.

-3Bamazon-FailedPurchase-Menu.jpg
	-If order quantity > stock quantity, the purchase fails.
	-Menu displayed.
		-If user chooses 'exit', the program ends.



ISSUES

-The menu is supposed to call the start() function if the user chooses to display the store catalog again.
	This throws an error: "Cannot enqueue Handshake after already enqueuing a Handshake." I think I understand, but I'm not sure how to work around it.