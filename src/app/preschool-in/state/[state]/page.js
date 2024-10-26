'use client';

export default function PreschoolInState({ params }) {
    const { state } = params;
  
    return (
        <div>
            <h1>Preschools in {state}</h1>
            <p>Here you will find preschools located in the state of {state}.</p>
        </div>
    );
}