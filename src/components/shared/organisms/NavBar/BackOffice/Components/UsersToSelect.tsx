/* eslint-disable no-nested-ternary */
import React, { FC, useState, Dispatch, SetStateAction } from 'react';
import { UserRole } from '../../../../../../models/users/role';
import { User } from '../../../../../../models/users/user';
import {
  ButtonMolecule,
  ButtonState,
  ButtonVariant,
} from '../../../../atoms/Button/Button';
import { Checkbox } from '../../../../atoms/Checkbox/Checkbox';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { baseRestApi } from '../../../../../../api/base';
import {
  StyledUsersToSelectBody,
  StyledUsersToSelectContainer,
  StyledUsersToSelectFooterSaveChanges,
  StyledUsersToSelectHeader,
  StyledWarning,
} from './UsersToSelect.styled';
import { useToastContext } from '../../../../molecules/Toast/useToast';
import { Toast } from '../../../../molecules/Toast/Toast.interface';
import { useAppSelector } from '../../../../../../redux/hook/hooks';

interface IUsersToSelectProps {
  setModal: Dispatch<SetStateAction<boolean>>;
  setSelectedUsersBuffer: Dispatch<SetStateAction<string[]>>;
  selectedUsersBuffer: string[];
  usersData: User[];
  validateIfAllAgentsAreSelectedBuffer: boolean;
}

export const UsersToSelect: FC<IUsersToSelectProps> = ({
  setModal,
  setSelectedUsersBuffer,
  selectedUsersBuffer,
  usersData,
  validateIfAllAgentsAreSelectedBuffer,
}) => {
  const showAlert = useToastContext();

  const { persistentAgentsCount } = useAppSelector(
    (state) => state.subscriptionsInfo.subscriptionsData,
  );
  const [loading, setLoading] = useState<boolean>(false);

  const handleSaveChanges = async () => {
    setLoading(true);
    try {
      await baseRestApi.patch(
        `${process.env.NEXT_PUBLIC_REST_API_URL}/users/disableAgents`,
        {
          agents: selectedUsersBuffer,
        },
      );
      setModal(false);
      if (validateIfAllAgentsAreSelectedBuffer) {
        showAlert?.addToast({
          alert: Toast.SUCCESS,
          title: 'AGENTES CONFIGURADOS',
          message: `Los agentes seleccionados han sido configurados con éxito`,
        });
      } else {
        showAlert?.addToast({
          alert: Toast.WARNING,
          title: 'AGENTES NO CONFIGURADOS',
          message: `Seleccionaste ${
            selectedUsersBuffer.length
          } agentes. Necesitas seleccionar ${
            persistentAgentsCount - selectedUsersBuffer.length
          } agentes mas`,
        });
      }
    } catch (error) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ATENCION',
        message: `Error al configurar usuarios`,
      });
    }
    setLoading(false);
  };

  return (
    <StyledUsersToSelectContainer>
      <StyledUsersToSelectHeader>
        <Text>Selección de agentes</Text>
        <button type="button" onClick={() => setModal(false)}>
          <SVGIcon iconFile="/icons/close.svg" />
        </button>
      </StyledUsersToSelectHeader>
      <StyledWarning>
        Debido al cambio efectuado en tu suscripción, sólo{' '}
        {persistentAgentsCount}{' '}
        {persistentAgentsCount > 1 ? 'agentes' : 'agente'} podrán continuar
        teniendo acceso. Selecciona los que quieres conservar antes de que
        finalice el período, de lo contrario, los mismos serán elegidos al azar
        por el sistema.
      </StyledWarning>
      <StyledUsersToSelectBody>
        <div>
          <Text>Nombre</Text>
          <Text>Email</Text>
          <Text>Activo</Text>
        </div>
        <section>
          {usersData &&
            usersData
              .filter((user) => user.role === UserRole.AGENT)
              .map(({ name, email, _id }) => (
                <div key={_id}>
                  <div>{name}</div>
                  <div>{email}</div>
                  <div>
                    <Checkbox
                      isTransparent
                      checked={selectedUsersBuffer?.includes(_id)}
                      onClick={() =>
                        setSelectedUsersBuffer(
                          selectedUsersBuffer &&
                            selectedUsersBuffer?.includes(_id)
                            ? selectedUsersBuffer.filter((id) => id !== _id)
                            : selectedUsersBuffer.length < persistentAgentsCount
                            ? [...selectedUsersBuffer, _id]
                            : [...selectedUsersBuffer],
                        )
                      }
                    />
                  </div>
                </div>
              ))}
        </section>
      </StyledUsersToSelectBody>
      <StyledUsersToSelectFooterSaveChanges>
        <ButtonMolecule
          text="Cancelar"
          onClick={() => setModal(false)}
          variant={ButtonVariant.OUTLINED}
        />
        <ButtonMolecule
          text="Guardar"
          onClick={handleSaveChanges}
          state={loading ? ButtonState.LOADING : ButtonState.NORMAL}
        />
      </StyledUsersToSelectFooterSaveChanges>
    </StyledUsersToSelectContainer>
  );
};
