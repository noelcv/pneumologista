import { FunctionComponent } from 'react';

const Header: FunctionComponent = () => {

  return (
    <div className="grid grid-cols-10 pb-1 sticky z-2 w-screen xl:pb-12 3xl:pb-32 3xl:-mt-32">
      <h1 className="col-start-1 text-2xl ml-7 md:col-start-3 md:ml-24 2xl:-ml-12 3xl:col-start-3 3xl:-ml-11">PNEUMOLOGISTA.com</h1>
    </div>
  );
};

export default Header;
