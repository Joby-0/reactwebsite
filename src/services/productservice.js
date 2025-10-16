


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
        return await response.json();
    }

    // Private helper for POST requests
    async #_postAsync(url, body = {}, params = {}) {
        const query = new URLSearchParams(params).toString();
        const response = await fetch(`${url}?${query}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.statusText}`);
        }
        return await response.json();
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
    async readProductAsync(id, flat = false) {
        return await this.#_getAsync(`${this.#baseUrl}/Product/${id}`, { flat: flat.toString() });
    }

    // Read top products
    // Read top products with optional category
    async readTopProductsAsync(categoryId = null, pageNr = 0, pageSize = 10) {
        const params = {
            seeded: 'true',
            categoryid: categoryId || '',
            pageNumber: pageNr,
            pageSize
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
}
export default ProductService;

