export const selectProducts = (state) => state.products.products;

export const selectProductDetails = (state) => state.products.selectedProduct;

export const selectTotalPages = (state) => state.products.totalPages;

export const selectIsLoading = (state) => state.products.isLoading;
