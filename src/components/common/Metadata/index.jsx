import Helmet from 'react-helmet';

const Metadata = (props) => {
    const { title, description, url, img } = props;

    return (<Helmet>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="Twitter" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={img} />
    </Helmet>)
};

export default Metadata;