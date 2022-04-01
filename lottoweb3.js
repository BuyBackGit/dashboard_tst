//bbt ABI
const ABI2 = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "RewardsDistributed", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "bool", "name": "", "type": "bool" }], "name": "ExcludedFromFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "bool", "name": "", "type": "bool" }], "name": "IncludeFromFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address payable", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "TransferETH", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "_burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "_burningFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_burningFeeTotal", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_buybackv1Fee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_buybackv1FeeTotal", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_buybackv2Fee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_buybackv2FeeTotal", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_maxTxAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_smarketingFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_smarketingFeeTotal", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_taxFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_taxFeeTotal", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "burningAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "buybackv1Address", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "buybackv2Address", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "isExcluded", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenAmount", "type": "uint256" }, { "internalType": "bool", "name": "deductTransferFee", "type": "bool" }], "name": "reflectionFromToken", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_Address", "type": "address" }], "name": "setBurningAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "fee", "type": "uint256" }], "name": "setBurningFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_Address", "type": "address" }], "name": "setBuyBackv1Address", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "fee", "type": "uint256" }], "name": "setBuyBackv1Fee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_Address", "type": "address" }], "name": "setBuyBackv2Address", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "fee", "type": "uint256" }], "name": "setBuyBackv2Fee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "maxTxPercent", "type": "uint256" }], "name": "setMaxTxPercent", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_Address", "type": "address" }], "name": "setSMarketingAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "fee", "type": "uint256" }], "name": "setSMarketingFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "fee", "type": "uint256" }], "name": "setTaxFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "smarketingAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "reflectionAmount", "type": "uint256" }], "name": "tokenFromReflection", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_tokenAddress", "type": "address" }, { "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "transferAnyERC20Tokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }];

//LOTTO ABI
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
lottoaddress = "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3";

(async () => {
    if (window.ethereum) {
        await window.ethereum.send('eth_requestAccounts');
        window.web3 = new Web3(window.ethereum);
        var accounts = await web3.eth.getAccounts();
        account = accounts[0];
        document.getElementById('wallet-address').textContent = account;
    }
})();



//Buttons
getaprovebbt = async () => {
    console.log('Get bbt spend approval');
    const ADDRESS = "0xB3670F91E86a96EeDA0c75b1573035A6277226fb"; //ABI2 = BBT SMARTCONTRACT
    contract = new web3.eth.Contract(ABI2, ADDRESS);
    alert('🚨 APROVING BBT TO PLAY 🚨 \n \n \n YOUR BBT TOKENS WILL NOT BE SPEND ON THIS TRANSACTION \n\n\n YOU NEED TO APPROVE JUST 1 TIME BEFORE PLAY THIS LOTTO');
    let bbtlotto = "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3"
    await contract.methods.approve(bbtlotto, "10000000000000000000000000000").send({ from: account })
}

getbbtbuyticket = async () => {
    console.log('BBT Buy Ticket');
    //BBTCost
    contract = new web3.eth.Contract(abicreateaddress, lottoaddress);
    const cost = await contract.methods.BBTCost().call().then(cost => {
        costwei = cost;
        console.log(cost);
    });

    var readablecost = web3.utils.fromWei(costwei, 'ether');
    console.log(readablecost);
    alert('BBT LOTTO \n\n TICKET PRICE : \n\n ' + readablecost + ' BBT TOKENS \n\n To Play confirm Transaction, Tokens will be spent')

    await contract.methods.PLAY_BBT_LOTTO().send({ from: account })
}

//----------------------------BBT LOGO -----------------------------------------

