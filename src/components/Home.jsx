import React, { useState } from "react";
import Jumbo from "./Jumbo";
import Selling from "./Selling";
import HomeAlbums from "./HomeAlbums";

export default function Home() {
  return (
    <div>
      <Jumbo />
      <Selling />
      <HomeAlbums />
    </div>
  );
}
