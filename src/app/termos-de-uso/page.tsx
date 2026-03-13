import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Termos de Uso | HelpFlux",
  description: "Termos de uso do site e serviços da HelpFlux Soluções em Tecnologia.",
};

export default function TermosDeUso() {
  return (
    <LegalLayout title="Termos de Uso" lastUpdated="13 de março de 2026">
      <h2>1. Identificação da Empresa</h2>
      <p>
        Este site é operado pela <strong>HELPFLUX SOLUÇÕES EM TECNOLOGIA LTDA</strong>,
        pessoa jurídica de direito privado, inscrita no CNPJ sob o nº
        <strong> 58.063.432/0001-21</strong>, com sede na Rua Henrique João Júlio Kuster,
        452, Santa Maria de Jetibá – ES, CEP 29645-234 (doravante denominada
        &quot;HelpFlux&quot;).
      </p>

      <h2>2. Aceitação dos Termos</h2>
      <p>
        Ao acessar e utilizar este site, você concorda integralmente com os
        presentes Termos de Uso. Caso não concorde com qualquer disposição
        aqui descrita, solicitamos que interrompa imediatamente o uso do site.
      </p>

      <h2>3. Descrição dos Serviços</h2>
      <p>
        A HelpFlux é uma software house especializada no desenvolvimento de
        soluções digitais sob medida, incluindo, mas não se limitando a:
      </p>
      <ul>
        <li>Desenvolvimento de aplicações web e mobile</li>
        <li>Criação de APIs e integrações com sistemas terceiros</li>
        <li>Consultoria técnica e arquitetura de software</li>
        <li>Design de interfaces (UI/UX)</li>
        <li>Infraestrutura em nuvem e DevOps</li>
      </ul>
      <p>
        A contratação de qualquer serviço está sujeita à formalização de
        contrato específico entre as partes, com escopo, prazos e valores
        definidos individualmente.
      </p>

      <h2>4. Propriedade Intelectual</h2>
      <p>
        Todo o conteúdo presente neste site — incluindo, mas não se limitando
        a textos, logotipos, ícones, imagens, código-fonte, design e layout —
        é de propriedade exclusiva da HelpFlux ou de seus licenciantes, sendo
        protegido pela legislação brasileira de propriedade intelectual (Lei nº
        9.610/1998 e Lei nº 9.279/1996).
      </p>
      <p>
        É vedada a reprodução, distribuição, modificação ou utilização
        comercial de qualquer conteúdo deste site sem autorização prévia e
        expressa da HelpFlux.
      </p>

      <h2>5. Responsabilidades do Usuário</h2>
      <p>O usuário compromete-se a:</p>
      <ul>
        <li>Utilizar o site de forma lícita e em conformidade com a legislação vigente</li>
        <li>Não tentar acessar áreas restritas ou sistemas internos da HelpFlux</li>
        <li>Fornecer informações verdadeiras ao entrar em contato conosco</li>
        <li>Não utilizar o site para qualquer finalidade ilícita ou prejudicial</li>
      </ul>

      <h2>6. Limitação de Responsabilidade</h2>
      <p>
        A HelpFlux se esforça para manter as informações do site atualizadas
        e precisas, porém não garante que o conteúdo esteja livre de erros,
        imprecisões ou desatualizações.
      </p>
      <p>
        A HelpFlux não se responsabiliza por:
      </p>
      <ul>
        <li>Danos diretos ou indiretos decorrentes do uso ou impossibilidade de uso do site</li>
        <li>Interrupções temporárias no acesso por manutenção ou problemas técnicos</li>
        <li>Conteúdo de sites de terceiros acessados por meio de links presentes neste site</li>
        <li>Decisões tomadas com base nas informações disponibilizadas no site</li>
      </ul>

      <h2>7. Links para Terceiros</h2>
      <p>
        Este site pode conter links para sites de terceiros, como WhatsApp e
        redes sociais. A HelpFlux não se responsabiliza pelo conteúdo,
        políticas de privacidade ou práticas desses sites. Recomendamos que
        o usuário leia os termos e políticas dos respectivos serviços.
      </p>

      <h2>8. Modificações nos Termos</h2>
      <p>
        A HelpFlux reserva-se o direito de modificar estes Termos de Uso a
        qualquer momento, sem aviso prévio. As alterações entram em vigor
        imediatamente após sua publicação no site. Recomendamos a consulta
        periódica desta página.
      </p>

      <h2>9. Legislação Aplicável e Foro</h2>
      <p>
        Estes Termos de Uso são regidos pela legislação da República Federativa
        do Brasil. Fica eleito o foro da comarca de Santa Maria de Jetibá – ES
        para dirimir quaisquer controvérsias decorrentes destes termos, com
        renúncia expressa a qualquer outro, por mais privilegiado que seja.
      </p>

      <h2>10. Contato</h2>
      <p>
        Em caso de dúvidas sobre estes Termos de Uso, entre em contato conosco:
      </p>
      <ul>
        <li>
          <strong>E-mail:</strong>{" "}
          <a href="mailto:helpflux.atendimento@gmail.com">
            helpflux.atendimento@gmail.com
          </a>
        </li>
        <li>
          <strong>WhatsApp:</strong>{" "}
          <a href="https://wa.me/5528999743099">(28) 99974-3099</a>
        </li>
        <li>
          <strong>Endereço:</strong> Rua Henrique João Júlio Kuster, 452,
          Santa Maria de Jetibá – ES, CEP 29645-234
        </li>
      </ul>
    </LegalLayout>
  );
}
