import { FunctionComponent } from 'react';

const Header: FunctionComponent = () => {

  return (
    <div className="grid grid-cols-12 pb-1 sticky z-2 w-screen">
      <h1 className="col-start-1 text-2xl ml-2 md:col-start-4 3xl:col-start-3 2xl:ml-20">PNEUMOLOGISTA.com</h1>
    </div>
  );
};

export default Header;
