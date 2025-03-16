import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDashboardData } from "../services/api";

// Thunk para buscar os dados da API
export const fetchData = createAsyncThunk("dashboard/fetchData", async () => {
  const data = fetchDashboardData();
  return data;
});

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    data: [],
    dataMain: [{ receita:{}, despesa:{}, saldo:{}}],
    loading: false,
    error: null,
  },
  reducers: {
       // A IDEIA AQUI É CRIAR UMA ACTION PARA ADICIONAR DADOS AO ARRAY GLOBAL "data"
       addDados: (state, action) => {   
        state.addDados += action.payload;
    },
    receita: (state, action) => {
      state.receita += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dashboardSlice.reducer;
