import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const fetchCountrys = createAsyncThunk('countrys/fetchCountrys', async() => {
    return fetch(
        'https://restcountries.com/v3.1/all'

    ).then((res) => res.json())
})

export const fetchCountry = createAsyncThunk('country/fetchCountry', async({name}) => {
    return fetch(
        `https://restcountries.com/v3.1/name/${name}`
    ).then((res) => res.json())
})


export const countrysSlice = createSlice({
    name:'countrys',
    initialState: {
        countrys:[],
        country:{},
        loading: false,
        error: null
    },
    extraReducers: {
        [fetchCountrys.pending]:(state, action) => {
            state.loading = true
        },
        [fetchCountrys.fulfilled]: (state, action) => {
            state.loading = false
            state.countrys = action.payload
        },
        [fetchCountrys.rejected]: (state, action) => {
            state.error = action.payload
            state.loading = false
        },
        [fetchCountry.pending]:(state,action) => {
            state.loading = true
        },
        [fetchCountry.fulfilled]: (state, action) => {
            state.loading = false
            state.country = action.payload
        },
        [fetchCountry.rejected] : (state, action) => {
            state.error = action.payload
            state.loading = false
        }
    }
})


export default countrysSlice.reducer