import { createTheme, CssBaseline, ThemeProvider, /* Typography  */} from '@mui/material'
import React from 'react'

    type ThemeProp = {
        children: JSX.Element
    }

    enum themePalette {
        BG = '#12181b',
        LIME = '#097969',
        FONT_GLOBAL = "'JetBrains Mono', monospace", 
    }

const theme = createTheme({
    palette:{
        mode:'dark',
        background:{
            default:themePalette.BG
        },
        primary:{
            main: themePalette.LIME,
        }
    },
    typography:{
        fontFamily: themePalette.FONT_GLOBAL,
    },
    components:{
        MuiButton:{
            defaultProps:{
                style:{
                    textTransform:'none',
                    boxShadow:'none',
                    borderRadius:'0.5em'
                }
            }
        }
    }
})

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    )
}

