import Image from "next/image"
import s from "./SocialMedias.module.css"
import { LiaVideoSolid } from "react-icons/lia"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

const MEDIAS = [
  {
    link: "https://www.instagram.com/reel/DQU4QhNjkKL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    imageSrc: "/social-media/social-media-1.png",
  },
  {
    link: "https://www.instagram.com/reel/DQSNa1yDqPS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    imageSrc: "/social-media/social-media-2.png",
  },
  {
    link: "https://www.instagram.com/reel/DQKid2PjpLV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    imageSrc: "/social-media/social-media-3.png",
  },
  {
    link: "https://www.instagram.com/reel/DQDH9zGDpke/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    imageSrc: "/social-media/social-media-4.png",
  },
  {
    link: "https://www.instagram.com/reel/DPzuZ8cjsR7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    imageSrc: "/social-media/social-media-5.png",
  },
  {
    link: "https://www.instagram.com/reel/DPuWLkpjofc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    imageSrc: "/social-media/social-media-6.png",
  },
  {
    link: "https://www.instagram.com/reel/DQAVO1FDht4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    imageSrc: "/social-media/social-media-7.png",
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
