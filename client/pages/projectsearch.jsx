import React, { useState, useEffect } from "react";
import "../styles/projectsearch.css";
import { useLocation,useNavigate } from "react-router-dom";
import CardComponent from "./cardcomponent";
import axios from "axios";
import { message } from "antd";

export default function ProjectSearch() {
  const txt = useLocation().state?.txt;
  const navigate =useNavigate();
  console.log(txt);

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/user/search`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ searchQuery: txt }),
          }
        );
        if (response.ok) {
          const data = await response.json();
          setSearchResults(data.results);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchSearchResults();


  }, [txt]);

  const handleClick = async(projectId) => {
    console.log(projectId)
    try {
      const response = await axios.get(
        `http://localhost:9014/api/v1/pdf/viewabstract/${projectId}`
      );
      console.log(response.data);
      let link = response.data
      if(link==="") message.error("File not uploaded yet!")
      else window.open(link);
    } catch (error) {
      console.log(error);
    }
    
  };

  if (searchResults.length > 0)
    return (
      <div className="projectsearch_s">
        <div className="search_rect_s">
          <img className="searchimg_s"></img>
          <p className="title_s">Similar projects like " {txt} "</p>
        </div>
        <div className="searchResults_s">
          {searchResults.map((result) => (
            <CardComponent
              key={result.id}
              title={result.title}
              type={result.type}
              year={result.year}
              handleClick= {() => handleClick(result.id)}
            />
          ))}
        </div>
      </div>
    );
  else {
    return (
      <div className="projectsearch_s">
        <div className="search_rect_s">
          <img className="searchimg_s"></img>
          <p className="title_s">Oops! No result found</p>
        </div>
      </div>
    );
  }
}