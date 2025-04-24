


class ProductService {
    // I want it to be api.mysite.com/api
    constructor(url, apiKey = null, localMode = false) {
        this.url = url;
        this.apiKey = apiKey; // optional
        this.localMode = localMode; // ändra sen
    }

    // Private Helper Methods
    async #_myFetch(url, method = null, body = null) {
        try {
            method ??= 'GET';

            const headers = { 'Content-Type': 'application/json' };
            if (this.apiKey) {
                headers['x-api-key'] = this.apiKey;
            }

            const res = await fetch(url, {
                method,
                headers,
                body: body ? JSON.stringify(body) : null
            });

            if (res.ok) {
                console.log(`${method} Request successful @ ${url}`);
                return await res.json();
            } else {
                console.log(`Failed to fetch: ${res.status}`);
            }
        } catch (err) {
            console.error(`Fetch error: ${err.message}`);
        }
    }
    

    async #_readItemsAsync(reqUrl,category,  pageNr, flat, filter, pageSize) {
        reqUrl += `?flat=${flat}&pageNr=${pageNr}&pageSize=${pageSize}`;
        if (filter) reqUrl += `&filter=${filter}`;
        if (category) reqUrl += `&category=${category}`;
        return await this.#_myFetch(reqUrl);
    }

    async #_readItemAsync(reqUrl, id, flat) {
        reqUrl += `?flat=${flat}&id=${id}`;
        return await this.#_myFetch(reqUrl);
    }

    async #_readItemDtoAsync(reqUrl, id) {
        reqUrl += `?id=${id}`;
        return await this.#_myFetch(reqUrl);
    }


    // Info
    async readInfoAsync() {
        return await this.#_myFetch(`${this.url}/Guest/Info`);
    }

    //#region Product CRUD
    async readProductsAsync(category = null,pageNr = 0, flat = false, filter = null, pageSize = 10) {
        return await this.#_readItemsAsync(`${this.url}/Product/Read`, category, pageNr, flat, filter, pageSize);
    }

    readProductAsync = async (id, flat = true) =>
        await this.#_readItemAsync(`${this.url}/Product/ReadItem`, id, flat);

    readProductDtoAsync = async (id) =>
        await this.#_readItemDtoAsync(`${this.url}/Product/ReadItemDto`, id);


    //#endregion

    //#region Store CRUD
    async readStoresAsync() {
        return await this.#_myFetch(`${this.url}/Store/Read`);
    }

    readStoreAsync = async (id) =>
        await this.#_readItemAsync(`${this.url}/Store/ReadItem`, id, true);
    //#endregion

    //#region Price CRUD
    async readPricesForProductAsync(productId) {
        return await this.#_myFetch(`${this.url}/Price/ReadByProduct?id=${productId}`);
    }

    //#endregion

    //#region Search
    searchProductsAsync = async (query) =>
        await this.#_myFetch(`${this.url}/Product/Search?q=${encodeURIComponent(query)}`);
    //#endregion
}
export default ProductService;

