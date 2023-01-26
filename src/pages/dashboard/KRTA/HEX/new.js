import { useEffect, useState } from "react";
import { Button, Card,  Container, Grid } from "@mui/material";
import { useRouter } from "next/router";
import NextLink from 'next/link';


// components
import Layout from '../../../../layouts';

// DataGrid
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';


CreateHEX.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function CreateHEX() {

  const [newHEX, setNewHEX] = useState({
    title: "",
    description: "",
  });
  const { title, description } = newHEX;
  const { push, query } = useRouter();
  const [isSubmit, setIsSubmit] = useState(false);
  const [errors, setErrors] = useState({});

  const getHEX = async () => {
    const response = await fetch(`http://localhost:3000/api/HEX/${query.id}`)
    const data = await response.json();
    setNewHEX({title: data.title, description: data.description});
  }

  useEffect(() => {
    if (query.id) getHEX();
        console.log(query.id)
    }, [query.id] );

  const validate = () => {
    let errors = {};
    if (!title) return (errors.title = "Title is required");
    if (!description) return (errors.description = "description is required");
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = validate();

    if (Object.keys(errors).length) return setErrors(errors);
    setIsSubmit(true);
    if (query.id){
        await updateHEX();
    } else {
        await createHEX();
    }
    await push("/");
  };

  const updateHEX = async () => {
    try {
        await fetch(`http://localhost:3000/api/HEX/${query.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newHEX),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const createHEX = async () => {
    try {
      await fetch("http://localhost:3000/api/HEX/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newHEX),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewHEX({ ...newHEX, [name]: value });
  };



    return (
        <Grid
      
    >
      New
                  <h1>{query.id ? "Update HEX" : "Create HEX"}</h1>

    </Grid>
    )
}

