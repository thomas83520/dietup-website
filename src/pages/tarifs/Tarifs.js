import { Box, Typography,Stack } from '@mui/material'
import React from 'react'
import TarifsItem from './TarifsItem'

export default function Tarifs() {
  return (
    <Box textAlign="center" px={2}>
        <Typography variant='h2' py={3}>Tarifs</Typography>
        <Typography>Tous les abonnement sont renouvelés automatiquement</Typography>
        <Stack direction={{xs:"column",md:"row"}} spacing={3} alignItems="center" justifyContent="center" py={3}>
            <TarifsItem nom="Formule 1" subtitle="paiement mensuel" prix="20€" link="formule1"/>
            <TarifsItem nom="Formule 2" subtitle="paiement tout les 6 mois" prix="20€" link="formule2"/>
            <TarifsItem nom="Formule 3" subtitle="paiement annuel"prix="20€" link="formule3"/>
        </Stack>
    </Box>
  )
}
