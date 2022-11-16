import React from 'react';
import { FunctionComponent } from 'react';

interface DoctorProps {
  name: string,
  image?: string,
  bio?: string,
  longBio?: string,
  callLink?: string,
  cv?: string[]
}

const DoctorCard: FunctionComponent<DoctorProps> = (props: DoctorProps) => {
  const { name, image, bio, longBio, callLink, cv } = props;
  const [showBio, setShowBio] = React.useState<boolean>(false);
  const [showCv, setShowCv] = React.useState<boolean>(false);
  
  const bioHandler = (): void => {
    setShowBio(!showBio);
    setShowCv(false);
  }
  
  const cvHandler = ():void => {
    setShowCv(!showCv);
    setShowBio(false);
  }
  
  const callHandler = ():void => {
    window.open(callLink, '_blank')
    
  }
  
  return (
    <div className="flex antialiased border-1 rounded-md border-solid border-slate-50 p-7 max-w-xs mb-2 pr-5">
      <div>
      <h2 className="col-start-2 ml-2">{name}</h2>
      <div>
      <img src={image} className="rounded-xl min-w-32 min-h-32 max-w-64 max-h-64 static"/>
      </div>
      
      <div className=" flex flex-col">
      
      <div className='flex flex-row items-center ml-1 max-w-sm'>
        <button className="text-sm mx-3 mt-3 mb-2 bg-slate-500 hover:cursor-pointer" onClick={()=>bioHandler()}>Bio</button>
        <button className="text-sm mx-3 mt-3 mb-2 bg-slate-500 hover:cursor-pointer" onClick={()=>cvHandler()}>CV</button>
        <button className="text-sm mx-3 mt-3 mb-2 bg-slate-500 hover:cursor-pointer" onClick={()=>callHandler()}>Call</button>
      </div>
      
      {showBio && <p translate='yes'>{bio}</p>}
    
      {showCv && <div className='flex flex-col px-1 py-2'>
      {cv?.map((item, index) => {
        return (
          <span className="py-1" key={index}>- {item}</span>
        )
      })}
      </div>}
      </div>
      </div>
    </div>
  );
};

export default DoctorCard;
