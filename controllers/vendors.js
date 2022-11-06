const { Vendor } = require("../models");
exports.createVendor = async (request, resposnce) => {
  try {
    const {
      store_name,

      full_name_of_vendor,
      email,
      phone,
      address,

      county,
      country,
      postcode,
      location,
      description,
      social_media,
      meta_title,
      meta_desc,
      meta_tags,
      policies,
      vendor_logo,
      categoryId,pageTitle, pageDesc, tags
    } = request.body;
    await Vendor({
      store_name,
      userId: request.user.id,
      full_name_of_vendor,
      email,
      phone,
      address,
      county,
      country,
      postcode,
      location,
      description,
      social_media,
      meta_title,
      meta_desc,
      meta_tags,
      policies,
      vendor_logo,
      categoryId,
      pageTitle,
      pageDesc,
      tags,
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

exports.editVendor = async (request, resposnce) => {
  try {
    const { id } = request.params;
    const vendor = await Vendor.findOne({
      where: {
        id,
      },
    });
    if (!vendor) {
      return resposnce.json({
        message: "doesn't exist",
      });
    }
    const {
      store_name,
pageTitle, pageDesc, tags,
      full_name_of_vendor,
      email,
      phone,
      address,
      county,
      country,
      postcode,
      location,
      description,
      social_media,
      meta_title,
      meta_desc,
      meta_tags,
      policies,
      vendor_logo,
      categoryId,
    } = request.body;
    await vendor.update({
      store_name,

      full_name_of_vendor,
      email,
      phone,
      address,
      county,
      country,
      postcode,
      location,
      description,
      social_media,
      meta_title,
      meta_desc,
      meta_tags,
      policies,
      vendor_logo,
      categoryId,
      pageTitle,
      pageDesc,
      tags,
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

exports.deleteVendor = async (request, resposnce) => {
  try {
    const { id } = request.params;
    const deletedVendor = await Vendor.destroy({ where: { id: id } });
    return resposnce.json({
      message: "success",
      deletedVendor,
    });
  } catch (error) {
    return resposnce.json({
      message: error.message,
    });
  }
};

exports.getVendors = async (request, resposnce) => {
  try {
  } catch (error) {
    return resposnce.json({
      message: error.message,
    });
  }
};

exports.getVendor = async (request, resposnce) => {
  try {
  } catch (error) {
    return resposnce.json({
      message: error.message,
    });
  }
};
