import { FC } from 'react';
import {
  StyledCustomWebChat,
  StyledHeaderCustomWebChat,
  WrapperWebChat,
  StyledAvatar,
  StyledBodyWebChat,
} from './CustomWebAvatar.styled';
import { ICustomWebChat } from './CustomWebChat.interface';
import { Text } from '../../../../../../atoms/Text/Text';
import { SVGIcon } from '../../../../../../atoms/SVGIcon/SVGIcon';

export const CustomWebChat: FC<ICustomWebChat> = ({
  title,
  primaryColor,
  secondaryColor,
  description,
  avatar,
  customizeMyAvatar,
  customIsColor,
}) => {
  return (
    <StyledCustomWebChat>
      <div>
        <WrapperWebChat
          primaryColor={primaryColor}
          customIsColor={customIsColor}
          secondaryColor={secondaryColor}>
          <div>
            <SVGIcon iconFile="/icons/chevron-square-down.svg" />
          </div>
          <StyledHeaderCustomWebChat>
            <StyledAvatar>
              {!customizeMyAvatar ? (
                <SVGIcon iconFile={`/avatars/${avatar}`} />
              ) : (
                <img src={avatar} alt={avatar} />
              )}
            </StyledAvatar>
            <div>
              <Text>{title}</Text>
              <Text>{description}</Text>
            </div>
          </StyledHeaderCustomWebChat>
          <div>
            <svg
              className="waves waves-animated"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shapeRendering="auto">
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g className="parallax">
                <use
                  xlinkHref="#gentle-wave"
                  x="24"
                  y="0"
                  fill="rgba(255,255,255,0.7)"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x="24"
                  y="2"
                  fill="rgba(255,255,255,0.5)"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x="24"
                  y="3"
                  fill="rgba(255,255,255,0.3)"
                />
                <use xlinkHref="#gentle-wave" x="24" y="4" fill="#ffffff" />
              </g>
            </svg>
          </div>
          <StyledBodyWebChat
            customIsColor={customIsColor}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}>
            <div>
              {!customizeMyAvatar ? (
                <SVGIcon iconFile={`/avatars/${avatar}`} />
              ) : (
                <img src={avatar} alt={avatar} />
              )}
              <div>
                <Text>
                  Hola mi nombre es Elipse mi función es responder preguntas ¿En
                  qué puedo ayudarte?
                </Text>
              </div>
            </div>
            <div>
              <div>
                <Text>Hola Buen día! Me gustaria hablar con un agente.</Text>
              </div>
            </div>
            <div>
              <div>
                <span>
                  <SVGIcon iconFile="/icons/send_121135.svg" />
                </span>
                <div>
                  <Text>Enviar un mensaje...</Text>
                </div>
                <span>
                  <SVGIcon iconFile="/icons/send_121135.svg" />
                </span>
              </div>
            </div>
          </StyledBodyWebChat>
          <Text>Powered by Elipse</Text>
        </WrapperWebChat>
      </div>
    </StyledCustomWebChat>
  );
};
