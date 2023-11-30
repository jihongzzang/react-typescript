import { useEffect, useState } from 'react';

import { Navigate } from 'react-router-dom';

export default function Logout() {
  const [time, setTime] = useState(3);

  useEffect(() => {
    if (!time) return;

    const interval = setInterval(() => {
      setTime((prev) => {
        return prev > 0 ? prev - 1 : 0;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return time ? <div>...남은시간 {time}초</div> : <Navigate to="/bye" />;
}
