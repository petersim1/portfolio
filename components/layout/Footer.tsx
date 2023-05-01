const Footer = ({stars, forks}: {stars: number; forks: number}): JSX.Element => {
  
  return (
    <footer>
      <div>{forks}</div>
      <div>{stars}</div>
    </footer>
  );
};

export default Footer;
