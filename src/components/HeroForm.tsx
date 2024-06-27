import React, { useState } from "react";
import calculateQuote from "../functions/getQuote";
import { ImSpinner2 } from "react-icons/im";

const HeroForm = () => {
  const [pickupPostcode, setPickupPostcode] = useState("");
  const [deliveryPostcode, setDeliveryPostcode] = useState("");
  const [distance, setDistance] = useState(null);
  const [error, setError] = useState("");
  const [quote, setQuote] = useState<any>("");
  const [proceed, setProceed] = useState(false);

  const [pickupAddress, setPickupaddress] = useState("");
  const [deliveryAddress, setDeliveryaddress] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [collectiontName, setCollectionName] = useState("");
  const [collectionNumber, setCollectionNumber] = useState("");
  const [deliveryName, setDeliveryName] = useState("");
  const [deliveryNumber, setDeliveryNumber] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState("");

  const validatePostcode = (postcode: any) => {
    const londonPostcodeRegex =
      /^E|EC|N|NW|SE|SW|W|WC\d+[A-Z]?\s?\d+[A-Z]{2}$/i;
    return londonPostcodeRegex.test(postcode);
  };

  const calculateDistance = async () => {
    // if (
    //   !validatePostcode(pickupPostcode) ||
    //   !validatePostcode(deliveryPostcode)
    // ) {
    //   setError("Please enter valid London postcodes.");
    //   return;
    // }

    setError("");

    try {
      const res = await fetch(
        `/api/distance?pickupPostcode=${pickupPostcode}&deliveryPostcode=${deliveryPostcode}`
      );
      const data = await res.json();

      if (res.ok) {
        const distanceValue = parseFloat(data.distance.replace(/[^\d.]/g, ""));

        // Calculate quote based on distance
        const price = calculateQuote(distanceValue);

        setQuote(price);
      } else {
        setError(data.error || "Unable to calculate distance.");
      }
    } catch (error) {
      setError("Error fetching data from server.");
    }
  };

  console.log(quote);

  console.log(error);

  console.log(pickupAddress);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = {
      collectiontName: collectiontName,
      collectionAddress: pickupAddress,
      collectionPostCode: pickupPostcode,
      collectionNumber: collectionNumber,

      deliveryName: deliveryName,
      deliveryAddress: deliveryAddress,
      deliveryPostcode: deliveryPostcode,
      deliveryNumber: deliveryNumber,

      bookingDate: bookingDate,
      bookingTime: bookingTime,
      distance: distance,

      contactEmail: contactEmail,
      quote: quote,
      message: message,
    };

    setStatus("loading");

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("done");
        // Reset form after successful submission
        // setName("");
        // setNumber("");
        // setPestType("");
        // setEmail("");
        // setTopic("");
        // setMessage("");
      } else {
        console.error("Failed to submit form:", response.statusText);
        setError("Error sumbitting form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Error sumbitting form");
    }
  };

  return (
    <div className="relative z-10 flex mt-10 md:mt-0 items-center justify-center">
      <form
        onSubmit={handleSubmit}
        method="POST"
        className="relative bg-gray-100 bg-opacity-[85%] w-full py-7 px-4 md:px-6 rounded boxShadow"
      >
        <p className="block md:hidden text-xl font-semibold text-white py-3 rounded md:py-4 text-center mb-6 bg-blue-900 uppercase">
          GET AN INSTANT QUOTE
        </p>
        <div className="flex flex-col">
          <p className="text-gray-900 text-[13px] md:text-sm">
            Pick Up Address
          </p>
          <input
            value={pickupAddress}
            onChange={(e) => setPickupaddress(e.target.value)}
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
            value={deliveryAddress}
            onChange={(e) => setDeliveryaddress(e.target.value)}
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

        {proceed && (
          <>
            <div className="flex flex-col mt-4">
              <p className="text-gray-900 text-[13px] md:text-sm">
                Booking Date
              </p>
              <input
                value={bookingDate}
                onChange={(e) => setBookingDate(e.target.value)}
                required
                type="date"
                className="border rounded shadow-sm border-gray-200 py-[4px] md:mt-1 text-[13px] md:text-sm px-2 w-full"
              />
            </div>
            <div className="flex flex-col mt-4">
              <p className="text-gray-900 text-[13px] md:text-sm">
                Booking Time
              </p>
              <input
                value={bookingTime}
                onChange={(e) => setBookingTime(e.target.value)}
                required
                type="time"
                className="border rounded shadow-sm border-gray-200 py-[4px] md:mt-1 text-[13px] md:text-sm px-2 w-full"
              />
            </div>
            <div className="flex flex-col mt-4">
              <p className="text-gray-900 text-[13px] md:text-sm">
                Collection Contact Name
              </p>
              <input
                value={collectiontName}
                required
                onChange={(event) => setCollectionName(event.target.value)}
                placeholder="John Smith"
                className="border rounded shadow-sm border-gray-200 py-[4px] md:mt-1 text-[13px] md:text-sm px-2 w-full"
              />
            </div>
            <div className="flex flex-col mt-4">
              <p className="text-gray-900 text-[13px] md:text-sm">
                Collection Contact Number
              </p>
              <input
                value={collectionNumber}
                onChange={(event) => setCollectionNumber(event.target.value)}
                pattern="[0-9]{11}"
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
                value={deliveryName}
                required
                onChange={(event) => setDeliveryName(event.target.value)}
                placeholder="John Smith"
                className="border rounded shadow-sm border-gray-200 py-[4px] md:mt-1 text-[13px] md:text-sm px-2 w-full"
              />
            </div>
            <div className="flex flex-col mt-4">
              <p className="text-gray-900 text-[13px] md:text-sm">
                Delivery Contact Number
              </p>
              <input
                value={deliveryNumber}
                onChange={(event) => setDeliveryNumber(event.target.value)}
                pattern="[0-9]{11}"
                required
                placeholder="07595 123 3456"
                className="border rounded shadow-sm border-gray-200 py-[4px] md:mt-1 text-[13px] md:text-sm px-2 w-full"
              />
            </div>
            <div className="flex flex-col mt-4">
              <p className="text-gray-900 text-[13px] md:text-sm">
                Contact Email
              </p>
              <input
                id="tel"
                name="phone number"
                type="email"
                value={contactEmail}
                onChange={(event) => setContactEmail(event.target.value)}
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
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                rows={5}
                placeholder="Enter any additional information here"
                className="border rounded shadow-sm border-gray-200 py-[4px] md:mt-1 text-[13px] md:text-sm px-2 w-full"
              />
            </div>
          </>
        )}
        {quote && (
          <div className="flex mt-6 flex-col gap-3 items-center justify-center">
            <div>
              <p>
                Your Quote:{" "}
                <span className="font-semibold text-xl">£{quote}</span>
              </p>
            </div>
            {!proceed && <p>Would you like to proceed?</p>}
          </div>
        )}
        {!quote && !proceed ? (
          <button
            disabled={!pickupPostcode || !deliveryPostcode}
            onClick={(e) => {
              e.preventDefault();
              calculateDistance();
            }}
            className={`${
              !pickupPostcode || !deliveryPostcode ? "opacity-80" : ""
            } mt-6 w-full bg-blue-900 py-3 text-white font-semibold rounded text-sm md:text-base hover:opacity-80 transition-all`}
          >
            GET A QUOTE{" "}
          </button>
        ) : quote && proceed ? (
          <button
            // disabled={status === "done"}
            type="submit"
            onClick={() => {
              setProceed(true);
            }}
            className="mt-6 w-full bg-blue-900 py-3 text-white font-semibold rounded text-sm md:text-base hover:opacity-80 transition-all"
          >
            {!status ? (
              <p>SUMBIT</p>
            ) : status === "loading" ? (
              <p>SENDING ...</p>
            ) : status === "done" ? (
              <p>SENT!</p>
            ) : null}
          </button>
        ) : (
          <button
            onClick={() => {
              setProceed(true);
            }}
            className="mt-6 w-full bg-blue-900 py-3 text-white font-semibold rounded text-sm md:text-base hover:opacity-80 transition-all"
          >
            PROCEED
          </button>
        )}

        {status === "done" ? (
          <p className="mt-4 text-base text-gray-700 w-full text-center">
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
