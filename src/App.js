import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import Pagination from "./components/pagination/Pagination";

let PageSize = 10;
function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data]);

  useEffect(() => {
    axios
      .get("https://api.publicapis.org/entries")
      .then((res) => setData(res.data.entries));
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>API</th>
            <th>Description</th>
            <th>Auth</th>
            <th>HTTPS</th>
            <th>Cors</th>
            <th>Link</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map(item => {
            return (
              <tr key={item}>
                <td>{item.API}</td>
                <td>{item.Description}</td>
                <td>{item.Auth}</td>
                <td>{item.HTTPS.toString()}</td>
                <td>{item.Cors}</td>
                <td>{item.Link}</td>
                <td>{item.Category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </>
  );
}

export default App;
