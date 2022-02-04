console.log('Hello World');
const oldfactoryABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "targetbuy",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "creatoraddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "factory",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "easyaddress",
				"type": "address"
			}
		],
		"name": "Token_Created",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "checkBalance",
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
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "children",
		"outputs": [
			{
				"internalType": "contract GET_TOKEN",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_defaultContract2",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_promoter",
				"type": "address"
			}
		],
		"name": "createSwap",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getRoyalities",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getfactoryaddress",
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
		"stateMutability": "payable",
		"type": "receive"
	}
];

const ADDRESS = "0xAdEB78eE2aE9BE50109Dc8d7e187Effe574E93F9";
const abicreateaddress = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "MinterAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "MinterRemoved",
		"type": "event"
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
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "targetbuy",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "creatoraddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "factory",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "easyaddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "token_to_buy",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "promoter_address",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "easyswap_address",
				"type": "address"
			}
		],
		"name": "Token_Created",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "Creation_Fee",
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
		"name": "Get_Royalities",
		"outputs": [],
		"stateMutability": "payable",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "addMinter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
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
		"name": "anotherTokenInstance",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
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
		"name": "balanceGood",
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
		"name": "balanceGood_anotherinstance",
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
		"name": "balanceGood_thisInstance",
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
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
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
		"name": "checkBalance",
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
		"name": "checkrequired_AnotherTokenInstance",
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
		"name": "checkrequired_TokenInstance",
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
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "children",
		"outputs": [
			{
				"internalType": "contract GET_TOKEN",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_defaultContract2",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_promoter",
				"type": "address"
			}
		],
		"name": "createSwap",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "defaultContract",
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
		"name": "defaultContract2",
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
		"name": "get_count",
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
		"name": "getfactoryaddress",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "isMinter",
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
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
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
		"name": "renounceMinter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
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
				"name": "_cost",
				"type": "uint256"
			}
		],
		"name": "setCreation_Fee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract ERC20",
				"name": "tokenaddress",
				"type": "address"
			}
		],
		"name": "set_AnotherTokenInstance",
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
		"name": "set_Fnderwallet",
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
		"name": "set_Hold_AnotherTokenInstance",
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
		"name": "set_Hold_TokenInstance",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract ERC20",
				"name": "tokenaddress",
				"type": "address"
			}
		],
		"name": "set_TokenInstance",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_Token1",
				"type": "address"
			}
		],
		"name": "set_burnToken1",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_Token2",
				"type": "address"
			}
		],
		"name": "set_burnToken2",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
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
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
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
	}
];



(async () => {
  if (window.ethereum) {
    await window.ethereum.send('eth_requestAccounts');
    window.web3 = new Web3(window.ethereum);
    var accounts = await web3.eth.getAccounts();
    account = accounts[0];
    document.getElementById('wallet-address').textContent = account;
  }


})();







getCreateButton = async () => {
   
    
    console.log('Getting Address for Easy Swap Factory');
    let addresstocreate = String(document.querySelector('#addressToCreate').value); 
    let promoteraddress = String(document.querySelector('#promoteraddress').value);
   
    alert('You Will Create a Easy Swap to Promote:  \n\n ( ' + addresstocreate + ' )\n\n Promoter Address that receive the Fees: \n\n ( ' + promoteraddress + ' ) \n\n Service Cost = 0.01 BNB + Transaction Fees');   
    contractInstance = new web3.eth.Contract(abicreateaddress, ADDRESS)    
    console.log(addresstocreate, promoteraddress);   
    const receipt = await contractInstance.methods.createSwap(addresstocreate, promoteraddress).send({from: ethereum.selectedAddress, value: 10000000000000000 }); //10000000000000000 = 0.01 BNB FEE FOR DEPLOYMENT
    console.log('processing');              

    //This will print on console all the necessary data.

    console.log(receipt.events);   
           
    //Get TokenAddress from console and create a pop up with the value for user copy 

    
    const contract_address = await receipt.events.Token_Created.returnValues['easyaddress'];

    console.log(contract_address);

    console.log('Create Alert with Contract address');

    alert('Please Copy the New Easy Swap Address Contract - ' + contract_address);

    document.getElementById('neweasy-address').textContent = (contract_address);

}

getClaimButton = async () => {

    console.log('Claim royalities Clicked');   
    contractInstance = new web3.eth.Contract(abicreateaddress, ADDRESS)
    const x = contractInstance.methods.checkBalance().call().then(alert + console.log);
    var y = await x;
    bal1 = y/1e18;

   claimtotal = bal1/20;

    alert('Contract contain:\n\n ' + bal1 + ' BNB royalities  in Balance \n \n Claimer get 5% off balance \n \n CLAIMABLE VALUE = ' + claimtotal+ ' BNB');
   
    await contractInstance.methods.Get_Royalities().send({ from: account })    
}




