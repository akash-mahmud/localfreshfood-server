const {Category} =  require('../models');
exports.createCategory = async (request, resposnce) => {
  try {
    if (!request.body.name) {
      return resposnce.json({
        message:'category name is required'
      })
    }
    await Category.create({
      name: request.body.name,
    });
          return resposnce.json({
            message: 'success',
          });
  } catch (error) {
          return resposnce.json({
            message: error.message,
          });
  }
};

exports.editCategory = async (request, resposnce) => {
  try {
    if (!request.body.name) {
      return resposnce.json({
        message: "category name is required",
      });
    }
    const category = await Category.findOne({
      where:{id : request.params.id}
    })
    if (!category) {
      return resposnce.json({
        message: "category does not exist",
      });
    }
    await category.update({
      name: request.body.name,
    });
    return resposnce.json({
      message: "success",
    });
  } catch (error) {
    return resposnce.json({
      message: error.message,
    });
  }
};

exports.deleteCategory = async (request, responsce) => {
  const { id } = request.params;
  try {
    const deletedCategory = await Category.destroy({ where: { id: id } });
    return responsce.json({
      message: "success",
      deletedCategory,
    });
  } catch (error) {
    return responsce.json({
      message: error.message,
    });
  }
};


exports.getCategory = async (request, resposnce) => {
  try {
  } catch (error) {}
};
