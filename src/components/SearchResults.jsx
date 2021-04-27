import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getArtist } from "../api/userApi";
import { Container, Spinner } from "react-bootstrap";

export default function SearchResult() {
  const search = useSelector((state) => state.search);
  const [artist, setArtist] = useState([]);
  const [query, setQuery] = useState(search);
  const [loader, setLoader] = useState(true);

  const getResults = async (q) => {
    const response = await getArtist(q);
    setArtist(response.data);
    setLoader(false);
    setQuery("");
  };

  useEffect(() => {
    getResults(query);
  }, []);

  const handleKey = (e) => {
    if (e.keyCode === 13 || e.key === "Enter") {
      getResults(query);
    }
  };

  return <Container>{loader ? <Spinner /> : ""}</Container>;
}
