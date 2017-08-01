/*
 * @author : Alexis Chretienne
 * @email : alexis.chretienne@fr.ibm.com
 * 
 * Sample code allowing to understand how to code API in Javascript
 * 
 * @doc : https://github.com/IBM/Banking-digitalization-using-hybrid-cloud-with-zSystem
 */

//The API Developer Portal URL
var url_api_devloper_portal = "https://api.us.apiconnect.ibmcloud.com/spbodieusibmcom-prod/developer-contest/mplbank";

/*
 * A customer ID. Please go to
 * https://github.com/IBM/Banking-digitalization-using-hybrid-cloud-with-zSystem/tree/master/identifier
 * to choose one among 1000 customer IDs.
 */
var customerID = "136949483580422232";

// Your API ClientID
var IBM_CLIENT_ID = "YOUR_CLIENT_ID_HERE";

// Your API ClientSecret
var IBM_CLIENT_SECRET = "YOUR_CLIENT_SECRET_HERE";

/*
 * JQUERY ready
 */
$(document).ready(function() {

	// Customer Information API
	$("#btnCustomerInformation").click(customerInformation);
	$("#btnCustomerContract").click(customerContract);

	// Banking Account API
	$("#btnBalanceInquiry").click(balanceInquiry);
	$("#btnTransactionsInquiry").click(transactionsInquiry);
	$("#btnAccountDetail").click(accountDetail);

});

/*
 * Banking customer information
 * 
 */

/**
 * Function allowing to get a banking customer's information
 * 
 * @returns customer Information
 */
function customerInformation() {

	var path = "/customers/";
	var data = customerID;

	doGet(path, data);
}

/**
 * Function allowing to get a banking customer's contracts (cards & banking
 * account)
 * 
 * @returns a list of banking contracts
 */
function customerContract() {

	var path = "/customers/contracts/";
	var pathParameter = $("#inputCustomerContract").val();

	doGet(path, pathParameter);

}

/*
 * Banking Account information
 */

/**
 * Function allowing to get a banking account's balance
 * 
 * @returns a balance
 */
function balanceInquiry() {

	var path = "/accounts/";
	var pathParameter = $("#inputBalanceInquiry").val();
	var queryParamaeter = "?date=2017-10-10";

	var data = pathParameter + queryParamaeter;

	doGet(path, data);

}

/**
 * Function allowing to get last banking account's transactions
 * 
 * @returns a list of banking transactions
 */
function transactionsInquiry() {

	var path = "/accounts/transactions/";
	var pathParameter = $("#inputTransactionsInquiry").val();

	doGet(path, pathParameter);

}

/**
 * Function allowing to get banking account's details
 * 
 * @returns details
 */
function accountDetail() {

	var path = "/accounts/details/";
	var pathParameter = $("#inputAccountDetail").val();

	doGet(path, pathParameter);

}


/*
 * Miscellaneous function
 */

/**
 * Function allowing to make a AJAX call using JQuery
 * 
 * @param path :
 *            customized URL path
 * @param parameter :
 *            path parameter + query parameters
 * @returns
 */
function doGet(path, parameter) {

	$.ajax({
		type : 'GET',
		headers : {
			"x-ibm-client-id" : IBM_CLIENT_ID,
			"x-ibm-client-secret" : IBM_CLIENT_SECRET
		},
		async : true,
		crossDomain : true,
		cache : false,
		url : url_api_devloper_portal + path + parameter,
		contentType : "application/json",
		success : function(data) {
			var jsonPretty = JSON.stringify(data, null, 4);
			$("#result").text(jsonPretty);
		},
		error : function(xhr, status, error) {
			$("#result").text(xhr.responseText);
		},
		complete : function() {
			console.log("complete function GET");
		}
	});

}