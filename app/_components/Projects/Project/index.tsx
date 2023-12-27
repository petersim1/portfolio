import { jakarta } from "@/_theme/fonts";
import { Social, IconSmall } from "@/_components/Icon";
import { P, H3 } from "@/_components/Text";
import { OGImage } from "@/_components/Image";
import { Project, Links, Tags, ImageHolder } from "./styled";
import { DataI } from "@/_lib/types";
import { Pill } from "@/_components/Common";

export default ({ data }: { data: DataI }): JSX.Element => {
  return (
    <Project className={jakarta.className}>
      <H3>{data.title}</H3>
      <ImageHolder $round>
        <OGImage $url={data.description.image} />
      </ImageHolder>
      <Links>
        {data.description.links.map((link, ind2) => (
          <a key={ind2} href={link.link} target="_blank" referrerPolicy="no-referrer">
            <IconSmall>
              <Social type={link.type} />
            </IconSmall>
          </a>
        ))}
        {data.description.links.length === 0 && (
          <span style={{ margin: "auto" }}>{"[proprietary]"}</span>
        )}
      </Links>
      <Tags>
        {data.description.tools.concat(data.description.languages).map((tool, ind2) => (
          <Pill text={tool} key={ind2} />
        ))}
      </Tags>
      <P>{data.description.text}</P>
    </Project>
  );
};
