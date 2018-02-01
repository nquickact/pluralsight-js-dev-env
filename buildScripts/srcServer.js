import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

//tell express to use compiler middleware
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath:config.output.publicPath
}));
//server pathway to content
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../src/index.html'));
});
//port pathway
app.listen(port, function(err){
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
})
