console.log('Hello World');



const abicreateaddress = [
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
				"indexed": false,
				"internalType": "address",
				"name": "_defaultContract2",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "_promoter",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "TokenAddress",
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

    const ADDRESS = "0x166946495F5ac9b53b39c4De5c97800c2F7F5213"; // SMARTCONTRACT
    alert('You will Create a Easy Swap for - ( ' + addresstocreate + ' ) And collected fees will go to - (' + promoteraddress + ' ) Service Cost = 0.01 BNB + Transaction Fee');   
    contractInstance = new web3.eth.Contract(abicreateaddress, ADDRESS)    
    console.log(addresstocreate, promoteraddress);   
    const receipt = await contractInstance.methods.createSwap(addresstocreate, promoteraddress).send({from: ethereum.selectedAddress, value: 10000000000000000 }); //10000000000000000 = 0.01 BNB FEE FOR DEPLOYMENT
    console.log('processing');              

    //This will print on console all the necessary data.

    console.log(receipt.events);   
           
    //Get TokenAddress from console and create a pop up with the value for user copy 

    
    const contract_address = await receipt.events.Token_Created.returnValues['TokenAddress'];

    console.log(contract_address);

    console.log('Create Alert with Contract address');

    alert('Please Copy the New Easy Swap Address Contract - ' + contract_address);

    document.getElementById('neweasy-address').textContent = (contract_address);

}

getClaimButton = async () => {

    console.log('Claim royalities Clicked');
    const ADDRESS = "0x166946495F5ac9b53b39c4De5c97800c2F7F5213"; // SMARTCONTRACT
    contractInstance = new web3.eth.Contract(abicreateaddress, ADDRESS)
    const x = contractInstance.methods.checkBalance().call().then(alert + console.log);
    var y = await x;
    bal1 = y/1e18;

   

    alert('Contract contain - ' + bal1 + ' BNB royalities  in Balance');
   
    await contractInstance.methods.getRoyalities().send({ from: account })    
}






if(document.querySelector('#CreateButton') != null){
    document.querySelector('#CreateButton').onclick = getCreateButton;    
}

if(document.querySelector('#ClaimButton') != null){
    document.querySelector('#ClaimButton').onclick = getClaimButton;    
}
