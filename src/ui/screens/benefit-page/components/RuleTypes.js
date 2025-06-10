import React from 'react';
import { Typography } from '@mui/material';

export const MinInclusiveConstraint = ({ field, value }) => (
  <Typography variant="body1">
    {field} needs to be greater than or equal to {value}
  </Typography>
);

export const MaxExclusiveConstraint = ({ field, value }) => (
  <Typography variant="body1">
    {field} needs to be less than {value}
  </Typography>
);

export const InConstraint = ({ field, value }) => {
  if (!Array.isArray(value) || value.length === 0) {
    return (
      <Typography variant="body1">
        {field} needs to be one of the following values: (no values provided)
      </Typography>
    );
  }

  if (value.length === 1) {
    const singleVal = value[0];
    return (
      <Typography variant="body1">
        {field} needs to be {String(singleVal)}
      </Typography>
    );
  }

  return (
    <Typography variant="body1">
      {field} needs to be one of the following values: {value.join(', ')}
    </Typography>
  );
};