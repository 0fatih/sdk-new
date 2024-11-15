"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHAIN_SPECS = exports.MAX_LIQ = exports.MIN_SQRT_PRICE = exports.MAX_SQRT_PRICE = exports.MAX_TICK = exports.MIN_TICK = void 0;
exports.MIN_TICK = -665454;
exports.MAX_TICK = 831818;
exports.MAX_SQRT_PRICE = BigInt("21267430153580247136652501917186561138") - BigInt(1);
exports.MIN_SQRT_PRICE = BigInt("65538") - BigInt(1);
exports.MAX_LIQ = BigInt(2) ** BigInt(128) - BigInt(1);
const ETHEREUM_LOGO = "https://d33wubrfki0l68.cloudfront.net/fcd4ecd90386aeb50a235ddc4f0063cfbb8a7b66/4295e/static/bfc04ac72981166c740b189463e1f74c/40129/eth-diamond-black-white.jpg";
const SCROLL_LOGO = "https://develop--ambient-finance.netlify.app/scroll_logo.png";
const BLAST_LOGO = "https://assets-global.website-files.com/65a6baa1a3f8ed336f415cb4/65a6cc95aae1066cf96d497d_Logo%20Black%20on%20Yellow%20Background%402x-p-500.png";
const DFLT_SDK_INFURA_KEY = '4741d1713bff4013bc3075ed6e7ce091';
const GOERLI_CHAIN = {
    nodeUrl: "https://goerli.infura.io/v3/" + DFLT_SDK_INFURA_KEY,
    wsUrl: "wss://goerli.infura.io/ws/v3/" + DFLT_SDK_INFURA_KEY,
    addrs: {
        dex: "0xfafcd1f5530827e7398b6d3c509f450b1b24a209",
        query: "0xc9900777baa5EE94Cd2C6509fb09278A1A46b7e8",
        impact: "0x142BE02F2A3A27ecD6e2f18a43c2C234F372C831"
    },
    poolIndex: 36000,
    isTestNet: true,
    chainId: "0x5",
    gridSize: 64,
    proxyPaths: {
        cold: 0,
        long: 4,
        liq: 2
    },
    blockExplorer: "https://goerli.etherscan.io/",
    displayName: "Görli",
    logoUrl: ETHEREUM_LOGO,
};
const ARB_GOERLI_CHAIN = {
    nodeUrl: "https://goerli-rollup.arbitrum.io/rpc",
    addrs: {
        dex: "0x5D42d6046927DEE12b9b4a235be0ceCd55D0E0fb",
        query: "0x3A6E9cff691a473D4D0742E1dFc8Ea263a99F6d0",
        impact: "0xf19D3dcdF82af0d40Cb3b4AaE4D266c638A3E454"
    },
    poolIndex: 36000,
    isTestNet: true,
    chainId: "0x66eed",
    gridSize: 16,
    proxyPaths: {
        cold: 3,
        long: 4,
        liq: 2
    },
    blockExplorer: "https://goerli.arbiscan.io/",
    displayName: "Arbitrum Görli",
    logoUrl: ETHEREUM_LOGO,
};
const MAINNET_CHAIN = {
    nodeUrl: "https://mainnet.infura.io/v3/" + DFLT_SDK_INFURA_KEY,
    wsUrl: "wss://mainnet.infura.io/ws/v3/" + DFLT_SDK_INFURA_KEY,
    addrs: {
        dex: "0xAaAaAAAaA24eEeb8d57D431224f73832bC34f688",
        query: "0xc2e1f740E11294C64adE66f69a1271C5B32004c8",
        impact: "0x3e3EDd3eD7621891E574E5d7f47b1f30A994c0D0",
        router: "0x533E164ded63f4c55E83E1f409BDf2BaC5278035",
        routerBypass: "0xa3e58B0cB05447398358B6C59E4B2465342EFEd2"
    },
    poolIndex: 420,
    isTestNet: false,
    chainId: "0x1",
    gridSize: 16,
    proxyPaths: {
        cold: 3,
        long: 4,
        liq: 2,
        dfltColdSwap: true
    },
    blockExplorer: "https://etherscan.io/",
    displayName: "Ethereum",
    logoUrl: ETHEREUM_LOGO,
};
const SEPOLIA_CHAIN = {
    nodeUrl: "https://sepolia.infura.io/v3/" + DFLT_SDK_INFURA_KEY,
    wsUrl: "wss://sepolia.infura.io/ws/v3/" + DFLT_SDK_INFURA_KEY,
    addrs: {
        dex: "0xFb8A46E7963E6397DBB4B2E1c0B3f0464fb5BDFF",
        query: "0xDB182F4687708D0F5798c77b4d02ad3425f4B672",
        impact: "0x80aEB76D091ecbEd3c609c0B794fC1A09B9cB8F4",
        router: "0x168dB7Ad649D9f7918028F709C5e2F245af284A4",
        routerBypass: "0xBC3d1Bb2d8A59eb25DA1E527bF0cA62B44346EE1"
    },
    poolIndex: 36000,
    isTestNet: true,
    chainId: "0xaa36a7",
    gridSize: 16,
    proxyPaths: {
        cold: 3,
        long: 4,
        liq: 2
    },
    blockExplorer: "https://sepolia.etherscan.io/",
    displayName: "Sepolia",
    logoUrl: ETHEREUM_LOGO,
};
const BLAST_CHAIN = {
    nodeUrl: "https://rpc.ankr.com/blast",
    addrs: {
        dex: "0xaAaaaAAAFfe404EE9433EEf0094b6382D81fb958",
        query: "0xA3BD3bE19012De72190c885FB270beb93e36a8A7",
        impact: "0x6A699AB45ADce02891E6115b81Dfb46CAa5efDb9",
        router: "0xaab17419F062bB28CdBE82f9FC05E7C47C3F6194",
        routerBypass: "0xd83eF4d0e968A96329aC297bBf049CDdaC7E0362"
    },
    poolIndex: 420,
    isTestNet: true,
    chainId: "0x13e31",
    gridSize: 4,
    proxyPaths: {
        cold: 3,
        long: 130,
        liq: 128,
        dfltColdSwap: true
    },
    blockExplorer: "https://blastscan.io/",
    displayName: "Blast",
    logoUrl: BLAST_LOGO,
};
const ZIRCUIT_CHAIN = {
    nodeUrl: "https://rpc.ankr.com/blast",
    addrs: {
        dex: "0xaAaaaAAAFfe404EE9433EEf0094b6382D81fb958",
        query: "0xA3BD3bE19012De72190c885FB270beb93e36a8A7",
        impact: "0x6A699AB45ADce02891E6115b81Dfb46CAa5efDb9",
        router: "0xaab17419F062bB28CdBE82f9FC05E7C47C3F6194",
        routerBypass: "0xd83eF4d0e968A96329aC297bBf049CDdaC7E0362"
    },
    poolIndex: 420,
    isTestNet: true,
    chainId: "0x13e31",
    gridSize: 4,
    proxyPaths: {
        cold: 3,
        long: 130,
        liq: 128,
        dfltColdSwap: true
    },
    blockExplorer: "https://blastscan.io/",
    displayName: "Zircuit",
    logoUrl: BLAST_LOGO,
};
const BLAST_SEPOLIA_CHAIN = {
    nodeUrl: "https://sepolia.blast.io",
    addrs: {
        dex: "0xf65976C7f25b6320c7CD81b1db10cEe97F2bb7AC",
        query: "0x7757BAEC9c492691eAE235c6f01FB99AaA622975",
        impact: "0x5D42d6046927DEE12b9b4a235be0ceCd55D0E0fb",
        router: "0xdCB3b5ec9170beF68E9fff21F0EDD622F72f1899",
        routerBypass: "0x3A6E9cff691a473D4D0742E1dFc8Ea263a99F6d0"
    },
    poolIndex: 36000,
    isTestNet: true,
    chainId: "0xa0c71fd",
    gridSize: 1,
    proxyPaths: {
        cold: 3,
        long: 130,
        liq: 128,
        dfltColdSwap: true
    },
    blockExplorer: "https://testnet.blastscan.io/",
    displayName: "Blast Sepolia",
    logoUrl: BLAST_LOGO,
};
const SCROLL_SEPOLIA_CHAIN = {
    nodeUrl: "https://sepolia-rpc.scroll.io",
    addrs: {
        dex: "0xaaAAAaa6612bd88cD409cb0D70C99556C87A0E8c",
        query: "0x43eC1302FE3587862e15B2D52AD9653575FD79e9",
        impact: "0x9B28970D51A231741416D8D3e5281d9c51a50892",
        router: "0x323172539B1B0D9eDDFFBd0318C4d6Ab45292843",
        routerBypass: "0xb2aE163293C82DCF36b0cE704591eDC2f9E2608D"
    },
    poolIndex: 36000,
    isTestNet: true,
    chainId: "0x8274f",
    gridSize: 1,
    proxyPaths: {
        cold: 3,
        long: 130,
        liq: 128
    },
    blockExplorer: "https://sepolia.scrollscan.dev/",
    displayName: "Scroll Sepolia",
    logoUrl: SCROLL_LOGO,
};
const PLUME_SEPOLIA_CHAIN = {
    nodeUrl: "https://test-rpc.plumenetwork.xyz",
    addrs: {
        dex: "0x21B5E1aC7154A34d0ae38684A4c27CbE6b9c4f1E",
        query: "0x1C74Dd2DF010657510715244DA10ba19D1F3D2B7",
        impact: "0x70a6a0C905af5737aD73Ceba4e6158e995031d4B",
    },
    poolIndex: 36000,
    isTestNet: true,
    chainId: "0x18230",
    gridSize: 1,
    proxyPaths: {
        cold: 3,
        long: 130,
        liq: 128
    },
    blockExplorer: "https://test-explorer.plumenetwork.xyz/",
    displayName: "Plume Sepolia",
    logoUrl: ETHEREUM_LOGO,
};
const SCROLL_CHAIN = {
    nodeUrl: "https://rpc.scroll.io",
    addrs: {
        dex: "0xaaaaAAAACB71BF2C8CaE522EA5fa455571A74106",
        query: "0x62223e90605845Cf5CC6DAE6E0de4CDA130d6DDf",
        impact: "0xc2c301759B5e0C385a38e678014868A33E2F3ae3",
        router: "0xfB5f26851E03449A0403Ca945eBB4201415fd1fc",
        routerBypass: "0xED5535C6237f72BD9b4fDEAa3b6D8d9998b4C4e4",
    },
    poolIndex: 420,
    isTestNet: false,
    chainId: "0x82750",
    gridSize: 4,
    proxyPaths: {
        cold: 3,
        long: 130,
        liq: 128,
        dfltColdSwap: true
    },
    blockExplorer: "https://scrollscan.com/",
    displayName: "Scroll",
    logoUrl: SCROLL_LOGO,
};
const LOCAL_FORK_CHAIN = Object.assign({}, GOERLI_CHAIN, {
    nodeUrl: "http://127.0.0.1:8545",
    chainId: "0x7a69",
    displayName: "Local Fork"
});
const MILLICENT_ONE_CHAIN = {
    nodeUrl: "https://testingusdc.rpc.caldera.xyz/http",
    wsUrl: "wss://testingusdc.rpc.caldera.xyz/ws",
    addrs: {
        dex: "0x39A9Be092b54dAbBC89ac091802c985f68A7A3cC",
        query: "0xB1f6448BE5934a57aD811465d2ae0326ae4c4DCa",
        impact: "0xffd026d3b9BbBB2b27e45038f11290f4CCbaD756",
    },
    poolIndex: 36000,
    isTestNet: true,
    chainId: "0x2277c7",
    gridSize: 64,
    proxyPaths: {
        cold: 3,
        long: 4,
        liq: 2
    },
    blockExplorer: "https://testingusdc.explorer.caldera.xyz/",
    displayName: "Millicent One",
    logoUrl: "https://raw.githubusercontent.com/millicentnetwork/.github/main/profile/assets/banner.png",
};
exports.CHAIN_SPECS = {
    "0x1": MAINNET_CHAIN,
    "0x5": GOERLI_CHAIN,
    "0x7a69": LOCAL_FORK_CHAIN,
    "0x66eed": ARB_GOERLI_CHAIN,
    "0xaa36a7": SEPOLIA_CHAIN,
    "0x8274f": SCROLL_SEPOLIA_CHAIN,
    "0x82750": SCROLL_CHAIN,
    "0xa0c71fd": BLAST_SEPOLIA_CHAIN,
    "0x13e31": BLAST_CHAIN,
    "0x18230": PLUME_SEPOLIA_CHAIN,
    "goerli": GOERLI_CHAIN,
    "sepolia": SEPOLIA_CHAIN,
    "arbtest": ARB_GOERLI_CHAIN,
    "arbgoerli": ARB_GOERLI_CHAIN,
    "local": LOCAL_FORK_CHAIN,
    "ethereum": MAINNET_CHAIN,
    "mainnet": MAINNET_CHAIN,
    "scrolltest": SCROLL_SEPOLIA_CHAIN,
    "scroll": SCROLL_CHAIN,
    "scrollsepolia": SCROLL_SEPOLIA_CHAIN,
    "blast": BLAST_CHAIN,
    "blastSepolia": BLAST_SEPOLIA_CHAIN,
    "plumeSepolia": PLUME_SEPOLIA_CHAIN,
    "zircuit": ZIRCUIT_CHAIN,
    "0x2277c7": MILLICENT_ONE_CHAIN,
    "millicentOne": MILLICENT_ONE_CHAIN,
};
//# sourceMappingURL=constants.js.map