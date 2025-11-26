


class ProductService {
    #baseUrl = '';
    // I want it to be api.mysite.com/api
    constructor(url, apiKey = null, localMode = false) {
        this.#baseUrl = url;
        this.apiKey = apiKey; // optional
        this.localMode = localMode; // ändra sen
    }

    // Private helper for GET requests with query params
    async #_getAsync(url, params = {}) {
        const query = new URLSearchParams(params).toString();
        const response = await fetch(`${url}?${query}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.statusText}`);
        }
        console.log("", response);

        return await response.json();
    }

    // Private helper for POST requests
    async #_postAsync(url, params = {}, body = {}) {
        const filteredParams = Object.fromEntries(
            Object.entries(params).filter(([_, v]) => v !== null && v !== undefined && v !== "")
        );
        const query = new URLSearchParams(filteredParams).toString();
        const response = await fetch(`${url}${query ? `?${query}` : ''}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }, // <- important
            body: JSON.stringify(body) // <- ensure this is an object, not null
        });
        console.log(url, body, params);

        if (!response.ok) throw new Error(`Failed to fetch: ${response.statusText}`);

        return await response.json();
    }

    async #_getTextAsync(url, params = {}) {
        const query = new URLSearchParams(params).toString();
        const response = await fetch(`${url}?${query}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.statusText}`);
        }

        const text = await response.text();
        console.log("Fetched string:", text);
        return text;
    }




    // Read all products
    async readProductsAsync(category = null, pageNr = 0, flat = false, filter = null, pageSize = 10) {
        return await this.#_getAsync(`${this.#baseUrl}/Product`, {
            seeded: 'true',
            flat: flat.toString(),
            filter,
            pageNumber: pageNr,
            pageSize
        });
    }

    // Read single product by id
    async readProductAsync(shortKey, flat = false) {
        return await this.#_getAsync(`${this.#baseUrl}/Product/ItemDto/${shortKey}`, { flat: flat.toString() });
    }

    // Read top products
    // Read top products with optional category
    async readTopProductsAsync(categoryId = null, categorySlug = null, pageNr = 0, pageSize = 10) {
        const params = {
            seeded: 'true',
            pageNumber: pageNr,
            pageSize,
            ...(categorySlug ? { categorySlug } : categoryId ? { categoryid: categoryId } : {})
        };

        return await this.#_getAsync(`${this.#baseUrl}/Product/TopItemsDto`, params);
    }

    // Search products
    async searchProductsAsync(search = '', sort = '', minPrice = null, maxPrice = null, filters = {}, pageNr = 0, pageSize = 10) {
        const params = { pageNumber: pageNr, pageSize };
        const body = {
            StoreIds: filters.StoreIds || [],
            AttributeValueIds: filters.AttributeValueIds || []
        };
        return await this.#_postAsync(`${this.#baseUrl}/Product/search`, body, {
            search,
            sort,
            minPrice,
            maxPrice
        });
    }

    async readProductsByCategory(categorySlug = '', pageNr = 0, pageSize = 40, filters = { storeIds: [], attributeValueIds: [], minRating: 0 }, sort = "Recomended", search = "", minPrice = null, maxPrice = null) {

        const queryParams = {
            categorySlug,
            search: search || undefined,
            sort: sort || undefined,
            minPrice: minPrice ?? undefined,
            maxPrice: maxPrice ?? undefined,
            pageNumber: pageNr,
            pageSize
        };

        const body = {
            storeIds: filters.storeIds,
            attributeValueIds: filters.attributeValueIds,
            minRating: filters.minRating ?? 0
        };

        return await this.#_postAsync(`${this.#baseUrl}/Product/search`, queryParams, body);
    }










    // Get reviews for a specific product
    async readReviewsAsync({ shortKey, productId, pageNumber = 0, pageSize = 3, includeStats = false }) {
        const params = { pageNumber, pageSize, includeStats };

        if (shortKey) params.shortKey = shortKey;
        if (productId) params.productId = productId;

        return await this.#_getAsync(`${this.#baseUrl}/Review/items`, params);
    }

    // Create a new review
    async createReviewAsync(shortKey, reviewDto) {
        return await this.#_postAsync(
            `${this.#baseUrl}/Review/CreateItem/${shortKey}`,
            {},
            reviewDto
        );
    }

    //store info
    async readStoreInfoAsync(storeId) {
        if (storeId == null) { return null }
        return await this.#_getAsync(`${this.#baseUrl}/Store/item/${storeId}`)
    }

    async readCategoriesAsync() {
        return await this.#_getAsync(`${this.#baseUrl}/Category/Items`)
    }
    async readCategoryTreeAsync(id) {
        return await this.#_getTextAsync(`${this.#baseUrl}/Category/Item/${id}/category-tree`);
    }
}
export default ProductService;



export const _productService = new ProductService("https://localhost:7020/api");
