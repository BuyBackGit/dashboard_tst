 

const NODE_URL = "https://speedy-nodes-nyc.moralis.io/30df4fb7263704188287a71e/bsc/mainnet";
const provider = new Web3.providers.HttpProvider(NODE_URL);
const web3 = new Web3(provider);



web3.eth.getBlockNumber()
    .then(function (blockNumber) {
        document.getElementById("blockNumber").textContent = "Block Number: " + blockNumber;
        console.log(blockNumber + ' BSC BLOCK');
        //    setInterval('autoRefresh()', 5000);            
    });

setInterval(function () {
    web3.eth.getBlockNumber()
        .then(function (blockNumber) {
            document.getElementById("blockNumber").textContent = "Block Number: " + blockNumber;
            console.log(blockNumber + ' BSC BLOCK');
            ///  setInterval('autoRefresh()', 5000);            
        });
}, 10000);

const abicreateaddress = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "BBTLotto_ID",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "BBTWinner_Address",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "BBT_Reward",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "date",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "BBTLottoID",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "BBTWinnerAddress",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "BBTReward",
                "type": "uint256"
            }
        ],
        "name": "BBT_Winner",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "Lotto_ID",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "Winner_Address",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "BNB_Reward",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "date",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "LottoID",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "WinnerAddress",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "BNBReward",
                "type": "uint256"
            }
        ],
        "name": "BnB_Winner",
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
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "ValueReceived",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "XLotto_ID",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "XWinner_Address",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "X_Reward",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "date",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "XLottoID",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "XWinnerAddress",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "XReward",
                "type": "uint256"
            }
        ],
        "name": "X_Winner",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "BBTCost",
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
        "name": "BBT_ActivePlayers",
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
        "name": "BBT_maxplayers_perlotto",
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
        "name": "BBTlotto_counter",
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
        "name": "BBTplayers",
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
        "name": "BBTplays_counter",
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
        "name": "BBTwinners_counter",
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
        "name": "BNB_ActivePlayers",
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
        "name": "End_BNBLotto",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "End_BUYBACK_Lotto",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "End_XPOINTS_Lotto",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "PLAY_BBT_LOTTO",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "PLAY_XPOINTS_LOTTO",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "XCost",
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
        "name": "XPOINTS_ActivePlayers",
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
        "name": "X_maxplayers_perlotto",
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
        "name": "Xlotto_counter",
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
        "name": "Xplayers",
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
        "name": "Xplays_counter",
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
        "name": "Xpoints_PER_BNBPLAY",
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
        "name": "Xwinners_counter",
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
                "name": "_maxplayers",
                "type": "uint256"
            }
        ],
        "name": "_BBT_set_maxplayers",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_maxplayers",
                "type": "uint256"
            }
        ],
        "name": "_BNB_set_maxplayers",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_maxplayers",
                "type": "uint256"
            }
        ],
        "name": "_XPOINTS_set_maxplayers",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_approver",
                "type": "address"
            }
        ],
        "name": "_addApprover",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_disapprover",
                "type": "address"
            }
        ],
        "name": "_removeApprovedUser",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "_setXpoints_MintPer_Play",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "admin",
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
                "name": "",
                "type": "address"
            }
        ],
        "name": "approvedUsers",
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
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "bnbplayers",
        "outputs": [
            {
                "internalType": "address payable",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "cost",
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
        "name": "get_BBT_Balance",
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
        "name": "get_BNB_Balance",
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
        "name": "get_XPOINTS_Balance",
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
        "name": "lotto_counter",
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
        "name": "maxplayers_perLotto",
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
        "name": "plays_counter",
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
                "name": "_cost",
                "type": "uint256"
            }
        ],
        "name": "set_BBT_Ticket_Price",
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
        "name": "set_BNB_Ticket_Price",
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
                "name": "_cost",
                "type": "uint256"
            }
        ],
        "name": "set_XPOINTS_Ticket_Price",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "winners_counter",
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
        "stateMutability": "payable",
        "type": "receive"
    }
];
//BNB MAIN LOTTO 


const x = new web3.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
    .methods.lotto_counter().call().then(x => {
        document.getElementById("lottonumber").textContent = "LOTTO # " + x;
    });

setInterval(function () {
    const x = new web3.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
        .methods.lotto_counter().call().then(x => {
            document.getElementById("lottonumber").textContent = "LOTTO # " + x;
        });
}, 10000);



const y = new web3.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
    .methods.BNB_ActivePlayers().call().then(y => {
        document.getElementById("activeplayers").textContent = "CURRENT PLAYERS =  " + y;
        console.log("CURRENT PLAYERS = " + y);
    });

setInterval(function () {
    const y = new web3.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
        .methods.BNB_ActivePlayers().call().then(y => {
            document.getElementById("activeplayers").textContent = "CURRENT PLAYERS =  " + y;
            console.log("CURRENT PLAYERS = " + y);
        });
}, 10000);

const yz = new web3.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
    .methods.maxplayers_perLotto().call().then(yz => {
        document.getElementById("maxplayers").textContent = "MAX PLAYERS =  " + yz;
        console.log("MAX PLAYERS = " + yz);
    });



