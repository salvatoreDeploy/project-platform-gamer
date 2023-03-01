import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

function CreateNewBanner() {
  return (
    <div className="pt-1 bg-text-gradient self-stretch rounded-lg mt-8 overflow-hidden">
      <div className="bg-[#2a2634] px-8 py-6 flex justify-between items-center">
        <div>
          <strong className="text-white text-2xl font-black block">
            Não encontrou seu duo?
          </strong>
          <span className="text-zinc-400 block">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>

        <Dialog.Trigger className="px-4 py-3 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-3">
          <MagnifyingGlassPlus fontSize={24} />
          Publicar Anuncio
        </Dialog.Trigger>
      </div>
    </div>
  );
}

export default CreateNewBanner;
