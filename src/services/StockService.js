import axios from 'axios'

const STOCK_REST_API_URL = 'http://localhost:8081/stock/articles/min-price'
//const STOCK_REST_API_URL = 'http://localhost:8081/stock/articles/expansion/name/Amonkhet'

class StockService {
    getStockInformation(){
        return axios.get(STOCK_REST_API_URL);
    }
}

export default new StockService();