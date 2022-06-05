const path = require('path'); 
const fs = require('fs');
const solc = require('solc');

const employeePath = path.resolve(__dirname, 'contracts', 'Employee.sol');
const source = fs.readFileSync(employeePath, 'utf8');

const input = {
  language: 'Solidity',
  sources: {
    'Employee.sol': {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*'],
      },
    },
  },
};

module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
  'Employee.sol'
].Employee;
