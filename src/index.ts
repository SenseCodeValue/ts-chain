import * as CryptoJS from 'crypto-js';

class Block {
    // static이면 prototype에 박히나?
    static calculateBlockHash = (
        index: number,
        previousHash: string,
        data: string,
        timestamp: number
    ): string => CryptoJS.SHA256(index + previousHash + data + timestamp).toString(CryptoJS.enc.Hex);

    static validateStructure = (_block: Block): boolean => 
        typeof _block.index == "number" &&
        typeof _block.hash === 'string' &&
        typeof _block.previousHash === 'string' &&
        typeof _block.data === 'string' &&
        typeof _block.timestamp === 'number';

    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    constructor(
        index: number,
        hash: string,
        previousHash: string,
        data: string,
        timestamp: number
    ) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    };
}



const genesisBlock: Block =  new Block(0, "202020202020202", "", "Hello", 123456);

let blockChain: Array<Block> = [ genesisBlock ];

const getBlockChain = (): Array<Block> => blockChain;
const getLatestBlock = (): Block => blockChain.length > 0 ? blockChain[blockChain.length-1] : null;
const getNewTimestamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data:string): Block => {
    const previousBlock: Block = getLatestBlock();
    const newIndex: number = previousBlock.index + 1;
    const nextTimestamp:number = getNewTimestamp();
    const nextHash: string = Block.calculateBlockHash(newIndex,previousBlock.hash,data,nextTimestamp);
    const newBlock: Block = new Block(
        newIndex,
        nextHash,
        previousBlock.hash,
        data,
        nextTimestamp,
    )
    addBlock(newBlock);
    return newBlock;
};

const getHashforBlock = (_block: Block): string => Block.calculateBlockHash(_block.index, _block.previousHash, _block.data, _block.timestamp);


const isBlockValid = (candidateBlock: Block, previousBlock: Block): boolean => {
    if(!Block.validateStructure(candidateBlock)) return false;
    else if(previousBlock.index + 1 !== candidateBlock.index )  return false;
    else if(getHashforBlock(candidateBlock) !== candidateBlock.hash )  return false;
    else return true;
}

const addBlock = (candidateBlock: Block): void => {
    if(isBlockValid(candidateBlock, getLatestBlock())) blockChain.push(candidateBlock);
}

createNewBlock("second-block");
createNewBlock("third-block");
createNewBlock("fourth-block");

console.log(getBlockChain());

export {};
/*
    이렇게 사용하면서 느꼇을 것이다.
    예측가능한 함수 리턴 타입
    예측가능한 함수 인자 타입
    정의된 타입의 배열
    class static, private ....

    즉, 더욱 가독성이 좋고 덜 혼란스럽다.
*/