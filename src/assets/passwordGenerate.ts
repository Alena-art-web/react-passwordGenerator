const passwordGenerate = (
    length: number = 5,
    checkLetters: boolean = false,
    checkLettersUp: boolean = false,
    checkDigitals: boolean = false,
    checkSumbols: boolean = false,
    
) => {

    const letters = checkLetters ? 'abdehkmnpswxz' : ''
    const lettersUp = checkLettersUp ? letters.toLocaleUpperCase() : ''
    const digitals = checkDigitals ? '0123456789' : ''
    const symbols = checkSumbols ? '@!#$%&^*_-' : ''

    const total = `${letters}${lettersUp}${digitals}${symbols}`
    let str = ''

    for (let i = 0; i < length; i++) {
        const pos = Math.floor(Math.random() * total.length)
        str += total.substring(pos, pos + 1)
    }

    return str

}

export {passwordGenerate}