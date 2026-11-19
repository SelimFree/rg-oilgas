import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
    Award,
    ShieldCheck,
    Eye,
    Download,
    ExternalLink,
    X,
    Building2,
} from 'lucide-react';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { Image } from '../ui/Image';
import { FadeIn } from '../utils/FadeIn';

import ApiCertPreview from '../../assets/company/preview/preview-1.png';
import GrantPridecoPreview from '../../assets/company/preview/preview-2.png';
import StateLicensePreview from '../../assets/company/preview/preview-3.png';

type CertificateOrientation = 'portrait' | 'landscape';

interface CertificateItem {
    id: string;
    tKey: string;
    code: string;
    orientation: CertificateOrientation;
    featured?: boolean;
    previewImage: string;
    pdfUrl: string;
    verifyUrl?: string;
}

const orientationStyles: Record<
    CertificateOrientation,
    {
        aspect: string;
        objectPosition: string;
        featuredTextCol: string;
        featuredPreviewCol: string;
        featuredButtonMaxW: string;
        secondaryThumbW: string;
        modalMaxW: string;
    }
> = {
    portrait: {
        aspect: 'aspect-3/4',
        objectPosition: 'object-top',
        featuredTextCol: 'lg:col-span-8',
        featuredPreviewCol: 'lg:col-span-4',
        featuredButtonMaxW: 'max-w-xs',
        secondaryThumbW: 'w-28',
        modalMaxW: 'max-w-2xl',
    },
    landscape: {
        aspect: 'aspect-4/3',
        objectPosition: 'object-center',
        featuredTextCol: 'lg:col-span-7',
        featuredPreviewCol: 'lg:col-span-5',
        featuredButtonMaxW: 'max-w-md',
        secondaryThumbW: 'w-36',
        modalMaxW: 'max-w-5xl',
    },
};

const certificates: CertificateItem[] = [
    {
        id: 'api-monogram',
        tKey: 'apiMonogram',
        code: 'API 7-1',
        orientation: 'landscape',
        featured: true,
        previewImage: ApiCertPreview,
        pdfUrl: '/documents/certificate-1.pdf',
        verifyUrl: 'https://www.api.org/compositelist',
    },
    {
        id: 'grant-prideco',
        tKey: 'grantPrideco',
        code: 'NOV / GPDS',
        orientation: 'landscape',
        previewImage: GrantPridecoPreview,
        pdfUrl: '/documents/certificate-2.pdf',
        verifyUrl: 'https://wbtapps.nov.com/gp/facility-locator/index.html',
    },
    {
        id: 'turkmenstandartlary',
        tKey: 'turkmenstandartlary',
        code: 'STATE LICENSE',
        orientation: 'portrait',
        previewImage: StateLicensePreview,
        pdfUrl: '/documents/certificate-3.pdf',
    },
];

