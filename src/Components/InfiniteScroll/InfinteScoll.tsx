import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { throttle } from 'throttle-debounce';
import './infiniteScroll.css';

interface Airline {
  id: number;
  name: string;
  country: string;
  log: string;
  slogan: string;
  head_quaters: string;
  website: string;
  established: string;
}

interface Response {
  totalPassengers: number;
  totalPages: number;
  data: Array<Passenger>;
}

interface Passenger {
  _id: string;
  name: string;
  airline: Airline;
  __v: number;
}

function InfiniteScroll() {
  const [passengers, setPassengers] = useState<Array<Passenger>>([]);
  const [isLast, setIsLast] = useState<boolean>(false);
  const [isScrollBottom, setIsScrollBottom] = useState<boolean>(false);

  const currentPageRef = useRef<number>(0);
  const listRef = useRef<HTMLUListElement | null>(null);

  const getPassengers = async (init?: boolean) => {
    const params = { page: currentPageRef, size: 30 };

    try {
      const response = await axios.get<Response>(
        'https://api.instantwebtools.net/v1/passenger',
        { params },
      );

      const passengers = response.data.data;
      const isLast = response.data.totalPages === currentPageRef.current;

      init
        ? setPassengers(passengers)
        : setPassengers((prev) => [...prev, ...passengers]);
      setIsLast(isLast);
    } catch (e) {
      console.error(e);
    }
  };

  const handleScroll = throttle(1000, () => {
    if (listRef.current) {
      const { scrollHeight, offsetHeight, scrollTop } = listRef.current;

      const offset = 50;

      console.log('trigger');

      setIsScrollBottom(scrollHeight - offsetHeight - scrollTop < offset);
    }
  });

  useEffect(() => {
    if (isScrollBottom) {
      currentPageRef.current += 1;
      !isLast && getPassengers();
    }
  }, [isScrollBottom, isLast]);

  useEffect(() => {
    getPassengers(true);
  }, []);

  return (
    <>
      <ul ref={listRef} className="list" onScroll={handleScroll}>
        {passengers.map((passenger, idx) => (
          <li className="item" key={idx}>
            {passenger.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default InfiniteScroll;
