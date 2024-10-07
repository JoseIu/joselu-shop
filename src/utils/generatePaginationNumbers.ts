// [1,2,3,4,5,...,7]
export const generatePaginationNumbers = (currentPage: number, totalPage: number) => {
  //if the total page 7 or is less than 7, show the pages without the dots

  if (totalPage <= 7) {
    return Array.from({ length: totalPage }, (_, i) => i + 1);
  }

  //if current page is between in the 3 first pages,
  // show the 3 first apges, the dots and the 2 last pages

  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPage - 1, totalPage];
  }
  //if current page is between in the 3 last pages,
  // show the 2 first apges, the dots and the 3 last pages
  if (currentPage >= totalPage - 2) {
    return [1, 2, '...', totalPage - 2, totalPage - 1, totalPage];
  }

  //If current page is in the middle
  //show the first page, dots, the currect pge and neiborth
  return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPage];
};