export const CertificationsBlock = () => {
    const { t } = useTranslation('company');
    const [activeCert, setActiveCert] = useState<CertificateItem | null>(null);

    const featuredCert = certificates.find((c) => c.featured)!;
    const secondaryCerts = certificates.filter((c) => !c.featured);
    const featuredStyle = orientationStyles[featuredCert.orientation];
    const activeStyle = activeCert ? orientationStyles[activeCert.orientation] : null;

    useEffect(() => {
        if (!activeCert) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setActiveCert(null);
        };

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [activeCert]);

    return (
        <section
            id="certifications"
            className="w-full py-24 bg-gray-50 border-b border-gray-200 scroll-mt-20"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
                    <div className="lg:col-span-7">
                        <FadeIn direction="up" delay={0}>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-1 w-12 bg-secondary" />
                                <Text className="text-xs font-black tracking-[0.2em] text-primary-900 uppercase">
                                    {t('certificationsBlock.subtitle')}
                                </Text>
                            </div>
                        </FadeIn>

                        <FadeIn direction="up" delay={150}>
                            <Heading
                                level={2}
                                className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-950 tracking-tight leading-[1.15] uppercase"
                            >
                                {t('certificationsBlock.titleLine1')}{' '}
                                <br className="hidden md:block" />
                                <span className="text-gray-600">
                                    {t('certificationsBlock.titleLine2')}
                                </span>
                            </Heading>
                        </FadeIn>
                    </div>

                    <div className="lg:col-span-5">
                        <FadeIn direction="up" delay={250}>
                            <div className="border-l-2 border-gray-200 pl-6">
                                <Text className="text-gray-600 text-base leading-relaxed font-medium">
                                    {t('certificationsBlock.description')}
                                </Text>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Row 1: Featured Certificate (API Official Monogram) */}
                <FadeIn direction="up" delay={300}>
                    <div className="relative overflow-hidden bg-primary-950 rounded-sm shadow-xl mb-6">
                        <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-secondary/50 pointer-events-none" />
                        <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-secondary/50 pointer-events-none" />

                        <div className="absolute -top-4 right-8 pointer-events-none select-none hidden md:block">
                            <span
                                className="font-black text-white/4 leading-none tracking-tighter"
                                style={{ fontSize: 'clamp(90px, 11vw, 150px)' }}
                            >
                                API
                            </span>
                        </div>

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 md:p-12 items-center">
                            <div className={`${featuredStyle.featuredTextCol} flex flex-col`}>
                                <div className="flex items-center gap-3 mb-5">
                                    <Award className="h-6 w-6 text-secondary shrink-0" />
                                    <span className="text-[10px] font-black tracking-[0.22em] text-secondary uppercase">
                                        {t(`certificationsBlock.items.${featuredCert.tKey}.badge`)}
                                    </span>
                                    <div className="h-px flex-1 bg-white/10" />
                                </div>

                                <Heading
                                    level={3}
                                    className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug uppercase mb-3"
                                >
                                    {t(`certificationsBlock.items.${featuredCert.tKey}.title`)}
                                </Heading>

                                <Text className="text-sm font-bold text-white/60 uppercase tracking-wider mb-5">
                                    {t(`certificationsBlock.items.${featuredCert.tKey}.issuer`)}
                                </Text>

                                <Text className="text-white/75 text-base leading-relaxed font-medium max-w-2xl mb-8">
                                    {t(`certificationsBlock.items.${featuredCert.tKey}.scope`)}
                                </Text>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 pt-6 mb-8">
                                    <div className="flex flex-col gap-1 border-l-2 border-secondary/60 pl-4">
                                        <span className="text-[10px] font-bold tracking-[0.15em] text-white/45 uppercase">
                                            {t('certificationsBlock.labels.licenseNumber')}
                                        </span>
                                        <span className="text-sm md:text-base font-black text-white tracking-wide uppercase">
                                            {t(`certificationsBlock.items.${featuredCert.tKey}.licenseNumber`)}
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-1 border-l-2 border-white/15 pl-4">
                                        <span className="text-[10px] font-bold tracking-[0.15em] text-white/45 uppercase">
                                            {t('certificationsBlock.labels.standard')}
                                        </span>
                                        <span className="text-sm md:text-base font-black text-white tracking-wide uppercase">
                                            {t(`certificationsBlock.items.${featuredCert.tKey}.standard`)}
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-1 border-l-2 border-white/15 pl-4">
                                        <span className="text-[10px] font-bold tracking-[0.15em] text-white/45 uppercase">
                                            {t('certificationsBlock.labels.validUntil')}
                                        </span>
                                        <span className="text-sm md:text-base font-black text-white tracking-wide uppercase">
                                            {t(`certificationsBlock.items.${featuredCert.tKey}.validUntil`)}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setActiveCert(featuredCert)}
                                        className="inline-flex items-center gap-2.5 bg-secondary hover:bg-secondary/90 text-primary-950 font-black text-xs uppercase tracking-[0.15em] px-6 py-3.5 rounded-sm transition-colors cursor-pointer"
                                    >
                                        <Eye className="h-4 w-4" />
                                        {t('certificationsBlock.actions.inspect')}
                                    </button>

                                    <a
                                        href={featuredCert.pdfUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2.5 bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-xs uppercase tracking-[0.15em] px-5 py-3.5 rounded-sm transition-colors"
                                    >
                                        <Download className="h-4 w-4 text-secondary" />
                                        {t('certificationsBlock.actions.downloadPdf')}
                                    </a>

                                    {featuredCert.verifyUrl && (
                                        <a
                                            href={featuredCert.verifyUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-white/60 hover:text-white font-bold text-xs uppercase tracking-[0.14em] px-3 py-3.5 transition-colors"
                                        >
                                            <ExternalLink className="h-3.5 w-3.5 text-secondary" />
                                            {t('certificationsBlock.actions.verifyOnline')}
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className={`${featuredStyle.featuredPreviewCol} flex justify-center lg:justify-end`}>
                                <button
                                    type="button"
                                    onClick={() => setActiveCert(featuredCert)}
                                    className={`group relative w-full ${featuredStyle.featuredButtonMaxW} bg-white/5 border border-white/15 p-3 rounded-sm hover:border-secondary/60 transition-all cursor-pointer text-left`}
                                    aria-label={t('certificationsBlock.actions.inspect')}
                                >
                                    <div className={`relative overflow-hidden bg-white rounded-xs ${featuredStyle.aspect}`}>
                                        <Image
                                            src={featuredCert.previewImage}
                                            alt={t(`certificationsBlock.items.${featuredCert.tKey}.title`)}
                                            aspectRatio="auto"
                                            containerClassName="w-full h-full"
                                            className={`w-full h-full object-cover ${featuredStyle.objectPosition} group-hover:scale-[1.03] transition-transform duration-300`}
                                        />
                                        <div className="absolute inset-0 bg-primary-950/0 group-hover:bg-primary-950/45 transition-colors flex items-center justify-center">
                                            <span className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-2 bg-primary-950/90 text-white text-[10px] font-black uppercase tracking-[0.18em] px-4 py-2 rounded-sm border border-white/20">
                                                <Eye className="h-3.5 w-3.5 text-secondary" />
                                                {t('certificationsBlock.actions.viewDocument')}
                                            </span>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                {/* Row 2: 2-Column Secondary Certificates Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {secondaryCerts.map((cert, index) => {
                        const certStyle = orientationStyles[cert.orientation];

                        return (
                            <FadeIn key={cert.id} direction="up" delay={400 + index * 100}>
                                <div className="h-full flex flex-col justify-between bg-white border border-gray-200 hover:border-primary-900/30 hover:shadow-md rounded-sm p-8 transition-all">
                                    <div>
                                        {/* Card Top Bar */}
                                        <div className="flex items-center justify-between gap-3 mb-5 pb-4 border-b border-gray-100">
                                            <span className="inline-flex items-center gap-2 text-xs font-black tracking-[0.18em] text-primary-900 uppercase">
                                                <ShieldCheck className="h-4 w-4 text-secondary shrink-0" />
                                                {cert.code}
                                            </span>

                                            {cert.verifyUrl && (
                                                <a
                                                    href={cert.verifyUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.14em] text-gray-500 hover:text-primary-950 uppercase transition-colors"
                                                >
                                                    {t('certificationsBlock.actions.verifyOnline')}
                                                    <ExternalLink className="h-3 w-3 text-secondary" />
                                                </a>
                                            )}
                                        </div>

                                        {/* Content + Compact Thumbnail */}
                                        <div className="flex flex-col sm:flex-row gap-6 mb-6">
                                            <div className="flex-1 min-w-0">
                                                <Heading
                                                    level={3}
                                                    className="text-xl font-extrabold text-primary-950 uppercase tracking-tight leading-snug mb-2"
                                                >
                                                    {t(`certificationsBlock.items.${cert.tKey}.title`)}
                                                </Heading>

                                                <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wide mb-4">
                                                    <Building2 className="h-3.5 w-3.5 text-secondary shrink-0" />
                                                    <span>{t(`certificationsBlock.items.${cert.tKey}.issuer`)}</span>
                                                </div>

                                                <Text className="text-gray-600 text-sm leading-relaxed font-medium">
                                                    {t(`certificationsBlock.items.${cert.tKey}.scope`)}
                                                </Text>
                                            </div>

                                            <button
                                                type="button"
                                                onClick={() => setActiveCert(cert)}
                                                className={`group hidden sm:block shrink-0 ${certStyle.secondaryThumbW} self-start bg-gray-50 border border-gray-200 hover:border-primary-900/40 p-1.5 rounded-sm transition-all cursor-pointer`}
                                                aria-label={t('certificationsBlock.actions.viewDocument')}
                                            >
                                                <div className={`relative overflow-hidden bg-white ${certStyle.aspect}`}>
                                                    <Image
                                                        src={cert.previewImage}
                                                        alt={t(`certificationsBlock.items.${cert.tKey}.title`)}
                                                        aspectRatio="auto"
                                                        containerClassName="w-full h-full"
                                                        className={`w-full h-full object-cover ${certStyle.objectPosition} group-hover:scale-105 transition-transform duration-300`}
                                                    />
                                                    <div className="absolute inset-0 bg-primary-950/0 group-hover:bg-primary-950/35 transition-colors flex items-center justify-center">
                                                        <Eye className="h-4 w-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Bottom Metadata + Actions */}
                                    <div>
                                        <div className="grid grid-cols-2 gap-4 py-4 border-t border-gray-100 mb-4">
                                            <div className="flex flex-col gap-0.5 border-l-2 border-secondary/60 pl-3">
                                                <span className="text-[10px] font-bold tracking-[0.14em] text-gray-400 uppercase">
                                                    {t('certificationsBlock.labels.licenseNumber')}
                                                </span>
                                                <span className="text-sm font-black text-primary-950 uppercase">
                                                    {t(`certificationsBlock.items.${cert.tKey}.licenseNumber`)}
                                                </span>
                                            </div>

                                            <div className="flex flex-col gap-0.5 border-l-2 border-gray-200 pl-3">
                                                <span className="text-[10px] font-bold tracking-[0.14em] text-gray-400 uppercase">
                                                    {t('certificationsBlock.labels.validUntil')}
                                                </span>
                                                <span className="text-sm font-black text-primary-950 uppercase">
                                                    {t(`certificationsBlock.items.${cert.tKey}.validUntil`)}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                                            <button
                                                type="button"
                                                onClick={() => setActiveCert(cert)}
                                                className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-50 hover:bg-primary-950 hover:text-white border border-gray-200 hover:border-primary-950 text-primary-950 font-black text-[11px] uppercase tracking-[0.14em] py-3 px-4 rounded-sm transition-colors cursor-pointer"
                                            >
                                                <Eye className="h-3.5 w-3.5" />
                                                {t('certificationsBlock.actions.viewDocument')}
                                            </button>

                                            <a
                                                href={cert.pdfUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-primary-950 font-bold text-[11px] uppercase tracking-[0.14em] rounded-sm transition-colors"
                                            >
                                                <Download className="h-3.5 w-3.5 text-secondary" />
                                                <span className="hidden sm:inline">PDF</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>
            </div>

            {/* Document Inspection Lightbox Modal */}
            {activeCert && activeStyle && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-primary-950/85 backdrop-blur-xs p-4 sm:p-6"
                    onClick={() => setActiveCert(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="certificate-modal-title"
                >
                    <div
                        className={`relative w-full ${activeStyle.modalMaxW} max-h-[90vh] flex flex-col bg-white rounded-sm shadow-2xl overflow-hidden`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between gap-4 px-6 py-4 bg-primary-950 text-white border-b border-white/10 shrink-0">
                            <div className="min-w-0">
                                <span className="block text-[10px] font-black tracking-[0.2em] text-secondary uppercase">
                                    {activeCert.code} — {t(`certificationsBlock.items.${activeCert.tKey}.licenseNumber`)}
                                </span>
                                <h3
                                    id="certificate-modal-title"
                                    className="text-sm sm:text-base font-bold uppercase tracking-wide truncate"
                                >
                                    {t(`certificationsBlock.items.${activeCert.tKey}.title`)}
                                </h3>
                            </div>

                            <div className="flex items-center gap-2 shrink-0">
                                <a
                                    href={activeCert.pdfUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-[10px] font-black uppercase tracking-[0.15em] px-3.5 py-2 rounded-sm transition-colors"
                                >
                                    <Download className="h-3.5 w-3.5 text-secondary" />
                                    <span className="hidden sm:inline">
                                        {t('certificationsBlock.actions.downloadPdf')}
                                    </span>
                                </a>
                                <button
                                    type="button"
                                    onClick={() => setActiveCert(null)}
                                    className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-sm transition-colors cursor-pointer"
                                    aria-label="Close"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        <div className="flex-1 min-h-0 overflow-y-auto p-4 sm:p-6 bg-gray-100 flex justify-center items-start">
                            <img
                                src={activeCert.previewImage}
                                alt={t(`certificationsBlock.items.${activeCert.tKey}.title`)}
                                className="w-full h-auto shadow-lg border border-gray-200 bg-white"
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
