import React from 'react';
export default function ErrorMessage({ message }) {
  if (!message) return null;
  return (
    <div className="bg-red-100 text-red-800 p-3 rounded-md">
      {message}
    </div>
  );
}