getbbtlogo = async () => {
    const tokenAddress = '0xB3670F91E86a96EeDA0c75b1573035A6277226fb';
    const tokenSymbol = 'BBT Token';
    const tokenDecimals = 18;
    const tokenImage = 'https://ipfs.io/ipfs/QmbpBoNGRkka1jWtKjvupi2E5FGUbXVj2uVhxJrcPsYvVK';

    try {
        // wasAdded is a boolean. Like any RPC method, an error may be thrown.
        const wasAdded = await ethereum.request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20', // Initially only supports ERC20, but eventually more!
                options: {
                    address: tokenAddress, // The address that the token is at.
                    symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
                    decimals: tokenDecimals, // The number of decimals in the token
                    image: tokenImage, // A string url of the token logo
                },
            },
        });

        if (wasAdded) {
            console.log('Thanks for your interest!');
        } else {
            console.log('Your loss!');
        }
    } catch (error) {
        console.log(error);
    }
}


//------------------------------------------------------------------------------
//----------------------------XPOINTS LOGO -----------------------------------------

getxpointslogo = async () => {
    const tokenAddress = '0xAdEB78eE2aE9BE50109Dc8d7e187Effe574E93F9';
    const tokenSymbol = 'xpoints';
    const tokenDecimals = 18;
    const tokenImage = '';

    try {
        // wasAdded is a boolean. Like any RPC method, an error may be thrown.
        const wasAdded = await ethereum.request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20', // Initially only supports ERC20, but eventually more!
                options: {
                    address: tokenAddress, // The address that the token is at.
                    symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
                    decimals: tokenDecimals, // The number of decimals in the token
                    image: tokenImage, // A string url of the token logo
                },
            },
        });

        if (wasAdded) {
            console.log('Thanks for your interest!');
        } else {
            console.log('Your loss!');
        }
    } catch (error) {
        console.log(error);
    }
}


//------------------------------------------------------------------------------

getaprovexpoints = async () => {
    console.log('Get Xpoints spend approval');
    const ADDRESS = "0xAdEB78eE2aE9BE50109Dc8d7e187Effe574E93F9"; //xpoints address
    contract = new web3.eth.Contract(ABI2, ADDRESS);
    alert('🚨 APROVING xPoints TO PLAY 🚨 \n \n \n YOUR xPoints TOKENS WILL NOT BE SPEND ON THIS TRANSACTION \n\n\n YOU NEED TO APPROVE JUST 1 TIME BEFORE PLAY THIS LOTTO');
    let xlotto = "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3"
    await contract.methods.approve(xlotto, "10000000000000000000000000").send({ from: account })
}

getxpointsbuyticket = async () => {
    console.log('Xpoints Buy Ticket');
    //BBTCost
    contract = new web3.eth.Contract(abicreateaddress, lottoaddress);
    const cost = await contract.methods.XCost().call().then(cost => {
        costwei = cost;
        console.log(cost);
    });

    var readablecost = web3.utils.fromWei(costwei, 'ether');
    console.log(readablecost);
    alert('Xpoints LOTTO \n\n TICKET PRICE : \n\n ' + readablecost + ' Xpoints TOKENS \n\n To Play confirm Transaction, Tokens will be spent')

    await contract.methods.PLAY_XPOINTS_LOTTO().send({ from: account })
}

getxpointsbuyticket = async () => {
    console.log('Xpoints Buy Ticket');
    //BBTCost
    contract = new web3.eth.Contract(abicreateaddress, lottoaddress);
    const cost = await contract.methods.XCost().call().then(cost => {
        costwei = cost;
        console.log(cost);
    });

    var readablecost = web3.utils.fromWei(costwei, 'ether');
    console.log(readablecost);
    alert('Xpoints LOTTO \n\n TICKET PRICE : \n\n ' + readablecost + ' Xpoints TOKENS \n\n To Play confirm Transaction, Tokens will be spent')

    await contract.methods.PLAY_XPOINTS_LOTTO().send({ from: account })
}


getbnbbuyticket = async () => {
    console.log('BNB Buy Ticket');
    contract = new web3.eth.Contract(abicreateaddress, lottoaddress);
    const cost = await contract.methods.cost().call().then(cost => {
        costwei = cost;
        console.log(cost);
    });

    var readablecost = web3.utils.fromWei(costwei, 'ether');
    console.log(readablecost);
    alert('BNB LOTTO \n\n TICKET PRICE : \n\n ' + readablecost + ' BNB \n\n To Play confirm Transaction, BNB will be spent')

    await web3.eth.sendTransaction({ from: account, to: lottoaddress, value: costwei })
}




