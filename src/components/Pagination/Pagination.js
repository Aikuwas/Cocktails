import React from 'react';

const Pagination = ({total,postPerPage,setCurrentPage,currentPage}) => {
    const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / postPerPage); i++) {
    pageNumbers.push(i);
    console.log(i);

  }

  const paginationitems = pageNumbers?.map(el=>{
    return <button onClick={()=>{currentPage>1? setCurrentPage(1):setCurrentPage(el)}}>{el}</button>
  })
    return (
        <div>
          {pageNumbers.length === 1? '':paginationitems}  
        </div>
    );
};

export default Pagination;