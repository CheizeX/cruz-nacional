/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/naming-convention */
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { Text } from '../../../../atoms/Text/Text';
import {
  StyledInformation,
  StyledInformationHeader,
  StyledInformationBody,
  StyledInfoDateOfSubscription,
  StyledItemInSubscription,
  StyledDeleteAgentContainer,
  StyledLoadingBar,
  StyledTitleWhenDowngrade,
} from './Information.styled';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { useToastContext } from '../../../../molecules/Toast/useToast';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../redux/hook/hooks';
import { baseRestApi } from '../../../../../../api/base';
import { getSubscriptionsData } from '../../../../../../redux/slices/subscriptions/subscriptions-info';
import { Toast } from '../../../../molecules/Toast/Toast.interface';

interface InformationProps {
  setShowInfo: Dispatch<SetStateAction<boolean>>;
}
export const SubscriptionInformation: FC<InformationProps> = ({
  setShowInfo,
}) => {
  const dispatch = useAppDispatch();
  const showAlert = useToastContext();

  const [loading, setLoading] = useState(false);
  const [deleteAgents, setDeleteAgents] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [numberOfAgentsToDelete, setNumberOfAgentsToDelete] =
    useState<string>('0');

  const { generalPlan } = useAppSelector(
    (state) => state.subscriptionsInfo.subscriptionsData,
  );

  const handleDeleteAgents = async () => {
    setLoading(true);
    try {
      await baseRestApi.post(
        `${process.env.NEXT_PUBLIC_REST_API_URL}/general/agentsToDelete`,
        {
          quantity: numberOfAgentsToDelete,
        },
      );
      showAlert?.addToast({
        alert: Toast.SUCCESS,
        title: 'ELIMINACIÓN DE AGENTES',
        message: `Has eliminado ${numberOfAgentsToDelete} ${
          Number(numberOfAgentsToDelete) > 1 ? 'agentes' : 'agente'
        } de tu suscripción`,
      });
      setNumberOfAgentsToDelete('0');
      setShowConfirm(false);
      setDeleteAgents(false);
    } catch (error) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ELIMINACIÓN DE AGENTES',
        message: `Ha ocurrido un error al eliminar los agentes`,
      });
      setShowConfirm(false);
      setNumberOfAgentsToDelete('0');
      setDeleteAgents(false);
    }
    dispatch(getSubscriptionsData());
    setLoading(false);
  };
  //
  //
  return (
    <StyledInformation>
      <StyledInformationHeader>
        <Text>Información detallada sobre tus suscripciones</Text>
        <button type="button" onClick={() => setShowInfo(false)}>
          <SVGIcon iconFile="/icons/close.svg" />
        </button>
      </StyledInformationHeader>
      <StyledInformationBody>
        <StyledInfoDateOfSubscription>
          Fecha de tu próximo vencimiento{' '}
          <span>
            {new Date(generalPlan.stripe_end_date).toLocaleDateString('es-AR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        </StyledInfoDateOfSubscription>
        {generalPlan.agentes_extra > 0 && (
          <>
            {generalPlan.agentes_a_eliminar > 0 && (
              <StyledTitleWhenDowngrade>
                <Text>
                  Al finalizar el período de ésta suscripción, los agentes que
                  has eliminado ya no estarán disponibles. En caso de
                  arrepentirte de haber eliminado alguno, simplemente vuelve a
                  contratar un nuevo agente antes de dicha finalización y lo
                  pondremos nuevamente a tu disposición.
                </Text>
              </StyledTitleWhenDowngrade>
            )}

            <StyledItemInSubscription>
              <div>
                <div>
                  Agentes extra contratados
                  <span>{generalPlan.agentes_extra}</span>
                </div>
                {generalPlan.agentes_a_eliminar > 0 && (
                  <div>
                    Agentes extra a eliminar
                    <span>
                      {generalPlan.agentes_a_eliminar -
                        (generalPlan.downgrade ? 2 : 0)}
                    </span>
                  </div>
                )}
              </div>
              {!deleteAgents ? (
                generalPlan.agentes_extra >
                  (generalPlan.downgrade
                    ? generalPlan.agentes_a_eliminar - 2
                    : generalPlan.agentes_a_eliminar) && (
                  <button type="button" onClick={() => setDeleteAgents(true)}>
                    <AiOutlineDelete size={14} />
                    Quiero eliminar agentes
                  </button>
                )
              ) : (
                <StyledDeleteAgentContainer>
                  {!showConfirm && (
                    <div>
                      Cantidad a eliminar
                      <input
                        type="number"
                        min="0"
                        max={
                          generalPlan.agentes_extra -
                          generalPlan.agentes_a_eliminar
                        }
                        onChange={(e) =>
                          setNumberOfAgentsToDelete(e.target.value)
                        }
                      />
                    </div>
                  )}
                  {numberOfAgentsToDelete === '0' ? (
                    <button
                      type="button"
                      onClick={() => setDeleteAgents(false)}>
                      No quiero eliminar agentes
                    </button>
                  ) : !showConfirm ? (
                    <button type="button" onClick={() => setShowConfirm(true)}>
                      Eliminar {numberOfAgentsToDelete}{' '}
                      {Number(numberOfAgentsToDelete) > 1
                        ? 'agentes'
                        : 'agente'}
                    </button>
                  ) : loading ? (
                    <main>
                      <Text>Eliminando agentes</Text>
                      <StyledLoadingBar />
                    </main>
                  ) : (
                    <span>
                      ¿Seguro deseas eliminar {numberOfAgentsToDelete}{' '}
                      {Number(numberOfAgentsToDelete) > 1
                        ? 'agentes'
                        : 'agente'}
                      ?
                      <div>
                        <button
                          type="button"
                          onClick={() => {
                            setShowConfirm(false);
                            setNumberOfAgentsToDelete('0');
                            setDeleteAgents(false);
                          }}>
                          NO{' '}
                        </button>
                        <button type="button" onClick={handleDeleteAgents}>
                          SI{' '}
                        </button>
                      </div>
                    </span>
                  )}
                </StyledDeleteAgentContainer>
              )}
            </StyledItemInSubscription>
          </>
        )}
      </StyledInformationBody>
    </StyledInformation>
  );
};
