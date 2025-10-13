import { Banner } from "./(sections)/Banner"
import s from "./page.module.css"

export default function Home() {
  return (
    <div className={s.page}>
      <Banner />
    </div>
  )
}
