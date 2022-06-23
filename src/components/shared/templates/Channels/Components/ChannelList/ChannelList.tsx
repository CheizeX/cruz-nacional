import { FC } from 'react';
import { StyledChannelList } from './ChannelList.styled';
import { IPropsList } from './ChannelList.interface';
import { CardChannel } from '../CardChannel/CardChannel';

export const ChannelList: FC<IPropsList> = ({
  listChannel,
  handleToggle,
  setIsSectionWebChat,
  setSeletedComponent,
  handleStatusUnOfficial,
}) => {
  return (
    <StyledChannelList>
      <div>
        {listChannel.facebook ? (
          <div>
            <CardChannel
              _idChannel={listChannel?.facebook._id}
              name={listChannel?.facebook.pageName}
              icon="Messenger"
              service="Messenger"
              isActive={listChannel?.facebook.isActive}
              setIsSectionWebChat={setIsSectionWebChat}
              setSeletedComponent={setSeletedComponent}
              image={listChannel?.facebook.image}
              handleStatusUnOfficial={handleStatusUnOfficial}
              handleToggle={() => null}
              providerName="Messenger"
            />
          </div>
        ) : null}
        {listChannel.officialWhatsApp ? (
          <div>
            <CardChannel
              _idChannel={listChannel?.officialWhatsApp._id}
              name={`+${listChannel?.officialWhatsApp.phoneNumber}`}
              icon="whatsapp"
              service="WhatsApp"
              isActive={listChannel?.officialWhatsApp.isActive}
              setIsSectionWebChat={setIsSectionWebChat}
              setSeletedComponent={setSeletedComponent}
              image={listChannel?.officialWhatsApp.image}
              handleToggle={() => null}
              handleStatusUnOfficial={handleStatusUnOfficial}
              providerName={listChannel?.officialWhatsApp.providerName}
            />
          </div>
        ) : null}
        {listChannel.unofficialWhatsApp ? (
          <div>
            <CardChannel
              _idChannel={listChannel.unofficialWhatsApp._id}
              name={listChannel.unofficialWhatsApp.phoneNumber}
              icon="whatsapp"
              service="WhatsApp"
              providerName={listChannel?.unofficialWhatsApp.providerName}
              isActive={listChannel?.unofficialWhatsApp.isActive}
              setIsSectionWebChat={setIsSectionWebChat}
              setSeletedComponent={setSeletedComponent}
              handleStatusUnOfficial={handleStatusUnOfficial}
              image={listChannel?.unofficialWhatsApp.image}
              handleToggle={handleToggle}
            />
          </div>
        ) : null}
        {listChannel.webchat ? (
          <div>
            <CardChannel
              handleToggle={() => null}
              _idChannel={listChannel.webchat._id}
              name={`${listChannel?.webchat.name}`}
              icon="webchat"
              service="Web Chat"
              isActive={listChannel?.webchat.isActive}
              setIsSectionWebChat={setIsSectionWebChat}
              setSeletedComponent={setSeletedComponent}
              handleStatusUnOfficial={handleStatusUnOfficial}
              image={listChannel?.webchat.avatar}
              providerName="WebChat"
            />
          </div>
        ) : null}
        {listChannel.instagram ? (
          <div>
            <CardChannel
              handleToggle={() => null}
              name={`${listChannel?.instagram.username}`}
              _idChannel={listChannel?.instagram._id}
              icon="Instagram"
              service="Instagram"
              isActive={listChannel?.instagram.isActive}
              setIsSectionWebChat={setIsSectionWebChat}
              handleStatusUnOfficial={handleStatusUnOfficial}
              setSeletedComponent={setSeletedComponent}
              image={listChannel?.instagram.image}
              providerName="Instagram"
            />
          </div>
        ) : null}
      </div>
    </StyledChannelList>
  );
};
