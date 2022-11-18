import { FunctionComponent } from 'react';

const Header: FunctionComponent = () => {

  return (
    <div className="grid grid-cols-12 md:flex md:flex-row pb-1 bg-zinc-800 sticky z-2 w-screen md:pr-32">
      <h1 className="col-start-1 text-2xl ml-2">PNEUMOLOGISTA.com</h1>
    </div>
  );
};

export default Header;
