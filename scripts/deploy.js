async function main() {
    const MyNFT = await ethers.getContractFactory("MyERC1155NFT");
    const myNFT = await MyNFT.deploy();
    const txHash = myNFT.deployTransaction.hash;
    const txReceipt = await ethers.provider.waitForTransaction(txHash);
    console.log("Contract deployed to address:", txReceipt.contractAddress);
}
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
    