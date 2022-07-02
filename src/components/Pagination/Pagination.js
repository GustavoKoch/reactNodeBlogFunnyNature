import Pagination from "react-bootstrap/Pagination";
import "./Pagination.css";

// import PageItem from 'react-bootstrap/PageItem'

const BlogPagination = ({
  onNextPage,
  onPrevPage,
  onPage,
  total,
  limit,
  skip,
}) => {
  const numberOfPages = Math.ceil(total / limit);
  console.log (numberOfPages);  

  const currentPage = skip / limit + 1;

  // console.log({ skip, limit, numberOfPages, currentPage });

  // [...Array(10).keys()] ==== [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <div className="pagination">
      <Pagination>
        {/* <Pagination.First /> */}
        <Pagination.Prev onClick={onPrevPage} />
        {[...Array(numberOfPages).keys()].map((page, index) => {
          return (
            <Pagination.Item
              key={index}
              active={currentPage === page + 1 ? true : false}
              onClick={() => onPage(page + 1)}
            >
              {page + 1}
            </Pagination.Item>
          );
        })}
        {/* active */}
        {/* <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item> */}
        {/* <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>
      
      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item> */}
        <Pagination.Next onClick={onNextPage} />
        {}
      </Pagination>
    </div>
  );
};

export default BlogPagination;
