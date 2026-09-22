import { forwardRef, type ComponentProps } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { cn } from "../../lib/utils";
import { Text } from "../ui/Text";
import { List, ListItem } from "../ui/List";
import type { NavLinkItem } from "./Layout";
import { Image } from "../ui/Image";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../context/AppContext";

// Ensure this path matches your logo location
import RgLogo from "../../assets/logo.png";

export interface FooterProps extends ComponentProps<"footer"> {
  links: NavLinkItem[];
}

export const Footer = forwardRef<HTMLElement, FooterProps>(
  ({ links, className, ...props }, ref) => {
    const { t } = useTranslation("common");
    const { companyName } = useAppContext();

    return (
      <footer
        ref={ref}
        className={cn("bg-primary-950 border-t-4 border-secondary", className)}
        {...props}
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

            {/* Logo & Slogan Column */}
            <div className="md:col-span-2 lg:col-span-4">
              <Link to="/" className="group flex items-center outline-none mb-6">
                <Image
                  src={RgLogo}
                  aspectRatio="auto"
                  alt={t("navbar.logoAlt", "Rysgally Gün Logo")}
                  // brightness-0 invert forces the image to render completely white
                  className="h-16 object-contain object-left md:h-20 brightness-0 invert opacity-90 transition-opacity group-hover:opacity-100"
                  containerClassName="bg-transparent flex w-full"
                />
              </Link>
              <Text
                className="max-w-sm text-sm leading-relaxed text-gray-400 font-medium"
              >
                {t("footer.slogan")}
              </Text>
            </div>

            {/* Contact Information Column */}
            <div className="lg:col-span-4">
              <Text className="mb-6 text-xs font-black tracking-widest text-white uppercase whitespace-nowrap">
                {t("footer.contact")}
              </Text>
              <ul className="grid gap-y-5">
                <li className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-gray-400 leading-snug">
                    {t("footer.addressInfo")}
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-secondary shrink-0" />
                  <a href={`tel:${t("footer.phoneInfo")}`} className="text-sm font-medium text-gray-400 hover:text-secondary transition-colors truncate">
                    {t("footer.phoneInfo")}
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-secondary shrink-0" />
                  <a href={`mailto:${t("footer.emailInfo")}`} className="text-sm font-medium text-gray-400 hover:text-secondary transition-colors truncate">
                    {t("footer.emailInfo")}
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links Column - Sliced to first 3 and styling normalized */}
            <div className="lg:col-span-2">
              <Text className="mb-6 text-xs font-black tracking-widest text-white uppercase whitespace-nowrap">
                {t("footer.quickLinks")}
              </Text>
              <List className="grid gap-y-4">
                {links.slice(0, 3).map((link) => (
                  <ListItem key={link.href} icon={null} className="p-0">
                    <Link
                      to={link.href}
                      className="text-sm font-medium text-gray-400 transition-colors hover:text-secondary"
                    >
                      {t(`navbar.${link.label}`)}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </div>

            {/* Legal Column */}
            <div className="lg:col-span-2">
              <Text className="mb-6 text-xs font-black tracking-widest text-white uppercase whitespace-nowrap">
                {t("footer.legal")}
              </Text>
              <List className="grid gap-y-4">
                <ListItem icon={null} className="p-0">
                  <Link to="/privacy" className="text-sm font-medium text-gray-400 transition-colors hover:text-secondary">
                    {t("footer.privacy")}
                  </Link>
                </ListItem>
                <ListItem icon={null} className="p-0">
                  <Link to="/terms" className="text-sm font-medium text-gray-400 transition-colors hover:text-secondary">
                    {t("footer.terms")}
                  </Link>
                </ListItem>
                <ListItem icon={null} className="p-0">
                  <Link to="/cookies" className="text-sm font-medium text-gray-400 transition-colors hover:text-secondary">
                    {t("footer.cookie")}
                  </Link>
                </ListItem>
              </List>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
            <Text
              className="text-xs font-bold tracking-widest text-gray-500 uppercase"
            >
              {t("footer.rights", { company: companyName || "Rysgally Gün", year: new Date().getFullYear() })}
            </Text>
          </div>
        </div>
      </footer>
    );
  }
);

Footer.displayName = "Footer";