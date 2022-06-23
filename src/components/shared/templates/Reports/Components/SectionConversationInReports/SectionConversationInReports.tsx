import { FC, useState } from 'react';
import useLocalStorage from '../../../../../../hooks/use-local-storage';
import { WrapperSectionConversationInReports } from './SectionConversationInReports.styled';
import { CoversationViewInReports } from '../ConversationViewInReports/ConversationViewInReports';
import { ISectionConversationInReports } from './SectionCoversationInReports';
import { UserRole } from '../../../../../../models/users/role';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';

export const SectionConversationInReports: FC<ISectionConversationInReports> =
  ({ setIsModalConversationInReports, dataFilterReports }) => {
    const [modalPreviewImage, selModalPreviewIamge] = useState<boolean>(false);

    const [isModalReport, setIsModalReport] = useState<string>('');
    const [accessToken] = useLocalStorage('AccessToken', '');
    const tokenQueryParam = `?token=${accessToken}`;
    const [dataImage, setDataImage] = useState({
      content: '',
      channel: '',
    });
    const handleAttachmentUser = (content: string, channel: string) => {
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
    const handleAttachmentAgent = (content: string) => {
      if (content.substring(content.length - 3, content.length) === 'jpg') {
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
      if (content.substring(content.length - 3, content.length) === 'png') {
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
      if (content.substring(content.length - 4, content.length) === 'jpeg') {
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
      if (content.substring(content.length - 3, content.length) === 'pdf') {
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
          <WrapperSectionConversationInReports>
            <button type="button" onClick={() => selModalPreviewIamge(false)}>
              <SVGIcon iconFile="/icons/minimize.svg" color="white" />
            </button>
            <article>
              {isModalReport === UserRole.AGENT
                ? handleAttachmentAgent(dataImage.content)
                : handleAttachmentUser(dataImage.content, dataImage.channel)}
            </article>
          </WrapperSectionConversationInReports>
        ) : (
          <CoversationViewInReports
            handleAttachmentAgent={handleAttachmentAgent}
            handleAttachmentUser={handleAttachmentUser}
            setDataImage={setDataImage}
            setIsModalReport={setIsModalReport}
            selModalPreviewIamge={selModalPreviewIamge}
            setIsModalConversationInReports={setIsModalConversationInReports}
            dataFilterReports={dataFilterReports}
          />
        )}
      </>
    );
  };
