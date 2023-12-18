export default ({
  header,
  rows,
  caption,
  hideCaption = false,
}: {
  header: string[];
  rows: string[][];
  caption: string;
  hideCaption?: boolean;
}): JSX.Element => {
  return (
    <table>
      <caption style={{ display: hideCaption ? "none" : "table-caption" }}>{caption}</caption>
      <thead>
        <tr>
          {header.map((item, ind) => (
            <th key={ind}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, ind) => (
          <tr key={ind}>
            {row.map((item, ind2) => (
              <td key={ind2}>{item}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
