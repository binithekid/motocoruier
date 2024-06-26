import React, { useState } from "react";
import axios from "axios";

const HeroForm = () => {
  const [pickupPostcode, setPickupPostcode] = useState("");
  const [deliveryPostcode, setDeliveryPostcode] = useState("");
  const [distance, setDistance] = useState(null);
  const [quote, setQuote] = useState<any>(null);
  const [error, setError] = useState("");

  const validatePostcode = (postcode: any) => {
    const londonPostcodeRegex =
      /^E|EC|N|NW|SE|SW|W|WC\d+[A-Z]?\s?\d+[A-Z]{2}$/i;
    return londonPostcodeRegex.test(postcode);
  };

  const calculateDistanceAndQuote = async () => {
    if (
      !validatePostcode(pickupPostcode) ||
      !validatePostcode(deliveryPostcode)
    ) {
      setError("Please enter valid London postcodes.");
      return;
    }

    setError("");

    const apiKey = "AIzaSyAM5zRtU3cCUF7pP69L8pDzUC8CoaI3acw";
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${pickupPostcode}&destinations=${deliveryPostcode}&key=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok && data.rows[0].elements[0].status === "OK") {
        const distanceText = data.rows[0].elements[0].distance.text;
        const distanceValue = parseFloat(distanceText.replace(/[^\d.]/g, ""));
        setDistance(distanceText);

        // Calculate quote based on distance value
        const quote = calculateQuote(distanceValue);
        setQuote(quote);
      } else {
        setError("Unable to calculate distance.");
      }
    } catch (error) {
      setError("Error fetching data from Google Maps API.");
    }
  };

  const calculateQuote = (distanceInMiles: any) => {
    const baseCharge = 9.99;
    const rateUpTo7Miles = 1.99;
    const rateAfter7Miles = 1.51;
    let price = baseCharge;

    if (distanceInMiles <= 7) {
      price += distanceInMiles * rateUpTo7Miles;
    } else {
      price += 7 * rateUpTo7Miles;
      price += (distanceInMiles - 7) * rateAfter7Miles;
    }

    // Round price to 2 decimal places
    price = Math.round(price * 100) / 100;

    return price;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    calculateDistanceAndQuote();
  };

  console.log(distance, quote);

  return (
    <div className="relative z-10 flex mt-10 md:mt-0 items-center justify-center">
      <form
        method="POST"
        className="relative bg-gray-100 bg-opacity-[85%] w-full py-7 px-4 md:px-6 rounded boxShadow"
      >
        <p className="md:text-2xl text-xl font-semibold text-white py-3 rounded md:py-4 text-center mb-6 bg-red-700 uppercase">
          GET AN INSTANT QUOTE
        </p>
        <div className="flex flex-col mt-4">
          <p className="text-gray-900 text-[13px] md:text-sm">
            Pick Up Address
          </p>
          <input
            id="address"
            name="address"
            // value={phoneNumber}
            // onChange={(event) => setPhoneNumber(event.target.value)}
            // pattern="[0-9]{11}"
            required
            placeholder="1 Buckingham Palace Road"
            className="border rounded shadow-sm border-gray-200 py-[4px] md:mt-1 text-[13px] md:text-sm px-2 w-full"
          />
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-gray-900 text-[13px] md:text-sm">
            Pick Up Postcode
          </p>
          <input
            id="address"
            name="address"
            value={pickupPostcode}
            onChange={(e) => setPickupPostcode(e.target.value)}
            required
            placeholder="W10 6GL"
            className="border rounded shadow-sm border-gray-200 py-[4px] md:mt-1 text-[13px] md:text-sm px-2 w-full"
          />
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-gray-900 text-[13px] md:text-sm">
            Delivery Address
          </p>
          <input
            id="address"
            name="address"
            // value={phoneNumber}
            // onChange={(event) => setPhoneNumber(event.target.value)}
            // pattern="[0-9]{11}"
            required
            placeholder="1 Buckingham Palace Road"
            className="border rounded shadow-sm border-gray-200 py-[4px] md:mt-1 text-[13px] md:text-sm px-2 w-full"
          />
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-gray-900 text-[13px] md:text-sm">
            Delivery Postcode
          </p>
          <input
            id="address"
            name="address"
            value={deliveryPostcode}
            onChange={(e) => setDeliveryPostcode(e.target.value)}
            required
            placeholder="W10 6GL"
            className="border rounded shadow-sm border-gray-200 py-[4px] md:mt-1 text-[13px] md:text-sm px-2 w-full"
          />
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-gray-900 text-[13px] md:text-sm">Booking Date</p>
          <input
            type="date"
            id="date"
            name="date"
            // value={phoneNumber}
            // onChange={(event) => setPhoneNumber(event.target.value)}
            // pattern="[0-9]{11}"
            required
            className="border rounded shadow-sm border-gray-200 py-[4px] md:mt-1 text-[13px] md:text-sm px-2 w-full"
          />
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-gray-900 text-[13px] md:text-sm">Booking Time</p>
          <input
            type="time"
            id="date"
            name="date"
            // value={phoneNumber}
            // onChange={(event) => setPhoneNumber(event.target.value)}
            // pattern="[0-9]{11}"
            required
            className="border rounded shadow-sm border-gray-200 py-[4px] md:mt-1 text-[13px] md:text-sm px-2 w-full"
          />
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-gray-900 text-[13px] md:text-sm">
            Collection Contact Name
          </p>
          <input
            id="name"
            type="name"
            name="name"
            // value={name}
            required
            // onChange={(event) => setName(event.target.value)}
            placeholder="John Smith"
            className="border rounded shadow-sm border-gray-200 py-[4px] md:mt-1 text-[13px] md:text-sm px-2 w-full"
          />
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-gray-900 text-[13px] md:text-sm">
            Collection Contact Number
          </p>
          <input
            id="tel"
            name="phone number"
            type="tel"
            // value={phoneNumber}
            // onChange={(event) => setPhoneNumber(event.target.value)}
            // pattern="[0-9]{11}"
            required
            placeholder="07595 123 3456"
            className="border rounded shadow-sm border-gray-200 py-[4px] md:mt-1 text-[13px] md:text-sm px-2 w-full"
          />
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-gray-900 text-[13px] md:text-sm">
            Delivery Contact Name
          </p>
          <input
            id="name"
            type="name"
            name="name"
            // value={name}
            required
            // onChange={(event) => setName(event.target.value)}
            placeholder="John Smith"
            className="border rounded shadow-sm border-gray-200 py-[4px] md:mt-1 text-[13px] md:text-sm px-2 w-full"
          />
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-gray-900 text-[13px] md:text-sm">
            Delivery Contact Number
          </p>
          <input
            id="tel"
            name="phone number"
            type="tel"
            // value={phoneNumber}
            // onChange={(event) => setPhoneNumber(event.target.value)}
            // pattern="[0-9]{11}"
            required
            placeholder="07595 123 3456"
            className="border rounded shadow-sm border-gray-200 py-[4px] md:mt-1 text-[13px] md:text-sm px-2 w-full"
          />
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-gray-900 text-[13px] md:text-sm">
            Confirmation Email
          </p>
          <input
            id="tel"
            name="phone number"
            type="email"
            // value={phoneNumber}
            // onChange={(event) => setPhoneNumber(event.target.value)}
            // pattern="[0-9]{11}"
            required
            placeholder="info@gmail.com"
            className="border rounded shadow-sm border-gray-200 py-[4px] md:mt-1 text-[13px] md:text-sm px-2 w-full"
          />
        </div>

        <div className="flex flex-col mt-4">
          <p className="text-gray-900 text-[13px] md:text-sm">
            Your message here
          </p>
          <textarea
            required
            // value={message}
            // onChange={(event) => setMessage(event.target.value)}
            id="message"
            name="message"
            // name="email"
            rows={5}
            placeholder="Enter any additional information here"
            className="border rounded shadow-sm border-gray-200 py-[4px] md:mt-1 text-[13px] md:text-sm px-2 w-full"
          />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            calculateDistanceAndQuote();
          }}
          className="mt-6 w-full bg-blue-900 py-3 text-white font-semibold rounded text-sm md:text-base hover:opacity-80 transition-all"
        >
          BOOK A PLUMBER
        </button>
        {pickupPostcode ? (
          <p className="mt-4 text-xs text-gray-700 font-light w-full text-center">
            Thank you, Our team will call you shortly to comfirm your booking
          </p>
        ) : (
          <p className="mt-4 text-sm text-gray-700 font-light w-full text-center">
            🔒 Your information is 100% secure
          </p>
        )}
      </form>
    </div>
  );
};

export default HeroForm;
