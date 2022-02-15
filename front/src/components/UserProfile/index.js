import React from 'react'

import ProfileForm from '../ProfileForm/index'
import {Button ,Grid} from '@mui/material'

import PT from 'prop-types'

const Profile = ({ userProfile, handleIsOpenForm, isOpenForm }) => {
	return (
		<>
			<Grid container spacing={2}>
				<Grid item xs={2}> Id </Grid>
				<Grid item xs={3}> {userProfile.id}</Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item xs={2}> Name </Grid>
				<Grid item xs={3}> {userProfile.name}</Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item xs={2}> Alias </Grid>
				<Grid item xs={3}> {userProfile.alias}</Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item xs={2}> phone </Grid>
				<Grid item xs={3}> {userProfile.phone}</Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item xs={2}> birthday </Grid>
				<Grid item xs={3}> {userProfile.birthday}</Grid>
			</Grid>


			<Button variant="contained" onClick={handleIsOpenForm}>Edit profile</Button>
			{isOpenForm && (
				<ProfileForm
					handleIsOpenForm={handleIsOpenForm}
					userProfile={userProfile}
				/>
			)}
		</>
	)
}

Profile.propTypes = {
	userProfile: PT.shape({
		id: PT.number,
		name: PT.string,
		alias: PT.string,
		phone: PT.string,
	}).isRequired,
	handleIsOpenForm: PT.func,
	isOpenForm: PT.bool,
}

export default Profile