//selectors
if (document.querySelector('#aprovebbt') != null) {
    document.querySelector('#aprovebbt').onclick = getaprovebbt;
}
if (document.querySelector('#bbtbuyticket') != null) {
    document.querySelector('#bbtbuyticket').onclick = getbbtbuyticket;
}
if (document.querySelector('#aprovexpoints') != null) {
    document.querySelector('#aprovexpoints').onclick = getaprovexpoints;
}
if (document.querySelector('#xpointsbuyticket') != null) {
    document.querySelector('#xpointsbuyticket').onclick = getxpointsbuyticket;
}
if (document.querySelector('#bnbbuyticket') != null) {
    document.querySelector('#bnbbuyticket').onclick = getbnbbuyticket;
}
if (document.querySelector('#bbtlogo') != null) {
    document.querySelector('#bbtlogo').onclick = getbbtlogo;
}
if (document.querySelector('#xpointslogo') != null) {
    document.querySelector('#xpointslogo').onclick = getxpointslogo;
}


//-----------------------------------------------------------------------------------
//////////NODE //////////////////////

const NODE_URL = "https://speedy-nodes-nyc.moralis.io/30df4fb7263704188287a71e/bsc/mainnet";
const provider = new Web3.providers.HttpProvider(NODE_URL);
const web3node = new Web3(provider);

web3node.eth.getBlockNumber()
    .then(function (blockNumber) {
        document.getElementById("blockNumber").textContent = "Block Number: " + blockNumber;
        console.log(blockNumber + ' BSC BLOCK');
        //    setInterval('autoRefresh()', 5000);            
    });

setInterval(function () {
    web3node.eth.getBlockNumber()
        .then(function (blockNumber) {
            document.getElementById("blockNumber").textContent = "Block Number: " + blockNumber;
            console.log(blockNumber + ' BSC BLOCK');
            ///  setInterval('autoRefresh()', 5000);            
        });
}, 10000);

//BNB MAIN LOTTO 


const x = new web3node.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
    .methods.lotto_counter().call().then(x => {
        document.getElementById("lottonumber").textContent = "LOTTO # " + x;
    });

setInterval(function () {
    const x = new web3node.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
        .methods.lotto_counter().call().then(x => {
            document.getElementById("lottonumber").textContent = "LOTTO # " + x;
        });
}, 10000);



const y = new web3node.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
    .methods.BNB_ActivePlayers().call().then(y => {
        document.getElementById("activeplayers").textContent = "Sold Tickets =  " + y;
        console.log("CURRENT PLAYERS = " + y);
    });

setInterval(function () {
    const y = new web3node.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
        .methods.BNB_ActivePlayers().call().then(y => {
            document.getElementById("activeplayers").textContent = "Sold Tickets =  " + y;
            console.log("CURRENT PLAYERS = " + y);
        });
}, 10000);

const yz = new web3node.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
    .methods.maxplayers_perLotto().call().then(yz => {
        document.getElementById("maxplayers").textContent = "Max Tickets =  " + yz;
        console.log("MAX PLAYERS = " + yz);
    });



const z = new web3node.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
    .methods.cost().call().then(z => {
        var a = z / 1e18;
        document.getElementById("ticketcost").textContent = "Price =  " + a + " BNB";
        console.log("TICKET PRICE = " + a);
    });


