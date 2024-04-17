import { createSlice } from '@reduxjs/toolkit';
import { sortAppointments } from '../utils/sortAppointments';

const initialState = {
  user: null,
  userAppointments: [],
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true; // Establecer isAuthenticated como true cuando se establece el usuario
    },
    setUserAppointments: (state, action) => {
      const sortedAppointments = sortAppointments(action.payload);
      state.userAppointments = sortedAppointments;
    },
    addUserAppointment: (state, action) => {
      state.userAppointments.push(action.payload);
      const sortedAppointments = sortAppointments(state.userAppointments);
      state.userAppointments = sortedAppointments;
    },
    cancelUserAppointment: (state, action) => {
      const appointmentId = action.payload;
      const updatedAppointments = state.userAppointments.map(appointment => 
        appointment.id === appointmentId ? { ...appointment, status: 'cancelled' } : appointment
      );
      state.userAppointments = sortAppointments(updatedAppointments);
    },
    logout: (state) => {
      state.user = null;
      state.userAppointments = [];
      state.isAuthenticated = false; // Establecer isAuthenticated como false al cerrar sesión
    },
  },
});

export const { setUser, setUserAppointments, addUserAppointment, cancelUserAppointment, logout } = userSlice.actions;
export default userSlice.reducer;