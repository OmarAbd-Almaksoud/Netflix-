import './pagination.css'
function Pagination({totlaMovies,moviesPerPage,currentPage,setCurrentPage}) {
    let pages=[];

    for (let i = 1; i < Math.ceil(totlaMovies/moviesPerPage); i++) {
       pages.push(i)
        
    }
    return ( <>
   <div className="d-flex justify-content-center mt-5 ">
   <div >
    
       {pages.map((page)=>{
        return <button className={`  mx-1  ${(currentPage==page)?"activepaginationButtons":"paginationButtons"}`}   onClick={()=>setCurrentPage(page)}>{page}</button>
       })}
      
    </div>
   </div>
    </> );
}

export default Pagination;