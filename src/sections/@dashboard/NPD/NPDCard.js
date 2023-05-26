import PropTypes from "prop-types";
// @mui
import { Card, Divider, Typography } from "@mui/material";
import Link from "next/link";
// utils
// components

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

NPDCard.propTypes = {
  user: PropTypes.object.isRequired,
};

export default function NPDCard({ npd }) {
  const { model_name, _id } = npd;

  return (
      <Link color="inherit" href={`/dashboard/PSC/NPD/${_id}/edit`}>
    <Card sx={{ textAlign: "center" }}>
        <Typography variant="subtitle1" sx={{ mt: 6 }}>
          {model_name}
        </Typography>

        <Divider sx={{ borderStyle: "dashed" }} />
    </Card>
      </Link>
  );
}
