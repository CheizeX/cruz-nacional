import { FC, useState } from 'react';
import useLocalStorage from '../../../../../../hooks/use-local-storage';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { ConversationView } from '../ConversationHistory/ConversationView';
import { StyledWrapperSectionChat } from './SectionConversationView.styled';
import { IPropsSectionConversation } from './SectionConversationView.interface';
import { UserRole } from '../../../../../../models/users/role';
import { useAppSelector } from '../../../../../../redux/hook/hooks';

export const SectionConversationView: FC<IPropsSectionConversation> = ({
  setIsOpenModal,
}) => {
  const [modalPreviewImage, selModalPreviewIamge] = useState<boolean>(false);
  const [openModalId, setOpenModalId] = useState<string>('');
  const [infoImage, setInfoImage] = useState({
    content: '',
    channel: '',
  });
  const [accessToken] = useLocalStorage('AccessToken', '');
  const tokenQueryParam = `?token=${accessToken}`;

  const { infoByChat } = useAppSelector(
    (state) => state.monitor.monitorTodayChatState,
  );

  const handleAttachmentUser = (content: string, channel: string) => {
    if (
      content.substring(content.length - 3, content.length).toLowerCase() ===
      'jpg'
    ) {
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
    if (
      content.substring(content.length - 3, content.length).toLowerCase() ===
      'png'
    ) {
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
    if (
      content.substring(content.length - 4, content.length).toLowerCase() ===
      'jpeg'
    ) {
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
    if (
      content.substring(content.length - 3, content.length).toLowerCase() ===
      'pdf'
    ) {
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
  const handleAttachmentAgent = (content: string) => {
    if (
      content.substring(content.length - 3, content.length).toLowerCase() ===
      'jpg'
    ) {
      return (
        <img
          src={`${
            process.env.NEXT_PUBLIC_REST_API_URL
          }/whatsapp360/file/${content.substring(
            14,
            content.length,
          )}${tokenQueryParam}`}
          alt={content}
        />
      );
    }
    if (
      content.substring(content.length - 3, content.length).toLowerCase() ===
      'png'
    ) {
      return (
        <img
          src={`${
            process.env.NEXT_PUBLIC_REST_API_URL
          }/whatsapp360/file/${content.substring(
            14,
            content.length,
          )}${tokenQueryParam}`}
          alt={content}
        />
      );
    }
    if (
      content.substring(content.length - 4, content.length).toLowerCase() ===
      'jpeg'
    ) {
      return (
        <img
          src={`${
            process.env.NEXT_PUBLIC_REST_API_URL
          }/whatsapp360/file/${content.substring(
            14,
            content.length,
          )}${tokenQueryParam}`}
          alt={content}
        />
      );
    }
    if (
      content.substring(content.length - 3, content.length).toLowerCase() ===
      'pdf'
    ) {
      return (
        <iframe
          src={`${
            process.env.NEXT_PUBLIC_REST_API_URL
          }/whatsapp360/file/${content.substring(
            14,
            content.length,
          )}${tokenQueryParam}`}
          title={`${
            process.env.NEXT_PUBLIC_REST_API_URL
          }/whatsapp360/file/${content.substring(
            14,
            content.length,
          )}${tokenQueryParam}`}
        />
      );
    }
    return <p>Esta imagen no se puede visualizar</p>;
  };

  return (
    <>
      {modalPreviewImage ? (
        <StyledWrapperSectionChat>
          <button type="button" onClick={() => selModalPreviewIamge(false)}>
            <SVGIcon iconFile="/icons/minimize.svg" color="white" />
          </button>
          <article>
            {openModalId === UserRole.AGENT
              ? handleAttachmentAgent(infoImage.content)
              : handleAttachmentUser(infoImage.content, infoImage.channel)}
          </article>
        </StyledWrapperSectionChat>
      ) : (
        <ConversationView
          setIsOpenModal={setIsOpenModal}
          setOpenModalId={setOpenModalId}
          selModalPreviewIamge={selModalPreviewIamge}
          setInfoImage={setInfoImage}
          handleAttachmentAgent={handleAttachmentAgent}
          handleAttachmentUser={handleAttachmentUser}
          chatConversationView={infoByChat}
        />
      )}
    </>
  );
};
