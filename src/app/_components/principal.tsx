import { Button } from "@/components/ui/button";

export default function Principal() {
  return (
    <section className="container mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-between gap-10">
      
      {/* Texto — à esquerda em telas grandes */}
      <div className="flex-1 space-y-6 order-1">
        <p className="text-lg text-gray-600">Hey, I'm Klisman! ✌🏽</p>

        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-3">
          <h1 className="text-6xl font-bold">Fullstack</h1>
          <h1 className="text-6xl font-bold text-purple-600">Developer</h1>
        </div>

        <p className="text-base text-gray-500 max-w-xl">
          I'm a frontend developer based in Italy, I'll help you build beautiful websites your users will love.
        </p>

        <div className="flex gap-4">
          <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
            Get in Touch
          </Button>

          <Button className="bg-purple-600 text-white hover:bg-purple-700">
            Browse Project
          </Button>
        </div>
      </div>

      {/* Imagem — à direita em telas grandes */}
      <div className="flex-1 flex justify-center order-2">
        <div className="w-fit h-fit rounded-full border-1 border-purple-600/80 p-9">
            <img
                src="https://github.com/klismanmelo.png"
                alt="Foto de perfil"
                className="w-52 h-52 rounded-full shadow-lg"
            />
        </div>
      </div>
    </section>
  );
}
