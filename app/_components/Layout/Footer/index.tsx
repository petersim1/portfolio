import { contacts } from "@/_lib/constants";

import { Footer, FooterContacts } from "./styled";
import { Social, IconSized } from "@/_components/Icon";

export default (): JSX.Element => {
  // const { stars, forks } = await github();
  return (
    <Footer>
      <FooterContacts>
        {contacts.map((contact, ind) => (
          <a key={ind} href={contact.link} target="_blank" referrerPolicy="no-referrer">
            <IconSized $size="18px">
              <Social type={contact.type} />
            </IconSized>
          </a>
        ))}
      </FooterContacts>
    </Footer>
  );
};
