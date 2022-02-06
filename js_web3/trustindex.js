console.log('hello world');


serverUrl = "https://pe6tgnkrykjf.usemoralis.com:2053/server";
appId =  "OqhZPshkcGYtVulxkxcB7aomqgDqnEjlAbbkJZaN";
Moralis.start({ serverUrl, appId});

let user;
let homepage = "https://tokenindex.netlify.app/"

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
    alert(`transferring ${_amount} Native Token to your requested address. Please allow some time to process your transaction.`);
   
}


getrefresh = async () => {
    console.log('refreshing');
    await Moralis.User.logOut();
    await window.location.reload();
    
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

if(document.querySelector('#btn-refresh') != null){
    document.querySelector('#btn-refresh').onclick = getrefresh;    
}




