import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch products from the API
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch('https://670fa54fa85f4164ef2b50e6.mockapi.io/products');
    const data = await response.json();
    return data;
  }
);

// Add a new product to the API
export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (newProduct) => {
    const response = await fetch('https://670fa54fa85f4164ef2b50e6.mockapi.io/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    });
    const data = await response.json();
    return data;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.push(action.payload); // Add the new product to the state
      });
  },
});

export default productSlice.reducer;
