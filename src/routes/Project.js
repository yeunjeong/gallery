import React from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./Project.module.css";
import Footer from "../components/Footer";

function Project() {
  const { category, id } = useParams();
  console.log(category);
  console.log(id);

  return (
    <div>
      <Footer />
    </div>
  );
}

export default Project;
