console.log('Hello World');

const ADDRESS = "0x459B6B9B346e608BCBd000D4Bd2ab862A528870c";
const abicreateaddress = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_TokenInstance",
				"type": "address"
			},
			{
				"internalType": "contract IERC20Token",
				"name": "_tokenContract",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_devwlt",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Bought",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "numberOfTokens",
				"type": "uint256"
			}
		],
		"name": "Buy_Tokens",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "End_Sale",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "SELL_Tokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "set_Burning_Token",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "set_devwlt",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "Minimum",
				"type": "uint256"
			}
		],
		"name": "set_Required_Hold",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "Minimum_bnb",
				"type": "uint256"
			}
		],
		"name": "set_Sells_BalanceBNB",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract ERC20",
				"name": "Token_Required",
				"type": "address"
			}
		],
		"name": "set_Token_Hold",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "Price",
				"type": "uint256"
			}
		],
		"name": "set_Token_Price",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract IERC20Token",
				"name": "Buying_Token",
				"type": "address"
			}
		],
		"name": "set_Token_to_Buy",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Sold",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "Amount",
				"type": "uint256"
			}
		],
		"name": "SwapTokensForBNB",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [],
		"name": "activatesells",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "balanceGoodbuys",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "balanceGoodsells",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "check_buyMAX",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "check_sellMAX",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "get_Buyprice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "get_Sellprice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "price",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "requiredholdbuys",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "requiredholdsells",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "Sells_Active",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokenContract",
		"outputs": [
			{
				"internalType": "contract IERC20Token",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "TokenInstance",
		"outputs": [
			{
				"internalType": "contract ERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokensBought",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokensSold",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}


];

//ABI2 = BBT SMARTCONTRACT

const ABI2 = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "RewardsDistributed", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "bool", "name": "", "type": "bool" }], "name": "ExcludedFromFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "bool", "name": "", "type": "bool" }], "name": "IncludeFromFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address payable", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "TransferETH", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "_burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "_burningFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_burningFeeTotal", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_buybackv1Fee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_buybackv1FeeTotal", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_buybackv2Fee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_buybackv2FeeTotal", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_maxTxAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_smarketingFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_smarketingFeeTotal", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_taxFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_taxFeeTotal", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "burningAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "buybackv1Address", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "buybackv2Address", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "isExcluded", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenAmount", "type": "uint256" }, { "internalType": "bool", "name": "deductTransferFee", "type": "bool" }], "name": "reflectionFromToken", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_Address", "type": "address" }], "name": "setBurningAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "fee", "type": "uint256" }], "name": "setBurningFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_Address", "type": "address" }], "name": "setBuyBackv1Address", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "fee", "type": "uint256" }], "name": "setBuyBackv1Fee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_Address", "type": "address" }], "name": "setBuyBackv2Address", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "fee", "type": "uint256" }], "name": "setBuyBackv2Fee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "maxTxPercent", "type": "uint256" }], "name": "setMaxTxPercent", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_Address", "type": "address" }], "name": "setSMarketingAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "fee", "type": "uint256" }], "name": "setSMarketingFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "fee", "type": "uint256" }], "name": "setTaxFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "smarketingAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "reflectionAmount", "type": "uint256" }], "name": "tokenFromReflection", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_tokenAddress", "type": "address" }, { "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "transferAnyERC20Tokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }];

(async () => {
	if (window.ethereum) {
		await window.ethereum.send('eth_requestAccounts');
		window.web3 = new Web3(window.ethereum);
		var accounts = await web3.eth.getAccounts();
		account = accounts[0];
		document.getElementById('wallet-address').textContent = account;
	}


})();



getcall_maxbuy = async () => {
	console.log('call_getmaxbuy Clicked');
	contractInstance = new web3.eth.Contract(abicreateaddress, ADDRESS)
	const x = contractInstance.methods.check_buyMAX().call().then(alert + console.log);
	var y = await x;
	count = y / 1e18;
	console.log(y + ' - Uint256 value');

	

	alert('MAX BBT TOKENS ALLOWED TO PURCHASE = ' + count);
}

getcall_maxsell = async () => {
	console.log('call_getmaxsell Clicked');
	contractInstance = new web3.eth.Contract(abicreateaddress, ADDRESS)
	const x = contractInstance.methods.check_sellMAX().call().then(alert + console.log);
	var y = await x;
	count = y / 1e18;
	console.log(y + ' - Uint256 value');

	

	alert('MAX BBT TOKENS ALLOWED TO SELL = ' + y);
}

