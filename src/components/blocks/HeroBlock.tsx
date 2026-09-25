import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight, HardHat, Cog, Wrench } from "lucide-react";
import { cn } from "../../lib/utils";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { Image } from "../ui/Image";
import SliderImg1 from "../../assets/home/slider/slider_img_1.png";
import SliderImg2 from "../../assets/home/slider/slider_img_2.png";
import SliderImg3 from "../../assets/home/slider/slider_img_3.png";
import { Button } from "../ui/Button";

const slides = [
  {
    id: 1,
    tKey: "build",
    buttonLink: "/services#construction",
    image: SliderImg1,
    navIcon: HardHat,
  },
  {
    id: 2,
    tKey: "supply",
    buttonLink: "/services#procurement",
    image: SliderImg2,
    navIcon: Cog,
  },
  {
    id: 3,
    tKey: "maintain",
    buttonLink: "/services#maintenance",
    image: SliderImg3,
    navIcon: Wrench,
  }
];

export const HeroBlock = () => {
  const { t } = useTranslation("home");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  const [isInView, setIsInView] = useState(true);

  const sectionRef = useRef<HTMLElement>(null);
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const section = sectionRef.current;
    if (!section) return;

    let ticking = false;

    const updateParallax = () => {
      const { top, height } = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const progress = -top / (height + viewportHeight);
      const shift = progress * height * 0.35;

      imgRefs.current.forEach((img, i) => {
        if (!img) return;
        img.style.transform = i === currentSlide
          ? `translate3d(0, ${shift}px, 0)`
          : 'translate3d(0, 0, 0)';
      });

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    updateParallax();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSlide, isInView]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  const handleManualChange = (action: 'next' | 'prev' | number) => {
    setIsAutoPlaying(false);
    if (action === 'next') nextSlide();
    else if (action === 'prev') prevSlide();
    else setCurrentSlide(action);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide, isAutoPlaying]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[85vh] min-h-125 md:min-h-150 overflow-hidden bg-primary-900"
    >
      <div
        className="flex w-full h-full transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
        style={{ transform: `translate3d(-${currentSlide * 100}%, 0, 0)` }}
      >
        {slides.map((slide, index) => {
          const isActiveSlide = index === currentSlide;
          const isAnimatedIn = isActiveSlide && isMounted;

          return (
            <div key={slide.id} className="relative w-full h-full shrink-0">
              <Image
                ref={(el) => { imgRefs.current[index] = el; }}
                src={slide.image}
                alt={t(`heroBlock.slides.${slide.tKey}.title`)}
                containerClassName="absolute inset-0 z-0 bg-primary-900"
                className="w-full h-[130%] object-cover object-[50%_center] md:object-center will-change-transform translate-y-[-15%]"
              />

              <div className="absolute inset-0 z-10 bg-primary-950/40 md:bg-transparent md:bg-linear-to-r md:from-primary-950/95 md:via-primary-900/70 md:to-transparent" />
              <div className="absolute inset-0 z-10 mix-blend-multiply bg-black/20 md:bg-transparent md:bg-linear-to-r md:from-black/80 md:via-black/40 md:to-transparent" />
              <div className="absolute inset-0 z-10 bg-linear-to-t from-primary-950/90 via-primary-950/30 to-transparent md:bg-black/10" />

              <div className="absolute inset-0 z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pb-24 md:pb-32">
                <div className="max-w-2xl">
                  <div className={cn(
                    "mb-6 inline-flex items-center border-l-4 border-l-secondary bg-white/5 px-4 py-1.5 backdrop-blur-sm transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]",
                    isAnimatedIn ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-4"
                  )}>
                    <span className="text-xs font-bold tracking-widest text-white uppercase">
                      {t("heroBlock.badge")}
                    </span>
                  </div>

                  <Heading
                    level={1}
                    className={cn(
                      "text-white text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] uppercase",
                      isAnimatedIn ? "opacity-100 translate-x-0 delay-300" : "opacity-0 -translate-x-12"
                    )}
                  >
                    {t(`heroBlock.slides.${slide.tKey}.title`)}
                  </Heading>

                  <Text
                    className={cn(
                      "text-gray-200 text-base sm:text-lg mb-10 leading-relaxed font-medium max-w-xl text-left transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]",
                      isAnimatedIn ? "opacity-100 translate-x-0 delay-500" : "opacity-0 -translate-x-12"
                    )}
                  >
                    {t(`heroBlock.slides.${slide.tKey}.description`)}
                  </Text>

                  <div className={cn(
                    "transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]",
                    isAnimatedIn ? "opacity-100 translate-x-0 delay-700" : "opacity-0 -translate-x-12"
                  )}>
                    <Link to={slide.buttonLink} tabIndex={-1}>
                      <Button
                        size="lg"
                        className="w-full sm:w-auto flex items-center justify-center bg-secondary text-primary-900 hover:bg-secondary-500 transition-colors duration-300 h-14 px-10 text-sm font-black tracking-widest uppercase rounded-sm cursor-pointer shadow-lg"
                      >
                        {t(`heroBlock.slides.${slide.tKey}.buttonText`)}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-0 right-0 z-30 hidden lg:block opacity-[0.03] pointer-events-none w-1/2 h-full">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-white">
          <polygon points="50,100 75,50 100,100" />
          <polygon points="75,100 100,25 100,100" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-40 bg-primary-900/80 backdrop-blur-md border-t border-white/10 h-16 md:h-24 flex items-center">
        <div className="flex md:hidden flex-1 items-center justify-center gap-5 h-full pl-4">
          {slides.map((slide, index) => (
            <Button
              key={`mobile-${slide.id}`}
              onClick={() => handleManualChange(index)}
              className={cn(
                "h-2 w-2 min-h-0 min-w-0 p-0 border-none transition-all duration-300 rounded-sm cursor-pointer",
                index === currentSlide ? "bg-secondary scale-125" : "bg-white/30 hover:bg-white/50"
              )}
              aria-label={t("heroBlock.controls.goTo", { label: t(`heroBlock.slides.${slide.tKey}.navLabel`) })}
            />
          ))}
        </div>

        <div className="hidden md:flex flex-1 h-full overflow-x-auto no-scrollbar md:pl-6">
          {slides.map((slide, index) => {
            const Icon = slide.navIcon;
            const isActive = index === currentSlide;

            return (
              <Button
                key={`desktop-${slide.id}`}
                onClick={() => handleManualChange(index)}
                className={cn(
                  "relative flex flex-col items-center justify-center h-full min-w-40 p-0 border-none bg-transparent rounded-none transition-all duration-300 group cursor-pointer",
                  isActive ? "bg-white/5" : "hover:bg-white/5"
                )}
              >
                <Icon
                  className={cn(
                    "h-6 w-6 mb-2 transition-colors",
                    isActive ? "text-secondary" : "text-white/40 group-hover:text-white/80"
                  )}
                  strokeWidth={isActive ? 2 : 1.5}
                />
                <span className={cn(
                  "text-[10px] font-bold tracking-widest uppercase text-center transition-colors",
                  isActive ? "text-white" : "text-white/40 group-hover:text-white/80"
                )}>
                  {t(`heroBlock.slides.${slide.tKey}.navLabel`)}
                </span>

                {isActive && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary" />
                )}
              </Button>
            );
          })}
        </div>
        <div className="flex items-center h-full border-l border-white/10 shrink-0 px-2 md:px-4 bg-primary-900/60">
          <Button
            onClick={() => handleManualChange('prev')}
            className="p-3 md:p-4 bg-transparent border-none shadow-none text-white/40 hover:text-white hover:bg-transparent transition-colors cursor-pointer rounded-sm"
            aria-label={t("heroBlock.controls.prev")}
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </Button>

          <Button
            onClick={() => handleManualChange('next')}
            className="p-3 md:p-4 bg-transparent border-none shadow-none text-white/40 hover:text-white hover:bg-transparent transition-colors cursor-pointer rounded-sm"
            aria-label={t("heroBlock.controls.next")}
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};