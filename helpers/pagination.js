exports.getPagination = (page, size) => {
  const limit = size ? size : 25;
  const offset = page && page > 0 ? (page - 1) * limit : 0;
  return { limit, offset };
};
