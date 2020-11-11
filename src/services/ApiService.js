import axios from 'axios'

const ACCOUNTER_URL = 'http://localhost:8081'
const STOCK_REST_API_URL = '/stock/articles/min-price'
//const STOCK_REST_API_URL = '/stock/articles/expansion/name/Amonkhet'
const EXPANSION_NAMES = '/product/expansion/name'
const STOCK_BY_EXPANSION_NAME = '/stock/articles/expansion/name/'
const CHANGE_ARTICLE_REST_API_URL = '/stock/articles'
const ACCOUNT = '/account/'


class ApiService {

    getStockExpansionNames(){
        return axios.get(ACCOUNTER_URL+EXPANSION_NAMES);
    }

    getStockByExpansionName(expansionName){
        return axios.get(ACCOUNTER_URL+STOCK_BY_EXPANSION_NAME + expansionName);
    }

    getStockInformation(){
        return axios.get(ACCOUNTER_URL+STOCK_REST_API_URL);
    }

    postArticles(articles){
        return axios.post(ACCOUNTER_URL+CHANGE_ARTICLE_REST_API_URL, articles);
    }

    getAccountInformation(){
        return axios.get(ACCOUNTER_URL+ACCOUNT);
    }
}

export default new ApiService();