import React from 'react'

const Filtering = ({ setRecordsPerPage, recordsPerPage }) => {

    return (

        <div>
            <label>Displaying {recordsPerPage} Posts per Page : </label>
            <select onChange={(e) => setRecordsPerPage(e.target.value)}>
                <option value="15">15</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
        </div>
    )
}

export default Filtering