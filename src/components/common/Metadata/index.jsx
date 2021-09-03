import Helmet from 'react-helmet';

const Metadata = (props) => {
    const { title, content, url, img } = props;

    return (<Helmet>
        <title>{title}</title>
        <meta name="description" content={content}></meta>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="MyTwitter" />
        <meta name="twitter:creator" content="@jestrade" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={content} />
        <meta property="og:image" content={img} />
    </Helmet>)
};

export default Metadata;