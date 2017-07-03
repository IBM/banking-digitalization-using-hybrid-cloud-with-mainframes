# Banking Digitalization using Hybrid Cloud with z Systems

The following documentation will inform you about available Banking APIs published on [IBM Bluemix] with logical business programs running on the [IBM z Systems Mainframe] through a simulated retail bank called MPLbank ([IBM Client Center Montpellier]) for the IBM Developer Journey Program.

Please read this full page the first time to understand objectives, available APIs and used infrastructure.

# MPLbank

## Architecture

MPLbank is an IBM team located in the IBM Client Center in Montpellier (France) highlighting the IBM Strategy with the IBM z Systems Mainframe. we support many International customers running on Mainframe. This MPLbank Showcase is similar to retail bank and is mainly constituted of an Account Management System, a Payment Hub & a Customer Management System. On top of these components, an API layer hosted in IBM Bluemix has been set up in order to deliver Banking APIs, reachable from many simulated banking channels.

![alt text](images/architecture_new.png "Architecture")

In other words, this API Strategy highlights how an Hybrid Architecture IBM Bluemix/IBM Mainframe is possible with the [IBM Digital Transformation Model]. Following this Model, the MPLbank team applied levels 0, 1 & 2. The level 3 is the purpose of the IBM Developer Journey Program matching with the speed increase of application development.

Deployed IBM Mainframe Technologies for the Developer Journey :
* [IBM z Systems Mainframe] ([IBM z Systems Mainframe Redbook] & [IBM z Systems Mainframe developerWorks])
* [IBM z/OS] ([IBM z/OS Knowledge Center])
* [IBM CICS Transaction Server] ([IBM CICS TS Knowledge Center] & [IBM CICS TS developerWorks])
* [IBM z/OS Connect Enterprise Edition] ([IBM z/OS Connect EE Knowledge Center] & [IBM z/OS Connect EE developerWorks])
* [IBM Db2] ([IBM Db2 Knowledge Center])
* [IBM Master Data Management] ([IBM Master Data Management Knowledge Center])
* [IBM Machine Learning for z/OS]
* ... and a real core banking system ([SOPRA Account Management]) running in IBM CICS TS !

Deployed IBM Bluemix Technologies for the Developer Journey :
* [IBM Bluemix]
* [IBM API Connect] ([IBM API Connect Knowledge Center] & [IBM API Connect developerWorks])
* [IBM Secure Gateway Service]

An [IBM DataPower Gateway] ([IBM DataPower Gateway Knowledge Center]) has been setup in front of MPLbank for security reasons. It also acts as Secure Gateway Client and is connected to the Secure Gateway Service in Bluemix.

## Banking data

The MPlbank team generated more than 500k banking accounts and customers with [IBM SPSS] in order to add credibility for delivered demos as POC or as workload (1000 TPS) to customers. This geographic map represents French banking customers data, stored in MPLbank database. Published Banking APIs will use this set of data and will allow developers to reach banking customer's data (profile, banking contracts) and banking account's data (balance, latest transaction).

![alt text](images/mplbank-customer.png "Customer data")

# How to discover, test & use the Banking APIs ?


1.	**CONGRATULATIONS**. You read all the documentation ! Ready to log in to the IBM API Developer Portal ?

2.	Sign up to IBM in order to get an IBM ID. The IBM ID is mandatory for the next step.

3.	Go to IBM API Connect (Developer Portal) and login with your IBM ID.

4.	Create an organization (by giving a name) in order to manage your applications and APIs subscriptions.

5.	CONGRATULATIONS. You just succeeded to connect to IBM API Connect ! Ready to subscribe for an API ?

6.	A banking product (set of banking APIs) is exposed on the portal. Just follow this step to subscribe to this product: 
a.	Register an application (by clicking on Apps from the menu). APIConnect will generate a Client ID and Secret in order to use linked APIs.
b.	Subscribe for the APIs (by clicking on API Product and selecting Banking API) and link it to the previous registered application.

7.	CONGRATULATIONS. You just succeeded to subscribe to an API from your developer portal ! Ready to test the banking APIs ?
8.	From the page where you just subscribed the APIs on your application, click on the detail of this API on left panel menu. A new page appears containing all informations :
a.	The list of operations and definitions on the left panel. The detail of operations in the middle panel. Test the API following its documentation on API Connect. 
b.	The samples of code on the right panel. You can test each operations using integrated CURL command or by copying/pasting the code following programming language. Do not forget to fill the couple X-IBM-Client-Idand X-IBM-Client-Secret with the generated Client ID /secret of your registered application.

