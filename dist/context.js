"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureChain = exports.lookupChain = exports.connectCroc = void 0;
const tslib_1 = require("tslib");
const ethers_1 = require("ethers");
const ethers_2 = require("ethers");
const constants_1 = require("./constants");
const abis_1 = require("./abis");
const ethers_3 = require("ethers");
const impact_1 = require("./abis/impact");
const erc20_read_1 = require("./abis/erc20.read");
function connectCroc(providerOrChainId, signer) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const [provider, maybeSigner] = yield buildProvider(providerOrChainId, signer);
        return setupProvider(provider, maybeSigner);
    });
}
exports.connectCroc = connectCroc;
function buildProvider(arg, signer) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        if (typeof arg === "number" || typeof arg == "string") {
            const context = lookupChain(arg);
            return buildProvider(new ethers_1.JsonRpcProvider(context.nodeUrl), signer);
        }
        else if ("getNetwork" in arg) {
            return [arg, signer];
        }
        else {
            const chainId = Number((_b = (yield ((_a = arg.provider) === null || _a === void 0 ? void 0 : _a.getNetwork()))) === null || _b === void 0 ? void 0 : _b.chainId);
            return buildProvider(chainId, signer);
        }
    });
}
function setupProvider(provider, signer) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const actor = yield determineActor(provider, signer);
        const chainId = yield getChain(provider);
        let cntx = inflateContracts(chainId, provider, actor);
        return yield attachSenderAddr(cntx, actor);
    });
}
function attachSenderAddr(cntx, actor) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if ('getAddress' in actor) {
            try {
                cntx.senderAddr = yield actor.getAddress();
            }
            catch (e) {
                console.warn("Failed to get signer address:", e);
            }
        }
        return cntx;
    });
}
function determineActor(provider, signer) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (signer) {
            try {
                return signer.connect(provider);
            }
            catch (_a) {
                return signer;
            }
        }
        else if ("getSigner" in provider) {
            try {
                let signer = yield (provider.getSigner());
                return signer;
            }
            catch (_b) {
                return provider;
            }
        }
        else {
            return provider;
        }
    });
}
function getChain(provider) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if ("chainId" in provider) {
            return provider.chainId;
        }
        else if ("getNetwork" in provider) {
            return provider.getNetwork().then((n) => Number(n.chainId));
        }
        else {
            throw new Error("Invalid provider");
        }
    });
}
function inflateContracts(chainId, provider, actor, addr) {
    const context = lookupChain(chainId);
    return {
        provider: provider,
        actor: actor,
        dex: new ethers_2.Contract(context.addrs.dex, abis_1.CROC_ABI, actor),
        router: context.addrs.router ? new ethers_2.Contract(context.addrs.router || ethers_3.ZeroAddress, abis_1.CROC_ABI, actor) : undefined,
        routerBypass: context.addrs.routerBypass ? new ethers_2.Contract(context.addrs.routerBypass || ethers_3.ZeroAddress, abis_1.CROC_ABI, actor) : undefined,
        query: new ethers_2.Contract(context.addrs.query, abis_1.QUERY_ABI, provider),
        slipQuery: new ethers_2.Contract(context.addrs.impact, impact_1.IMPACT_ABI, provider),
        erc20Write: new ethers_2.Contract(ethers_3.ZeroAddress, abis_1.ERC20_ABI, actor),
        erc20Read: new ethers_2.Contract(ethers_3.ZeroAddress, erc20_read_1.ERC20_READ_ABI, provider),
        chain: context,
        senderAddr: addr
    };
}
function lookupChain(chainId) {
    if (typeof chainId === "number") {
        return lookupChain("0x" + chainId.toString(16));
    }
    else {
        const context = constants_1.CHAIN_SPECS[chainId.toLowerCase()];
        if (!context) {
            throw new Error("Unsupported chain ID: " + chainId);
        }
        return context;
    }
}
exports.lookupChain = lookupChain;
function ensureChain(cntx) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        var _a;
        const walletNetwork = yield ((_a = cntx.actor.provider) === null || _a === void 0 ? void 0 : _a.getNetwork());
        if (!walletNetwork) {
            throw new Error('No network selected in the wallet');
        }
        const contextNetwork = cntx.chain;
        if (walletNetwork.chainId !== BigInt(contextNetwork.chainId)) {
            throw new Error(`Wrong chain selected in the wallet: expected ${contextNetwork.displayName} (${contextNetwork.chainId}) but got ${walletNetwork.name} (0x${Number(walletNetwork.chainId).toString(16)})`);
        }
    });
}
exports.ensureChain = ensureChain;
//# sourceMappingURL=context.js.map