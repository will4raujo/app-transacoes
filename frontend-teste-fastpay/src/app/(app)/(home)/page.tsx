import { Check } from 'lucide-react'

export default async function Home() {  
  return(
    <main className='w-full px-4 md:px-10 py-5 pr-4 flex flex-col gap-5 mb-[80px] md:mx-auto max-w-[1024px]'>
      <h1 className='text-3xl font-bold'>Desafio de Teste Fullstack FastPay</h1>

      <h2>Para esta aplicação, pontos que podem ser melhorados:</h2>
      <ul className='list-disc list-inside'>
        <li className="mb-3">Melhorar a segurança da aplicação, utilizando chave publica e privada para autenticação com o algoritmo RS256</li>
        <li className="mb-3">Melhor utilização da hidratação de páginas, para que mais componentes já renderizem diretamente ao lado do servidor</li>
        <li className="mb-3">Adicionar loading nos botões para uma melhor experiência do usuário</li>
        <li className="mb-3">Aplicar todo o tailwind dentro de classes separadamente, utilizando o método @apply para possíveis problemas de declaração</li>
        <li className="mb-3">Melhorar as categorias pré-defiidas, criando modelo de categorias empresarial (ex: Despesas com Marketing, folha de pagamento, fornecedores...) e despesas pessoais</li>
        <li className="mb-3">Criar uma categorização de tipo de despesa fixa ou variável para melhorar relatórios</li>
        <li className="mb-3">Adicionar testes unitários e de integração</li>
        <li className="mb-3">Adicionar paginação nas listas de transações e relatório</li>
        <li className="mb-3">Melhorar a estrutura de componentes, separando em pastas</li>
      </ul>

      <hr />

      <h2 className='text-xl font-bold'>Descrição do Projeto</h2> 
      
      <p className="text-justify">Você deve desenvolver uma aplicação web completa que permita aos usuários criar e gerenciar suas despesas pessoais. A aplicação deverá ser desenvolvida utilizando as tecnologias especificadas abaixo. A aplicação deve incluir autenticação de usuários, gerenciamento de tarefas, e uma interface de usuário responsiva e intuitiva.</p>
      
      
      <h2 className='text-xl font-bold'>Requisitos técnicos</h2>
      <h3 className='text-lg font-bold'>Frontend</h3>
      <ul className='list-none list-inside'>
        <li className="mb-3 flex gap-2 items-center"><Check /> Framework: Next.js</li>
        <li className="mb-3 flex gap-2 items-center"><Check /> Estilização: Tailwind CSS</li>
      </ul>

      <h3 className='text-lg font-bold'>Backend</h3>
      <ul className='list-none list-inside'>
        <li className="mb-3 flex gap-2 items-center"><Check /> Framework: NestJS</li>
        <li className="mb-3 flex gap-2 items-center"><Check />ORM: Prisma</li>
        <li className="mb-3 flex gap-2 items-center"><Check />Banco de Dados: PostgreSQL</li>
      </ul>

      <h2 className='text-xl font-bold'>Funcionalidades</h2>
      <ul className='list-none list-inside'>
        <li className="mb-3 flex gap-2 items-center"> <Check /> Autenticação de Usuários: Usuários devem poder se registrar e fazer login.</li>
        <li className="mb-3 flex gap-2 items-center"><Check /> Gerenciamento de Transações: Usuários devem poder criar, ler, atualizar e deletar transações financeiras.</li>
        <li className="mb-3 flex gap-2 items-center"><Check /> Categorização de Despesas: Usuários devem poder categorizar suas despesas.</li>
        <li className="mb-3 flex gap-2 items-center"><Check /> Interface Responsiva: A aplicação deve ser responsiva e funcionar bem em dispositivos móveis.</li>
      </ul>

      <h2 className='text-xl font-bold'>Detalhes do Projeto</h2>

      <h3 className='text-lg font-bold'>Autenticação de Usuários</h3>
      <ul className='list-none list-inside'>
        <li className="mb-3 flex gap-2 items-center"><Check /> Implementar um sistema de autenticação utilizando JWT.</li>
        <li className="mb-3 flex gap-2 items-center"><Check /> Usuários devem poder se registrar com email e senha.</li>
        <li className="mb-3 flex gap-2 items-center"><Check /> Implementar validação de dados no frontend e backend.</li>
        <li className="mb-3 flex gap-2 items-center"><Check /> Usuários devem poder fazer login e logout.</li>
      </ul>
      <h3 className='text-lg font-bold'>Gerenciamento de Tarefas</h3>
      <ul className='list-none list-inside'>
        <li className="mb-3 flex gap-2 items-center"><Check /> Cada transação deve conter descrição, valor, data e categoria (por exemplo, alimentação, transporte, entretenimento).</li>
        <li className="mb-3 flex gap-2 items-center"><Check /> Usuários devem poder:</li>
        <ul className='list-none list-inside'>
          <li className="mb-3 flex gap-2 items-center"><Check /> Adicionar uma nova transação.</li>
          <li className="mb-3 flex gap-2 items-center"><Check /> Visualizar todas as suas transações.</li>
          <li className="mb-3 flex gap-2 items-center"><Check /> Editar uma transação existente.</li>
          <li className="mb-3 flex gap-2 items-center"><Check /> Deletar uma transação.</li>
        </ul>
      </ul>
      <h3 className='text-lg font-bold'>Categorização de Despesas</h3>
      <ul className='list-none list-inside'>
        <li className="mb-3 flex gap-2 items-center"><Check /> Permitir que os usuários categorizem suas despesas em categorias predefinidas ou criem novas categorias.</li>
        <li className="mb-3 flex gap-2 items-center"><Check /> Exibir um resumo das despesas por categoria.</li>
      </ul>
      <h3>Interface Responsiva</h3>
      <ul className='list-none list-inside'>
        <li className="mb-3 flex gap-2 items-center"><Check /> Utilizar Tailwind CSS para criar uma interface responsiva.</li>
        <li className="mb-3 flex gap-2 items-center"><Check /> A interface deve ser intuitiva e fácil de usar.</li>
        <li className="mb-3 flex gap-2 items-center"><Check /> Garantir que a aplicação funcione bem em dispositivos móveis e desktops.</li>
      </ul>
      <h2 className='text-xl font-bold'>Conclusão</h2>
      <p className="text-justify">Espero que tenha gostado do desafio, estou ansioso para saber o que achou. Até mais!</p>
      <h2 className='text-xl font-bold'>Requisitos Não Funcionais</h2>
      <ul className='list-none list-inside'>
        <li className="mb-3 flex gap-2 items-center"><Check /> Código Limpo: Mantenha o código limpo e bem documentado.</li>
        <li className="mb-3 flex gap-2 items-center"><Check /> Commits: Faça commits frequentes e bem descritos no Git.</li>
        <li className="mb-3 flex gap-2 items-center"><Check /> README: Inclua um README detalhado explicando como configurar e rodar a aplicação localmente</li>
      </ul>
      <h2 className='text-xl font-bold'>Entrega</h2>
      <p className="text-justify">Por favor, crie um repositório privado no GitHub e adicione Ícaro Sant’Ana como colaborador. O prazo para entrega é de 7 dias a partir do recebimento deste desafio</p>      
    </main>
  )
}
