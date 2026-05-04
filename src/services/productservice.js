


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
        const token = authService.getToken();

        const response = await fetch(`${url}?${query}`, {
            headers: token
                ? { Authorization: `Bearer ${token}` }
                : {}
        });
        console.log(`${url}?${query}`);

        if (!response.ok) throw new Error(response.statusText);
        return await response.json();
    }

    // Private helper for POST requests
    async #_postAsync(url, params = {}, body = {}) {
        const query = new URLSearchParams(
            Object.fromEntries(
                Object.entries(params).filter(([_, v]) => v !== undefined)
            )
        ).toString();
        const token = authService.getToken();

        const response = await fetch(`${url}?${query}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...(token && { Authorization: `Bearer ${token}` })
            },
            body: JSON.stringify(body)
        });

        console.log(`${url}?${query}`);

        if (!response.ok) throw new Error(response.statusText);
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
        return await this.#_getAsync(`${this.#baseUrl}/Product/Item/${shortKey}`, { flat: flat.toString() });
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

        return await this.#_getAsync(`${this.#baseUrl}/Product/TopItems`, params);
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

    async readProductsWithFilters(categorySlug = '',countryCode='', pageNr = 0, pageSize = 0, filters = { storeIds: [], attributeValueIds: [], minRating: 0 }, sort = "Recomended", search = "", minPrice = null, maxPrice = null) {

        const queryParams = {
            categorySlug,
            countryCode,
            search: search || undefined,
            sort: sort || undefined,
            minPrice: minPrice ?? undefined,
            maxPrice: maxPrice ?? undefined,
            minRating: filters.minRating ?? undefined,
            pageNumber: pageNr,
            pageSize
        };

        const body = {
            storeIds: filters.storeIds,
            attributeValueIds: filters.attributeValueIds,
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


    //cagetgories
    async readCategoriesAsync() {
        return await this.#_getAsync(`${this.#baseUrl}/Category/Items`)
    }
    async readCategoryTreeAsync(id) {
        return await this.#_getTextAsync(`${this.#baseUrl}/Category/Item/${id}/category-tree`);
    }
}


export default ProductService;



export const _productService = new ProductService("https://localhost:7020/api");
// export const _productService = new ProductService(process.env.BASE_API_URL);



class AuthService {
    token = null;

    #baseUrl = '';

    constructor(url,) {
        this.#baseUrl = url;
    }

    async login(credentials) {
        const res = await fetch(`${this.#baseUrl}/User/Login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials)
        });

        if (!res.ok) throw new Error("Login failed");

        return await res.json();
    }

    async register(credentials) {
        const res = await fetch(`${this.#baseUrl}/api/User/Register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
        });

        if (!res.ok) {
            const error = await res.text();
            throw new Error(error || "Registration failed");
        }

        return await res.json();
    }

    setToken(token) {
        this.token = token;

        localStorage.setItem("jwt", token);
    }

    getToken() {
        return this.token || localStorage.getItem("jwt");
    }

    logout() {
        this.token = null;
        localStorage.removeItem("jwt");
    }

    isLoggedIn() {
        return !!this.getToken();
    }
}

export const authService = new AuthService(process.env.BASE_API_URL);
