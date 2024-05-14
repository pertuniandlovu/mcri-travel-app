import { useEffect, useState } from "react";
import Header from "../../reusables/Header/Header";

const PackingList = () => {
  const [allPackingList, setAllPackingList] = useState([]);

  useEffect(() => {
    fetch('http ://localhost:3000/Packing', {
      method: "GET"
    }).then (response => { 
      return response.json();
    }).then(data => {
       console.log("data", data)
       return setAllPackingList(data)
    })
  })
     
  console.log("allPackingList", allPackingList)

  if (allPackingList.length > 0) {
    return (
      <>
        <Header />

        <div className="page-content">
          <h1>Packing List Page</h1>

          <p>This is an example page. Use this example to create your own pages</p>
          <button>button</button>
          <p>{allPackingList[0].title}</p>
        </div> 
      </>
    )
  }
  
}

export default PackingList;