const z = new web3.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
    .methods.cost().call().then(z => {
        var a = z / 1e18;
        document.getElementById("ticketcost").textContent = "PLAY COST =  " + a + " BNB";
        console.log("TICKET PRICE = " + a);
    });


web3.eth.getBalance("0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
    .then(function (getBalance) {
        var b = getBalance / 1e18;
        document.getElementById("bnbpot").textContent = "BALANCE: " + b + " BNB";
        console.log("BALANCE " + b + ' BNB');

    });

setInterval(function () {
    web3.eth.getBalance("0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
        .then(function (getBalance) {
            var b = getBalance / 1e18;
            document.getElementById("bnbpot").textContent = "BALANCE: " + b + " BNB";
            console.log("BALANCE " + b + ' BNB');

        });
}, 10000);


//BBT MAIN LOTTO

const xbbt = new web3.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
    .methods.BBTlotto_counter().call().then(xbbt => {
        document.getElementById("lottonumberbbt").textContent = "LOTTO # " + xbbt;
    });

setInterval(function () {
    const xbbt = new web3.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
        .methods.BBTlotto_counter().call().then(xbbt => {
            document.getElementById("lottonumberbbt").textContent = "LOTTO # " + xbbt;
        });
}, 10000);

const ybbt = new web3.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
    .methods.BBT_ActivePlayers().call().then(ybbt => {
        document.getElementById("activeplayersbbt").textContent = "CURRENT PLAYERS =  " + ybbt;
        console.log("CURRENT PLAYERS = " + ybbt);
    });

setInterval(function () {
    const ybbt = new web3.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
        .methods.BBT_ActivePlayers().call().then(ybbt => {
            document.getElementById("activeplayersbbt").textContent = "CURRENT PLAYERS =  " + ybbt;
            console.log("CURRENT PLAYERS = " + ybbt);
        });
}, 10000);

const maxpbbt = new web3.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
    .methods.BBT_maxplayers_perlotto().call().then(maxpbbt => {
        document.getElementById("maxplayersbbt").textContent = "MAX PLAYERS =  " + maxpbbt;
        console.log("MAX PLAYERS = " + maxpbbt);
    });



const zbbtcost = new web3.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
    .methods.BBTCost().call().then(zbbtcost => {
        var a = web3.utils.fromWei(zbbtcost, 'ether');

        document.getElementById("ticketcostbbt").textContent = "PLAY COST =  " + a + " BBT";
        console.log("TICKET PRICE = " + a);
    });


const bbtbal = new web3.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
    .methods.get_BBT_Balance().call().then(bbtbal => {
        var bbbt = bbtbal / 1e18;
        document.getElementById("bbtpot").textContent = "BALANCE: " + bbbt + " BBT";
        console.log("BALANCE " + bbbt + ' BBT');

    });

setInterval(function () {
    const bbtbal = new web3.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
        .methods.get_BBT_Balance().call().then(bbtbal => {
            var bbbt = bbtbal / 1e18;
            document.getElementById("bbtpot").textContent = "BALANCE: " + bbbt + " BBT";
            console.log("BALANCE " + bbbt + ' BBT');

        });
}, 10000);


//XPOINTS MAIN LOTTO

const xpt = new web3.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
    .methods.Xlotto_counter().call().then(xpt => {
        document.getElementById("lottonumberx").textContent = "LOTTO # " + xpt;
    });

setInterval(function () {
    const xpt = new web3.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
        .methods.Xlotto_counter().call().then(xpt => {
            document.getElementById("lottonumberx").textContent = "LOTTO # " + xpt;
        });
}, 10000);


const xact = new web3.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
    .methods.XPOINTS_ActivePlayers().call().then(xact => {
        document.getElementById("activeplayersx").textContent = "CURRENT PLAYERS =  " + xact;
        console.log("CURRENT PLAYERS = " + xact);
    });

setInterval(function () {
    const xact = new web3.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
        .methods.XPOINTS_ActivePlayers().call().then(xact => {
            document.getElementById("activeplayersx").textContent = "CURRENT PLAYERS =  " + xact;
            console.log("CURRENT PLAYERS = " + xact);
        });
}, 10000);

const xcost = new web3.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
    .methods.XCost().call().then(xcost => {
        var xa = web3.utils.fromWei(xcost, 'ether');

        document.getElementById("ticketcostx").textContent = "PLAY COST =  " + xa + " XPoints";
        console.log("TICKET PRICE = " + xa);
    });


const maxx = new web3.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
    .methods.X_maxplayers_perlotto().call().then(maxx => {
        document.getElementById("maxplayersx").textContent = "MAX PLAYERS =  " + maxx;
        console.log("MAX PLAYERS = " + maxx);
    });



    const xbal = new web3.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
    .methods.get_XPOINTS_Balance().call().then(xbal => {
        var rxvalue = xbal / 1e18;
        document.getElementById("xpot").textContent = "BALANCE: " + rxvalue + " Xpoints";
        console.log("BALANCE " + rxvalue + ' Xpoints');

    });


