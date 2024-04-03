"use client"; // Sessão de importações:
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { motion } from "framer-motion"; // Importe motion
import {
  Bars3Icon,
  XMarkIcon,
  BuildingStorefrontIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { TbBackhoe } from "react-icons/tb";
import { MdEditRoad } from "react-icons/md";
import { FaMountainCity } from "react-icons/fa6";
import { GiHorizonRoad, GiMiningHelmet } from "react-icons/gi";
import { BiSolidCategoryAlt } from "react-icons/bi";

//JSONs
const produtos = [
  {
    name: "Mini Escavadeira",
    description: "Versatilidade e eficiência em espaços restritos.",
    href: "/produtos/miniescavadeira",
    icon: BuildingStorefrontIcon,
  },
  {
    name: "Escavadeira",
    description: "Potência para a sua obra.",
    href: "/produtos/escavadeira",
    icon: BuildingOffice2Icon,
  },
  {
    name: "Retroescavadeira",
    description: "Versátil para projetos diversos.",
    href: "/produtos/retroEscavadeira",
    icon: TbBackhoe,
  },
  {
    name: "Pá Carregadeira",
    description: "Eficácia em cada movimento.",
    href: "/produtos/pacarregadeira",
    icon: FaMountainCity,
  },
  {
    name: "Motoniveladora",
    description: "Domine o terreno com precisão e potência",
    href: "/produtos/motoniveladora",
    icon: MdEditRoad,
  },
  {
    name: "Rolo Compactador",
    description: "Para uma construção sólida e duradoura",
    href: "/produtos/rolocompactador",
    icon: GiHorizonRoad,
  },
];
produtos.sort((a, b) => a.name.localeCompare(b.name));

const callsToAction = [
  { name: "Mineração", href: "/produtos/caminhao", icon: GiMiningHelmet },
  { name: "Categorias", href: "/produtos", icon: BiSolidCategoryAlt },
];
const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hovering, setHovering] = useState(false);

  return (
    <header className="bg-slate-100 mb-5">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 md:px-8"
        aria-label="Global"
      >
        <div className="flex md:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Timber | Sany</span>
            <img className="h-14 md:h-16 lg:h-20 w-auto" src="/logo.png" alt="" />
          </a>
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="hidden md:flex md:gap-x-12 focus:text-slate-200">
          <Popover
            className="relative"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <Popover.Button className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-gray-900 hover:text-red-700">
              Produtos
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              show={hovering}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg">
                <div className="p-4 ">
                  {produtos.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-lg leading-6 hover:bg-slate-300"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.3 }}
                        className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                      >
                        <item.icon
                          className="h-6 w-6 text-stone-800 group-hover:text-red-700"
                          aria-hidden="true"
                        />
                      </motion.div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-stone-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-lg font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a
            href="/sobre"
            className="text-lg font-semibold leading-6 text-gray-900 hover:text-red-700"
          >
            Sobre
          </a>
          <a
            href="https://grupotimber.com.br"
            className="text-lg font-semibold leading-6 text-gray-900 hover:text-red-700"
          >
            Grupo Timber
          </a>
        </Popover.Group>
        <div className="hidden md:flex md:flex-1 md:justify-end">
          <a
            href="/contato"
            className="text-lg font-semibold leading-6 text-gray-900 hover:text-red-700"
          >
            Contato <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

      {/* Menu Mobile */}
      <Dialog
        as="div"
        className="md:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />

        {/* Conteúdo do menu Mobile */}
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white py-6 sm:max-w-sm  ">
          {/* LOGO */}
          <div className="flex items-center px-6 justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Timber | Sany</span>
              <img className="h-14 w-auto" src="/logo.png" alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* MENU CONTENT*/}
          <div className="mt-6 flow-root ">
            <div className="-my-6 divide-y divide-gray-500/10 ">
              <div className="space-y-2 py-6 px-6">
                {/* Produtos */}
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Produtos
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {produtos.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 font-semibold leading-7 text-gray-900 flex gap-2 items-center"
                          >
                            <item.icon
                              className="h-5 w-5 flex-none text-gray-400"
                              aria-hidden="true"
                            />
                            <span>{item.name}</span>
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                {/* Sobre */}
                <a
                  href="/sobre"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Sobre
                </a>

                {/* Grupo Timber */}
                <a
                  href="https://grupotimber.com.br"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Grupo Timber
                </a>
              </div>

              {/* Contato e Categorias*/}
              <div className="grid grid-cols-2 sm:max-w-sm w-full b-0 divide-x rounded-lg divide-gray-900/5 bg-slate-100 px-2 py-3 fixed bottom-0">
                {callsToAction.map((item) => (
                  <a
                    className="flex items-center justify-center gap-x-4 p-3 text-lg font-semibold leading-6 text-gray-900"
                    key={item.name}
                    href={item.href}
                  >
                    <item.icon
                      className="h-5 w-5 flex-none text-gray-400"
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
