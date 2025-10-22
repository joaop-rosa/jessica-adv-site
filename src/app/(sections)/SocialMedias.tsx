import Image from "next/image"
import s from "./SocialMedias.module.css"
import { LiaVideoSolid } from "react-icons/lia"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { INSTAGRAM_LINK } from "@/constants/links"

const MEDIAS = [
  {
    link: INSTAGRAM_LINK,
    imageSrc: "/social-media/social-media-1.png",
  },
  {
    link: INSTAGRAM_LINK,
    imageSrc: "/social-media/social-media-2.png",
  },
  {
    link: INSTAGRAM_LINK,
    imageSrc: "/social-media/social-media-3.png",
  },
  {
    link: INSTAGRAM_LINK,
    imageSrc: "/social-media/social-media-4.png",
  },
  {
    link: INSTAGRAM_LINK,
    imageSrc: "/social-media/social-media-5.png",
  },
  {
    link: INSTAGRAM_LINK,
    imageSrc: "/social-media/social-media-6.png",
  },
]

export function SocialMedias() {
  const [emblaRef] = useEmblaCarousel({ dragFree: true, loop: true }, [
    Autoplay(),
  ])

  return (
    <section className={s.socialMedias}>
      <div className={s.container}>
        <h2 className={s.title}>Me Acompanhe nas Redes Sociais</h2>
      </div>
      <div className={s.imagesWrapper} ref={emblaRef}>
        <div className={s.imagesContainer}>
          {MEDIAS.map(({ imageSrc, link }) => (
            <div className={s.imageSlide} key={imageSrc}>
              <div className={s.imageWrapper}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.hoverContent}
                >
                  <LiaVideoSolid
                    className={s.videoIcon}
                    color="var(--rose-white)"
                  />
                </a>
                <Image
                  className={s.image}
                  alt=""
                  src={imageSrc}
                  width={463}
                  height={582}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
