import { motion } from "framer-motion";
import logoImg from "@/assets/logo-roselya.png";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 px-6 text-center bg-ivory border-b border-gold/10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="font-body text-[11px] tracking-widest-xl uppercase text-gold">— Notre histoire —</span>
          <h1 className="font-display text-5xl md:text-6xl font-light mt-3 mb-4">À propos</h1>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={logoImg}
              alt="ROSÉLYA Logo"
              className="w-full max-w-xs mx-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="font-body text-[11px] tracking-luxury uppercase text-gold">Notre essence</span>
            <h2 className="font-display text-3xl font-light leading-snug">
              L'élégance féminine<br />
              <em className="text-gold">sublimée en huile</em>
            </h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              ROSÉLYA est née d'une passion profonde pour l'art du parfum et la célébration de la féminité. 
              Chaque création est pensée pour révéler l'essence royale qui sommeille en chaque femme.
            </p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Nos huiles parfumées concentrées 50ml sont formulées avec les matières premières les plus précieuses, 
              pour une tenue longue durée et un sillage enveloppant qui laisse une trace inoubliable.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: "✦",
              title: "Élégance",
              desc: "Chaque flacon est une œuvre d'art. Du design à la fragrance, tout est pensé pour l'élégance absolue.",
            },
            {
              icon: "◈",
              title: "Concentration",
              desc: "Des formules ultra-concentrées pour une intensité maximale et une tenue qui dure toute la journée.",
            },
            {
              icon: "❋",
              title: "Féminité",
              desc: "ROSÉLYA célèbre la féminité dans toutes ses formes — douce, puissante, sensuelle et libre.",
            },
          ].map(v => (
            <div key={v.title} className="text-center p-8 border border-gold/15 hover:border-gold/40 transition-colors duration-300">
              <span className="text-gold text-2xl mb-4 block">{v.icon}</span>
              <h3 className="font-display text-xl font-light mb-3">{v.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </motion.div>
      </section>
    </main>
  );
};

export default AboutPage;
