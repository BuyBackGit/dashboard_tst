console.log('hello world');

serverUrl = "https://pe6tgnkrykjf.usemoralis.com:2053/server";
appId =  "OqhZPshkcGYtVulxkxcB7aomqgDqnEjlAbbkJZaN";
Moralis.start({ serverUrl, appId});
let user;

let homepage = "https://app.buybacktoken.net/"

async function login(){
   
    user = Moralis.User.current();
   if (!user) {
       try {
           user = await Moralis.authenticate({signingMessage: "Connecting to Dashboard"})
        initapp()
        }catch(error) {
            console.log(error)
        }
          }
          else{
              initapp();
          }
} 


async function initapp(){
    document.querySelector("#btn-login").style.display = "block" ;    
    document.getElementById('wallet-address').textContent = (user.get("ethAddress"));
}





logout = async () => {
    console.log('logout');
    await Moralis.User.logOut();
    alert('Logged Wallet Disconnecting \n' + user.get("ethAddress"));
    window.location.href = homepage;
}


// TRANSFER FUNCTIONS
transferETH = async () => {
    let _amount = String(document.querySelector('#amountOfETH').value);
    let _address = document.querySelector('#addressToReceive').value;

    const options = {type: "native", amount: Moralis.Units.ETH(_amount), receiver: _address}
    let result = await Moralis.transfer(options)
    alert(`transferring ${_amount} ETH to your requested address. Please allow some time to process your transaction.`);
}

renderContent = (element) => {
    let elements = ['#transferETH','#transferERC20','#transferNFTs',
    "#transactionsSection", "#balancesSection", "#nftSection", '#starter']
    elements.forEach(e => {
        hideContent(e);
    })
    showContent(element);
}

hideContent = (el) => {
    let element = el;
    document.querySelector(element).style.display = 'none';
}

showContent = (el) => {
    let element = el;
    document.querySelector(element).style.display = 'block';
}

millisecondsToTime = (ms) => {
    let minutes = Math.floor(ms / (1000 * 60));
    let hours = Math.floor(ms / (1000 * 60 * 60));
    let days = Math.floor(ms / (1000 * 60 * 60 * 24));
    
    if (days < 1) {
        if (hours < 1) {
            if (minutes < 1) {
                return `less than a minute ago`
            } else return `${minutes} minutes(s) ago`
        } else return `${hours} hours(s) ago`
    } else return `${days} days(s) ago`
}

fixURL = (url) => {
    if (url.startsWith("ipfs")) {
        return "https://ipfs.moralis.io:2053/ipfs/" + url.split("ipfs://").slice(-1)
    }
    else {
        return url + "?format=json"
    }
}

clearContent = (id) => {
    let _id = `#${id}`
    document.querySelector(_id).innerHTML = "";
}

getERC20Metadata = async () => {
    let _symbol = document.querySelector('#ERC20MetadataSymbol').value;
    let _chain = document.querySelector('#ERC20MetadataChain').value;
    let tokens = await Moralis.Web3API.account.getTokenBalances({chain:_chain})
    tokens.forEach((e,i) => {
        if(e.symbol == _symbol){
            document.querySelector('#ERC20TransferContract').value = e.token_address;
            document.querySelector('#ERC20TransferDecimals').value = e.decimals;
        }
    })   
}

displaytransferERC20 = () => {
    renderContent('#transferERC20');
}
displaytransferERC20 = () => {
    renderContent('#transferERC20');
}
displayBalances = () => {
    renderContent('#balancesSection');
}


transferERC20 = async () => {
    let _amount = String(document.querySelector('#ERC20TransferAmount').value);
    let _decimals = String(document.querySelector('#ERC20TransferDecimals').value);
    let _address = String(document.querySelector('#ERC20TransferAddress').value);
    let _contract = String(document.querySelector('#ERC20TransferContract').value);

    const options = {type: "erc20", 
                    amount: Moralis.Units.Token(_amount, _decimals), 
                    receiver: _address,
                    contract_address: _contract}
    let result = await Moralis.transfer(options)    
    console.log(result);
}

