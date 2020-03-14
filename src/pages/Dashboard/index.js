import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';
import Background from '~/components/Background';
import Appointment from '~/components/Appointment';
import {Container, Title, List}  from './styles';



export default function Dashboard() {

  const [appointments, setAppointments ] = useState([]);

  useEffect(() => {
    async function loadAppoitments(){
      const response = await api.get('appointments');

      setAppointments(
        appointments.map(appointment  =>
          appointment.id === id
          ? {
            ...appointment,
            canlceled_at: response.data.canlceled_at,
          }
          :appointment
          )


      )
      ;
    }
    loadAppoitments();
  }, []);


  async function handleCancel(id){
    const response = await api.delete(`appointments/${id}`);
  }
  return (
    <Background>
          <Container>
          <Title>Agendamentos</Title>

          <List
              data={appointments}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => <Appointment onCancel={() => handleCancel(item.id)} data={item}/>}
          />
          </Container>
         </Background>
  );
}
Dashboard.navigationOptions = {
    tabBarLabel: 'Agendamentos',
    tabBarIcon:({ tintColor }) =>(
      <Icon name="event" size={20} color={tintColor} />
    ),
};

