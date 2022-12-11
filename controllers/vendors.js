const { Vendor } = require("../models");
const { getPagingData } = require("../helpers/getPagingData");
const { getPagination } = require("../helpers/pagination");
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
      categoryId,
      pageTitle,
      pageDesc,
      tags,
      userId,
    } = request.body;
    await Vendor.create({
      store_name,
      userId,
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
      pageTitle,
      pageDesc,
      tags,
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
    const { page, size } = request.query;
    const { limit, offset } = getPagination(page, size);
    const vendors = await Vendor.findAndCountAll({
      order: [["createdAt", "DESC"]],
      limit,
      offset,
    });

    const responseData = getPagingData(vendors, page, limit, "vendors");
    return resposnce.json({
      message: "success",
      paginatedData: responseData,
    });
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
