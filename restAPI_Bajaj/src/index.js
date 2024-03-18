var express = require("express");
var app = express();
app.POST("/", function (req, res) {
  const { data } = req.body;
  const odd_numbers = [];
  const even_numbers = [];
  const alphabets = [];
  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] !== "number") {
      alphabets.toUpperCase().push(data[i]);
    } else {
      if (data[i] % 2 === 0) {
        even_numbers.push(data[i]);
      } else {
        odd_numbers.push(data[i]);
      }
    }
  }
  const response = {
    is_success: true,
    user_id: "john_doe_17091999",
    email: "john@xyx.com",
    roll_number: ABCD123,
    odd_numbers: odd_numbers,
    even_numbers: even_numbers,
    alphabets: alphabets,
  };
  res.send(response).then(() => console.log("Request sent successfully"));
});
app.listen(3000);
