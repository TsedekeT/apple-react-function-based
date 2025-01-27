const connection = require("../db/db");
const createTables = (req, res) => {
  const done = "Tables created successfully";

  const sql1 = `CREATE TABLE IF NOT EXISTS Products(
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_url VARCHAR(255),
    product_name VARCHAR(255)
  );`;

  const sql2 = `CREATE TABLE IF NOT EXISTS ProductDescription(
    description_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    product_brief_description TEXT,
    product_description TEXT,
    product_img VARCHAR(255),
    product_link VARCHAR(255),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
  );`;

  const sql3 = `CREATE TABLE IF NOT EXISTS ProductPrice(
    price_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    starting_price VARCHAR(50),
    price_range VARCHAR(50),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
  );`;

  connection.query(sql1, (err) => {
    if (err) throw err;
    console.log("Table created Products");
  });

  connection.query(sql2, (err) => {
    if (err) throw err;
    console.log("Table created ProductDescription");
  });

  connection.query(sql3, (err) => {
    if (err) throw err;
    console.log("Table created ProductPrice");
  });

  res.end(done);
};

// Endpoint to add iPhones
const addIphones = (req, res) => {
  const { product_url, img, link, product_name, brief, StartPrice, priceRange, desc } = req.body;

  console.log(req.body);

  const prd = `INSERT INTO Products (product_url, product_name) VALUES (?, ?);`;

  connection.query(prd, [product_url, product_name], (err, result) => {
    if (err) throw err;
    console.log("Inserted into Products");

    const id = result.insertId;

    const description = `INSERT INTO ProductDescription (product_id, product_brief_description, product_description, product_img, product_link) 
                         VALUES (?, ?, ?, ?, ?);`;

    connection.query(description, [id, brief, desc, img, link], (err) => {
      if (err) throw err;
      console.log("Inserted into ProductDescription");
    });

    const price_table = `INSERT INTO ProductPrice (product_id, starting_price, price_range) VALUES (?, ?, ?);`;

    connection.query(price_table, [id, StartPrice, priceRange], (err) => {
      if (err) throw err;
      console.log("Inserted into ProductPrice");
    });
  });

  res.status(201).send({ message: "iPhone added successfully" });
};

// Endpoint to fetch all iPhones with their details
const getIphones = (req, res) => {
  connection.query(
    "SELECT * FROM Products JOIN ProductDescription ON Products.product_id = ProductDescription.product_id JOIN ProductPrice ON Products.product_id = ProductPrice.product_id",
    (err, rows) => {
      if (err) throw err;

      let iphones = { products: rows };
      res.send(iphones);
    }
  );
};

module.exports = { createTables, addIphones, getIphones };
