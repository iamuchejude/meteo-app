import { createContext } from "react";

const WeatherContext = createContext<unknown>(null);
const Provider = WeatherContext.Provider;

export default WeatherContext;
export { Provider };
