import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

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

interface Props {
  isLastItem: boolean;
  onFetchMorePassengers: () => void;
  children: React.ReactNode;
}

const Passenger: React.FC<Props> = ({
  isLastItem,
  onFetchMorePassengers,
  children,
}) => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(divRef, {});
  const isIntersecting = !!entry?.isIntersecting;

  useEffect(() => {
    isLastItem && isIntersecting && onFetchMorePassengers();
  }, [isLastItem, isIntersecting]);

  return (
    <div
      ref={divRef}
      style={{ minHeight: '100vh', display: 'flex', border: '1px dashed #000' }}
    >
      {children}
    </div>
  );
};

function InfiniteScroll2() {
  const [passengers, setPassengers] = useState<Array<Passenger>>([]);
  const [isLast, setIsLast] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);

  const getPassengers = async (init?: boolean) => {
    const params = { page, size: 10 };

    try {
      const response = await axios.get<Response>(
        'https://api.instantwebtools.net/v1/passenger',
        { params },
      );

      const passengers = response.data.data;
      const isLast = response.data.totalPages === page;

      init
        ? setPassengers(passengers)
        : setPassengers((prev) => [...prev, ...passengers]);
      setIsLast(isLast);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    !isLast && getPassengers();
  }, [page]);

  return (
    <div>
      {passengers.map((passenger, idx) => (
        <Passenger
          key={idx}
          isLastItem={passengers.length - 1 === idx}
          onFetchMorePassengers={() => setPage((prev) => prev + 1)}
        >
          {passenger.name}
        </Passenger>
      ))}
    </div>
  );
}

export default InfiniteScroll2;
