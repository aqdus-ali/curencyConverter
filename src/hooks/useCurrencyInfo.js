import {useEffect, useState} from "react"


// function useCurrencyInfo(currency){
//     const [data, setData] = useState({})
//     useEffect(() => {
//         // fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//         fetch(`https://raw.githubusercontent.com/fawazahmed0/currency-api/main/latest/currencies/${currency}.json`)
//         .then((res) => res.json())
//         .then((res) => setData(res[currency]))
//         console.log(data);
//     }, [currency])
//     console.log(data);
//     return data
// }https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.min.json
function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.min.json`);
                const result = await response.json();
                setData(result[currency]);
                console.log(result[currency]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [currency]);

    return data;
}
// function useCurrencyInfo(currency) {
//     const [data, setData] = useState({});
//     const apiKey = 'cur_live_lyiU7C5ZkVSixdTJty9TjywsLb9gL5xuYOFekHXq';

//     useEffect(() => {
//         fetch(`https://api.currencyapi.com/v3/latest?apikey=${apiKey}`)
//             .then((res) => res.json())
//             .then((res) => setData(res))
//             .catch((error) => console.error('Error fetching data:', error));
//     }, [currency]);

//     return data;
// }
export default useCurrencyInfo;