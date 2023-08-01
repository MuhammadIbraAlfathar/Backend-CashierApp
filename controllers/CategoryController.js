import category from "../models/Category.js";

const getStore = async (req, res) => {
  try {
    const categories = await category.find();

    if (!categories) {
      throw {
        code: 500,
        message: "Get categories failed",
      };
    }

    return res.status(200).json({
      status: true,
      total: categories.length,
      categories,
    });
  } catch (err) {
    return res.status(err.code).json({
      status: false,
      message: err.message,
    });
  }
};

const store = async (req, res) => {
  try {
    const title = req.body.title;

    if (!title) {
      throw {
        code: 428,
        message: "Title is required",
      };
    }

    const newCategory = new category({
      title: title,
    });

    const Category = await newCategory.save();

    if (!Category) {
      throw {
        code: 500,
        message: "Store category failed!",
      };
    }

    return res.status(200).json({
      status: true,
      Category,
    });
  } catch (err) {
    return res.status(err.code).json({
      status: false,
      message: err.message,
    });
  }
};

export { getStore, store };
