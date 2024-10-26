'use client';

export default function PreschoolInCityInState({ params }) {
    const { city, state } = params;
  
    return (
        <div>
            <h1>
                Preschools in {city}, {state}
            </h1>
            <p>
                Here you will find preschools located in {city}, {state}.
            </p>
        </div>
    );
}
