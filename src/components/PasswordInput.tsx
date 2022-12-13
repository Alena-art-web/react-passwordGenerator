import { Box, Button, Checkbox, Container, FormControlLabel, FormGroup, IconButton, Slider, Typography } from '@mui/material'
import CachedIcon from '@mui/icons-material/Cached'
import DoneAllIcon from '@mui/icons-material/DoneAll'
import React, { useState } from 'react'
import { passwordGenerate } from '../assets/passwordGenerate'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const PasswordInput: React.FC = () => {

    const [length, setLength] = useState<number>(10)
    const [password, setPassword] = useState<string>('')
    const [letters, setLetters] = useState<boolean>(true)
    const [lettersUp, setLettersUp] = useState<boolean>(false)
    const [digits, setDigits] = useState<boolean>(false)
    const [symbols, setSymbols] = useState<boolean>(false)
    const [copyValue, setCopy] = useState<boolean>(false)



    const typePass = length > 9 ? 'Strong password' : 'Weak password'
    const color = length > 9 ? '#23b77e' : '#e7a599'

    const handleChange = (event: Event, newValue: number | number[]) => {
        setLength(newValue as number)
    }

    const handleInput = () => {
        setPassword(passwordGenerate(length, letters, lettersUp, digits, symbols))
    }

    const handleChangeLetters = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLetters(event.target.checked)
    }
    const handleChangeLettersUp = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLettersUp(event.target.checked)
    }
    const handleChangeDigits = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDigits(event.target.checked)
    }
    const handleChangeSymbols = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSymbols(event.target.checked)
    }

    const handleCopy = () => {
        setCopy(true)
    }

    return (
        <Container maxWidth='xl' sx={{ bgcolor: color }} >
            <Box width='70%' sx={{ margin: '0 auto', padding: '50px 30px' }}>
                <Typography sx={{ padding: '50px 0' }} variant='h3'>Password generator tool</Typography>
                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #000' }}>
                        <Typography>{password}</Typography>
                        <IconButton 
                            sx={{ marginBottom: '5px' }} 
                            onClick={handleInput} 
                        >
                            <CachedIcon fontSize='large' />
                        </IconButton>      
                    </Box>
                    <Box sx={{ marginTop: '25px', display: 'flex', justifyContent: 'space-between' }}>
                        <Typography>{typePass}</Typography>
                        {copyValue ?
                            <Button
                                variant='contained'
                                color='secondary'
                            >
                                <DoneAllIcon /> Copied!
                            </Button> :
                            <CopyToClipboard text={password} onCopy={handleCopy}>
                                <Button
                                    variant='contained'
                                    color='secondary'
                                >
                                    Copy password
                                </Button>
                            </CopyToClipboard>
                        }
                    </Box>
                    <Box>
                        <Typography>Length({length})</Typography>
                        <Slider
                            value={length}
                            min={5}
                            color='secondary'
                            aria-label="Default"
                            valueLabelDisplay="auto"
                            onChange={handleChange}
                        />
                    </Box>

                    <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
                        <FormControlLabel control={
                            <Checkbox color='secondary' defaultChecked value={letters} onChange={handleChangeLetters} />
                        } label="Letters(e.g. Aa)"
                        />
                        <FormControlLabel control={
                            <Checkbox color='secondary' value={lettersUp} onChange={handleChangeLettersUp} />
                        } label="Letters Uppercase(e.g. A)"
                        />
                        <FormControlLabel control={
                            <Checkbox color='secondary' value={digits} onChange={handleChangeDigits} />
                        } label="Digits(e.g 345)"
                        />
                        <FormControlLabel control={
                            <Checkbox color='secondary' value={symbols} onChange={handleChangeSymbols} />
                        } label="Symbols(e.g @$#?)"
                        />
                    </FormGroup>

                    <Box sx={{ marginTop: '25px', display: 'flex', justifyContent: 'center' }}>
                        <Button
                            variant='contained'
                            color='secondary'
                            onClick={handleInput}
                        >
                            Generate password
                        </Button>

                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default PasswordInput