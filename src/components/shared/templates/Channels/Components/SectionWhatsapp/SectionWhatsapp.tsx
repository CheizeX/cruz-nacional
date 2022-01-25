import { FC, useState } from 'react';
import { ConfirmationQR } from './Comnponents/ConfirmationQR/ConfirmationQR';

import {
  ButtonMolecule,
  ButtonState,
  ButtonVariant,
  Size,
} from '../../../../atoms/Button/Button';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';

import { ViewQR } from './Comnponents/ViewQR/ViewQR';
import { IPropsChannelAdd } from './SectionWhatsApp.interface';
import {
  StyledAddWhatsApp,
  StyledHeaderChannelAdd,
  StyledBodyAddChannel,
  StyledFooterAddChannel,
} from './SectionWhatsApp.styled';
import { getInstanceQR } from '../../../../../../api/channels';
import { Toast } from '../../../../molecules/Toast/Toast.interface';
import { useToastContext } from '../../../../molecules/Toast/useToast';
import { setIntegrationQRWhatsApp } from '../../../../../../redux/slices/channels/integration-with-qr';
import { useAppDispatch } from '../../../../../../redux/hook/hooks';

const dataWhatsApp = [
  {
    num: 1,
    message: 'Selecciona un canal',
  },
  {
    num: 2,
    message: 'Continuar con el proceso',
  },
  {
    num: 3,
    message: 'Vincula tu número de teléfono móvil',
  },
  {
    num: 4,
    message: '¡Listo!',
  },
];

export const SectionWhatsAppComponent: FC<IPropsChannelAdd> = ({
  setIsSectionWebChat,
}) => {
  const [selectByComponent, setSelectByComponent] = useState<number>(1);
  const [isChecked, setIsChecked] = useState(false);
  const showAlert = useToastContext();
  const dispatch = useAppDispatch();

  const handlePrev = () => {
    setSelectByComponent(selectByComponent - 1);
  };

  const handleSubmit = async () => {
    try {
      const result = await getInstanceQR();
      if (result.success === false) {
        showAlert?.addToast({
          alert: Toast.ERROR,
          title: 'ERROR',
          message:
            'Ops algo salio mal intentelo nuevamente o comuníquese con su proveedor de servicios.',
        });
      } else {
        setSelectByComponent(selectByComponent + 1);
        dispatch(setIntegrationQRWhatsApp(result));
      }
    } catch (err) {
      showAlert?.addToast({
        alert: Toast.ERROR,
        title: 'ERROR',
        message: `${err}`,
      });
    }
  };
  return (
    <StyledAddWhatsApp>
      <StyledHeaderChannelAdd>
        <Text>Añadiendo canal de WhatsApp</Text>
        <button onClick={() => setIsSectionWebChat(false)} type="button">
          <SVGIcon iconFile="/icons/times.svg" />
        </button>
      </StyledHeaderChannelAdd>
      <StyledBodyAddChannel selectByComponent={selectByComponent}>
        <div>
          <div>
            {dataWhatsApp.map((item) => (
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
          {selectByComponent === 1 ? (
            <ConfirmationQR isChecked={isChecked} setIsChecked={setIsChecked} />
          ) : null}
          {selectByComponent === 2 ? <ViewQR /> : null}
        </div>
      </StyledBodyAddChannel>
      <StyledFooterAddChannel>
        <ButtonMolecule
          text="Anterior"
          variant={ButtonVariant.OUTLINED}
          size={Size.MEDIUM}
          onClick={handlePrev}
          state={
            selectByComponent <= 1 ? ButtonState.DISABLED : ButtonState.NORMAL
          }
        />
        <ButtonMolecule
          text="Siguiente"
          size={Size.MEDIUM}
          onClick={handleSubmit}
          state={!isChecked ? ButtonState.DISABLED : ButtonState.NORMAL}
        />
      </StyledFooterAddChannel>
    </StyledAddWhatsApp>
  );
};
