import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Niveles de Dificultad Graduales',
    imageUrl: 'img/levels.svg',
    description: (
      <>
        Aprende a programar a tu propio ritmo con tres niveles: fácil, normal y difícil.
        Comienza desde lo básico y avanza a desafíos más avanzados a medida que te sientas cómodo y confiado.
      </>
    ),
  },
  {
    title: 'Escritura de Código Coherente',
    imageUrl: 'img/code.svg',
    description: (
      <>
        Fomentamos buenas prácticas desde el principio. Aprenderás a escribir código limpio y legible,
        una habilidad esencial para trabajar en proyectos de programación en la vida real.
      </>
    ),
  },
  {
    title: 'Detección y Corrección de Errores',
    imageUrl: 'img/errors.svg',
    description: (
      <>
        Nuestra plataforma no solo te ayuda a detectar errores de sintaxis, sino que también te guía para resolver problemas de lógica.
        Aprende a depurar tu código y mejorar tus habilidades de resolución de problemas.
      </>
    ),
  },
  {
    title: 'Retroalimentación Personalizada',
    imageUrl: 'img/feedback.svg',
    description: (
      <>
        Recibe retroalimentación específica sobre tus errores y mejoras.
        Nuestra plataforma te muestra dónde cometiste errores y cómo corregirlos para un aprendizaje más efectivo.
      </>
    ),
  },
  {
    title: 'Preparación para el Mundo Real',
    imageUrl: 'img/work.svg',
    description: (
      <>
      El código de práctica no se limita a la teoría, te prepara para desafíos del mundo real. Adquiere habilidades y técnicas utilizadas por expertos en desarrollo.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('methods/')}>
                Conoce más
            </Link>

            <a
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              href='https://github.com/self-david/dummy-code-documentation/releases/download/education/Dummy.Code.Setup.1.0.0.exe'>
                Descargar aplicacion
            </a>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({title, imageUrl, description}) => (
                  <Feature key={title} title={title} imageUrl={imageUrl} description={description} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
