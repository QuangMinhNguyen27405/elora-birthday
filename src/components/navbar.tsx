import {
  Disclosure,
  DisclosurePanel,
  DisclosureButton,
} from "@headlessui/react";

const navigation = [
  { name: "Home", href: "#home", current: true },
  { name: "Letter", href: "#letter", current: false },
  { name: "Invitation", href: "#invitation", current: false },
];

function classNames(...classes: (string | false | null | undefined)[]): string {
  return (classes.filter(Boolean) as string[]).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-pink-200 shadow-lg">
      <div className="mx-auto max-w-7xl">
        <div className="relative flex h-16 items-center justify-center">
          <div className="flex justify-center">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "bg-pink-300 text-pink-900 font-semibold shadow-md"
                      : "text-pink-900 hover:bg-pink-300",
                    "rounded-md px-3 py-2 text-sm font-medium transition-all"
                  )}>
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - only visible on small screens */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-pink-300 text-pink-900 font-semibold"
                  : "text-pink-900 hover:bg-pink-300",
                "block rounded-md px-3 py-2 text-base font-medium transition-all w-full text-center"
              )}>
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
