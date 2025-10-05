import { useState } from "react";

export default function App() {
  const BASE_API_URL = "http://127.0.0.1:5000/";

  const [month, setMonth] = useState("");
  const [prediction, setPrediction] = useState<number | null>(null);

  const handlePredict = async () => {
    const res = await fetch(`${BASE_API_URL}/predict`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ month: Number(month) }),
    });
    const data = await res.json();
    setPrediction(data.predicted_sales);
  };

  return (
    <div className="flex flex-col items-center min-h-screen justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="bg-white text-gray-800 rounded-2xl shadow-xl p-8 w-96 text-center">
        <h1 className="text-2xl font-bold mb-4">Sales Predictor</h1>
        <input
          type="number"
          placeholder="Enter Month (e.g. 13)"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="border p-2 rounded w-full mb-4 text-center"
        />
        <button
          onClick={handlePredict}
          className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-6 rounded-lg shadow-md"
        >
          Predict
        </button>

        {prediction !== null && (
          <div className="mt-6 text-lg font-semibold">
            Predicted Sales: ₹{prediction.toFixed(2)}
          </div>
        )}
      </div>
    </div>
  );
}
