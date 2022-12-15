const { getPagingData } = require("../helpers/getPagingData");
const { getPagination } = require("../helpers/pagination");
const { User } = require("../models");

exports.getSellers = async (req, res) => {
    try {
          const { page, size } = req.query;
        const { limit, offset } = getPagination(page, size); 
        const sellers = await User.findAndCountAll({
          where: {
            user_type: "vendor",
          },
          attributes: [
            "id",
            "first_name",
            "last_name",
            "email",
            "phone",
            "postcode",
            "country",
            "county",
            "address",
          ],
          order: [["createdAt", "DESC"]],
          limit,
          offset,
        });
        const responseData = getPagingData(sellers, page, limit, "sellers");
        return res.json({
          message: "success",
          paginatedData: responseData,
        });
    } catch (error) {
            return res.json({
              message: error.message,
            });
    }
}