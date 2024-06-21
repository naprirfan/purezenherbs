import { useState } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { AdvertisementBar } from "../AdvertisementBar/AdvertisementBar";

export const Header = () => {
  const [isPaneOpen, setIsPaneOpen] = useState<boolean>(false);

  return (
    <header className="w-full">
      <AdvertisementBar />
      <section className="h-8 border-b flex justify-center bg-turquoise lg:h-12">
        <div className="container px-2 justify-between items-center hidden lg:flex">
          <div>Shop | About Us</div>
          <div>Logo</div>
          <div>Language Control</div>
        </div>
        <div className="container px-2 lg:hidden flex items-center">
          <div>Logo</div>
          <div className="text-right grow" onClick={() => setIsPaneOpen(true)}>
            <i className="fa-solid fa-bars fa-xl"></i>
          </div>
        </div>
      </section>
      <SlidingPane
        hideHeader
        isOpen={isPaneOpen}
        onRequestClose={() => {
          setIsPaneOpen(false)
        }}
      >
        <div>And I am pane content. BTW, what rocks?</div>
      </SlidingPane>
    </header>
  )
}