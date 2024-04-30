import { Social, IconSized } from "@/_components/Icon";
import { H3, SubHeader, Faint } from "@/_components/Text";
import { Project, Links, Tags } from "./styled";
import { DataI } from "@/_lib/types";
import { Pill } from "@/_components/Common";
import { spacemono } from "@/_theme/fonts";

export default ({ data, delay }: { data: DataI; delay: number }): JSX.Element => {
  return (
    <Project $delay={delay}>
      <H3 className={spacemono.className}>{data.title}</H3>
      <Tags>
        {data.description.tools.concat(data.description.languages).map((tool, ind2) => (
          <Pill key={ind2}>{tool}</Pill>
        ))}
      </Tags>
      <SubHeader>{data.description.text}</SubHeader>
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
    </Project>
  );
};
