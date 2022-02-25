import { FC, useState } from 'react';
import { SVGIcon } from '../../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../../atoms/Text/Text';
import { LinkInstagramAccount } from '../Component/LinkInstagramAccount/LinkInstagramAccount';
import {
  StyledHeaderInstagram,
  StyledSectionInstagram,
  StyledBodyInstagram,
  StyledFooterInstagram,
} from './InstagramSection.styled';
import { IPropsInstagram } from './InstagramSection.inteface';
import {
  ButtonMolecule,
  ButtonState,
  ButtonVariant,
  Size,
} from '../../../../../atoms/Button/Button';
import { InstructionsInstagram } from '../Component/InstructionsInstagram/InstructionsInstagram';
import {
  getHasPageInstagram,
  readPageInstagram,
} from '../../../../../../../api/channels';
import { useToastContext } from '../../../../../molecules/Toast/useToast';
import { Toast } from '../../../../../molecules/Toast/Toast.interface';
import { setAccountInstagram } from '../../../../../../../redux/slices/channels/account-instagram';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../../redux/hook/hooks';
import { HasFacebookAccount } from '../Component/HasFacebookAccount/HasFacebookAccount';
import { InstagramSuccess } from '../Component/InstagramSuccess/InstagramSuccess';

const dataInstagram = [
  {
    num: 1,
    message: 'Selecciona un canal',
  },
  {
    num: 2,
    message: 'Vincula tu cuenta de Instagram',
  },
  {
    num: 3,
    message: '¡Listo!',
  },
];
export const InstagramSection: FC<IPropsInstagram> = ({
  setIsSectionWebChat,
  hasMessengerAccount,
  getChannelList,
}) => {
  const [isSectionComponent, setIsSectionComponent] = useState<number>(1);
  const [isActiveCheckbox, setIsActiveCheckbox] = useState<boolean>(false);

  const { dataInfoInstagram } = useAppSelector(
    (state) => state.channel.chatContainerAccountInstagramState,
  );
  const dispatch = useAppDispatch();
  const showAlert = useToastContext();
  const handlePreviuos = () => {
    setIsSectionComponent(isSectionComponent - 1);
  };

  const handleHasPageInstagram = async () => {
    try {
      const response = await getHasPageInstagram();
      if (response.success === false) {
        showAlert?.addToast({
          alert: Toast.WARNING,
          title: 'Advertencia',
          message: `No se encontraron datos`,
        });
      } else {
        dispatch(setAccountInstagram(response));
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  };
  const handleSendData = async () => {
    try {
      if (dataInfoInstagram && isActiveCheckbox && isSectionComponent === 2) {
        const response = await readPageInstagram(dataInfoInstagram);
        showAlert?.addToast({
          alert: Toast.SUCCESS,
          title: '¡Perfecto!',
          message: `Se ha vinculado tu cuenta de instagram satisfactoriamente. ${response}`,
        });
        getChannelList();
        setIsSectionComponent(isSectionComponent + 1);
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  };

  const handleNextInstagram = () => {
    if (isSectionComponent === 2) {
      handleSendData();
    } else {
      setIsSectionComponent(isSectionComponent + 1);
      handleHasPageInstagram();
    }
  };
  const handleFinished = () => {
    setIsSectionWebChat(false);
    setIsSectionComponent(1);
  };

  return (
    <StyledSectionInstagram>
      <StyledHeaderInstagram>
        <Text>Añadir nuevo canal con Instagram</Text>
        <button type="button" onClick={handleFinished}>
          <SVGIcon iconFile="/icons/times.svg" />
        </button>
      </StyledHeaderInstagram>
      <StyledBodyInstagram isSectionComponent={isSectionComponent}>
        <div>
          <div>
            {dataInstagram.map((item) => (
              <div key={item.num}>
                <div>
                  <div>{item.num}</div>
                  <Text>{item.message}</Text>
                </div>
                <div />
              </div>
            ))}
          </div>
        </div>
        <div>
          {isSectionComponent === 1 && hasMessengerAccount ? (
            <InstructionsInstagram />
          ) : null}
          {isSectionComponent === 1 && !hasMessengerAccount ? (
            <HasFacebookAccount />
          ) : null}
          {isSectionComponent === 2 ? (
            <LinkInstagramAccount
              dataInfoIntagram={dataInfoInstagram}
              setIsActiveCheckbox={setIsActiveCheckbox}
              isActiveCheckbox={isActiveCheckbox}
            />
          ) : null}
          {isSectionComponent === 3 ? <InstagramSuccess /> : null}
        </div>
      </StyledBodyInstagram>
      <StyledFooterInstagram>
        <ButtonMolecule
          text="Anterior"
          variant={ButtonVariant.OUTLINED}
          onClick={handlePreviuos}
          size={Size.MEDIUM}
          state={
            isSectionComponent <= 1 ? ButtonState.DISABLED : ButtonState.NORMAL
          }
        />
        {!hasMessengerAccount || isSectionComponent === 3 ? (
          <ButtonMolecule
            text="Finalizar"
            size={Size.MEDIUM}
            onClick={handleFinished}
          />
        ) : (
          <ButtonMolecule
            onClick={handleNextInstagram}
            text={isSectionComponent <= 1 ? 'Siguiente' : 'Confirmar'}
            size={Size.MEDIUM}
            state={
              !isActiveCheckbox && isSectionComponent !== 1
                ? ButtonState.DISABLED
                : ButtonState.NORMAL
            }
          />
        )}
      </StyledFooterInstagram>
    </StyledSectionInstagram>
  );
};
