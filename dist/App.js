var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import Icon from './components/Icon/Icon';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Upload } from './components/Upload/upload';
library.add(fas);
function App() {
    var handleFileChange = function (e) {
        var files = e.target.files;
        if (files) {
            var uploadedFile = files[0];
            var formData = new FormData();
            formData.append(uploadedFile.name, uploadedFile);
            axios.post('/posts', formData, {
                headers: {
                    "Content-Type": 'multipart/form-data'
                }
            }).then(function (res) {
                console.log(res);
            });
        }
    };
    var checkFileSize = function (file) {
        if (Math.round(file.size / 1024) > 50) {
            alert('file too big');
            return false;
        }
        return true;
    };
    var filePromise = function (file) {
        var newFile = new File([file], 'new_name.docx', { type: file.type });
        return Promise.resolve(newFile);
    };
    return (_jsxs("div", __assign({ className: "App" }, { children: [_jsx("input", { type: 'file', name: 'myFile', onChange: handleFileChange }, void 0),
            _jsxs(Upload, __assign({ action: '/upload' }, { children: [_jsx(Icon, { icon: 'upload', size: '5x', theme: 'secondary' }, void 0),
                    _jsx("br", {}, void 0),
                    _jsx("p", { children: "Drag file over to upload" }, void 0)] }), void 0)] }), void 0));
}
export default App;
