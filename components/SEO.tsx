import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: 'website' | 'article';
}

const defaultMeta = {
    title: 'IGCSE Music Study Hub',
    description: 'Interactive music theory learning platform for IGCSE students. Practice ear training, learn music theory, explore instruments, and prepare for your IGCSE Music exam.',
    keywords: 'IGCSE Music, music theory, ear training, music education, Cambridge IGCSE, music exam preparation, music learning, intervals, scales, chords',
    image: '/images/og-image.jpg',
    url: 'https://igcse-music.vercel.app',
};

export const SEO: React.FC<SEOProps> = ({
    title,
    description = defaultMeta.description,
    keywords = defaultMeta.keywords,
    image = defaultMeta.image,
    url = defaultMeta.url,
    type = 'website',
}) => {
    const fullTitle = title
        ? `${title} | IGCSE Music Study Hub`
        : defaultMeta.title;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="IGCSE Music Study Hub" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content="IGCSE Music Study Hub" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Additional SEO */}
            <meta name="robots" content="index, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="canonical" href={url} />
        </Helmet>
    );
};

export default SEO;
