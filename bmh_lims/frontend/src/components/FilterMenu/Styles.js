import React from 'react'
import styled from 'styled-components'

import { DatePicker } from '@material-ui/pickers'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const muiTheme = ({ theme }) => createMuiTheme({
    typography: {
        fontFamily: 'Quicksand'
    },
    overrides: {
        MuiInputBase: {
            root: {
                width: '100%',
                padding: 0,
                fontSize: '0.9rem',
                color: theme.colour3
            },
            input: {
                padding: 0,
                letterSpacing: 'normal',
                textAlign: 'center',
                borderBottom: `1px solid ${theme.colour4}`,
                '&&&:focus': {
                    borderBottom: `1px solid ${theme.colour5}`
                }
            }
        },
        MuiPickersToolbar: {
            toolbar: {
                backgroundColor: theme.colour2
            }
        },
        MuiPickersDay: {
            daySelected: {
                backgroundColor: theme.colour4
            }
        },
        MuiButton: {
            textPrimary: {
                color: theme.colour3
            }
        }
    }
})

export const StyledDatePicker = ({ theme, ...props }) => (
    <ThemeProvider theme={muiTheme({ theme })}>
        <DatePicker
        InputProps={{
            disableUnderline: true,
        }}
        {...props} />
    </ThemeProvider>
)

export const FilterHeader = styled.div`
    width: 100%;
    display: inline-block;
    height: 2rem;
    color: ${props => props.theme.colour2};
    font-size: 1.3rem;
    font-weight: bold;
`

export const FilterRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 2%;
`

export const FilterContainer = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme.colour2};
`

export const FreeTextFilter = styled.input.attrs(props => ({
    type: 'text'
}))`
    width: 100%;
    color: ${props => props.theme.colour3};
    border: none;
    border-bottom: 1px solid ${props => props.theme.colour4};
    background-color: white;
    &:focus {
        border-bottom: 1px solid ${props => props.theme.colour5};
    }
    ::placeholder {
        color: rgb(100, 100, 100);
    }
    text-align: center;
`

export const FilterMenuContainer = styled.div`
    max-height: ${props => props.open ? '10em': '2rem'};
    overflow: hidden;
    transition: max-height 1s;
    border-bottom: 1px solid ${props => props.theme.colour1};
`