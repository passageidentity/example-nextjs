import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <>
      <div className="flex justify-center">
        Learn more with our
        <a href="https://docs.passage.id" className="underline hover:text-blue-500">&nbsp;Documentation&nbsp;</a>
        and
        <a href="https://github.com/passageidentity" className="underline hover:text-blue-500">&nbsp;Github</a>.
      </div>
    </>
  );
};

export default Footer;
