import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import './styles.css';

export default function Register () {
  return (
    <div className="content">
      <div>
        <form>
          <legend>Crie sua conta</legend>
          <div className="input-wrapper">
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" />
          </div>
          <button type="submit">Cadastrar</button>

          <a>Já tenho cadastro</a>
        </form>
      </div>
    </div>
  );
}