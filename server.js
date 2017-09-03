var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var content={
    'content1':{
    text:"hello1",
    date:"today"
    },
    
    'content2':{
    text:"hello2",
    date:"today"
    }
};
function  temp(data)
{
    var text=data.text;
    
var template=`<html>
<body>
${text}
</body>
</html>`;

return template;
}

app.get('/:contentNames', function (req, res) {
var contentName=req.params.contentNames;
//res.sendFile(path.join(__dirname, 'ui', 'index.html'));
res.send(temp(content[contentNames]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
