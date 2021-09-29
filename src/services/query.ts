const DEFAULT_PAGE_LIMIT = 0;
const DEFAULT_PAGE_NUMBER = 1;

interface Query {
  page?: string;
  limit?: string;
}

function getPagination(query: Query) {
  let page = DEFAULT_PAGE_NUMBER;
  let limit = DEFAULT_PAGE_LIMIT;

  if (query.page) {
    page = Math.abs(parseInt(query.page));
  }

  if (query.limit) {
    limit = Math.abs(parseInt(query.limit));
  }

  const skip = (page - 1) * limit;

  return {
    skip,
    limit,
  };
}

export default getPagination;
