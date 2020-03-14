import {Alert} from 'react-native';

import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '~/services/api';
import {updateProfileSuccess, updateProfileFailure } from './actions';


export function* updateProfile({ payload}){
  try {
    const { name, email, ...rest } = payload.data;

    const profile = Object.assign({ name, email }, rest.olPassaword ? rest : {});

    const response = yield call(api.put, 'users', profile);

    Alert.alert('Sucesso!', 'Perfil atualizado com sucesso.');

    yield put(updateProfileSuccess(response.data));

  } catch (err) {
    Alert.alert('Falha na atualização', 'verifique seus dados.');
    yield put(updateProfileFailure());


  }
}
export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)
]);
