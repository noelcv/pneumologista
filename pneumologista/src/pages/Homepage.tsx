import { FunctionComponent } from 'react'
import DoctorCard from '../components/DoctorCard'

const Homepage: FunctionComponent = () => {
  const bioAntonio = 'Especialista em Pneumologia, inscrito no Colégio da Especialidade da Ordem dos Médicos'
  const cvAntonio = ['2019: Diploma Europeu em Medicina Respiratória do Adulto (European Respiratory Society)','Internato de Formação Específica de Pneumologia no Centro Hospitalar e Universitário de Coimbra, E.P.E.','Formação em Medicina Intensiva na Unidade de Cuidados Intensivos Respiratórios do Centro Hospitalar Lisboa Norte, E.P.E.', 'Mestrado Integrado em Medicina na Faculdade de Ciências da Saúde - UBI.', 'Colaboração na formação pré-graduada dos alunos do Mestrado Integrado em Medicina da Faculdade de Medicina da Universidade de Coimbra.', 'Co-investigador em vários estudos prospetivos.', 'Membro da Sociedade Portuguesa de Pneumologia e da European Respiratory Society.']
  const callAntonio = 'https://maislusiadas.pt/Portal/DoctorDetail?PractitionerId=2353'
  const bioManuel = 'Especialista em Pneumologia, membro da Sociedade Portuguesa de Pneumologia e da European Respiratory Society'
  const cvManuel = ['Desde 2020 - Pneumologista, Clínica CUF S. Domingos de Rana', 'Desde 2020 - Pneumologista, Hospital de Cascais', 
  '2018-2020 - Colaborador como professor convidado na formação pré-graduada dos alunos da Licenciatura em Cardiopneumologia da Escola Superior de Saúde da Cruz Vermelha Portuguesa',
  '2015-2020 - Colaborador na formação pré-graduada dos alunos do 3º, 4º e 6º ano do Mestrado Integrado em Medicina da Faculdade de Medicina da Universidade de Lisboa',
  '2015-2020 - Internato Complementar de Pneumologia, Centro Hospitalar Universitário Lisboa Norte', 
  '2014 - Internato do Ano Comum, Centro Hospitalar de Vila Nova de Gaia/Espinho', '2012 - Mestrado Integrado em Medicina, Faculdade de Ciências da Saúde, Universidade da Beira Interior']
  const callManuel = 'https://www.saudecuf.pt/mycuf/login/login/appointment/consult?q=fHx8bWFudWVsfGZlcm5hbmRlc3w1NDgxOA==&apptype=R&_ga=2.124050316.709124691.1668533670-979208369.1668533670'
  
  
  return (
      <div className="flex justify-between">
        <div className="ml-1">
          <DoctorCard name="Antonio Fernandes" image="/antonio.jpeg" bio={bioAntonio} cv={cvAntonio} callLink={callAntonio}/>

          <DoctorCard name="Manuel Fernandes" image="/manuel.jpeg" bio={bioManuel} cv={cvManuel} callLink={callManuel}/>
        </div>
      </div>
      
      
  ) 
}
 
export default Homepage 