// I don't think including this font actually does anything.
import { GeistSans } from "geist/font/sans";

export default ({ title, subheader }: { title: string; subheader?: string }): JSX.Element => {
  return (
    <div
      className={GeistSans.className}
      style={{
        background: "#121212",
        color: "white",
        fontSize: "50px",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "40px",
      }}
    >
      <h1 style={{ margin: "0px" }}>{title}</h1>
      {subheader && (
        <div style={{ display: "flex" }}>
          <p style={{ margin: "0px" }}>~{subheader}~</p>
        </div>
      )}
    </div>
  );
};