web3node.eth.getBalance("0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
    .then(function (getBalance) {
        var b = getBalance / 1e18;

        var bstring = b.toString();
        console.log("BNB String Pot " + bstring);

        var int = parseFloat(bstring).toFixed(4);
        console.log("NUMBER " + int);

        document.getElementById("bnbpot").textContent = "POT: " + int + " bnb";
        console.log("BALANCE " + b + ' BNB');

    });

setInterval(function () {
    web3node.eth.getBalance("0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
        .then(function (getBalance) {
            var b = getBalance / 1e18;
            var bstring = b.toString();
            console.log("BNB String Pot " + bstring);

            var int = parseFloat(bstring).toFixed(4);
            console.log("NUMBER " + int);
            document.getElementById("bnbpot").textContent = "POT: " + int + " bnb";
            console.log("BALANCE " + b + ' BNB');

        });
}, 10000);


//BBT MAIN LOTTO

const xbbt = new web3node.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
    .methods.BBTlotto_counter().call().then(xbbt => {
        document.getElementById("lottonumberbbt").textContent = "LOTTO # " + xbbt;
    });

setInterval(function () {
    const xbbt = new web3node.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
        .methods.BBTlotto_counter().call().then(xbbt => {
            document.getElementById("lottonumberbbt").textContent = "LOTTO # " + xbbt;
        });
}, 10000);

const ybbt = new web3node.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
    .methods.BBT_ActivePlayers().call().then(ybbt => {
        document.getElementById("activeplayersbbt").textContent = "Sold Tickets =  " + ybbt;
        console.log("CURRENT PLAYERS = " + ybbt);
    });

setInterval(function () {
    const ybbt = new web3node.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
        .methods.BBT_ActivePlayers().call().then(ybbt => {
            document.getElementById("activeplayersbbt").textContent = "Sold Tickets =  " + ybbt;
            console.log("CURRENT PLAYERS = " + ybbt);
        });
}, 10000);

const maxpbbt = new web3node.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
    .methods.BBT_maxplayers_perlotto().call().then(maxpbbt => {
        document.getElementById("maxplayersbbt").textContent = "Max Tickets =  " + maxpbbt;
        console.log("MAX PLAYERS = " + maxpbbt);
    });



const zbbtcost = new web3node.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
    .methods.BBTCost().call().then(zbbtcost => {
        var b = zbbtcost / 1e18;
        var bstring = b.toString();
        console.log("xpoints String price " + bstring);
        var int = parseFloat(bstring).toFixed(0);
        document.getElementById("ticketcostbbt").textContent = "Price =  " + int + " BBT";
        
    });

setInterval(function () {
    const zbbtcost = new web3node.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
        .methods.BBTCost().call().then(zbbtcost => {
            var b = zbbtcost / 1e18;
            var bstring = b.toString();
            console.log("xpoints String price " + bstring);
            var int = parseFloat(bstring).toFixed(0);
            document.getElementById("ticketcostbbt").textContent = "Price =  " + int + " BBT";
            //console.log("TICKET PRICE = " + a);
        });
}, 10000);

const bbtbal = new web3node.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
    .methods.get_BBT_Balance().call().then(bbtbal => {
        var bbbt = bbtbal / 1e18;

        var stt = bbbt.toString();
        console.log("BBT String Pot " + stt);

        var number = stt;
        var nodecimals = number | 0;

        console.log(nodecimals);

        document.getElementById("bbtpot").textContent = "POT: " + nodecimals + " bbt";
        console.log("BALANCE " + bbbt + ' BBT');

        //console.log(bbtbal.toString());

    });

setInterval(function () {
    const bbtbal = new web3node.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
        .methods.get_BBT_Balance().call().then(bbtbal => {
            var bbbt = bbtbal / 1e18;

            var stt = bbbt.toString();
            console.log("BBT String Pot " + stt);

            var number = stt;
            var nodecimals = number | 0;

            console.log(nodecimals);

            document.getElementById("bbtpot").textContent = "POT: " + nodecimals + " bbt";
            console.log("BALANCE " + bbbt + ' BBT');

        });
}, 10000);


//XPOINTS MAIN LOTTO

const xpt = new web3node.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
    .methods.Xlotto_counter().call().then(xpt => {
        document.getElementById("lottonumberx").textContent = "LOTTO # " + xpt;
    });

setInterval(function () {
    const xpt = new web3node.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
        .methods.Xlotto_counter().call().then(xpt => {
            document.getElementById("lottonumberx").textContent = "LOTTO # " + xpt;
        });
}, 10000);


const xact = new web3node.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
    .methods.XPOINTS_ActivePlayers().call().then(xact => {
        document.getElementById("activeplayersx").textContent = "Sold Tickets =  " + xact;
        console.log("CURRENT PLAYERS = " + xact);
    });

setInterval(function () {
    const xact = new web3node.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
        .methods.XPOINTS_ActivePlayers().call().then(xact => {
            document.getElementById("activeplayersx").textContent = "Sold Tickets =  " + xact;
            console.log("CURRENT PLAYERS = " + xact);
        });
}, 10000);


const xcost = new web3node.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
    .methods.XCost().call().then(xcost => {
        //var xa1 = web3.utils.fromWei(xcost, 'ether');
        //document.getElementById("ticketcostx").textContent = "Price =  " + xa1 + " XPoints";
        //console.log("TICKET PRICE = " + xa1);
        var b = xcost / 1e18;
        var bstring = b.toString();
        console.log("xpoints String price " + bstring);
        var int = parseFloat(bstring).toFixed(0);
        document.getElementById("ticketcostx").textContent = "Price: " + int + " XPoints";
        console.log("XPOINTS TICKET PRICE " + b + ' xpoints');
    });

setInterval(function () {
    const xcost = new web3node.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
        .methods.XCost().call().then(xcost => {
            var b = xcost / 1e18;
            var bstring = b.toString();
            console.log("xpoints String price " + bstring);
            var int = parseFloat(bstring).toFixed(0);
            document.getElementById("ticketcostx").textContent = "Price: " + int + " XPoints";
            

        });
}, 10000);


const maxx = new web3node.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
    .methods.X_maxplayers_perlotto().call().then(maxx => {
        document.getElementById("maxplayersx").textContent = "Max Tickets =  " + maxx;
        console.log("MAX PLAYERS = " + maxx);
    });



const xbal = new web3node.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
    .methods.get_XPOINTS_Balance().call().then(xbal => {
        var rxvalue = xbal / 1e18;

        var sttx = rxvalue.toString();
        console.log("BBT String Pot " + sttx);

        var numberx = sttx;
        var nodecimalsx = numberx | 0;

        console.log(nodecimalsx);


        document.getElementById("xpot").innerHTML = "POT: " + nodecimalsx + " xpoints";
        console.log("BALANCE " + rxvalue + ' Xpoints');

    });

setInterval(function () {
    const xbal = new web3node.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3")
        .methods.get_XPOINTS_Balance().call().then(xbal => {
            var rxvalue = xbal / 1e18;

            var sttx = rxvalue.toString();
            console.log("BBT String Pot " + sttx);

            var numberx = sttx;
            var nodecimalsx = numberx | 0;

            console.log(nodecimalsx);

            document.getElementById("xpot").innerHTML = "POT: " + nodecimalsx + " xpoints";
            console.log("BALANCE " + rxvalue + ' Xpoints');

        });
}, 10000);



//--------------------------------- ALL EVENTS SECTION ----------------------------------------

//const NODE_URL2 = "https://bsc-dataseed1.binance.org";
//const provider2 = new Web3.providers.HttpProvider(NODE_URL2);
//const bweb3node = new Web3(provider2);



//const contract = new bweb3node.eth.Contract(abicreateaddress, "0x10EdC65CB0E528732f43f6fAAB6e86b4E63dEBE3");

//const BBT_lotto_events = async () => {
//  await contract.getPastEvents('BBT_Winner',{ filter: {BBTLottoID: 1}, fromBlock: 16493301, toBlock: 'latest' }).then(console.log)}; //Limited to 5000 blocks BSC node



//BBT_lotto_events();
//console.log("end")