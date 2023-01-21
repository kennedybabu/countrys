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


export const searchCountry = createAsyncThunk('country/searchCountry', async({query}) => {
    return fetch(
        `https://restcountries.com/v3.1/name/${query}`
    ).then((res) => res.json())
})


export const countrysSlice = createSlice({
    name:'countrys',
    initialState: {
        countrys:[],
        country:{},
        searchedCountry: [],
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
        },
        [searchCountry.pending]: (state, action) => {
            state.loading = true
        },
        [searchCountry.fulfilled] : (state,action)=> {
            state.searchedCountry = action.payload
            state.loading = false
        },
        [searchCountry.rejected] : (state,action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})


export default countrysSlice.reducer