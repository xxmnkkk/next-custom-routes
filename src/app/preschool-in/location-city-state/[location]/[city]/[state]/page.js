'use client';

export default function PreschoolInLocationCityState({ params }) {
    const { location, city, state } = params;
  
    return (
        <div>
            <h1>
                Preschools in {location}, {city}, {state}
            </h1>
            <p>
                Here you will find preschools located in {location}, {city}, {state}.
            </p>
        </div>
    );
}