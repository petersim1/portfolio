"use client";

export default ({ error }: { error: Error & { digest?: string } }): JSX.Element => {
  return (
    <div style={{ flex: "1 0 0" }}>
      <div>
        Tried to access <span>{error.message}</span>
      </div>
      <div>Sorry, this page doesn't exist.</div>
    </div>
  );
};
