
import React from 'react';
import './Body.css';


export default function Body(){

return (<section><div className="row">
        <div className="col-12">
    

      <h2 className="my-5 h3 text-center">Nuevos Torneos 🏆</h2>

      <div className="row features-small mb-5 mt-3 wow fadeIn">

        <div className="col-md-4">
          <div className="row">
            <div className="col-2">
              <i className="fas fa-check-circle fa-2x indigo-text"></i>
            </div>
            <div className="col-10">
              <h6 className="feature-title">Clasificarán a las finales de los torneos amateur argentinos</h6>
              <p className="grey-text">Los torneos online organizados por Ajedrez Latino clasificarán a 
              las finales de los torneos amateur argentinos organizados por FADA
              </p>
              <div className="height15px"></div>
            </div>
          </div>
 
          <div className="row">
            <div className="col-2">
              <i className="fas fa-check-circle fa-2x indigo-text"></i>
            </div>
            <div className="col-10">
              <h6 className="feature-title">Sistema anti-trampas</h6>
              <p className="grey-text">Es obligatorio jugar con cámara y los jugadores deberán cumplir las reglas anti trampa.
               En caso de caerse la conexión de alguno de los jugadores se le dará un plazo de hasta media hora para reconectarse,
                en caso que no lo logre perderá el match, Ajedrez latino se reserva el derecho de hacer excepciones en circunstancias especiales..</p>
              <div className="height15px"></div>
            </div>

          </div>

          <div className="row">
            <div className="col-2">
              <i className="fas fa-check-circle fa-2x indigo-text"></i>
            </div>
            <div className="col-10">
              <h6 className="feature-title">Transmitidos %100 en vivo</h6>
              <p className="grey-text">Los matches serán transmitidos en vivo por Ajedrez Latino a través de su canal de 
              <a href="https://ajedrezlatino.com/ajedrezlatino">YouTube.com/Ajedrezlatino.</a></p>
              <div className="height15px"></div>
            </div>
          </div>

          <div className="row">
            <div className="col-2">
              <i className="fas fa-check-circle fa-2x indigo-text"></i>
            </div>
            <div className="col-10">
              <h6 className="feature-title">Grandes premios</h6>
              <p className="grey-text">El campeón y subcampeón ganarán la inscripción para la final amateur + una remera,
               una taza y una lapicera de Ajedrez Latino, el campeón además recibirá el trofeo Ajedrez Latino.
                El tercero y el cuarto obtendrán una remera, una taza y una lapicera de Ajedrez Latino.</p>
              <div style={{'height':'26px'}}></div>
            </div>
          </div>
        </div>

        <div className="col-md-3 my-auto flex-center">
          <img src={"https://ajedrezlatino.com/images/screens.jpg"} 
          alt="Pantallas en youtube y lichess"
            className="z-depth-0 img-fluid" />
        </div>

        <div className="col-md-4">
          <div className="row">
            <div className="col-2">
              <i className="fas fa-check-circle fa-2x indigo-text"></i>
            </div>
            <div className="col-10">
              <h6 className="feature-title">Ritmo de juego</h6>
              <p className="grey-text">Los matches serán a 10 partidas a un ritmo de 3+2, será declarado ganador aquel que alcanzara los 5.5 puntos.
               En caso de empate se jugarán dos partidas de 2+0 hasta quebrar la paridad. 
               El jugador mejor preclasificado jugará la primera partida con blancas.
              </p>
              <div style={{'height':'26px'}}></div>
            </div>
          </div>

          <div className="row">
            <div className="col-2">
              <i className="fas fa-check-circle fa-2x indigo-text"></i>
            </div>
            <div className="col-10">
              <h6 className="feature-title">Más categorías</h6>
              <p className="grey-text">Las categorías son: sub 2300, 2000, 1700 y 1400.
              </p>
              <div style={{'height':'26px'}}></div>
            </div>

          </div>

          <div className="row">
            <div className="col-2">
              <i className="fas fa-check-circle fa-2x indigo-text"></i>
            </div>
            <div className="col-10">
              <h6 className="feature-title">Inscripción</h6>
              <p className="grey-text"><b>Los interesados deben escribir a soporte@ajedrezlatino.com.
              El costo de la inscripción es de 500 pesos argentinos.</b>
              </p>
              <div  style={{'height':'26px'}}></div>
            </div>
          </div>

          <div className="row">
            <div className="col-2">
              <i className="fas fa-check-circle fa-2x indigo-text"></i>
            </div>
            <div className="col-10">
              <h6 className="feature-title">Finales comentadas en vivo!</h6>
              <p className="grey-text">Las finales serán comentadas en vivo por los maestros de Ajedrez Latino.
Los días de juego serán:
Sábados y domingos: Octavos de final
Lunes y martes: Cuartos de final
Miércoles y jueves: Semifinales
Viernes: Gran Final.</p>
              <div style={{'height':'26px'}}></div>
            </div>
          </div>

        </div>


      </div>


    

    </div>
</div></section>)

}
