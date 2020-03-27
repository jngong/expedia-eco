const app = require("./app.js");
const path = require("path");

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app - any wildcard requests will be re-routed to React
  app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
