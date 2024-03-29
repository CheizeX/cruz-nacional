import React, { FC } from 'react';
import { useAppSelector } from '../../../../../../../../redux/hook/hooks';
import { Text } from '../../../../../../atoms/Text/Text';
import {
  IPropsAuthFacebook,
  IPropsSelector,
} from './FacebookAccountSelector.interface';
import {
  StyledFacebookAccountSelector,
  StyledHeaderAcount,
  StyledWrapperButton,
  StyledBodyWrapperSelector,
  Styledbutton,
  StyledButtonAuth,
  StyledBody,
} from './FacebookAccountSelector.styled';

export const FacebookAccountSelector: FC<IPropsSelector & IPropsAuthFacebook> =
  ({
    setDatosAuth,
    setSelectedComponent,
    isActiveCheckbox,
    setIsActiveCheckbox,
  }) => {
    const { dataInfoFacebook } = useAppSelector(
      (state) => state.channel.chatContainerAuthFacebookState,
    );

    // const [isActive, setIsActive] = useState<number>(-1);

    const handleClick = (
      pageId: string,
      accessToken: string,
      name: string,
      index: number,
    ) => {
      setIsActiveCheckbox(index);
      setSelectedComponent(3);
      setDatosAuth({
        pageId,
        accessToken,
        pageName: name,
      });
    };
    return (
      <StyledFacebookAccountSelector>
        <StyledHeaderAcount>
          <Text>Seleciona una de tus cuentas de facebook</Text>
        </StyledHeaderAcount>
        <StyledBody>
          <div>
            {dataInfoFacebook.length >= 1 ? (
              dataInfoFacebook?.map((item, index) => (
                <div key={item.id}>
                  <StyledBodyWrapperSelector>
                    <StyledButtonAuth
                      onClick={() =>
                        handleClick(
                          item.id,
                          item.access_token,
                          item.name,
                          index,
                        )
                      }>
                      <StyledWrapperButton
                        isFocused={isActiveCheckbox === index}>
                        <Styledbutton isFocused={isActiveCheckbox === index} />
                      </StyledWrapperButton>
                    </StyledButtonAuth>
                    <Text>{item.name}</Text>
                  </StyledBodyWrapperSelector>
                </div>
              ))
            ) : (
              <div>
                <Text>
                  Aun no tienes un página vinculada a tu cuenta de Facebook
                </Text>

                <Text>
                  Recuerda que debes tener al menos una página de Facebook
                  vinculada a tu cuenta, en caso de querer añadir Instagram será
                  necesario vincular ambas páginas.
                </Text>
              </div>
            )}
          </div>
        </StyledBody>
      </StyledFacebookAccountSelector>
    );
  };
