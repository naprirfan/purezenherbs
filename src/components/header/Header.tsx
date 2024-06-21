import { AdvertisementBar } from "../AdvertisementBar/AdvertisementBar"

export const Header = () => {
  return (
    <header className="w-full">
      <AdvertisementBar />
      <section className="h-8 border-b flex justify-center bg-gray lg:h-12">
        <div className="container px-2 justify-between items-center hidden lg:flex">
          <div>Shop | About Us</div>
          <div>Logo</div>
          <div>Language Control</div>
        </div>
        <div className="container px-2 lg:hidden flex items-center">
          <div>Logo</div>
        </div>
      </section>
    </header>
  )
}