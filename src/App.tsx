import React, { ChangeEvent } from 'react';
import logo from './logo.svg';
import './App.css';
import Icon from './components/Icon/Icon';
import { library} from '@fortawesome/fontawesome-svg-core'
import { fas} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Upload } from './components/Upload/upload';
library.add(fas)
function App() {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const uploadedFile = files[0]
      const formData = new FormData()
      formData.append(uploadedFile.name, uploadedFile)
      axios.post('/posts', formData, {
        headers: {
          "Content-Type": 'multipart/form-data'
        }
      }).then(res => {
        console.log(res)
      })
    }
  }
  const checkFileSize = (file: File) => {
    if (Math.round(file.size / 1024) > 50) {
      alert('file too big')
      return false
    }
    return true
  }

  const filePromise = (file: File) => {
    const newFile = new File([file], 'new_name.docx', {type: file.type})
    return Promise.resolve(newFile)
  }
  return (
    <div className="App">
      <input type='file' name='myFile' onChange={handleFileChange}/>
      <Upload
        action='/upload'>
        <Icon icon='upload' size='5x' theme='secondary'/>
        <br/>
        <p>Drag file over to upload</p>
      </Upload>
    </div>
  );
}

export default App;
