import "../assets/styles/About.css";
import { LuPiggyBank } from "react-icons/lu";
import { GiCardPick, GiFlowers } from "react-icons/gi";
import { IoIosGift } from "react-icons/io";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-heading">
        <div className="about-icon piggy">
          {" "}
          <LuPiggyBank />
        </div>
        <h1>About Us</h1>
      </div>
      <p>
        At Moonpig, we’re all about celebrating those heartfelt life moments.
        You know the ones we mean…the big birthdays, new arrivals, surprise
        engagements and the just becauses. Big or small, we love them all. And
        we’re so proud to be the ones helping you connect to the people you care
        about most. With our ever-growing range of cards, thoughtful gifts and
        bright, beautiful bouquets, we’ve got just the thing to make their day.
        Combine this with top-notch tech and an app full of fun features, and
        it’s never been easier to send a card from the palm of your hand and
        share some love wherever you are.
      </p>

      <div className="about-heading">
        <div className="about-icon card">
          {" "}
          <GiCardPick />
        </div>
        <h2>We’ve Got a Card for That</h2>
      </div>
      <p>
        With thousands of designs, both personalised and ready-made, choose the
        one that’s just right for you and your loved one. Got an inside joke?
        We’ve got just the thing. Want to take a trip down memory lane? We’ve
        got a card they’ll love on our top-of-the-range platform. Our intuitive
        Moonpig technology lets you set reminders for special occasions then
        recommends cards based on factors such as who you’re sending to and what
        our other customers are loving. With new designs added every day, no
        matter what the occasion or who you’re looking for, we’ve got a card for
        that.
      </p>
      <div className="about-heading">
        <div className="about-icon gift">
          <IoIosGift />
        </div>
        <h2>Aaaaand a Gift?</h2>
      </div>
      <p>
        We know a thing or two when it comes to helping you find the perfect
        gift to go with your card, and using tech to show you a selection of
        relevant gifts means you’ll never be stuck for inspiration. Discover a
        joyously curated selection of treats to surprise your favourites...
        whether it’s in person, or through their letterbox.
      </p>
      <div className="about-heading">
        <div className="about-icon flowers">
          {" "}
          <GiFlowers />
        </div>
        <h2>Beautiful Blooms</h2>
      </div>
      <p>
        From blossom to bouquet, every step of your flowers’ journey is handled
        with care. They arrive at their new home in bud to preserve freshness,
        which is guaranteed for five days. Watch as they bloom, brightening any
        room and any day.
      </p>
    </div>
  );
};

export default About;
