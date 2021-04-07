import React, { useState } from "react";
import Jumbo from "./Jumbo";
import Selling from "./Selling";

export default function Home() {
  return (
    <div>
      <Jumbo />
      <Selling />
    </div>
  );
}
