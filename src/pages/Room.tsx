import logoImg from '../assets/images/logo.svg'
import { Button } from '../components/Button'

import '../styles/room.scss';

export function Room(){
  return(
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <div>codigo</div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala React</h1>
          <span>4 pergustas</span>
        </div>

        <form >
          <textarea 
            placeholder="O que você quer pertuntar?"         
          />

          <div className="from-footer">
            <span>Para enviar um pergunta,
              <button>faça seu login</button>.
            </span>
            <Button type="submit">Enviar pergunta</Button>
          </div>
        </form>
      </main>
    </div>
  )
}


