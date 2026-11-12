import React from 'react';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export const PoliticaPrivacidade: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#FAF6F0] text-charcoal-800 font-sans selection:bg-brand-200 selection:text-brand-900 py-16 sm:py-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-brand-700 hover:text-brand-900 mb-10 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Voltar para a página inicial</span>
        </button>

        {/* Header */}
        <div className="border-b border-[#E5DACD] pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>LGPD & Sigilo Profissional</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl text-charcoal-900 font-semibold tracking-tight mb-3">
            Política de Privacidade
          </h1>
          <p className="text-sm text-charcoal-700/80">
            Dra. Letícia Almeida · Especialista em Full Face & HOF · Atualizado em 2026
          </p>
        </div>

        {/* Policy Content */}
        <div className="prose prose-stone max-w-none space-y-8 text-sm sm:text-base text-charcoal-700 leading-relaxed font-light">
          <section>
            <h2 className="font-serif text-2xl text-charcoal-900 font-normal mb-3">
              1. Compromisso com a sua Privacidade
            </h2>
            <p>
              A Dra. Letícia Almeida preza pela máxima transparência, segurança e sigilo de todos os dados pessoais e clínicos compartilhados neste site e em atendimentos presenciais. Esta Política de Privacidade descreve como são tratadas e protegidas as suas informações, em total conformidade com a <strong>Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD)</strong> e as normas éticas do Conselho Federal de Odontologia.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-charcoal-900 font-normal mb-3">
              2. Dados Coletados e Finalidade
            </h2>
            <p>
              São coletadas apenas as informações estritamente necessárias para proporcionar um atendimento seguro, acolhedor e individualizado:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                <strong>Dados Cadastrais de Contato:</strong> Nome completo, número de WhatsApp e telefone, utilizados exclusivamente para agendamento, confirmação de horários e esclarecimento de dúvidas pré-consulta.
              </li>
              <li>
                <strong>Dados Clínicos e Anamnese:</strong> Informações de histórico de saúde e objetivos estéticos são colhidos diretamente durante a consulta presencial, sob rigoroso sigilo profissional, resguardados em prontuário individualizado.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-charcoal-900 font-normal mb-3">
              3. Sigilo Profissional e Não Compartilhamento
            </h2>
            <p>
              Nenhum dado pessoal, número de contato ou informação de prontuário é vendido, alugado ou compartilhado com terceiros para fins de marketing ou exploração comercial. Os dados são acessados unicamente pela responsável técnica Dra. Letícia Almeida para viabilizar a sua assistência estética com total segurança.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-charcoal-900 font-normal mb-3">
              4. Seus Direitos como Titular
            </h2>
            <p>
              Em conformidade com a LGPD, você possui o direito de solicitar a qualquer momento a confirmação de tratamento de seus dados, retificação de informações cadastrais, esclarecimento sobre armazenamento ou exclusão de dados de contato.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-charcoal-900 font-normal mb-3">
              5. Contato sobre Privacidade
            </h2>
            <p>
              Para qualquer dúvida sobre o tratamento de dados pessoais, entre em contato diretamente com a Dra. Letícia Almeida pelo WhatsApp oficial ou pelo consultório localizado em Rio Verde - GO.
            </p>
          </section>
        </div>

        {/* Bottom Back Button */}
        <div className="pt-12 mt-12 border-t border-[#E5DACD]">
          <button
            onClick={onBack}
            className="px-6 py-3 rounded-full bg-[#C5A880] hover:bg-[#B8986C] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
          >
            Retornar ao Início
          </button>
        </div>
      </div>
    </div>
  );
};
