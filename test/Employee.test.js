const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const { abi, evm } = require('../compile');

let accounts;
let employee;

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();
  employee = await new web3.eth.Contract(abi)
    .deploy({
      data: evm.bytecode.object,
      arguments: ['Abdou','Level 0'],
    })
    .send({ from: accounts[1], gas: '1000000' });
});

describe('Employee', async () => {
  
  it('deploys a contract', () => {
    console.log("employee.options.address",employee.options.address)
    assert.ok(employee.options.address);
  });
  it('has a name', async () => {
    const name = await employee.methods.name().call();
    assert.equal(name, 'Abdou');
  });
  it('has a grade', async () => {
    const grade = await employee.methods.grade().call();
    assert.equal(grade, 'Level 0');
  });
  it('can change the grade', async () => {
    await employee.methods.setGrade('Level 1').send({ from: accounts[0] });
    const grade = await employee.methods.grade().call();
    assert.equal(grade, 'Level 1');
  });
});