getoldfactory = async () => {

    console.log('Claim royalities Clicked');
    const ADDRESS = "0x00c32eD6BeA5c85c12e30fc827bCf0e3403688D4"; // SMARTCONTRACT
    contractInstance = new web3.eth.Contract(oldfactoryABI, ADDRESS)
    const x = contractInstance.methods.checkBalance().call().then(alert + console.log);
    var y = await x;
    bal1 = y/1e18;

   

    alert('Contract contain: \n\n ' + bal1 + ' BNB \n\n Devs Only, Don´t Confirm Transaction');
   
    await contractInstance.methods.getRoyalities().send({ from: account })    
}

get_set_TokenInstance= async () => {
    console.log('Set TokenInstance Address ');
    let address = String(document.querySelector('#set_TokenInstance').value);     
    console.log(address);
    contractInstance = new web3.eth.Contract(abicreateaddress, ADDRESS) 
    await contractInstance.methods.set_TokenInstance(address).send({from: ethereum.selectedAddress});
}
get_set_Hold_TokenInstance= async () => {
    console.log('Set Hold TokenInstance ');
    let hold = String(document.querySelector('#set_Hold_TokenInstance').value);     
    console.log(hold);
    contractInstance = new web3.eth.Contract(abicreateaddress, ADDRESS) 
    await contractInstance.methods.set_Hold_TokenInstance(hold).send({from: ethereum.selectedAddress});
}
get_set_AnotherTokenInstance= async () => {
    console.log('Set AnotherTokenInstance Address ');
    let address = String(document.querySelector('#set_AnotherTokenInstance').value);     
    console.log(address);
    contractInstance = new web3.eth.Contract(abicreateaddress, ADDRESS) 
    await contractInstance.methods.set_AnotherTokenInstance(address).send({from: ethereum.selectedAddress});
}
get_set_Hold_AnotherTokenInstance= async () => {
    console.log('Set Hold AnotherInstance ');
    let hold = String(document.querySelector('#set_Hold_AnotherTokenInstance').value);     
    console.log(hold);
    contractInstance = new web3.eth.Contract(abicreateaddress, ADDRESS) 
    await contractInstance.methods.set_Hold_AnotherTokenInstance(hold).send({from: ethereum.selectedAddress});
}
get_addMinter= async () => {
    console.log('Add Minter ');
    let minter = String(document.querySelector('#addMinter').value);     
    console.log(minter);
    contractInstance = new web3.eth.Contract(abicreateaddress, ADDRESS) 
    await contractInstance.methods.addMinter(minter).send({from: ethereum.selectedAddress});
}
get_approve= async () => {
    console.log('Get Aprove ');
    let spender = String(document.querySelector('#approvespender').value); 
    let amount = String(document.querySelector('#approveamount').value); 
    console.log((spender)+(amount));
    contractInstance = new web3.eth.Contract(abicreateaddress, ADDRESS) 
    await contractInstance.methods.approve(spender,amount).send({from: ethereum.selectedAddress});
}
get_createSwap = async () => {
   
    
    console.log('Getting Address for Easy Swap Factory');
    let addresstocreate = String(document.querySelector('#createSwaptoken').value); 
    let promoteraddress = String(document.querySelector('#createSwappromoter').value);
   
    alert('You Will Create a Easy Swap to Promote:  \n\n ( ' + addresstocreate + ' )\n\n Promoter Address that receive the Fees: \n\n ( ' + promoteraddress + ' ) \n\n Service Cost = 0.01 BNB + Transaction Fees');   
    contractInstance = new web3.eth.Contract(abicreateaddress, ADDRESS)    
    console.log(addresstocreate, promoteraddress);   
    const receipt = await contractInstance.methods.createSwap(addresstocreate, promoteraddress).send({from: ethereum.selectedAddress, value: 10000000000000000 }); //10000000000000000 = 0.01 BNB FEE FOR DEPLOYMENT
    console.log('processing');              

    //This will print on console all the necessary data.

    console.log(receipt.events);   
           
    //Get TokenAddress from console and create a pop up with the value for user copy 

    
    const contract_address = await receipt.events.Token_Created.returnValues['easyaddress'];

    console.log(contract_address);

    console.log('Create Alert with Contract address');

    alert('Please Copy the New Easy Swap Address Contract - ' + contract_address);

    document.getElementById('neweasy-address').textContent = (contract_address);

}
get_decreaseAllowance= async () => {
    console.log('Set Decrease  Allowance');
    let spender = String(document.querySelector('#decreaseAllowance').value); 
    let amount = String(document.querySelector('#decreaseAllowance_value').value); 

    console.log((spender)+ (amount));
    contractInstance = new web3.eth.Contract(abicreateaddress, ADDRESS) 
    await contractInstance.methods.decreaseAllowance(spender,amount).send({from: ethereum.selectedAddress});
}
get_increaseAllowance= async () => {
    console.log('Set Increase  Allowance');
    let spender = String(document.querySelector('#increaseAllowance').value); 
    let amount = String(document.querySelector('#increaseAllowance_value').value); 

    console.log((spender)+ (amount));
    contractInstance = new web3.eth.Contract(abicreateaddress, ADDRESS) 
    await contractInstance.methods.increaseAllowance(spender,amount).send({from: ethereum.selectedAddress});
}
get__set_burnToken1= async () => {
    console.log('Set Burn Token 1 Address ');
    let token1 = String(document.querySelector('#set_burnToken1').value); 
    console.log(token1);
    contractInstance = new web3.eth.Contract(abicreateaddress, ADDRESS) 
    await contractInstance.methods.set_burnToken1(token1).send({from: ethereum.selectedAddress});
}
get__set_burnToken2= async () => {
    console.log('Set Burn Token 2 Address ');
    let token2 = String(document.querySelector('#set_burnToken2').value); 
    console.log(token2);
    contractInstance = new web3.eth.Contract(abicreateaddress, ADDRESS) 
    await contractInstance.methods.set_burnToken2(token2).send({from: ethereum.selectedAddress});
}
get_set_Fnderwallet= async () => {
    console.log('Set Fnder Address');
    let addressfnder = String(document.querySelector('#set_Fnderwallet').value); 
    console.log(addressfnder);
    contractInstance = new web3.eth.Contract(abicreateaddress, ADDRESS) 
    await contractInstance.methods.set_Fnderwallet(addressfnder).send({from: ethereum.selectedAddress});
}
get_setCreation_Fee= async () => {
    console.log('Set EasySwapCost Fee');
    let fee = String(document.querySelector('#setCreation_Fee').value); 
    console.log(fee);
    contractInstance = new web3.eth.Contract(abicreateaddress, ADDRESS) 
    await contractInstance.methods.setCreation_Fee(fee).send({from: ethereum.selectedAddress});
}
getcall_BalanceGood = async () => {
    console.log('call_BalanceGood Clicked');    
    contractInstance = new web3.eth.Contract(abicreateaddress, ADDRESS)
    const x = contractInstance.methods.balanceGood(account).call().then(alert + console.log);
    Good = await x;
    alert('Allowed to use Claim Function = '+ Good);      
}
getcall_CheckRequired_AnotherTokenInstance = async () => {
    console.log('call_CheckRequired_AnotherTokenInstance Clicked');    
    contractInstance = new web3.eth.Contract(abicreateaddress, ADDRESS)
    const x = contractInstance.methods.checkrequired_AnotherTokenInstance().call().then(alert + console.log);
    var y = await x;
    Required_AnotherTokenInstance = y/1e18;
    const T = await contractInstance.methods.anotherTokenInstance().call().then(alert + console.log);
    

    alert('Token Address:\n\n ' +T+ '\n\n Required Amount in Wallet Balance \n \n'+ Required_AnotherTokenInstance );      
}
getcall_CheckRequired_TokenInstance = async () => {
    console.log('call_CheckRequired_TokenInstance Clicked');    
    contractInstance = new web3.eth.Contract(abicreateaddress, ADDRESS)
    const x = contractInstance.methods.checkrequired_TokenInstance().call().then(alert + console.log);
    var y = await x;
    Required_TokenInstance = y/1e18;
    const T = await contractInstance.methods.TokenInstance().call().then(alert + console.log);
    

    alert('Token Address:\n\n ' +T+ '\n\n Required Amount in Wallet Balance \n \n'+ Required_TokenInstance );      
}
getcall_Creation_Fee = async () => {
    console.log('call_Creation_Fee Clicked');    
    contractInstance = new web3.eth.Contract(abicreateaddress, ADDRESS)
    const x = contractInstance.methods.Creation_Fee().call().then(alert + console.log);
    var y = await x;
    Creation_Fee = y/1e18;


    alert('EASYSWAP ADDRESS - CREATION COST \n \n'+ Creation_Fee + ' BNB + Transaction Fees');      
}
getcall_defaultContract = async () => {
    console.log('call_ Burn Token 1 Clicked');    
    contractInstance = new web3.eth.Contract(abicreateaddress, ADDRESS)
    const x = contractInstance.methods.defaultContract().call().then(alert + console.log);
    defaultContract = await x;
    alert('Address Burn Token 1 = '+ defaultContract);      
}
getcall_defaultContract2 = async () => {
    console.log('call Burn address 2 Clicked');    
    contractInstance = new web3.eth.Contract(abicreateaddress, ADDRESS)
    const x = contractInstance.methods.defaultContract2().call().then(alert + console.log);
    defaultContract2 = await x;
    alert('Address Burn Token 2 = '+ defaultContract2);      
}
getcall_getcount = async () => {
    console.log('call_getCount Clicked');    
    contractInstance = new web3.eth.Contract(abicreateaddress, ADDRESS)
    const x = contractInstance.methods.get_count().call().then(alert + console.log);
    count = await x;
    alert('EasySwap Addresses Created = '+ count);      
}

