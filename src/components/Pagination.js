import React from 'react'

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {

    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)
    const nextPage = () => {
        if(currentPage !== nPages) setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if(currentPage !== 1) setCurrentPage(currentPage - 1)
    }

    return (

        <div>
            <ul className='pagination justify-content-center'>
                <li className="page-item">
                    <button disabled={currentPage===1} className="btn page-link" >
                        &hellip;
                    </button>
                </li>
                <li className="page-item">
                    <button disabled={currentPage===1} className="btn page-link" onClick={prevPage}>
                        Previous
                    </button>
                </li>
                {pageNumbers.map(pgNumber => (
                    <li key={pgNumber}
                        className= {`page-item ${currentPage === pgNumber ? 'active' : ''} `} >
                        <button onClick={() => setCurrentPage(pgNumber)} className='btn page-link'>
                            {pgNumber}
                        </button>
                    </li>
                ))}
                <li className="page-item">
                    <button disabled={currentPage === nPages} className="btn page-link" onClick={nextPage}>
                        Next
                    </button>
                </li>
                <li className="page-item">
                    <button disabled={currentPage === nPages} className="btn page-link" >
                        &hellip;
                    </button>
                </li>
            </ul>
        </div>
    )
}



export default Pagination