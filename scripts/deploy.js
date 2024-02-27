const { ethers } = require("hardhat");

async function main() {
    const TaskToDo = await ethers.getContractFactory("TaskToDo");

    // Deploy the contract, returning a promise that resolves to a contract instance
    const TaskToDo_ = await TaskToDo.deploy();

    // Log the address of the deployed contract
    console.log("Contract address:", TaskToDo_.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });

async function main() {
    const TaskToDo = await ethers.getContractFactory("TaskToDo");

    // Start deployment, returning a promise that resolves to a contract object
    const TaskToDo_ = await TaskToDo.deploy();
    console.log("Contract address:", TaskToDo_.address);


}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });