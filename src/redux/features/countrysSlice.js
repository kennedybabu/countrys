import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const fetchCountrys = createAsyncThunk('countrys/fetchCountrys', async() => {
    return fetch(
        'https://restcountries.com/v3.1/all'
        // 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

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
        }
    }
})


export default countrysSlice.reducer