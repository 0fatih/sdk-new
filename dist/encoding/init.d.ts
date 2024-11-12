type Address = string;
type PoolType = number | string;
export declare class PoolInitEncoder {
    constructor(baseToken: Address, quoteToken: Address, poolIdx: PoolType);
    encodeInitialize(initPrice: number): string;
    private baseToken;
    private quoteToken;
    private poolIdx;
    private abiCoder;
}
export {};
