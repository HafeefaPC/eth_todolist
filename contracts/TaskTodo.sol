//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract TaskToDo {
    enum TaskStatus {Pending, Completed}
    address owner;
    struct Task{
        string description;
        TaskStatus status;
    }
    Task[]public tasks;
    constructor(){
        owner = msg.sender;
    }
    modifier onlyOwner(){
        require(msg.sender == owner, "not owner");
        _;
    }
    function addTask(string memory _description)public onlyOwner(){
        tasks.push(Task(_description, TaskStatus.Pending));
    }
    function MarkAsCompleted(uint256 id)public onlyOwner(){
        require( id < tasks.length, "no task is mentioned ");
        tasks[id].status = TaskStatus.Completed;
    }
    function getTaskCount() public view returns(uint256){
        return tasks.length;

    }
    function getAlltasks() public view returns(Task[] memory){
        return tasks;
    }
    function getTask(uint256 id)public view returns(string memory, TaskStatus){
        require( id < tasks.length, "no task is mentioned ");
        return(tasks[id].description, tasks[id].status);
    }
    
}