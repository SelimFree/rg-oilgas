import { forwardRef, type ComponentProps, useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Button } from "../ui/Button";
import { cn } from "../../lib/utils";
import type { NavLinkItem } from "./Layout";
import { Image } from "../ui/Image";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";
import { useTranslation } from "react-i18next";

// Ensure this path matches where you store the new RG logo
import RgLogo from "../../assets/logo.png"; 

export interface NavbarProps extends ComponentProps<"header"> {
  links: NavLinkItem[];
}

export const Navbar = forwardRef<HTMLElement, NavbarProps>(
  ({ links, className, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation("common");
    const location = useLocation();

    useEffect(() => {
      setIsOpen(false);
    }, [location.pathname]);

    const navItemClasses = ({ isActive }: { isActive: boolean }) =>
      cn(
        "group relative py-6 md:py-8 flex items-center text-sm font-black tracking-widest uppercase transition-colors duration-300",
        isActive ? "text-primary-900" : "text-gray-500 hover:text-primary-900"
      );

    const mobileNavItemClasses = ({ isActive }: { isActive: boolean }) =>
      cn(
        "block w-full px-4 py-4 text-sm font-black tracking-widest uppercase transition-all duration-300 rounded-none border-b border-gray-100 last:border-0",
        isActive
          ? "bg-primary-50 text-primary-900 border-l-4 border-l-secondary"
          : "text-gray-500 border-l-4 border-l-transparent hover:bg-gray-50 hover:text-primary-900"
      );

    return (
      <header
        ref={ref}
        className={cn(
          "sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 transition-all h-20 md:h-24 shadow-sm",
          className
        )}
        {...props}
      >
        <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Logo Section - Constraints lifted so it sizes naturally */}
          <div className="relative flex items-center h-full">
            <Link
              to="/"
              className="relative z-10 flex items-center outline-none group h-full"
            >
              <div className="shrink-0 transition-opacity duration-300 group-hover:opacity-80 flex items-center h-full">
                <Image
                  src={RgLogo}
                  aspectRatio="auto"
                  alt={t("navbar.logoAlt", "Rysgally Gün Logo")}
                  // Increased height mapping and set object-left to prevent awkward centering gaps
                  className="h-12 sm:h-14 md:h-18 w-auto object-contain object-left" 
                  containerClassName="flex items-center bg-transparent border-none outline-none ring-0"
                />
              </div>
            </Link>
          </div>

          <nav className="hidden flex-1 items-stretch justify-end gap-10 px-10 md:flex h-full">
            {links.map((link) => (
              <NavLink key={link.href} to={link.href} className={navItemClasses}>
                {({ isActive }) => (
                  <>
                    {t(`navbar.${link.label}`)}
                    <span
                      className={cn(
                        "absolute bottom-0 left-0 h-1 bg-secondary transition-all duration-300 origin-left",
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      )}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Actions Section - Removed border-l to prevent color bleeding or rendering artifacts */}
          <div className="flex h-full items-center gap-4 md:gap-6 ml-2 md:ml-0">
            <LanguageSwitcher />

            <Button
              variant="ghost"
              size="sm"
              className="relative h-10 w-10 p-0 flex items-center justify-center text-primary-900 hover:bg-gray-100 hover:text-secondary md:hidden overflow-hidden rounded-sm cursor-pointer outline-none border-none ring-0"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <div className="relative h-6 w-6 flex items-center justify-center">
                <Menu
                  className={cn(
                    "absolute h-6 w-6 transition-all duration-300 ease-in-out transform",
                    isOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
                  )}
                  strokeWidth={2.5}
                />
                <X
                  className={cn(
                    "absolute h-6 w-6 transition-all duration-300 ease-in-out transform",
                    isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
                  )}
                  strokeWidth={2.5}
                />
              </div>
            </Button>
          </div>
        </div>

        <div
          className={cn(
            "absolute top-full left-0 right-0 z-50 grid bg-white transition-all duration-300 ease-in-out md:hidden shadow-xl border-b border-gray-200 overflow-hidden",
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
          )}
        >
          <div className="overflow-hidden">
            <nav className="flex flex-col py-2 px-4 bg-gray-50/50">
              {links.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={mobileNavItemClasses}
                >
                  {t(`navbar.${link.label}`)}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>

        {/* Removed w-screen to fix the blue horizontal scrollbar overflow issue */}
        {isOpen && (
          <div
            className="fixed inset-0 z-40 cursor-default bg-primary-950/20 backdrop-blur-sm md:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
            style={{ top: '5rem' }}
          />
        )}
      </header>
    );
  }
);

Navbar.displayName = "Navbar";