const request;
const method = request.method;
const url = request.uri;
const formData = request.form;
const headers = request.headers;

// let curlMethod = 'curl -X POST' + ' \\' + '\n   ';
// let curlUrl =  '\'' + url + '\' \\\n   ';
// let curlHeader = Array.from(Object.keys(headers)).reduce((acc, key) => {
//     return acc + '-H \'' + key + ': ' + headers[key] +  '\' \\\n    '
// }, '');

// let curlData = '-d \'' + JSON.stringify(formData) + '\'';
// curlData = curlData.replace(new RegExp('{', 'g'), '{\n    ').replace(new RegExp('}', 'g'), '\n}').replace(new RegExp(',', 'g'), ',\n    ')

// console.log(curlMethod, curlUrl, curlHeader, curlData)


// function constructCURL(method, url, formData, headers) {

//     console.log(a);
// }

let curlMethod = 'curl ';
let curlUrl =  '\'' +url + '\' ';
let curlHeader = Array.from(Object.keys(headers)).reduce((acc, key) => {
    return acc + '-H \'' + key + ': ' + headers[key] +  '\' '
}, '');

let curlData = '-d \'' + Array.from(Object.keys(formData)).filter(key => {
    return formData[key]
}).reduce((acc, key, index, arr) => {
    if(index == arr.length - 1) {
        return acc +  key + '=' + formData[key];
    }
    return acc +  key + '=' + formData[key] + '&';
}, '') + '\''
let a = ''.concat(curlMethod, curlUrl, curlHeader, curlData)
console.log(a)






