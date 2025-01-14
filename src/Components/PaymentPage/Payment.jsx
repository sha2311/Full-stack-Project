import React, { useState } from "react";
import { asset } from "../../assets/asset";

const Payment = () => {
  const [showPaymentInfo, setPaymentINfo] = useState(true);
  const [cartItem, setCartItem] = useState([
    {
      id: 1,
      img: asset.person1,
      title: "The 90s with Dj Neptune",
      date: "Dec 12 2024",
      location: "Quilox Club",
      time: "11:00 AM",
      price: 40000,
      quantity: 1,
    },
    {
      id: 2,
      img: asset.person2,
      title: "The 90s with Dj Neptune",
      date: "Dec 12 2024",
      location: "Quilox Club",
      time: "11:00 AM",
      price: 50000,
      quantity: 1,
    },
  ]);
  const incrimentDecriment = (index, indexIncrease) => {
    setCartItem((items) =>
      items.map((item) =>
        item.id === index
          ? {
              ...item,
              quantity: Math.max(item.quantity + indexIncrease, 1),
              price:
                Math.max(item.quantity + indexIncrease, 1) *
                (item.price / item.quantity),
            }
          : item
      )
    );
  };

  const removeHandle = (id) => {
    setCartItem(cartItem.filter((item) => item.id !== id));
  };

  const addHandle = () => {
    const newAddItem = {
      id: cartItem.length + 1,
      img: asset.person1,
      title: "The 70s with Dj Neptune",
      date: "Jan 13 2025",
      location: "Quilox Club",
      time: "10:23 PM",
      price: 23000,
      quantity: 1,
    };
    setCartItem([...cartItem, newAddItem]);
  };
  return (
    <section className="flex flex-col lg:flex-row md:w-[80%] md:mx-auto mt-24 gap-7">
      <div className="flex-1 md:p-6">
        <h2 className="text-[15px] ms-5 md:ms-0 font-bold text-[#26395C]">Your Cart</h2>
        {cartItem.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 mb-5 border-b-1 p-4"
          >
            <img
              className="w-[129px] h-[122px] rounded-lg"
              src={item.img}
              alt=""
            />
            <div className="flex-1">
              <h3 className="text-[#26395C] font-bold text-nowrap lg:text-wrap md:text-[22px]">
                {item.title}{" "}
              </h3>
              <div className="flex items-center gap-4 font-bold text-[15px] text-[#26395C] my-3 ">
                <div className="flex items-center gap-2">
                  <img className="size-[19px]" src={asset.calendar} alt="" />
                  <p>{item.date} </p>
                </div>
                <div className="flex items-center gap-2">
                  <img className="size-[19px]" src={asset.location} />
                  <p>{item.location} </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <img className="size-[19px]" src={asset.clock} />
                <p className="text-[15px] text-[#26395C] font-bold">
                  {item.time}
                </p>
              </div>

              {/* Quantity controls */}

              <div className="flex items-center gap-4 mt-4 bg-gray-200 rounded md:w-[30%] justify-center">
                <button
                  onClick={() => incrimentDecriment(item.id, -1)}
                  className="px-2 py-1 hover:bg-[#0E8BFF] w-full rounded duration-300 "
                >
                  -
                </button>
                <span> {item.quantity} </span>
                <button
                  onClick={() => incrimentDecriment(item.id, 1)}
                  className="px-2 py-1 hover:bg-[#0E8BFF] w-full rounded duration-300 "
                >
                  +
                </button>
              </div>
              <p>₦{item.price.toLocaleString()}</p>
            </div>
            <button onClick={() => removeHandle(item.id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#000"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ))}
        <button
          onClick={addHandle}
          className="bg-[#0E8BFF] p-2 rounded-lg text-white font-bold text-sm ms-32 md:ms-0 hover:scale-105"
        >
          Add New Item
        </button>
      </div>
        <div className="w-0.5 bg-[#0E8BFF]"></div>
      {/* right section */}
      <div className="bg-[#F5FAFF] px-7 py-10">
        <div className="text-[#26395C]">
          <h2 className="flex text-xl font-bold gap-2 items-center">
            {" "}
            <img className="size-6" src={asset.check} alt="" /> Account
            information
          </h2>
          <p className="ms-8 text-sm">Tunde Chukwu</p>
          <p className="ms-8 text-sm pt-1">tundechukwu12@gmail.com</p>
        </div>
        <div className="text-[#26395C] my-3">
          <h2 className="flex text-xl font-bold gap-2 items-center">
            {" "}
            <img className="size-6" src={asset.check} /> Phone number
          </h2>
          <p className="ms-8 text-sm">+2341123465799</p>
        </div>
        <div className="text-[#26395C]">
          <h2 onClick={()=>setPaymentINfo(!showPaymentInfo)} className="flex text-xl font-bold gap-2 items-center">
            {" "}
            <img className="size-6" src={asset.check} /> Payment{" "}
            <span className="text-[#969DAA]">card</span>
            <span>
              {/* Arrow icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 text-[#969DAA]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </h2>

          {showPaymentInfo && (
            <div className="grid grid-cols-2 gap-5 mt-5">
              <input
                type="number"
                placeholder="Card Number"
                className="w-full p-2  border focus:ring-blue-500 focus:border-blue-500 rounded"
              />
              <input
                type="text"
                placeholder="Card Holder Name"
                className="w-full p-2  border focus:ring-blue-500 focus:border-blue-500 rounded"
              />
              <input
                type="date"
                placeholder="MM/YY"
                className="w-full p-2  border focus:ring-blue-500 focus:border-blue-500 rounded"
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-full p-2  border focus:ring-blue-500 focus:border-blue-500 rounded"
              />
            </div>
          )}
        </div>
        <div className="mt-5">
          <ul>
            {cartItem.map((item) => (
              <li className="text-[#26395C] text-[15px] mt-1.5 flex justify-between " id={item.id}>
                <span>{item.title}</span>
                <span className="font-bold ">₦ {item.price.toLocaleString()} </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-[#26395C] text-[15px] flex justify-between my-1  border-t-1.5 border-[#E4E7EC]">
          <span className="mt-1"> Subtotal</span>
          <span className="font-bold mt-1">
          ₦ {cartItem
              .reduce((sum, item) => sum + item.price, 0)
              .toLocaleString()}
          </span>
        </div>
        <div className="text-[#26395C] text-[15px] flex justify-between my-1" >
          <span>Vat(2%)</span>
          <span className="font-bold">
          ₦ {(
              cartItem.reduce((sum, item) => sum + item.price, 0) * 0.2
            ).toLocaleString()}{" "}
          </span>
        </div>
        <div className="text-[#26395C] text-[15px] flex justify-between my-1  border-t-1.5 border-[#E4E7EC] " >
          <span className="font-medium">Total </span>
          <span className="font-bold" >
            {" "}
            ₦ {(
              cartItem.reduce((sum, item) => sum + item.price, 0) * 1.02
            ).toLocaleString()}{" "}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Payment;