if(document.querySelector('#_set_TokenInstance') != null){
    document.querySelector('#_set_TokenInstance').onclick = get_set_TokenInstance;    
}
if(document.querySelector('#_set_Hold_TokenInstance') != null){
    document.querySelector('#_set_Hold_TokenInstance').onclick = get_set_Hold_TokenInstance;    
}
if(document.querySelector('#_set_AnotherTokenInstance') != null){
    document.querySelector('#_set_AnotherTokenInstance').onclick = get_set_AnotherTokenInstance;    
}
if(document.querySelector('#_set_Hold_AnotherTokenInstance') != null){
    document.querySelector('#_set_Hold_AnotherTokenInstance').onclick = get_set_Hold_AnotherTokenInstance;    
}
if(document.querySelector('#_addMinter') != null){
    document.querySelector('#_addMinter').onclick = get_addMinter;    
}
if(document.querySelector('#_approve') != null){
    document.querySelector('#_approve').onclick = get_approve;    
}
if(document.querySelector('#_createSwap') != null){
    document.querySelector('#_createSwap').onclick = get_createSwap;    
}
if(document.querySelector('#_decreaseAllowance') != null){
    document.querySelector('#_decreaseAllowance').onclick = get_decreaseAllowance;    
}
if(document.querySelector('#_increaseAllowance') != null){
    document.querySelector('#_increaseAllowance').onclick = get_increaseAllowance;    
}
if(document.querySelector('#_set_burnToken1') != null){
    document.querySelector('#_set_burnToken1').onclick = get__set_burnToken1;    
}
if(document.querySelector('#_set_burnToken2') != null){
    document.querySelector('#_set_burnToken2').onclick = get__set_burnToken2;    
}
if(document.querySelector('#_set_Fnderwallet') != null){
    document.querySelector('#_set_Fnderwallet').onclick = get_set_Fnderwallet;    
}
if(document.querySelector('#_setCreation_Fee') != null){
    document.querySelector('#_setCreation_Fee').onclick = get_setCreation_Fee;    
}
if(document.querySelector('#call_BalanceGood') != null){
    document.querySelector('#call_BalanceGood').onclick = getcall_BalanceGood;    
}
if(document.querySelector('#call_CheckRequired_AnotherTokenInstance') != null){
    document.querySelector('#call_CheckRequired_AnotherTokenInstance').onclick = getcall_CheckRequired_AnotherTokenInstance;    
}
if(document.querySelector('#call_CheckRequired_TokenInstance') != null){
    document.querySelector('#call_CheckRequired_TokenInstance').onclick = getcall_CheckRequired_TokenInstance;    
}
if(document.querySelector('#call_Creation_Fee') != null){
    document.querySelector('#call_Creation_Fee').onclick = getcall_Creation_Fee;    
}
if(document.querySelector('#call_defaultContract') != null){
    document.querySelector('#call_defaultContract').onclick = getcall_defaultContract;    
}
if(document.querySelector('#call_defaultContract2') != null){
    document.querySelector('#call_defaultContract2').onclick = getcall_defaultContract2;    
}
if(document.querySelector('#call_getcount') != null){
    document.querySelector('#call_getcount').onclick = getcall_getcount;    
}






if(document.querySelector('#oldfactory') != null){
    document.querySelector('#oldfactory').onclick = getoldfactory;    
}

if(document.querySelector('#CreateButton') != null){
    document.querySelector('#CreateButton').onclick = getCreateButton;    
}

if(document.querySelector('#ClaimButton') != null){
    document.querySelector('#ClaimButton').onclick = getClaimButton;    
}