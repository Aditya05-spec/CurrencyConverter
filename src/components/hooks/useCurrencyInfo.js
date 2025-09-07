import { useEffect, useState } from "react";

function useCurrencyInfo(base = "USD") {
  const [rates, setRates] = useState({});

  useEffect(() => {
    if (!base) return;

    const ACCESS_KEY = "d786719b950686aa39e9508ad48cc647";
    const url = `https://data.fixer.io/api/latest?access_key=${ACCESS_KEY}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (!data?.rates) {
          setRates({});
          return;
        }

        // Fixer free tier is EUR-based, so adjust using mapping
        const baseRate = data.rates[base] || 1;

        // 🔹 Mapping style: convert entries → transform → back to object
        const normalized = Object.fromEntries(
          Object.entries(data.rates).map(([cur, rate]) => [
            cur,
            rate / baseRate,
          ])
        );

        // Always set base currency to 1
        normalized[base] = 1;

        setRates(normalized);
      })
      .catch(() => setRates({}));
  }, [base]);

  return rates;
}

export default useCurrencyInfo;
