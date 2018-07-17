export declare class Encoding {
    static toHex(data: Uint8Array): string;
    static fromHex(hexstring: string): Uint8Array;
    static toAscii(input: string): Uint8Array;
    static fromAscii(data: Uint8Array): string;
}