/**
 * CustomerController
 *
 * @description :: Server-side logic for managing Customers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `CustomerController.index()`
   */
  index: function (req, res) {
    Customer.find({},function(err, data) {
                if (err) return next(err);
                res.json(data);  
            });
  },


  /**
   * `CustomerController.create()`
   */
  create: function (req, res) {
    var params = req.params.all()

  Customer.create({name: params.name}).exec(function createCB(err,created){
    return res.json({
      notice: 'Created user with name ' + created.name
    });
  });
  },


  /**
   * `CustomerController.show()`
   */
  show: function (req, res) {
    return res.json({
      todo: 'show() is not implemented yet!'
    });
  },


  /**
   * `CustomerController.edit()`
   */
  edit: function (req, res) {
    return res.json({
      todo: 'edit() is not implemented yet!'
    });
  },


  /**
   * `CustomerController.delete()`
   */
  delete: function (req, res) {
    return res.json({
      todo: 'delete() is not implemented yet!'
    });
  }
};

