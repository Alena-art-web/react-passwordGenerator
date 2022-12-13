import { Box, Typography, Slider } from '@mui/material'
import React, { useState } from 'react'

const SliderLength = () => {
    const [value, setValue] = useState<number>(10)

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number)
    }
    

    return (
        <Box>
            <Typography>Length({value})</Typography>
            <Slider 
                value={value}
                color='secondary' 
                aria-label="Default" 
                valueLabelDisplay="auto" 
                onChange={handleChange}
            />
        </Box>
    )
}

export default SliderLength