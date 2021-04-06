import React, { useState, useEffect } from "react";
import ArtistBar from "./ArtistBar";
import { getUserById } from "../api/userApi";
import { useParams } from "react-router-dom";
export default function Artist() {
  const matchParams = useParams();
  const [artist, setArtist] = useState(null);
  const [headerPic, setHeaderPic] = useState("");

  const fetchUser = async (id) => {
    const response = await getUserById(matchParams.id);
    if (response.statusText === "OK") {
      const data = response.data;
      console.log(data);
      setArtist(data);
      console.log(artist);
    } else {
      alert("something went wrong");
    }
  };

  useEffect(() => {
    fetchUser(matchParams.id);
  }, [matchParams.id]);

  return (
    <div>
      <ArtistBar header={artist.headerPic} />
    </div>
  );
}
