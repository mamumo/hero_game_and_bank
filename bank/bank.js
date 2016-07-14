var Bank = function(name) {
  this.name = name,
  this.accounts = []
}

Bank.prototype = {
  addAccount: function(account) {
    return this.accounts.push(account)
  },
  findAccount: function(account) {
    
  }

}

module.exports = Bank;