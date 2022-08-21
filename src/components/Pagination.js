import React from 'react'

const Pagination = ({ nPages, currentPage, setCurrentPage, maxPageLimit, minPageLimit,setMaxPageLimit,setMinPageLimit }) => {
    const pageNumberLimit = 5;
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

    const nextPage = () => {
        if(currentPage+1 > maxPageLimit){
            setMaxPageLimit(maxPageLimit + pageNumberLimit);
            setMinPageLimit(minPageLimit + pageNumberLimit);
        }
        setCurrentPage(prev=>prev+1);
    }
    const forwardEllip = () => {
        if(currentPage+3 > maxPageLimit){
            setMaxPageLimit(maxPageLimit + pageNumberLimit);
            setMinPageLimit(minPageLimit + pageNumberLimit);
        }
        setCurrentPage(prev=>prev+3);

    }
    const forwardPage = () => {
        if(currentPage < nPages){
            return (
                <div className='pagination'>
                    <li className="page-item">
                        <button disabled={currentPage === nPages} className="btn page-link" onClick={nextPage}>
                            Next
                        </button>
                    </li>
                    <li className="page-item">
                        <button disabled={currentPage === nPages} className="btn page-link" onClick={forwardEllip}>
                            &hellip;
                        </button>
                    </li>
                </div>
            )
        }
    }

    const prevPage = () => {
        if((currentPage-1) % pageNumberLimit === 0){
            setMaxPageLimit(maxPageLimit - pageNumberLimit);
            setMinPageLimit(minPageLimit - pageNumberLimit);
        }
        setCurrentPage(prev=> prev-1);
    }
    const backEllip = () => {
        if((currentPage-3) ){
            setMaxPageLimit(maxPageLimit - pageNumberLimit);
            setMinPageLimit(minPageLimit - pageNumberLimit);
        }
        setCurrentPage(prev=>prev-3);

    }
    const backPage = () => {
        if(currentPage > 1){
            return (
                <div className='pagination'>
                    <li className="page-item">
                        <button disabled={currentPage===1} className="btn page-link" onClick={backEllip} >
                            &hellip;
                        </button>
                    </li>
                    <li className="page-item">
                        <button disabled={currentPage===1} className="btn page-link" onClick={prevPage}>
                            Previous
                        </button>
                    </li>
                </div>
            )
        }
    }

    const pages = pageNumbers.map(pgNumber => {
        if(pgNumber <= maxPageLimit  && pgNumber > minPageLimit) {
            return (
                <li key={pgNumber} className= {`page-item ${currentPage === pgNumber ? 'active' : ''} `} >
                    <button onClick={() => setCurrentPage(pgNumber)} className='btn page-link'>
                        {pgNumber}
                    </button>
                </li>
            );
        }
        else {
            return null;
        }
    })

    return (
        <div>
            <ul className='pagination justify-content-center'>
                {backPage()}
                {pages}
                {forwardPage()}
            </ul>
        </div>
    )
}



export default Pagination