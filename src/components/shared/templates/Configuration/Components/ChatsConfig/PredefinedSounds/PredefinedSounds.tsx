import { FC, useState, useCallback } from 'react';
import { AiFillSound } from 'react-icons/ai';
import { FaInfoCircle } from 'react-icons/fa';
import { IPropsPredefinedSound } from './PredefinedSounds.interface';
import { Text } from '../../../../../atoms/Text/Text';
import {
  StyledWrapperNotificationSounds,
  NotificationSoundsHeader,
  NotificationSoundsBody,
  ToogleComponentForMappedRestrictions,
  ToogleComponentForMappedRestrictionsNoSel,
  StyledWrapperSoundsPending,
  StyledWrapperListSounds,
  StyledListSound,
} from './PreddefinedSound.styled';
import { Tooltip } from '../../../../../atoms/Tooltip/Tooltip';
import { TooltipPosition } from '../../../../../atoms/Tooltip/tooltip.interface';
import {
  ButtonMolecule,
  ButtonState,
  Size,
} from '../../../../../atoms/Button/Button';
import { setSounds, updateActiveSound } from '../../../../../../../api/chat';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../../redux/hook/hooks';
import { SVGIcon } from '../../../../../atoms/SVGIcon/SVGIcon';
import { useToastContext } from '../../../../../molecules/Toast/useToast';
import { Toast } from '../../../../../molecules/Toast/Toast.interface';
import { Radio } from '../../../../../atoms/RadioButton/RadioButton';
import { getGeneralConfigurationData } from '../../../../../../../redux/slices/configuration/configuration-info';

