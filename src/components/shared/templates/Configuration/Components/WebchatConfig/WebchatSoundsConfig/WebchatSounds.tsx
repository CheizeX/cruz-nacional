import { FC, useState, useCallback } from 'react';
import { AiFillSound } from 'react-icons/ai';
import { FaInfoCircle } from 'react-icons/fa';
import { IPropsWebchatSounds } from './WebchatSounds.interface';
import { Text } from '../../../../../atoms/Text/Text';
import {
  StyledWebchatWrapperNotificationSounds,
  WebchatNotificationSoundsHeader,
  WebchatNotificationSoundsBody,
  WebchatToogleComponentForMappedRestrictions,
  WebchatToogleComponentForMappedRestrictionsNoSel,
  StyledWebchatWrapperSoundsPending,
  StyledWebchatWrapperListSounds,
  StyledWebchatListSound,
} from './WebchatSounds.styled';
import { Tooltip } from '../../../../../atoms/Tooltip/Tooltip';
import { TooltipPosition } from '../../../../../atoms/Tooltip/tooltip.interface';
import { useToastContext } from '../../../../../molecules/Toast/useToast';
import { Toast } from '../../../../../molecules/Toast/Toast.interface';
import { Radio } from '../../../../../atoms/RadioButton/RadioButton';

export const WebchatSounds: FC<IPropsWebchatSounds> = ({
  soundList,
  customNotificationSound,
  setCustomNotificationSound,
  isSoundActive,
  setIsSoundActive,
  // radioCheckedInCoversation,
  // setRadioCheckedInConversation,
}) => {
  const showAlert = useToastContext();

  const [openChatPending, setOpenChatPending] = useState<boolean>(false);
  // const [openChatOnConversation, setOpenChatOnConversation] =
  //   useState<boolean>(false);

  const handleOpenSoundsChatPending = () => {
    // if (openChatPending !== true) {
    //   setOpenChatOnConversation(false);
    // }
    setOpenChatPending(!openChatPending);
  };

  const handleRadioChangePending = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: targetValue } = e.target;
    setCustomNotificationSound(targetValue);
  };

  // const handleOpenSoundsChatOnConversation = () => {
  //   if (openChatOnConversation !== true) {
  //     setOpenChatPending(false);
  //   }
  //   setOpenChatOnConversation(!openChatOnConversation);
  // };

  // const handleRadioChangeInConversation = (
  //   e: React.ChangeEvent<HTMLInputElement>,
  // ) => {
  //   const { value: targetValue } = e.target;
  //   setRadioCheckedInConversation(targetValue);
  // };

  // const handleActive = async () => {
  //   try {
  //     const response = await updateActiveSound();
  //     if (response.success === false) {
  //       showAlert?.addToast({
  //         alert: Toast.ERROR,
  //         title: 'ERROR',
  //         message: 'Ocurrio un error intentelo nuevamente.',
  //       });
  //     }
  //     dispatch(getGeneralConfigurationData());
  //   } catch (err) {
  //     showAlert?.addToast({
  //       alert: Toast.ERROR,
  //       title: 'ERROR',
  //       message: `${err}`,
  //     });
  //   }
  // };

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
    <StyledWebchatWrapperNotificationSounds>
      <WebchatNotificationSoundsHeader>
        <Text>SONIDOS</Text>
        <Tooltip
          text="Los sonidos del Webchat pueden activarse o desactivarse. En caso de que elijas activarlos, deberás seleccionar un sonido para los chats pendientes y otro para los chats en conversación, o bien elegir la opción 'Ninguno' si deseas que no se reproduzca un sonido en alguno de ellos."
          position={TooltipPosition.left}>
          <FaInfoCircle />
        </Tooltip>
      </WebchatNotificationSoundsHeader>
      <WebchatNotificationSoundsBody>
        <span>
          {isSoundActive ? (
            <Text color="#50da71">Sonidos ACTIVADOS</Text>
          ) : (
            <Text color="#bec0be">Sonidos DESACTIVADOS</Text>
          )}
          <div>
            {isSoundActive ? (
              <WebchatToogleComponentForMappedRestrictions
                onClick={() => setIsSoundActive(false)}>
                <div />
              </WebchatToogleComponentForMappedRestrictions>
            ) : (
              <WebchatToogleComponentForMappedRestrictionsNoSel
                onClick={() => setIsSoundActive(true)}>
                <div />
              </WebchatToogleComponentForMappedRestrictionsNoSel>
            )}
          </div>
        </span>
        <div>
          <StyledWebchatWrapperSoundsPending openContainer={openChatPending}>
            <button type="button" onClick={handleOpenSoundsChatPending}>
              <div>
                <Text>Elegir sonido de notificación de nuevo mensaje</Text>
              </div>
              {/* {openChatPending ? (
                <SVGIcon iconFile="/icons/chevron-square-up.svg" />
              ) : (
                <SVGIcon iconFile="/icons/chevron-square-down.svg" />
              )} */}
            </button>
            <div>
              {/* {openChatPending ? ( */}
              <StyledWebchatWrapperListSounds>
                <div>
                  <button
                    type="button"
                    onClick={() => setCustomNotificationSound('')}>
                    <Radio
                      value=""
                      onChange={(event) => handleRadioChangePending(event)}
                      checked={customNotificationSound}
                      name="radio"
                      id="radio"
                    />
                    <span>Ninguno</span>
                  </button>
                  {Object.keys(soundList).map((item, index) => (
                    <StyledWebchatListSound key={index.toString()}>
                      <button
                        type="button"
                        onClick={() => setCustomNotificationSound(item)}>
                        <Radio
                          value={item}
                          onChange={(event) => handleRadioChangePending(event)}
                          checked={customNotificationSound}
                          name="radio"
                          id="radio"
                        />
                        <span>{`Sonido ${index + 1}`}</span>
                      </button>
                      <button type="button" onClick={() => handleSound(item)}>
                        <AiFillSound />
                      </button>
                    </StyledWebchatListSound>
                  ))}
                </div>
              </StyledWebchatWrapperListSounds>
              {/* ) : null} */}
            </div>
          </StyledWebchatWrapperSoundsPending>

          {/* <StyledWebchatWrapperSoundsPending
            openContainer={openChatOnConversation}>
            <button type="button" onClick={handleOpenSoundsChatOnConversation}>
              <div>
                <Text>Sonido de nuevo mensaje</Text>
              </div>
              {openChatOnConversation ? (
                <SVGIcon iconFile="/icons/chevron-square-up.svg" />
              ) : (
                <SVGIcon iconFile="/icons/chevron-square-down.svg" />
              )}
            </button>
            <div>
              {openChatOnConversation ? (
                <StyledWebchatWrapperListSounds>
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
                      <StyledWebchatListSound key={index.toString()}>
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
                      </StyledWebchatListSound>
                    ))}
                  </div>
                </StyledWebchatWrapperListSounds>
              ) : null}
            </div>
          </StyledWebchatWrapperSoundsPending> */}
          <div />
        </div>
      </WebchatNotificationSoundsBody>
    </StyledWebchatWrapperNotificationSounds>
  );
};