getTransferERC20Balances = async () => {
    let ethTokens = await Moralis.Web3API.account.getTokenBalances();    
    let bscTokens = await Moralis.Web3API.account.getTokenBalances({chain: 'bsc'});
    
    let balancesContent = document.querySelector('#transferERC20Balances');
    balancesContent.innerHTML =`
    
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Symbol</th>
                <th scope="col">Balance</th>
                <th scope="col">Decimals</th>
                <th scope="col">Contract Address</th>
                <th scope="col">Transfer</th>
            </tr>
        </thead>`;
       
    if(bscTokens.length > 0){
        let tokenBalanceContent = '';

        bscTokens.forEach((e,i) => {
                let content = `
            <table  class="table" >
                
            <tbody
                <tr>
                <td>${e.name}</td>
                <td><a href='https://bscscan.com/token/${e.token_address}' target="_blank" rel="noopener noreferrer">${e.symbol}</a></td>
                <td>${(e.balance / ('1e' + e.decimals))} </td>
                <td>${e.decimals}</td>
                <td>${e.token_address}</td>
                <td><button class="btn btn-primary transfer-button col-md-12" data-decimals="${e.decimals}" data-address="${e.token_address}">Transfer ${e.symbol}</button></td>
                </tr>
            </tbody>
            </table>
                `
                tokenBalanceContent += content
        });
        balancesContent.innerHTML += tokenBalanceContent; 


                                           


        setTimeout(function(){
            let theBalances = document.getElementsByClassName('transfer-button');

            for (let i = 0; i <= theBalances.length - 1; i ++) {
                theBalances[i].onclick = function() {
                    document.querySelector('#ERC20TransferDecimals').value = theBalances[i].attributes[1].value;
                    document.querySelector('#ERC20TransferContract').value = theBalances[i].attributes[2].value;
                };
            }
        }, 1000);
    }
}

getNativeBalances = async () => {       
    const bscBalance = await Moralis.Web3API.account.getNativeBalance({ chain: "bsc"});
    let content = document.querySelector('#userBalances').innerHTML = `
    <table class="table">
        <tbody>                  
            <tr>               
                <td>${(bscBalance.balance / 1e18).toFixed(5)} BNB</td>
            </tr>
        </tbody>
    </table>
    `
}

getrefresh = async () => {
    console.log('refreshing');
    await Moralis.User.logOut();
    window.location.reload();
}




if(document.querySelector('#btn-login') != null){
    document.querySelector('#btn-login').onclick = login;    
} 

if(document.querySelector('#btn-logout') != null){
    document.querySelector('#btn-logout').onclick = logout;    
} 
if(document.querySelector('#ETHTransferButton') != null){
    document.querySelector('#ETHTransferButton').onclick = transferETH;    
} 
if(document.querySelector('#transfer-ERC20') != null){
    document.querySelector('#transfer-ERC20').onclick = displaytransferERC20;    
} 
if(document.querySelector('#ERC20TransferButton') != null){
    document.querySelector('#ERC20TransferButton').onclick = transferERC20;    
}
if(document.querySelector('#transferERC20GetBalances') != null){
    document.querySelector('#transferERC20GetBalances').onclick = getTransferERC20Balances;    
} 
if(document.querySelector('#get-balances-link') != null){
    document.querySelector('#get-balances-link').onclick = displayBalances;    
} 
if(document.querySelector('#btn-get-native-balances') != null){
    document.querySelector('#btn-get-native-balances').onclick = getNativeBalances;    
} 
if(document.querySelector('#btn-refresh') != null){
    document.querySelector('#btn-refresh').onclick = getrefresh;    
}


login();
//btn-refresh
//ERC20TransferAmount
//ERC20TransferAddress
//ERC20TransferDecimals
//ERC20TransferContract
//ERC20TransferButton
//ERC20MetadataChain
//ERC20MetadataSymbol
//ERC20MetadataSearch
//transferERC20BalanceTable
//transferERC20Balances
//transferERC20GetBalances 