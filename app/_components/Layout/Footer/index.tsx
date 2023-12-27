import { P, Shadow } from "@/_components/Text";
import { worksans } from "@/_lib/fonts";
import { contacts } from "@/_lib/constants";

import { Footer, FooterDiv, FooterContacts } from "./styled";
import { Social, IconSized } from "@/_components/Icon";

export default (): JSX.Element => {
  // const { stars, forks } = await github();
  return (
    <Footer className={worksans.className}>
      <FooterDiv>
        <P>
          ~ built by{" "}
          <b>
            <Shadow>peter simone</Shadow>
          </b>{" "}
          using nextjs ~
        </P>
        <FooterContacts>
          {contacts.map((contact, ind) => (
            <a key={ind} href={contact.link} target="_blank" referrerPolicy="no-referrer">
              <IconSized $size="20px">
                <Social type={contact.type} />
              </IconSized>
            </a>
          ))}
        </FooterContacts>
      </FooterDiv>
    </Footer>
  );
};
