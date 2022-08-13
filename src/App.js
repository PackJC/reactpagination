import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import Records from "./components/Records";
import Pagination from "./components/Pagination";

function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(10);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(data.length / recordsPerPage);


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

  return (
    <div className="container">
        <h2> React: Simple Pagination Example </h2>
        <Records data={currentRecords}/>
        <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
        />
    </div>
  );
}

export default App;
