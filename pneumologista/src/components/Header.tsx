import { FunctionComponent } from 'react';

const Header: FunctionComponent = () => {

  return (
    <div className="grid grid-cols-12 pb-1 sticky z-2 w-screen xl:pb-12 3xl:pb-32 3xl:-mt-32">
      <h1 className="col-start-1 text-2xl ml-2 md:col-start-4 3xl:col-start-3 2xl:ml-20 3xl:-ml-11">PNEUMOLOGISTA.com</h1>
    </div>
  );
};

export default Header;
