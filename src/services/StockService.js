import axios from 'axios'

const STOCK_REST_API_URL = 'http://localhost:8081/stock/articles/min-price'
//const STOCK_REST_API_URL = 'http://localhost:8081/stock/articles/expansion/name/Amonkhet'

const STOCK_BY_EXPANSION_NAME = 'http://localhost:8081/stock/articles/expansion/name/'

const CHANGE_ARTICLE_REST_API_URL = 'http://localhost:8081/stock/articles'


class StockService {
    findStockByExpansionName(expansionName){
        return axios.get(STOCK_BY_EXPANSION_NAME + expansionName);
    }

    getStockInformation(){
        return axios.get(STOCK_REST_API_URL);
    }

    postArticles(articles){
        return axios.post(CHANGE_ARTICLE_REST_API_URL, articles);
    }
}

export default new StockService();