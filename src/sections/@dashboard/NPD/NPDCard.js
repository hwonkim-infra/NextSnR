import PropTypes from "prop-types";
// @mui
import { Card, Divider, Typography } from "@mui/material";
import Link from "next/link";
// utils
// components

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function NPDCard({ npd }) {
  const { model_name, _id, npdStage } = npd;
  const currentStage = Object.keys(npdStage)[0];
  console.log(npdStage);

  function countGreen(obj) {
    let count = 0;

    // Iterate over the object's keys and values.
    for (const [key, val] of Object.entries(obj)) {
      // If the value is equal to "green", increment the count.
      if (val === "green") {
        count++;
      }

      // If the value is an object, recursively call the function.
      if (typeof val === "object") {
        count += countGreen(val);
      }
    }

    // Return the count.
    return count;
  }

  function countYellow(obj) {
    let count = 0;

    // Iterate over the object's keys and values.
    for (const [key, val] of Object.entries(obj)) {
      // If the value is equal to "green", increment the count.
      if (val === "yellow") {
        count++;
      }

      // If the value is an object, recursively call the function.
      if (typeof val === "object") {
        count += countYellow(val);
      }
    }

    // Return the count.
    return count;
  }

  function countRed(obj) {
    let count = 0;

    // Iterate over the object's keys and values.
    for (const [key, val] of Object.entries(obj)) {
      // If the value is equal to "green", increment the count.
      if (val === "red") {
        count++;
      }

      // If the value is an object, recursively call the function.
      if (typeof val === "object") {
        count += countRed(val);
      }
    }

    // Return the count.
    return count;
  }

  return (
    <Link color="inherit" href={`/dashboard/PSC/NPD/${_id}/view`}>
      <Card sx={{ textAlign: "center" }}>
        <Typography variant="h3" sx={{ mt: 6 }}>
          {model_name}{" "}
        </Typography>
        <Divider sx={{ borderStyle: "dashed" }} />
        <Typography variant="subtitle1" sx={{ p: 3 }}> {currentStage.toLocaleUpperCase()}{" "} </Typography>
        <Typography variant="subtitle2" color="green" sx={{ p: 1 }}> 
        Greens: 
        {countGreen(npdStage)} </Typography>
        <Typography variant="subtitle2" sx={{ p: 1 }}> 
        Yellow:
        {countYellow(npdStage)} </Typography>
        <Typography variant="subtitle2" color="red" sx={{ p: 1 }}> 
        Red:
        {countRed(npdStage)} </Typography>

      </Card>
    </Link>
  );
}
