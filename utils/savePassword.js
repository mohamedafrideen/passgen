const fs = require('fs')
const path = require('path')
const os = require('os')

const savePassword = (password) => {
  fs.open(path.join(__dirname, '../', 'passwords.txt'), 'a', 777, (e, id) => {
    fs.write(id, password + os.EOL, null, 'utf-8', () => {
      fs.close(id, () => {
        console.log('Password saved to passwords.txt')
      })
    })
  })
}

module.exports = savePassword