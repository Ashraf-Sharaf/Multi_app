const WeatherCard = ({ weather }) => {
  const { date, day, astro } = weather;
  const condition = day["condition"]["text"];
  const sunrise = astro["sunrise"];
  const sunset = astro["sunset"];
  const moonrise = astro["moonrise"];
  const moonset = astro["moonset"];

  return (
    <div className="flex column card">
      <div>
        Date: {date}
        <div>
          Condition: {condition}
          <div>
            Sunrise {sunrise}
            <div>
              Sunset {sunset}
              <div>
                Moonrise {moonrise}
                <div>Moonset {moonset}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
