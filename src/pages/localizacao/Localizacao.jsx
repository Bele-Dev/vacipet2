import './Localizacao.css';
import Mapa from './R.png';


function Loc(){
    return(
        <>
        <div className="pai">
            <div className="filho1">
                    <br />
                    <h1 className="bisneto1">Localização</h1>
                    <br />
                    <h1 className='bisneto2'>CLÍNICAS RECOMENDADAS</h1>
            </div>
            <div className="filho2">
                <div className="bisneto3">
                    <img src={Mapa} id='mapa'/>
                    <h1>Santa Rita do Passa-Quatro</h1>
                    <h3>Rua Ali Perto</h3>
                    <h3>08h-18h de segunda a sexta</h3>
                </div>
                <div className="bisneto4">
                    <img src={Mapa} id='mapa2' />
                    <h1>Santa Rita do Passa-Quatro</h1>
                    <h3>Rua Ali Perto</h3>
                    <h3>08h-18h de segunda a sexta</h3>
                </div>

            </div>
        </div>
        </>
    )
}
export default Loc;