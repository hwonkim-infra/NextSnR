// @mui
import { Box, Card, CardContent, CardHeader, Paper, Typography } from '@mui/material';
import PropTypes from 'prop-types';
// utils

// ----------------------------------------------------------------------

AnalyticsKRTAByModel.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};

export default function AnalyticsKRTAByModel({ title, list, ...other }) {
  return (
    <Card {...other} >
      <CardHeader title={title}   />

      <CardContent>
        <Box
          sx={{
            display: 'grid',
            // gap: 2,
            gridTemplateColumns:  '1fr 1fr 1fr 1fr',
          }}
        >
          {list.map((models) => (
            <Paper key={models._id} variant="outlined" style={{ background: "#f2f2f2" }} sx={{ py: 1, textAlign: 'center' }}>

              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {models._id}
              </Typography>
              <Typography variant="h6">{models.count}</Typography>

            </Paper>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
