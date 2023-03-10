MoveHQ skill assessment

Framework here is BDD in Cypress where it has feature file for describing what the actual test steps are
and the step definition file where all the steps code is written.

Feature file - CreateNewContact.feature
Step definition file - CreateNewContact.js
Test data file - testData.json

How to run : 
npx cypress run 
Note - this code wont actually run as the page locators are hypothetical

Improvements that can be made to the code : 
1. PageLocator file to hold all the locators/elements in the webpage
2. Strech goal , after getting popup modal success message , verifying if the data has been saved in the database or in the customer list in the UI
3. To validate the text field values , we can come up with negative test data as well
   Eg. If Phone number has limit of 10 characters , we can test the validation by adding 10+ characters