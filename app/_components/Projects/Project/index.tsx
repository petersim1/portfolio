import { Social, IconSized } from "@/_components/Icon";
import { H3, SubHeader, Faint } from "@/_components/Text";
import { Project, Header, Links, Tags } from "./styled";
import { DataI } from "@/_lib/types";
import { Pill } from "@/_components/Common";

export default ({ data }: { data: DataI }): JSX.Element => {
  return (
    <Project>
      <Header>
        <H3>{data.title}</H3>
        <Links>
          {data.description.links.map((link, ind2) => (
            <a key={ind2} href={link.link} target="_blank" referrerPolicy="no-referrer">
              <IconSized $size="15px">
                <Social type={link.type} />
              </IconSized>
            </a>
          ))}
          {data.description.links.length == 0 && <Faint>{"[proprietary]"}</Faint>}
        </Links>
      </Header>
      <Tags>
        {data.description.tools.concat(data.description.languages).map((tool, ind2) => (
          <Pill key={ind2}>{tool}</Pill>
        ))}
      </Tags>
      <SubHeader>{data.description.text}</SubHeader>
    </Project>
  );
};
