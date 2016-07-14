var Bank = require( '../bank');
var Account = require( '../account');
var assert = require('chai').assert;

describe("Bank", function() {

  it('has a name', function() {
    bank1 = new Bank("Lloyds")
    assert.equal("Lloyds", bank1.name)
  })

  it('has 0 accounts at beginning', function() {
    bank1 = new Bank("Lloyds")
    assert.equal(0, bank1.accounts.length)
  })

  it('should be able to add account', function() {
    bank2 = new Bank ("TSB")
    account1 = new Account("Marie Moyles",100)
    bank2.addAccount(account1);
    assert.equal(1, bank2.accounts.length)
  })
  
})