getcall_sellactive = async () => {
	console.log('call_getsellactive Clicked');
	contractInstance = new web3.eth.Contract(abicreateaddress, ADDRESS)
	const x = contractInstance.methods.Sells_Active().call().then(alert + console.log);
	count = await x;
	alert('SELLS ACTIVATED? = ' + count);
}

getcall_aprovebbt = async () => {
	console.log('Get bbt approval');
	const ADDRESS1 = "0xB3670F91E86a96EeDA0c75b1573035A6277226fb"; //ABI2 = BBT SMARTCONTRACT
	contract = new web3.eth.Contract(ABI2, ADDRESS1);
	alert('🚨 YOUR BBT TOKENS WILL NOT BE SPEND 🚨 \n YOU JUST NEED TO APROVE 1 TIME TO USE SELLS FUNCTION');
	await contract.methods.approve(ADDRESS, "10000000000000000000000000000").send({ from: account })
}




get_buybbt = async () => {
	console.log('call_getbuybbt Clicked');
	var number = parseInt(document.getElementById("buyamount").value); // 
	console.log('User want to buy ' + number + ' BBT tokens');	
	contractInstance = new web3.eth.Contract(abicreateaddress, ADDRESS)
	const x = contractInstance.methods.get_Buyprice().call().then(alert + console.log);
	count =  await x;	
	console.log('Buy Price = ' + count + ' uint256 bnb');	
	const y = count * number;
	console.log('Total Cost for tokens = ' + y);
	let amount1 = web3.utils.toBN(y);   
	let z = web3.utils.fromWei(amount1, 'ether');


	var userbal = await contractInstance.methods.balanceGoodbuys(account).call().then(alert + console.log);
	console.log(userbal);

	const buyreq = await contractInstance.methods.requiredholdbuys().call().then(alert+console.log);
	
	let req = web3.utils.fromWei(buyreq, 'ether');
	console.log(req);

	const maxtbuy = await contractInstance.methods.check_buyMAX().call().then(alert+console.log);
	let maxtbuy1 = web3.utils.fromWei(maxtbuy, 'ether');
	console.log(maxtbuy1);

	let t = 0;
	if (userbal == Boolean(t)) {
		alert('To Use this Function you need to have \n\n ' + req + ' BBT in your wallet balance! \n\n Buy on PancakeSwap or try our EasySwap Service');
	  
	} else if (number > maxtbuy1 ) {		
		return alert('Contract Balance only Contain: \n\n ' + maxtbuy1 + ' BBT \n\n Reduce the amount off tokens to purchase!')
		
	} else {
		alert(z + ' BNB Total Cost');		
		const receipt = await contractInstance.methods.Buy_Tokens(number).send({from: account, value: y});
		console.log(receipt.events);
		const amountbought = await receipt.events.Bought.returnValues['amount'];
		console.log(amountbought);
		alert('Transaction Confirmed ! \n\n  :' + amountbought + ' BBT Bought! ');
	}

}



get_sellbbt = async () => {
	console.log('call_getsellbbt Clicked');
	var number = parseInt(document.getElementById("sellamount").value); // 
	console.log('User want to Sell ' + number + ' BBT tokens')	;  	
	contractInstance = new web3.eth.Contract(abicreateaddress, ADDRESS)
	const x = contractInstance.methods.get_Sellprice().call().then(alert + console.log);
	count =  await x;
	console.log('Sell Price = ' + count + ' uint256 bnb');
	const y = count * number;
	console.log('User Will receive ' + y + ' BNB for selling ' + number + ' BBT Tokens');
	let amount1 = web3.utils.toBN(y);   
	let z = web3.utils.fromWei(amount1, 'ether');

	var userbal = await contractInstance.methods.balanceGoodsells(account).call().then(alert + console.log);
	console.log(userbal);

	const buyreq = await contractInstance.methods.requiredholdsells().call().then(alert+console.log);
	
	let req = web3.utils.fromWei(buyreq, 'ether');
	console.log(req);

	const maxtsell = await contractInstance.methods.check_sellMAX().call().then(alert+console.log);
	//let maxtsell1 = web3.utils.fromWei(maxtsell, 'ether');
	console.log(maxtsell);

	let t = 0;
	if (userbal == Boolean(t)) {
		alert('To Use this Function you need to have \n\n ' + req + ' BBT in your wallet balance! \n\n Buy on PancakeSwap or try our EasySwap Service');
	  
	} else if (number > maxtsell ) {		
		return alert('Contract Balance only capable to buy: \n\n ' + maxtsell + ' BBT \n\n Reduce the amount off tokens to sell!')
		
	} else {
		alert(' You Will Receive \n\n' + z + ' BNB \n\n Confirm Transaction to Sell Tokens \n\n Require Click 1 Time "Approve to Sell"');
		const receipt = await contractInstance.methods.SELL_Tokens(number).send({from: account});
		console.log(receipt.events);
		const amountsold = await receipt.events.Sold.returnValues['amount'];
		console.log(amountsold);
		alert('Transaction Confirmed ! \n\n  :' + amountsold + ' BBT Sold! \n\n You will receive ' + y + ' BNB');

	}

    
}

