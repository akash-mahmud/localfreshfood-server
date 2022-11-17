exports.getPagingData = (data, page, limit , name) => {
  const { count: totalItems, rows } = data;

  const currentPage = page ? page : 0;
  const totalPages = Math.ceil(totalItems / limit);
  return { totalItems, [name]: rows, totalPages, currentPage };
};
