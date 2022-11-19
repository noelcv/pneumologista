import React from 'react';
import { FunctionComponent } from 'react';

interface DoctorProps {
  name: string,
  image?: string,
  bio?: string,
  callLink?: string,
  location?: string,
  cv?: string[]
}

const DoctorCard: FunctionComponent<DoctorProps> = (props: DoctorProps) => {
  const { name, image, bio, location, callLink, cv } = props;
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
    <div className="bg-slate-700 flex antialiased shadow-md shadow-amber-300 border-1 rounded-md border-solid border-slate-50 p-7 max-w-xs mb-5 px-auto md:mx-auto">
      <div>
      <h2 className="col-start-2 ml-3">{name}</h2>
      <div>
      <img src={image} className="rounded-xl min-w-32 min-h-32 max-w-64 max-h-64 static"/>
      </div>
      
      <div className=" flex flex-col">
      
      <p className="italic ml-1 text-sm">📍 {location}</p>
      <div className='flex flex-row items-center mx-auto max-w-sm'>
        <button className="text-sm text-slate-100 mx-3 mt-3 mb-2 bg-slate-500 shadow-md hover:shadow-sm shadow-slate-300 hover:cursor-pointer" onClick={()=>bioHandler()}>Bio</button>
        <button className="text-sm text-slate-100 mx-3 mt-3 mb-2 bg-slate-500 shadow-md hover:shadow-sm shadow-slate-300 hover:cursor-pointer" onClick={()=>cvHandler()}>CV</button>
        <button className="text-sm text-slate-100 mx-3 mt-3 mb-2 bg-slate-500 shadow-md hover:shadow-sm shadow-slate-300 hover:cursor-pointer" onClick={()=>callHandler()}>Call</button>
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
