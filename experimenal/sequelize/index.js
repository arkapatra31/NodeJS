const sequelize = require("./util/database");

const Customer = require("./models/customer");
const Order = require("./models/order");

Customer.hasMany(Order);

let customerId = null;
sequelize
  .sync({force: true})
  // .sync()
  .then((result) => {
    console.log(result);
    return Customer.create({name: "Chandler Bing", email: "cb@gmail.com"})
  })
  .then(customer => {
    customerId = customer.id;
    console.log("First Customer Created: ",customer);
    return customer.createOrder({total: 45});
  })
  .then(order => {
    console.log("Order is : ",order);
    return Order.findAll({ where: customerId});
  })
  .then(orders => {
    console.log("All the Orders are : ",orders);
  })
  .catch((err) => {
    console.log(err);
  });


  //AND Condition
  Order.findAll({
    where : {
        [sequelize.and] : {total : 12}
    }
  }); //returns a promise

  //OR Condition
  Customer.findAll({
    where : {
        [sequelize.or] : [{
            name: "Arun"
        }]
    }
  }); //returns a promise