get_call_BalanceGoodbuys = async () => {
	console.log('call_BalanceGoodbuys Clicked');
	contractInstance = new web3.eth.Contract(abicreateaddress, ADDRESS)
	const x = contractInstance.methods.balanceGoodbuys(account).call().then(alert + console.log);
	y = await x;
	alert('Allowed to Use "Buy Function?" = ' + y);
}

get_call_BalanceGoodsells = async () => {
	console.log('call_BalanceGoodsells Clicked');
	contractInstance = new web3.eth.Contract(abicreateaddress, ADDRESS)
	const x = contractInstance.methods.balanceGoodsells(account).call().then(alert + console.log);
	y = await x;
	alert('Allowed to Use "Sell Function?" = ' + y);
}

get_call_CheckRequired_for_buys = async () => {
	console.log('get_call_CheckRequired_for_buys Clicked');
	contractInstance = new web3.eth.Contract(abicreateaddress, ADDRESS)
	const x = contractInstance.methods.requiredholdbuys().call().then(alert + console.log);
	y = await x;
	let z = web3.utils.fromWei(y, 'ether');
	alert('Required in user wallet balance: \n\n ' + z + ' BBT tokens \n\n To Use Buy Function');
}

get_call_CheckRequired_for_sells = async () => {
	console.log('get_call_CheckRequired_for_sells Clicked');
	contractInstance = new web3.eth.Contract(abicreateaddress, ADDRESS)
	const x = contractInstance.methods.requiredholdsells().call().then(alert + console.log);
	y = await x;
	let z = web3.utils.fromWei(y, 'ether');
	alert('Required in user wallet balance: \n\n ' + z + ' BBT tokens \n\n To Use Sell Function');
}

get_call_activatesells = async () => {
	console.log('get_call_activatesells Clicked');
	contractInstance = new web3.eth.Contract(abicreateaddress, ADDRESS)
	var k = web3.eth.getBalance("0x459B6B9B346e608BCBd000D4Bd2ab862A528870c")
	k1 = await k;
	let k2 = web3.utils.fromWei(k1, 'ether');


	const x = contractInstance.methods.activatesells().call().then(alert + console.log);
	y = await x;
	let z = web3.utils.fromWei(y, 'ether');
	alert('Required in contract balance \n\n ' + z + ' BNB \n\n To ACTIVATE Sell Function! \n\n Current Contract Balance: \n\n ' + k2 + ' BNB');
}


















if (document.querySelector('#maxbuy') != null) {
	document.querySelector('#maxbuy').onclick = getcall_maxbuy;
}
if (document.querySelector('#maxsell') != null) {
	document.querySelector('#maxsell').onclick = getcall_maxsell;
}
if (document.querySelector('#sellactive') != null) {
	document.querySelector('#sellactive').onclick = getcall_sellactive;
}
if (document.querySelector('#aprovebbt') != null) {
	document.querySelector('#aprovebbt').onclick = getcall_aprovebbt;
}
if (document.querySelector('#buybbt') != null) {
	document.querySelector('#buybbt').onclick = get_buybbt;
}
if (document.querySelector('#sellbbt') != null) {
	document.querySelector('#sellbbt').onclick = get_sellbbt;
}
if (document.querySelector('#call_BalanceGoodbuys') != null) {
	document.querySelector('#call_BalanceGoodbuys').onclick = get_call_BalanceGoodbuys;
}
if (document.querySelector('#call_BalanceGoodsells') != null) {
	document.querySelector('#call_BalanceGoodsells').onclick = get_call_BalanceGoodsells;
}
if (document.querySelector('#call_CheckRequired_for_buys') != null) {
	document.querySelector('#call_CheckRequired_for_buys').onclick = get_call_CheckRequired_for_buys;
}
if (document.querySelector('#call_CheckRequired_for_sells') != null) {
	document.querySelector('#call_CheckRequired_for_sells').onclick = get_call_CheckRequired_for_sells;
}
if (document.querySelector('#call_activatesells') != null) {
	document.querySelector('#call_activatesells').onclick = get_call_activatesells;
}


