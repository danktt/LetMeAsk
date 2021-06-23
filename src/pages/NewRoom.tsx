import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';

export function NewRoom(){
  return(
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="ilustração simbolizando pergustas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
         <p>Tire suas dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main >
          <div className="main-content">
            <img src={logoImg} alt="Letmeask" />
             
            <div className="separator">
              ou entre em um sala
            </div>

            <form>
              <input type="text"
              placeholder="Digite o código da sala" 
              />
              <Button type="submit">
                Entrar na sala
              </Button>
            </form>
          </div>
       </main>
    </div>
  )
}