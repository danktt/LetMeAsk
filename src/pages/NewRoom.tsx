import { Link } from 'react-router-dom'

// import { useAuth } from '../hooks/useAuth';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';

export function NewRoom(){
  // const {user} = useAuth()

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
            <h2>Crie uma nova sala</h2>

            <form>
              <input type="text"
              placeholder="Nome da sala" 
              />
              <Button type="submit">
                Criar sala
              </Button>
              <p>
                Quer entrar em uma nova sala já existente? <Link to="/">Clique aqui</Link>
              </p>
            </form>
          </div>
       </main>
    </div>
  )
}