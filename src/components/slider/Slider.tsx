import { keyframes, styled } from "styled-components"
import { createTheme, Slider, SliderMark, ThemeProvider } from "@mui/material";
import './slider.css'
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

type Direction = 'horizontal' | 'vertical'

interface MyComponentProps {
    direction?: Direction
    route?: string
    sliderEnd?: boolean 
}


const theme = createTheme({
    palette: {
        primary: {
            main:'#FFFFFF'
        }
    }
})

const SliderButton = ({direction, route, sliderEnd}) => {
    const [value, setValue] = useState(0)
    const [isCompleted, setCompleted] = useState(false)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    if(value === 50){
        redirect(route)
    }

    useEffect(() => {
        if(value === 50){
            setCompleted(true)
            sliderEnd(isCompleted)
        }
    },[value, setCompleted, isCompleted, sliderEnd])

    return (
        <ThemeProvider theme={theme}>
        <Slider
            color="primary"
            size="small"
            orientation={direction}
            value={value}
            min={0}
            max={50}
            onChange={handleChange}
        sx={{
            '& input[type="range"]': {
                WebkitAppearance: 'slider-vertical',
              },
            "& .MuiSlider-thumb": {
                color: "secondary",
                height: 12,
                width: 12,
               
            },
            
        }}/>
       </ThemeProvider>
    )

}

export default SliderButton;