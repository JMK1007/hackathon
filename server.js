const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('listening on 8080')

});

//누군가가 /pet 으로 방문을 하면,,
//pet 관련된 안내문을 띄워주자



app.get('/write', function(요청, 응답){
    응답.sendFile(__dirname+ '/todoWrite.html')
})

app.get('/', function(요청, 응답){
    응답.sendFile(__dirname+ '/home.html')
})

app.get('/list', function(요청, 응답){
    응답.send('목록을 볼 수 있는 페이지입니다.')
})

app.get('/temp', function(요청, 응답){
    응답.send('임시 페이지입니다.')
})