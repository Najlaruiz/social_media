const Category = require("../models/Category");

exports.addCategory = async (req, res) => {
    if (
      req.body.name !== "" 
    ) {
        Category.create({
        name: req.body.name,
      })
      .then(() => {
        res.send("New Category inserted Succefully");
      })
      .catch((err) => {
        res.json({ error: err });
      });
    } else {
      return res.status(400).json({
        erreur: "fill all the fields",
      });
    }
  };


exports.getCategory = (req, res) => {
  const id = req.params.id;
  Category.findById(id, { include: Category })
    .then((data) => {
      if (data) {
        res.status(200).send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Category with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Category with id=" + id,
      });
    });
};


exports.updateCategory = async (req, res) => {
    const id = req.params.id;
    if (
      req.body.name !== "" 
    ) {
      try {
        const updatedCategory = await Category.findOneAndUpdate(
          { _id: id }, // Assuming _id is the unique identifier for the category
          {
            name: req.body.name,
          }
          ,
          { new: true } // Return the updated document
        )
        if (!updatedCategory) {
          return res.status(404).json({ message: 'Message not found' });
        }
        
        return res.status(200).json(updatedCategory);
        // Handle the updated category as needed
      } catch (error) {
        console.error('Error updating message:', error);
        return res.status(500).json({ message: 'Error updating message', error: error });

      }
    } else {
      return res.status(400).json({
        erreur: "Fill all the fields",
      });
    }
  };


exports.showAllCategories = async (req, res) => {
    try {
        const allCategories = await Category.find()
        return res.status(200).json(allCategories);
        // Handle the retrieved category as needed
    } catch (error) {
        console.error('Error getting messages:', error);
        return res.status(500).json({ message: 'Error retrieving messages', error: error });
    }
};


exports.dealOfCategory = (req, res) => {
    // Assuming your Message model has a field named "_id"
    Category.findByIdAndDelete(req.params.id)
      .then((dealOfCategory) => {
        if (!dealOfCategory) {
          return res.status(404).send('Category not found');
        }
        res.send('Category Removed Successfully');
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).send('Internal Server Error');
      });
  };
