import { FC, useState } from 'react';
import useLocalStorage from '../../../../../../hooks/use-local-storage';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { ChatsHistory } from '../ChatHistory/ChatHistory';
import { StyledSeccionChatHistory } from './SeccionChatHistory.styled';
import { IPropsSeccionChatHistory } from './SeccionChatHistory.interface';

export const SeccionChatHistory: FC<IPropsSeccionChatHistory> = ({
  liveChatModal,
  setLiveChatModal,
}) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isContentChat, setIsContentChat] = useState<string>('');
  const [isChannelChat, setIsChannelChat] = useState<string>('');
  const [accessToken] = useLocalStorage('AccessToken', '');
  const tokenQueryParam = `?token=${accessToken}`;

  const handleModalAttachment = (content: string, channel: string) => {
    if (content.substring(content.length - 3, content.length) === 'jpg') {
      return (
        <img
          src={`${
            process.env.NEXT_PUBLIC_REST_API_URL
          }/whatsapp360/file/${content.substring(
            channel !== 'Webchat' ? 16 : 14,
            content.length,
          )}${tokenQueryParam}`}
          alt={content}
        />
      );
    }
    if (content.substring(content.length - 3, content.length) === 'png') {
      return (
        <img
          src={`${
            process.env.NEXT_PUBLIC_REST_API_URL
          }/whatsapp360/file/${content.substring(
            channel !== 'Webchat' ? 16 : 14,
            content.length,
          )}${tokenQueryParam}`}
          alt={content}
        />
      );
    }
    if (content.substring(content.length - 4, content.length) === 'jpeg') {
      return (
        <img
          src={`${
            process.env.NEXT_PUBLIC_REST_API_URL
          }/whatsapp360/file/${content.substring(
            channel !== 'Webchat' ? 16 : 14,
            content.length,
          )}${tokenQueryParam}`}
          alt={content}
        />
      );
    }
    if (content.substring(content.length - 3, content.length) === 'pdf') {
      return (
        <iframe
          src={`${
            process.env.NEXT_PUBLIC_REST_API_URL
          }/whatsapp360/file/${content.substring(
            channel !== 'Webchat' ? 16 : 14,
            content.length,
          )}${tokenQueryParam}`}
          title={`${
            process.env.NEXT_PUBLIC_REST_API_URL
          }/whatsapp360/file/${content.substring(
            channel !== 'Webchat' ? 16 : 14,
            content.length,
          )}${tokenQueryParam}`}
        />
      );
    }
    return <p>Esta imagen no se puede visualizar</p>;
  };

  return (
    <>
      {isOpenModal ? (
        <StyledSeccionChatHistory>
          <button type="button" onClick={() => setIsOpenModal(false)}>
            <SVGIcon iconFile="/icons/minimize.svg" color="white" />
          </button>
          <article>
            {handleModalAttachment(isContentChat, isChannelChat)}
          </article>
        </StyledSeccionChatHistory>
      ) : (
        <ChatsHistory
          setLiveChatModal={setLiveChatModal}
          liveChatModal={liveChatModal}
          setIsOpenModal={setIsOpenModal}
          setIsContentChat={setIsContentChat}
          setIsChannelChat={setIsChannelChat}
        />
      )}
    </>
  );
};