export const PredefinedSounds: FC<IPropsPredefinedSound> = ({ soundList }) => {
  const showAlert = useToastContext();
  const dispatch = useAppDispatch();
  const [openChatPending, setOpenChatPending] = useState<boolean>(false);
  const [openChatOnConversation, setOpenChatOnConversation] =
    useState<boolean>(false);
  const [isLoanding, setIsLoanding] = useState<boolean>(false);

  const { isActive, pendingSound, conversationSound } = useAppSelector(
    (state) =>
      state.configurationInfo.generalConfigurationData.notificationSounds,
  );

  const handleOpenSoundsChatPending = () => {
    if (openChatPending !== true) {
      setOpenChatOnConversation(false);
    }
    setOpenChatPending(!openChatPending);
  };
  const handleOpenSoundsChatOnConversation = () => {
    if (openChatOnConversation !== true) {
      setOpenChatPending(false);
    }
    setOpenChatOnConversation(!openChatOnConversation);
  };
  const initStatePending = pendingSound
    ? `notification_sound_${pendingSound?.slice(
        pendingSound.length - 1,
        pendingSound.length,
      )}`
    : '';

  const [radioCheckedPending, setRadioCheckedPending] =
    useState<string>(initStatePending);

  const handleRadioChangePending = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: targetValue } = e.target;
    setRadioCheckedPending(targetValue);
  };

  const initStateConversation = conversationSound
    ? `notification_sound_${conversationSound?.slice(
        conversationSound.length - 1,
        conversationSound.length,
      )}`
    : '';

  const [radioCheckedInCoversation, setRadioCheckedInConversation] =
    useState<string>(initStateConversation);
  const handleRadioChangeInConversation = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value: targetValue } = e.target;
    setRadioCheckedInConversation(targetValue);
  };

  const handleActive = async () => {
    try {
      const response = await updateActiveSound();
      if (response.success === false) {
        showAlert?.addToast({
          alert: Toast.ERROR,
          title: 'ERROR',
          message: 'Ocurrio un error intentelo nuevamente.',
        });
      }
      dispatch(getGeneralConfigurationData());
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  };

  const handleUpdateSound = async () => {
    try {
      setIsLoanding(true);
      const response = await setSounds({
        pendingSound: radioCheckedPending,
        conversationSound: radioCheckedInCoversation,
        isActive,
      });
      if (response.sucess === false) {
        showAlert?.addToast({
          alert: Toast.ERROR,
          title: 'ERROR',
          message: `Ocurrio un error al cargar los datos.`,
        });
      } else {
        showAlert?.addToast({
          alert: Toast.SUCCESS,
          title: '¡Perfecto!',
          message: `Se actualizo correctamente.`,
        });
      }
      setIsLoanding(false);
      dispatch(getGeneralConfigurationData());
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  };

  const handleSound = useCallback(
    async (props: string) => {
      try {
        await soundList[props].play();
      } catch (err) {
        showAlert?.addToast({
          alert: Toast.ERROR,
          title: 'ERROR',
          message: `${err}`,
        });
      }
    },
    [showAlert, soundList],
  );
  return (
    <StyledWrapperNotificationSounds>
      <NotificationSoundsHeader>
        <Text>Sonidos Predeterminados</Text>
        <Tooltip
          text="Puedes establecer sonidos prederterminados para los nuevos mesajes que llegan al Live Chat. Debes seleccionar un sonido para los chat pendientes y uno para chat en conversación, en caso contrario podras desactivar los sonidos."
          position={TooltipPosition.left}>
          <FaInfoCircle />
        </Tooltip>
      </NotificationSoundsHeader>
      <NotificationSoundsBody>
        <span>
          {isActive ? (
            <Text color="#50da71">Sonidos activados</Text>
          ) : (
            <Text color="#bec0be">Sonidos desactivados</Text>
          )}
          <div>
            {isActive ? (
              <ToogleComponentForMappedRestrictions
                onClick={() => handleActive()}>
                <div />
              </ToogleComponentForMappedRestrictions>
            ) : (
              <ToogleComponentForMappedRestrictionsNoSel
                onClick={() => handleActive()}>
                <div />
              </ToogleComponentForMappedRestrictionsNoSel>
            )}
          </div>
        </span>
        <div>
          <StyledWrapperSoundsPending openContainer={openChatPending}>
            <button type="button" onClick={handleOpenSoundsChatPending}>
              <div>
                <Text>Sonido para chats Pendientes </Text>
              </div>
              {openChatPending ? (
                <SVGIcon iconFile="/icons/chevron-square-up.svg" />
              ) : (
                <SVGIcon iconFile="/icons/chevron-square-down.svg" />
              )}
            </button>
            <div>
              {openChatPending ? (
                <StyledWrapperListSounds>
                  <div>
                    <button
                      type="button"
                      onClick={() => setRadioCheckedPending('')}>
                      <Radio
                        value=""
                        onChange={(event) => handleRadioChangePending(event)}
                        checked={radioCheckedPending}
                        name="radio"
                        id="radio"
                      />
                      <span>Ninguno</span>
                    </button>
                    {Object.keys(soundList).map((item, index) => (
                      <StyledListSound key={index.toString()}>
                        <button
                          type="button"
                          onClick={() => setRadioCheckedPending(item)}>
                          <Radio
                            value={item}
                            onChange={(event) =>
                              handleRadioChangePending(event)
                            }
                            checked={radioCheckedPending}
                            name="radio"
                            id="radio"
                          />
                          <span>{`Sonido ${index + 1}`}</span>
                        </button>
                        <button type="button" onClick={() => handleSound(item)}>
                          <AiFillSound />
                        </button>
                      </StyledListSound>
                    ))}
                  </div>
                </StyledWrapperListSounds>
              ) : null}
            </div>
          </StyledWrapperSoundsPending>
          <StyledWrapperSoundsPending openContainer={openChatOnConversation}>
            <button type="button" onClick={handleOpenSoundsChatOnConversation}>
              <div>
                <Text>Sonido para chats En Conversación</Text>
              </div>
              {openChatOnConversation ? (
                <SVGIcon iconFile="/icons/chevron-square-up.svg" />
              ) : (
                <SVGIcon iconFile="/icons/chevron-square-down.svg" />
              )}
            </button>
            <div>
              {openChatOnConversation ? (
                <StyledWrapperListSounds>
                  <div>
                    <button
                      type="button"
                      onClick={() => setRadioCheckedInConversation('')}>
                      <Radio
                        value=""
                        onChange={(event) =>
                          handleRadioChangeInConversation(event)
                        }
                        checked={radioCheckedInCoversation}
                        name="radio"
                        id="radio"
                      />
                      <span>Ninguno</span>
                    </button>
                    {Object.keys(soundList).map((item, index) => (
                      <StyledListSound key={index.toString()}>
                        <button
                          type="button"
                          onClick={() => setRadioCheckedInConversation(item)}>
                          <Radio
                            value={item}
                            onChange={(event) =>
                              handleRadioChangeInConversation(event)
                            }
                            checked={radioCheckedInCoversation}
                            name="radio"
                            id="radio"
                          />
                          <span>{`Sonido ${index + 1}`}</span>
                        </button>
                        <button type="button" onClick={() => handleSound(item)}>
                          <AiFillSound />
                        </button>
                      </StyledListSound>
                    ))}
                  </div>
                </StyledWrapperListSounds>
              ) : null}
            </div>
          </StyledWrapperSoundsPending>
          <div />
        </div>
        <ButtonMolecule
          text="Establecer Sonido"
          onClick={handleUpdateSound}
          state={isLoanding ? ButtonState.LOADING : ButtonState.NORMAL}
          size={Size.MEDIUM}
        />
      </NotificationSoundsBody>
    </StyledWrapperNotificationSounds>
  );
};
