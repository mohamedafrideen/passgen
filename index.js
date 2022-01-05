#!/usr/bin/env node
const program = require('commander')
const log = console.log
const createPassword = require('./utils/createPassword')
const savePassword = require('./utils/savePassword')

program.version('1.0.0').description('Simple Random Password Generator')

program
  .option('-l, --length <Number>','Length of Password','8')
  .option('-s, --save','Save Password to passwords.txt')
  .option('-nn, --no-numbers','Remove Numbers')
  .option('-ns, --no-symbols','Remove Symbols')
  .parse()

const { length, save, numbers, symbols } = program.opts()

//Get Generated Password

const generatedPassword = createPassword(length, numbers, symbols)

//Save to File
if(save)
{
  savePassword(generatedPassword)
}

//Copy to Clipboard
//clipboardy.writeSync(generatedPassword)

// Output generated password
log('Generated Password: ', generatedPassword)
//log('Password copied to clipboard')