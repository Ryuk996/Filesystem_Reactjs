import Items from "./Items";
import React, { useEffect, useState } from "react"
import axios from "axios";
import env from "./settings";
import { useHistory } from "react-router";


export default function Dashboard() {
  const history = useHistory();
  const [filesList, setFilesList] = useState([]);
  const [filteredfiles, setFilteredfiles] = useState([]);

  useEffect(async () => {
    try {
      let file = await axios.get(`${env.api}/getfiles/New folder`)
      setFilesList(file.data)
      setFilteredfiles(file.data);

    } catch (error) {
      alert("*kindly replace directory with your file diectory to fetch data");
      console.log(error)
    }

  }, [])

  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">File Drive</h1>
        <a
          href="#"
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Generate Report
        </a>
        <div></div>

      </div>
      <div className="container">
        <Items filesList={filteredfiles}></Items>
      </div>
    </>
  );
}
