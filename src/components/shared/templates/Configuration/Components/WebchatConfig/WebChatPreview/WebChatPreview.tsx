import { FC } from 'react';
import { SVGIcon } from '../../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../../atoms/Text/Text';
import { IWebChatPreview } from './WebChatPreview.interface';
import {
  StyledAvatarWebChatPreview,
  StyledBodyWebChatPreview,
  StyledHeaderWebChatPreview,
  StyledWebChatPreview,
  WrapperWebChatPreview,
} from './WebChatPreview.styled';

export const WebChatPreview: FC<IWebChatPreview> = ({
  title,
  primaryColor,
  secondaryColor,
  description,
  avatar,
  isCustomColor,
  isAnimated,
  initialMessage,
}) => {
  return (
    <StyledWebChatPreview>
      <div>
        <WrapperWebChatPreview
          primaryColor={primaryColor}
          isCustomColor={isCustomColor}
          secondaryColor={secondaryColor}
          isAnimated={isAnimated}>
          <div>
            <SVGIcon iconFile="/icons/chevron-square-down.svg" />
          </div>
          <StyledHeaderWebChatPreview>
            <StyledAvatarWebChatPreview>
              <img src={`/avatars/${avatar}.svg`} alt={avatar} />
            </StyledAvatarWebChatPreview>
            <div>
              <Text>{title}</Text>
              <Text>{description}</Text>
            </div>
          </StyledHeaderWebChatPreview>
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
          <StyledBodyWebChatPreview
            isCustomColor={isCustomColor}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            isAnimated={isAnimated}>
            <div>
              <img src={`/avatars/${avatar}.svg`} alt={avatar} />
              <div>
                <Text>{initialMessage}</Text>
              </div>
            </div>
            <div>
              <div>
                <Text>Hola Buen día! Quisiera hacer una consulta.</Text>
              </div>
            </div>
            <div>
              <div>
                <span>
                  <SVGIcon iconFile="/icons/clipper.svg" color="white" />
                </span>
                <div>
                  <Text>Enviar un mensaje...</Text>
                </div>
                <span>
                  <SVGIcon iconFile="/icons/send_121135.svg" />
                </span>
              </div>
            </div>
          </StyledBodyWebChatPreview>
          <Text>Powered by Elipse</Text>
        </WrapperWebChatPreview>
      </div>
    </StyledWebChatPreview>
  );
};
