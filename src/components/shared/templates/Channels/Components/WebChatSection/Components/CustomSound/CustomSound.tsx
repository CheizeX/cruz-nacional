import { FC, useCallback } from 'react';
import { AiFillSound } from 'react-icons/ai';
import { Radio } from '../../../../../../atoms/RadioButton/RadioButton';
import { Text } from '../../../../../../atoms/Text/Text';
import { Toast } from '../../../../../../molecules/Toast/Toast.interface';
import { useToastContext } from '../../../../../../molecules/Toast/useToast';
import {
  ToogleComponentForMappedRestrictions,
  ToogleComponentForMappedRestrictionsNoSel,
} from '../../../../../Configuration/Components/ChatsConfig/PredefinedSounds/PreddefinedSound.styled';
import { ICustomSound } from './CustomSound.interface';
import { WrapperCustomSound } from './CustomSound.styled';

export const CustomSound: FC<ICustomSound> = ({
  soundList,
  activeSound,
  notificationSound,
  setIsActiveSound,
  setNotificationSound,
}) => {
  const showAlert = useToastContext();
  // const [radioCheckedSound, setRadioCheckedSound] = useState<string>('');
  const handleRadioChangeSound = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: targetValue } = e.target;
    setNotificationSound(targetValue);
  };

  const handleToggle = () => {
    setIsActiveSound(!activeSound);
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
    <WrapperCustomSound>
      <Text>Selecciona un Sonido</Text>
      <div>
        <span>
          {activeSound ? (
            <Text color="#50da71">Sonidos activados</Text>
          ) : (
            <Text color="#bec0be">Sonidos desactivados</Text>
          )}
          <div>
            {activeSound ? (
              <ToogleComponentForMappedRestrictions
                onClick={() => handleToggle()}>
                <div />
              </ToogleComponentForMappedRestrictions>
            ) : (
              <ToogleComponentForMappedRestrictionsNoSel
                onClick={() => handleToggle()}>
                <div />
              </ToogleComponentForMappedRestrictionsNoSel>
            )}
          </div>
        </span>
        <div>
          <div>
            <button type="button" onClick={() => setNotificationSound('')}>
              <Radio
                value=""
                onChange={(event) => handleRadioChangeSound(event)}
                checked={notificationSound}
                name="radio"
                id="radio"
              />
              <span>Ninguno</span>
            </button>
            {Object.keys(soundList).map((item, index) => (
              <div key={index.toString()}>
                <button
                  type="button"
                  onClick={() => setNotificationSound(item)}>
                  <Radio
                    value={item}
                    onChange={(event) => handleRadioChangeSound(event)}
                    checked={notificationSound}
                    name="radio"
                    id="radio"
                  />
                  <span>{`Sonido ${index + 1}`}</span>
                </button>
                <button type="button" onClick={() => handleSound(item)}>
                  <AiFillSound />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </WrapperCustomSound>
  );
};
