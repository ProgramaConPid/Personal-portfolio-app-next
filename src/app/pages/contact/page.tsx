"use client";

import { motion } from "framer-motion";
import Form from "@/components/ui/Form/Form";
import styles from "./contact.module.css";
import { LuGithub } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { RiTiktokLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import { montserrat } from "@/app/font/fonts";
import BackgroundParticles from "@/components/ui/BackgroundParticles";

export default function Contact() {
  return (
    <div className={`container ${styles.container__contact}`}>
      <BackgroundParticles />

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`${styles.contact__title}`}
      >
        Contact
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className={`${styles.contact__paragraph}`}
      >
        Want to collaborate or have any questions? Let&apos;s talk!
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className={styles.grid__contact}
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Form />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className={styles.contact__aside}
        >
          <div className={styles.contact__socialMedia}>
            <h3 className={`${styles.social__mediaTitle} ${montserrat.className}`}>
              Connect with me
            </h3>

            <p className={styles.social__mediaParagraph}>
              Follow me on social media
            </p>

            <div className={styles.social__mediaLinks}>
              <Link
                href={"https://github.com/ProgramaConPid"}
                className={`${styles.social__mediaLink} ${styles.social__mediaGithub}`}
              >
                <LuGithub className={`text-[1.5rem] font-bold ${styles.social__icon}`} />
                <span className={styles.social__mediaText}>GitHub</span>
              </Link>
              <Link
                href={"#"}
                className={`${styles.social__mediaLink} ${styles.social__mediaLinkedin}`}
              >
                <LuLinkedin className={`text-[1.5rem] font-bold ${styles.social__icon}`} />
                <span className={styles.social__mediaText}>LinkedIn</span>
              </Link>
              <Link
                href={"https://www.tiktok.com/@programaconpid"}
                className={`${styles.social__mediaLink} ${styles.social__mediaTiktok}`}
              >
                <RiTiktokLine className={`text-[1.5rem] font-bold ${styles.social__icon}`} />
                <span className={styles.social__mediaText}>TikTok</span>
              </Link>
              <Link
                href={"mailto:juanfelipemm2004@gmail.com"}
                className={`${styles.social__mediaLink} ${styles.social__mediaEmail}`}
              >
                <AiOutlineMail className={`text-[1.5rem] font-bold ${styles.social__icon}`} />
                <span className={styles.social__mediaText}>Email</span>
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className={styles.social__mediaTexts}
          >
            <h3 className={styles.social__textsTitle}>
              💡 Always open to collaborating on creative and innovative projects.
            </h3>

            <p className={styles.social__textsDescription}>
              Don&apos;t hesitate to contact me if you have any interesting ideas in mind.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
