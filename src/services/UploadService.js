import axios from 'axios'

const UPLOAD_REST_API_URL = 'http://localhost:8081/upload/'

export class UploadService {
    uploadFileToServer(data){
        return axios.post(UPLOAD_REST_API_URL,data);
    }
}