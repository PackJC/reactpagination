import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import Records from "./components/Records";
import Pagination from "./components/Pagination";
import Filtering from "./components/Filtering";

function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(15);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(data.length / recordsPerPage);
    const [maxPageLimit, setMaxPageLimit] = useState(5);
    const [minPageLimit, setMinPageLimit] = useState(0);


    useEffect(() => {
    axios.get('MOCK_DATA.json')
        .then(res => {
          setData(res.data);
          setLoading(false);
        })
        .catch(() => {
          alert('There was an error while retrieving the data')
        })
  }, [])

    if(loading) {
        return ( <p>Data is loading</p>);
    }
    else {
        return (
            <div className="container">
                <h2> React: Simple Pagination Example </h2>

                <Filtering
                    setRecordsPerPage={setRecordsPerPage}
                    recordsPerPage={recordsPerPage}
                />

                <Records data={currentRecords}/>

                <Pagination
                    nPages={nPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    maxPageLimit={maxPageLimit}
                    setMaxPageLimit={setMaxPageLimit}
                    minPageLimit={minPageLimit}
                    setMinPageLimit={setMinPageLimit}
                />
            </div>
        );
    }
}

export default App;
