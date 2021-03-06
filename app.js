const path = require('path');
const express = require('express');
const app = express();

const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));
app.get('/', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});
app.set('port', process.env.PORT || 4500)



 app.listen(app.get('port'), () => console.log('listening on port ' + app.get('port')))
});
