# Banking Digitalization using Hybrid Cloud with z Systems

## MPLbank


MPLbank is a IBM team located in the IBM Client Center in Montpellier (France) highlighting the IBM Strategy with the IBM Mainframe. we support many International customers running on Mainframe. This MPLbank Showcase is similar to retail bank and mainly constituted of an Account Management System, a Payment Hub & a Customer Management System. On top of these components, an API layer has been set up in order to deliver Banking APIs, reachable from many banking channels.

This API Economy highlights how an Hybrid Architecture Bluemix/Mainframe is possible using IBM Technologies.

![alt text](architecture_new.png "Architecture")

These Banking APIs allows developers to reach banking customer data (profile, banking contracts) and banking account's data (balance, last transaction).


##MPLbank Customer data

The MPlbank team generates more than 1 million banking accounts and customers in order to add credibility for delivered demos as POC or as workload (1000 TPS) to customers. This geographic map represents French banking customer data stored in MPLbank database.


In order to test your APIs, please choose one of these customer's IDs below :

136949483577823232
105449483578882141
136949483579204232
117549483579438316
126349483579461136
105449483580094241
136949483580422232
136949483580986132
105449483581130242
117549483581637516

Note : To call /account/*/{accountID} APIs, You must have a valid account identifier. This account identifier is found by retrieving the banking cutomer profile /customer/{customerID} first...