import React from 'react'
import PetCard from './PetCard'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const PetList = ({ pets }) => {
  const petCards = pets.map(pet => (
    <Grid key={ pet.id } item xs={3}>
      <Item><PetCard pet={ pet } /></Item>
    </Grid>
  ))
  return (
    <Box style={{ marginTop: "20px" }}>
      <Grid container spacing={2}>
        { petCards }
      </Grid>
    </Box>
  )
}

export default PetList