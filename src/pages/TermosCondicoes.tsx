import React from 'react';
import { ArrowLeft, FileText } from 'lucide-react';

export const TermosCondicoes: React.FC<{ onBack: () => void }> = ({ onBack }) => {
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
            <FileText className="w-3.5 h-3.5" />
            <span>Termos de Uso & Atendimento</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl text-charcoal-900 font-semibold tracking-tight mb-3">
            Termos e Condições
          </h1>
          <p className="text-sm text-charcoal-700/80">
            Dra. Fernanda Ragadalli · Cirurgiã-Dentista · CRO-SC 9331 · Atualizado em 2026
          </p>
        </div>

        {/* Terms Content */}
        <div className="prose prose-stone max-w-none space-y-8 text-sm sm:text-base text-charcoal-700 leading-relaxed font-light">
          <section>
            <h2 className="font-serif text-2xl text-charcoal-900 font-normal mb-3">
              1. Finalidade Informativa da Plataforma
            </h2>
            <p>
              Este site institucional tem como propósito exclusivo apresentar a prática clínica, a formação técnica e os protocolos desenvolvidos pela <strong>Dra. Fernanda Ragadalli</strong>. Nenhuma informação contida nesta página substitui a consulta presencial de avaliação individualizada.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-charcoal-900 font-normal mb-3">
              2. Consulta de Avaliação e Planos de Tratamento
            </h2>
            <p>
              A indicação de qualquer tratamento odontológico ou estético (incluindo facetas de resina composta, lentes em cerâmica, clareamento dental e estética do sorriso) é realizada única e exclusivamente após anamnese e avaliação presencial detalhada, respeitando a biologia bucal, indicações e anseios individuais de cada paciente.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-charcoal-900 font-normal mb-3">
              3. Resultados e Individualidade Biológica
            </h2>
            <p>
              A odontologia estética respeita a individualidade biológica e os resultados de tratamentos podem variar de acordo com características individuais, anatomia dental, oclusão e hábitos de vida de cada paciente. A Dra. Fernanda Ragadalli atua pautada nas melhores práticas clínicas e científicas, priorizando sempre a segurança, a saúde e a sutileza dos resultados.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-charcoal-900 font-normal mb-3">
              4. Direitos Autorais e Propriedade Intelectual
            </h2>
            <p>
              Todos os textos, imagens, marcas, fotografias e logotipos contidos nesta página são de titularidade da Dra. Fernanda Ragadalli ou licenciados para seu uso exclusivo. É estritamente proibida a reprodução, cópia ou distribuição sem prévia e expressa autorização por escrito.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-charcoal-900 font-normal mb-3">
              5. Agendamentos e Cancelamentos
            </h2>
            <p>
              Os horários de atendimento são reservados com exclusividade para cada paciente em Videira - SC. Em caso de necessidade de reagendamento ou cancelamento, solicitamos aviso prévio com pelo menos 24 horas de antecedência através do canal oficial no WhatsApp.
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
