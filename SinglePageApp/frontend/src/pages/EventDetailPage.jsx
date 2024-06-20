import React from 'react';
import { useParams } from 'react-router-dom';

export const EventDetailPage = () => {
  const params = useParams();
  return (
    <>
      <h1>EventDetailPage</h1>
      <h1>Event Id : {params.eventId}</h1>
    </>
  );
};
