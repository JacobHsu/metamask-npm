// ui\app\pages\first-time-flow\create-password\import-with-seed-phrase\import-with-seed-phrase.component.js
//import { validateMnemonic } from 'bip39'
var {validateMnemonic} = require('bip39');

const seedPhrase = 'one two three four five once alive six seven eight nine ten'
const parsedSeedPhrase = parseSeedPhrase(seedPhrase)
if (parsedSeedPhrase.split(' ').length !== 12) {
    console.log('seedPhraseReq') // 助憶詞為 12 個詞語
} else if (!validateMnemonic(parsedSeedPhrase)) {
    console.log('invalidSeedPhrase') // 無效的助憶詞
}

function parseSeedPhrase(seedPhrase) {
    if (!seedPhrase) {
        return ''
    }
  
    const trimmed = seedPhrase.trim()
    if (!trimmed) {
        return ''
    }

    const words = trimmed.match(/\w+/g)
    if (!words) {
        return ''
    }

    return words.join(' ')
}
