import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { Image } from '../ui/Image';
import { FadeIn } from '../utils/FadeIn';

// Update these imports to point to your actual service assets
import ConstImg from "../../assets/services/construction.png"
import ProcureImg from "../../assets/services/procurement.png"
import MaintImg from "../../assets/services/maintenance.png"

export const FeaturedServicesBlock = () => {
  const { t } = useTranslation("home");

  const featuredServices = [
    {
      id: 'construction',
      image: ConstImg,
      tKey: 'construction'
    },
    {
      id: 'procurement',
      image: ProcureImg,
      tKey: 'procurement'
    },
    {
      id: 'maintenance',
      image: MaintImg,
      tKey: 'maintenance'
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-24 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <FadeIn direction="up" delay={0}>
              <div className="flex items-center gap-4 mb-4">
                {/* Rigid square accent line */}
                <div className="h-1 w-12 bg-secondary" />
                <Text className="text-xs font-black tracking-[0.2em] text-primary-900 uppercase">
                  {t("featuredServices.subtitle")}
                </Text>
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay={150}>
              <Heading level={2} className="text-4xl md:text-5xl font-extrabold text-primary-950 tracking-tight uppercase">
                {t("featuredServices.title")}
              </Heading>
            </FadeIn>
            
            <FadeIn direction="up" delay={300}>
              <Text className="text-gray-700 mt-6 text-sm md:text-base leading-relaxed font-medium">
                {t("featuredServices.description")}
              </Text>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={450}>
            <Link to="/services" className="shrink-0 group">
              <button className="flex items-center gap-3 border-2 border-gray-300 bg-white px-8 py-4 text-xs font-black tracking-widest text-primary-950 uppercase transition-all duration-300 hover:border-primary-900 hover:bg-primary-900 hover:text-white cursor-pointer rounded-sm">
                {t("featuredServices.buttonViewAll")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
              </button>
            </Link>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <FadeIn key={service.id} direction="up" delay={150 * index}>
              <div
                className="group relative flex flex-col bg-white border border-gray-200 shadow-sm transition-all duration-500 hover:shadow-xl rounded-sm overflow-hidden h-full"
              >
                {/* Image Container */}
                <div className="relative h-64 w-full overflow-hidden bg-primary-950">
                  <Image
                    src={service.image}
                    alt={t(`featuredServices.services.${service.tKey}.title`)}
                    containerClassName="w-full h-full"
                    className="opacity-80 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
                  />
                  
                  {/* High contrast overlay gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-primary-950/90 to-transparent pointer-events-none" />
                  
                  {/* Rigid Tag */}
                  <div className="absolute top-4 left-4 bg-primary-900 border-l-2 border-secondary px-4 py-2 z-10 backdrop-blur-sm">
                    <span className="text-[10px] font-black tracking-widest text-white uppercase">
                      {t(`featuredServices.services.${service.tKey}.tag`)}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex flex-col grow p-8 relative">
                  <Heading level={3} className="text-2xl font-black text-primary-950 mb-4 tracking-tight uppercase group-hover:text-secondary transition-colors duration-300">
                    {t(`featuredServices.services.${service.tKey}.title`)}
                  </Heading>
                  
                  <Text className="text-sm text-gray-600 mb-8 leading-relaxed grow">
                    {t(`featuredServices.services.${service.tKey}.description`)}
                  </Text>

                  <Link
                    to={`/services#${service.id}`}
                    className="mt-auto flex items-center text-xs font-black tracking-widest text-primary-900 uppercase transition-colors hover:text-secondary"
                  >
                    {t("featuredServices.buttonExplore")}
                    <ChevronRight className="ml-2 h-4 w-4 stroke-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Industrial Animated Bottom Line */}
                <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-secondary transition-all duration-500 ease-out group-hover:w-full" />
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};