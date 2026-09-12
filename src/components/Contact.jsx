import assets from "../assets/assets"

const Contact = () => {
  return (
    <div id="contact" className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 py-20 text-gray-700 dark:text-white">
      
      <h2 className='text-3xl sm:text-4xl md:text-5xl font-medium mb-8 text-gray-800 dark:text-white text-center'>
        Entre em <span className='bg-gradient-to-r from-[#064E3B] to-[#10B981] bg-clip-text text-transparent'>Contato</span>
      </h2>

      <form className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl w-full bg-white dark:bg-[#064E3B]/10 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-emerald-900/30">

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">Seu Nome</label>
          <div className="flex items-center gap-3 px-4 rounded-xl border border-gray-300 dark:border-emerald-800/40 bg-gray-50/50 dark:bg-emerald-950/20 focus-within:border-[#10B981] transition-all">
            <img src={assets.person_icon} alt="" className="w-5 h-5 opacity-60" />
            <input 
              type="text" 
              placeholder="Digite seu nome" 
              className="w-full py-3 text-sm bg-transparent outline-none text-gray-800 dark:text-white placeholder-gray-400" 
              required 
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
          <div className="flex items-center gap-3 px-4 rounded-xl border border-gray-300 dark:border-emerald-800/40 bg-gray-50/50 dark:bg-emerald-950/20 focus-within:border-[#10B981] transition-all">
            <img src={assets.email_icon} alt="" className="w-5 h-5 opacity-60" />
            <input 
              type="email" 
              placeholder="Digite seu email" 
              className="w-full py-3 text-sm bg-transparent outline-none text-gray-800 dark:text-white placeholder-gray-400" 
              required 
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">Mensagem</label>
          <textarea 
            rows={5} 
            placeholder="Escreva sua mensagem aqui..." 
            className="w-full p-4 text-sm bg-gray-50/50 dark:bg-emerald-950/20 outline-none rounded-xl border border-gray-300 dark:border-emerald-800/40 focus:border-[#10B981] transition-all text-gray-800 dark:text-white placeholder-gray-400 resize-none"
            required
          />
        </div>

        <div className="sm:col-span-2 flex justify-center mt-2">
          <button 
            type="submit" 
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#064E3B] to-[#10B981] text-white text-sm font-medium px-10 py-3.5 rounded-full cursor-pointer hover:shadow-lg hover:shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            Enviar Mensagem 
            <img src={assets.arrow_icon} alt="" className="w-4 h-4 invert" />
          </button>
        </div>

      </form>

    </div>
  )
}

export default Contact