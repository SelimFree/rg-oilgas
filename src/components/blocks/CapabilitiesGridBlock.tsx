import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Wrench, 
  Settings, 
  Gauge, 
  Search, 
  ArrowUpToLine, 
  Activity, 
  Package, 
  HardHat, 
  Truck 
} from "lucide-react";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { Button } from "../ui/Button";
import { FadeIn } from "../utils/FadeIn";

// Placeholder assets - replace with real project paths
import MaintImg from "../../assets/services/maintenance.png";
import MachineImg from "../../assets/services/machine_shop.png";
import PressureImg from "../../assets/services/pressure.png";
import NDTImg from "../../assets/services/ndt.png";
import LiftingImg from "../../assets/services/lifting.png";
import DrillingImg from "../../assets/services/drilling.png";
import RentalImg from "../../assets/services/rental.png";
import ConstImg from "../../assets/services/construction.png";
import ProcureImg from "../../assets/services/procurement.png";

const SERVICES = [
    { id: "maintenance", image: MaintImg, icon: Wrench },
    { id: "machine_shop", image: MachineImg, icon: Settings },
    { id: "pressure", image: PressureImg, icon: Gauge },
    { id: "ndt", image: NDTImg, icon: Search },
    { id: "lifting", image: LiftingImg, icon: ArrowUpToLine },
    { id: "drilling", image: DrillingImg, icon: Activity },
    { id: "rental", image: RentalImg, icon: Package },
    { id: "construction", image: ConstImg, icon: HardHat },
    { id: "procurement", image: ProcureImg, icon: Truck },
];

export function CapabilitiesGridBlock() {
    const { t } = useTranslation("home");

    return (
        <section className="w-full bg-primary-950 py-20 sm:py-28 relative overflow-hidden">
            {/* Very faint background pattern for industrial texture */}
            <div className="absolute inset-0 opacity-[0.02] bg-[url('../../assets/patterns/grid.svg')] pointer-events-none" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    
                    <div className="max-w-2xl">
                        <FadeIn direction="up" delay={0}>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-1 w-12 bg-secondary" />
                                <span className="text-xs font-black tracking-[0.2em] text-secondary uppercase">
                                    {t("CapabilitiesBlock.badge")}
                                </span>
                            </div>
                        </FadeIn>

                        <FadeIn direction="up" delay={150}>
                            <Heading className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl uppercase">
                                {t("CapabilitiesBlock.headingStart")} <br className="hidden sm:block" />
                                <span className="text-gray-400">{t("CapabilitiesBlock.headingAccent")}</span>
                            </Heading>
                        </FadeIn>
                    </div>

                    <FadeIn direction="up" delay={300}>
                        <Link to="/services">
                            <Button 
                                variant="ghost" 
                                className="group text-white border border-white/20 hover:bg-white/10 px-6 py-3 font-bold tracking-wide rounded-sm transition-all uppercase text-sm"
                            >
                                {t("CapabilitiesBlock.viewAll")}
                                <ArrowRight className="ml-3 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
                    {SERVICES.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <FadeIn key={service.id} direction="up" delay={100 * (index % 3)}>
                                <Link 
                                    to={`/services#${service.id}`}
                                    className="group relative flex h-72 w-full overflow-hidden bg-primary-900 cursor-pointer"
                                >
                                    {/* Image Background */}
                                    <div 
                                        className="absolute inset-0 h-full w-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110 opacity-40 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-70"
                                        style={{ backgroundImage: `url(${service.image})` }} 
                                    />
                                    
                                    {/* Heavy Corporate Overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-primary-950 via-primary-950/80 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                                    
                                    {/* Accent Border on Hover */}
                                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-secondary transition-colors duration-500 z-20 pointer-events-none" />

                                    {/* Content Layout */}
                                    <div className="relative z-10 flex h-full w-full flex-col justify-end p-6 md:p-8">
                                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-500 group-hover:bg-secondary group-hover:border-secondary group-hover:-translate-y-2">
                                            <Icon className="h-6 w-6 text-white transition-colors group-hover:text-primary-950" />
                                        </div>

                                        <Heading level={3} className="text-xl font-extrabold text-white tracking-wide uppercase mb-2 group-hover:text-secondary transition-colors duration-300">
                                            {t(`CapabilitiesBlock.services.${service.id}.title`)}
                                        </Heading>

                                        {/* Hidden description that slides up on hover */}
                                        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                                            <div className="overflow-hidden">
                                                <Text className="text-sm text-gray-300 line-clamp-3 mt-2">
                                                    {t(`CapabilitiesBlock.services.${service.id}.description`)}
                                                </Text>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </FadeIn>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}