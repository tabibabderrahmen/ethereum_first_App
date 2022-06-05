// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract Employee {
    string public name;
    string public grade;
    
    constructor(string memory emp_name,string memory initial_grade) {
        name = emp_name;
        grade = initial_grade;
    }
    
    function setName(string memory emp_name) public {
        name = emp_name;
    }

    function setGrade(string memory new_grade) public {
        grade = new_grade;
    }
}