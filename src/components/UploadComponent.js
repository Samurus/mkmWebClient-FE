import React from "react";
import Form from "react-bootstrap/Form"
import {UploadService} from "../services/UploadService";
import {Button, Container} from "react-bootstrap";
class UploadComponent extends React.Component{

    constructor() {
        super();
        this.uploadService = new UploadService();
    }

    handleUploadFile = (event) => {
        const data = new FormData();
        //using File API to get chosen file
        let file = event.target.files[0];
        console.log("Uploading file", event.target.files[0]);
        data.append('file', event.target.files[0]);
        data.append('name', 'my_file');
        data.append('description', 'this file is uploaded by young padawan');
        let self = this;
        //calling async Promise and handling response or error situation
        this.uploadService.uploadFileToServer(data).then((response) => {
            console.log("File " + file.name + " is uploaded");
        }).catch(function (error) {
            console.log(error);
            if (error.response) {
                //HTTP error happened
                console.log("Upload error. HTTP error/status code=",error.response.status);
            } else {
                //some other error happened
                console.log("Upload error. HTTP error/status code=",error.message);
            }
        });
    };

    render() {
        return(
            <Container>
                <Form onChange={this.handleUploadFile}>
                    <Form.Group>
                        <Form.File id="uploadSorterCSV" label="Upload Sorter CSV file"/>
                    </Form.Group>
                </Form>
            </Container>
        )
    }
}

export default UploadComponent