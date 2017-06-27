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

-3Bamazon-FailedPurchase-Menu.jpg
	-If order quantity > stock quantity, the purchase fails.
	-Menu displayed.



ISSUES

-The menu is supposed to call the start() function if the user chooses to display the store catalog again.
	For unknown reasons, this doesn't work. Nothing happens and no errors are thrown.

-The menu is supposed to exit the program if the user chooses to exit.
	Similarly, nothing happens and no errors are thrown. Used all methods posted in the Homework Slack channel, no dice.