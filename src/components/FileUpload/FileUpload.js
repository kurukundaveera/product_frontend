import React from 'react'
import axios, { post } from 'axios';
import swal from 'sweetalert'
import config from '../../config.json';

class FileUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      file:null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }
  onChange(e) {
    this.setState({file:e.target.files[0]})
  }
  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    console.log(this.state.file.name);
    var data=new FormData();
    data.append('file',this.state.file)
    axios.post(config.url+'/import',data).then((response)=>{
        console.log(response);
        // swal("file uploaded successfully");
        this.props.history.push('/listOfProducts');   
    }).catch((error)=>{
        console.log(error);
    });
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit} enctype="multipart/form-data">
        <h1>File Upload</h1>
        <input type="file" id="file" onChange={this.onChange} />
        <button  id="btn4" className="btn btn-outline-primary" type="submit" value="import">Upload</button>
      </form>
   )
  }
}

export default FileUpload;