9.	CONGRATULATIONS. You just succeeded to test and implement APIs ! Ready to code ?

10.	Sign up or log in to IBM Bluemix.

11.	Use IBM Bluemix to create, test and deploy a quick application. A general Bluemix project contains : The Bluemix project (your application). Choose among JAVA Liberty Profile, Node Js servers, etc...
a.	DevOps tools for a continuous delivery (Git, automatic deployment).

12.	The challenge starts now. Just have fun with these APIs and be creative to win this Hackathon :)













In order to test your APIs, please choose one of these customer's IDs below :

* 136949483577823232
* 105449483578882141
* 136949483579204232
* 117549483579438316
* 126349483579461136
* 105449483580094241
* 136949483580422232
* 136949483580986132
* 105449483581130242
* 117549483581637516

Note : To call /account/*/{accountID} APIs, You must have a valid account identifier. This account identifier is found by retrieving the banking cutomer profile /customer/{customerID} first....



[IBM Digital Transformation Model]: https://developer.ibm.com/mainframe/ibm-digital-transformation/

[IBM Bluemix]: https://www.ibm.com/us-en/marketplace/cloud-platform
[IBM z Systems Mainframe]: https://www-03.ibm.com/systems/z/
[IBM Client Center Montpellier]: https://www.ibm.com/ibm/clientcenter/montpellier/

[IBM z Systems Mainframe Redbook]: https://www.redbooks.ibm.com/redbooks.nsf/pages/z13?Open
[IBM z Systems Mainframe developerWorks]: https://developer.ibm.com/mainframe/

[IBM z/OS]: https://www-03.ibm.com/systems/z/os/zos/
[IBM z/OS Knowledge Center]: https://www.ibm.com/support/knowledgecenter/en/SSLTBW

[IBM CICS Transaction Server]: https://www-01.ibm.com/software/data/enterprise-application-servers/cics/
[IBM CICS TS Knowledge Center]: https://www.ibm.com/support/knowledgecenter/en/SSGMGV
[IBM CICS TS developerWorks]: https://developer.ibm.com/cics/

[IBM z/OS Connect Enterprise Edition]: https://www.ibm.com/ms-en/marketplace/connect-enterprise-edition
[IBM z/OS Connect EE Knowledge Center]: https://www.ibm.com/support/knowledgecenter/en/SS4SVW
[IBM z/OS Connect EE developerWorks]: https://developer.ibm.com/mainframe/products/zosconnect/

[IBM Db2]: https://www.ibm.com/analytics/us/en/technology/db2/?lnk=STW_US_SHP_A4_TL&lnk2=learn_DB2
[IBM Db2 Knowledge Center]: https://www.ibm.com/support/knowledgecenter/en/SSEPEK/db2z_prodhome.html

[IBM Master Data Management]: https://www.ibm.com/analytics/us/en/technology/master-data-management/
[IBM Master Data Management Knowledge Center]: https://www.ibm.com/support/knowledgecenter/en/SSWSR9

[IBM Machine Learning for z/OS]: https://www.ibm.com/ms-en/marketplace/machine-learning-for-zos
[IBM Machine Learning for z/OS Knowledge Center]: https://www.ibm.com/support/knowledgecenter/en/SS9PF4

[SOPRA Account Management]: https://www.soprabanking.com/our-offer/solutions/account-management-9

[IBM API Connect]: http://www-03.ibm.com/software/products/en/api-connect
[IBM API Connect Knowledge Center]: https://www.ibm.com/support/knowledgecenter/en/SSMNED 
[IBM API Connect developerWorks]: https://developer.ibm.com/apiconnect/

[IBM Secure Gateway Service]: https://console.bluemix.net/docs/services/SecureGateway/secure_gateway.html

[IBM DataPower Gateway]: http://www-03.ibm.com/software/products/en/datapower-gateway
[IBM DataPower Gateway Knowledge Center]: https://www.ibm.com/support/knowledgecenter/en/SS9H2Y 

[IBM SPSS]: https://www.ibm.com/analytics/us/en/technology/spss/