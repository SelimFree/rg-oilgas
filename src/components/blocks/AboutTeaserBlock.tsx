import { useTranslation } from 'react-i18next';
import { ShieldCheck, Factory, Settings2 } from 'lucide-react';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { Image } from '../ui/Image';
import { FadeIn } from '../utils/FadeIn';
import AboutBanner from "../../assets/home/about_banner.png"; 

interface StandardStat {
  tKey: string;
}

const standards: StandardStat[] = [
  { tKey: 'iso' },
  { tKey: 'api' },
  { tKey: 'asme' },
];

export const AboutTeaserBlock = () => {
  const { t } = useTranslation("home");

  return (
    <section className="w-full py-24 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">

          <div className="lg:col-span-7 flex flex-col justify-center pr-0 lg:pr-12">
            <FadeIn direction="up" delay={0}>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-12 bg-secondary" />
                <Text className="text-xs font-black tracking-[0.2em] text-primary-900 uppercase">
                  {t("aboutTeaser.subtitle")}
                </Text>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={150}>
              <Heading
                level={2}
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-950 tracking-tight leading-[1.15] mb-8 uppercase"
              >
                {t("aboutTeaser.titleLine1")}{' '}
                <br className="hidden md:block" />
                <span className="text-gray-400">
                  {t("aboutTeaser.titleLine2")}
                </span>
              </Heading>
            </FadeIn>

            <FadeIn direction="up" delay={300}>
              <div className="flex flex-col gap-6 mb-8 border-l-2 border-gray-200 pl-6">
                <Text className="text-gray-600 text-base leading-relaxed font-medium">
                  {t("aboutTeaser.paragraph1")}
                </Text>
                <Text className="text-gray-600 text-base leading-relaxed font-medium">
                  {t("aboutTeaser.paragraph2")}
                </Text>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={450}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="flex items-center gap-3 bg-white p-4 border border-gray-200 shadow-sm rounded-sm">
                  <Factory className="h-5 w-5 text-secondary shrink-0" />
                  <span className="text-sm font-bold text-primary-900 uppercase tracking-wide">
                    {t("aboutTeaser.feature1")}
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 border border-gray-200 shadow-sm rounded-sm">
                  <Settings2 className="h-5 w-5 text-secondary shrink-0" />
                  <span className="text-sm font-bold text-primary-900 uppercase tracking-wide">
                    {t("aboutTeaser.feature2")}
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Visual & Standards Block */}
          <div className="lg:col-span-5">
            <FadeIn direction="up" delay={600}>
              <div className="relative overflow-hidden bg-primary-950 min-h-125 flex flex-col justify-end rounded-sm shadow-xl h-full">
                <Image
                  src={AboutBanner}
                  alt={t("aboutTeaser.imageAlt")}
                  aspectRatio="auto"
                  containerClassName="absolute inset-0 w-full h-full"
                  className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
                />

                <div className="absolute inset-0 bg-linear-to-t from-primary-950/95 via-primary-900/60 to-primary-900/20 pointer-events-none" />

                <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-secondary/50 pointer-events-none" />
                <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-secondary/50 pointer-events-none" />

                <div className="absolute top-8 right-6 flex flex-col items-end gap-0.5 pointer-events-none select-none">
                  <span className="text-[10px] font-black tracking-[0.25em] text-secondary/80 uppercase">
                    {t("aboutTeaser.certificationLabel")}
                  </span>
                  <span
                    className="font-black text-white/4 leading-none tracking-tighter"
                    style={{ fontSize: 'clamp(60px, 8vw, 90px)' }}
                  >
                    9001
                  </span>
                </div>

                <div className="relative z-10 p-8 md:p-10 w-full">
                  <div className="flex items-center gap-3 mb-6">
                    <ShieldCheck className="h-8 w-8 text-secondary" />
                    <div className="h-px w-full bg-white/10" />
                  </div>

                  <Text className="text-[10px] font-black tracking-[0.22em] text-secondary uppercase mb-3">
                    {t("aboutTeaser.commitmentSubtitle")}
                  </Text>

                  <p className="font-sans font-bold text-xl md:text-2xl text-white leading-snug mb-10 max-w-sm uppercase tracking-wide">
                    {t("aboutTeaser.commitmentStatement")}
                  </p>

                  <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                    {standards.map((stat) => (
                      <div key={stat.tKey} className="flex flex-col gap-1 border-l-2 border-white/10 pl-4">
                        <span className="text-lg md:text-xl font-black text-white tracking-tight uppercase">
                          {t(`aboutTeaser.standards.${stat.tKey}.value`)}
                        </span>
                        <span className="text-[9px] font-bold tracking-[0.15em] text-white/40 uppercase">
                          {t(`aboutTeaser.standards.${stat.tKey}.label`)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};