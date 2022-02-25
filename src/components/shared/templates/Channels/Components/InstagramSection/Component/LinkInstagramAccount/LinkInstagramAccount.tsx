import { FC } from 'react';
import { SpinnerDotted } from 'spinners-react';
import { LinkToMolecule } from '../../../../../../molecules/LinkTo/LinkTo';
import { Text } from '../../../../../../atoms/Text/Text';
import {
  StyledWrapperLinkInstagram,
  StyledHeaderLinkInstagram,
  StyledBodyLinkInstagram,
  WrapperSelectorInstagramAccount,
  StyledNoInstagramAccount,
} from './LinkInstagramAccount.styled';
import { ILinkInstagramAccount } from './LinkInstagramAccount.interface';
import { Checkbox } from '../../../../../../atoms/Checkbox/Checkbox';
import { SVGIcon } from '../../../../../../atoms/SVGIcon/SVGIcon';

export const LinkInstagramAccount: FC<ILinkInstagramAccount> = ({
  dataInfoIntagram,
  isActiveCheckbox,
  setIsActiveCheckbox,
}) => {
  const handleToggle = () => {
    setIsActiveCheckbox(!isActiveCheckbox);
  };
  return (
    <StyledWrapperLinkInstagram>
      <StyledHeaderLinkInstagram>
        <Text>Seleciona tu cuenta de Instagram</Text>
      </StyledHeaderLinkInstagram>
      <StyledBodyLinkInstagram>
        <div>
          {dataInfoIntagram ? (
            <WrapperSelectorInstagramAccount
              isActiveCheckbox={isActiveCheckbox}>
              <div>
                {!dataInfoIntagram.image ? (
                  <SpinnerDotted
                    color="#8769FF"
                    size="100%"
                    style={{ maxHeight: '5rem' }}
                  />
                ) : (
                  <img
                    src={`${dataInfoIntagram.image}`}
                    alt="No se encontro la imagen"
                  />
                )}
              </div>
              <div>
                <Text>{dataInfoIntagram && dataInfoIntagram.name}</Text>
                <Text>{dataInfoIntagram && dataInfoIntagram.username}</Text>
              </div>
              <div>
                <div>
                  <Checkbox checked={isActiveCheckbox} onClick={handleToggle} />
                  <Text>Vincular cuenta de Instagram</Text>
                </div>
              </div>
            </WrapperSelectorInstagramAccount>
          ) : (
            <StyledNoInstagramAccount>
              <SVGIcon iconFile="/icons/warning.svg" />
              <Text>Aun no tienes una cuenta de Instagram para vincular</Text>
              <LinkToMolecule
                color="#2477ff"
                href="https://www.instagram.com/"
                text="Ir a Instagram"
              />
            </StyledNoInstagramAccount>
          )}
        </div>
      </StyledBodyLinkInstagram>
    </StyledWrapperLinkInstagram>
  );
};
