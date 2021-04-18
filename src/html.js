import React from "react";

const meta = {
  title: "@fabien0102 website",
  description:
    "Développeur fullstack JavaScript, voici un tour d’horizon de mes différents projets.",
  image: "https://fabien0102.com/social-card.jpg",
  url: "https://fabien0102.com",
  author: "@fabien0102",
};
export default class HTML extends React.Component {
  render() {
    return (
      <html lang="fr">
        <head>
          {this.props.headComponents}
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <title>@fabien0102</title>
          <meta name="description" content={meta.description} />
          {/* Twitter meta */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={meta.author} />
          <meta name="twitter:creator" content={meta.author} />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta name="twitter:image" content={meta.image} />
          {/* Facebook meta */}
          <meta property="og:url" content={meta.url} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:image" content={meta.image} />
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
